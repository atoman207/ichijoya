# 畳の一畳屋 — Next.js

Next.js 16 (App Router) rebuild of <https://ichijoya.co.jp/> (WordPress theme `ichijoya_2022`).
Markup, CSS, images and behaviour are carried over from the live site so the pages render and
animate the same; WordPress keeps serving the news posts and the editor-managed pages as a
headless CMS.

> All texts, photos, illustrations and logos are the property of 株式会社一畳屋.

## Quick start

```bash
npm install
cp .env.example .env.local   # adjust if needed
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 20+ and network access to the WordPress REST API (`WP_URL`) at build time and
for background revalidation.

## How the site is put together

| Part | Source |
| --- | --- |
| Header, drawer, footer, sticky nav, fixed bar | `components/layout/*` — ported from `header.php` / `footer.php` |
| Front page, 会社・店舗案内, 畳, 襖・障子・網戸, LINE, 404 | `components/templates/*Main.tsx` — ported from the theme templates |
| 個人情報保護方針, 採用情報, お問い合わせ, 送信完了 | WordPress pages (`WP_PAGE` ids in `lib/wp.ts`), rendered like `page.php` |
| お知らせ (1,300+ posts), categories, date archives, search | WordPress REST API, `app/news/*`, `app/search` |
| Google reviews on 会社・店舗案内 | rendered by the WordPress plugin, read from the about page's REST content |
| Theme CSS / images / SVG sprite | `public/assets/` (unchanged files), plugin CSS in `public/plugins/` |

Theme stylesheets are linked in `app/layout.tsx` in the original order and with the original
`media` queries, so the cascade is identical to WordPress. The block-library stylesheet only
applies where WordPress loads it (single posts, category and date archives), via the
`data-wp-block-library` attribute on `#body`.

### Behaviour (ported from the theme's `main.bundle.js` and plugins)

`lib/theme/` contains the client-side modules; `components/runtime/ThemeRuntime.tsx` runs the
site-wide ones and `PageRuntime.tsx` the page-specific ones:

- drawer menu (focus trap, scroll lock, Esc, closes at ≥1024px), sticky nav / page-top button
  (`[data-view-over]` observers), current-page link marking, 900ms eased anchor scrolling
- key-visual cross-fader (3s fade, 6.5s rotation, pauses on hover)
- modal dialogs (about / door) and Splide v3 photo sliders with thumbnail sync (door)
- image lightbox (port of Easy FancyBox 1.3: elastic zoom, overlay, keyboard, galleries)
- Contact Form 7 behaviour: live validation with the form's own rules, agree-to-submit gating,
  full-width → half-width phone digits, leave-page warning, CF7 response/tips markup
- Google review widget helpers (relative dates, "read more", next reviews)

Links are plain `<a>` elements, so every page is a full document load, as on WordPress. With
Cache Components, client-side navigation would keep up to three visited pages in the DOM, hidden.
The theme's scripts work on the whole document, and its ids repeat on every page, so they would
also pick up the hidden pages.

### URLs

All WordPress URLs keep working, including `/news/page/N/`, `/news/category/<parent>/<child>/`,
`/news/2026/`, `/news/2026/10/`, `/news/<slug>/`, and search at `/?s=…`, `/page/N/?s=…` and
`/search/<query>/` (rewritten to `app/search`). The RSS feeds (`/feed/`, `/news/feed/`,
`/news/category/…/feed/`) are served from WordPress through `app/api/feed`.

`proxy.ts` reproduces WordPress's URL handling with the same 301 redirects:
- a missing trailing slash;
- `…/page/1/` and zero-padded page numbers;
- impossible dates, which go to the enclosing archive;
- `/index.php…`;
- `?p=` / `?page_id=` / `?cat=` links, which go to the permalink.

Fixed pages also answer in any letter case (`/About/`), and the front page also answers at
`/page/N/` with "| ページ N" in its title, as on WordPress. A `/news/` URL that
matches nothing, such as an old or truncated slug, follows WordPress's own redirect for it if
WordPress has one.

### Caching

Data from WordPress is cached with `'use cache'` (`lib/wp.ts`) and refreshed in the background
every hour. Pages under `/news/` are static: the newest posts and every category are built ahead
of time, any other post or archive is generated on its first visit and then cached.
To refresh immediately (e.g. from a WordPress publish hook):

```bash
curl -X POST "https://<site>/api/revalidate/?secret=$REVALIDATE_SECRET"
```

## Environment variables

See `.env.example`. The important ones:

| Variable | Default | Notes |
| --- | --- | --- |
| `WP_URL` | `https://ichijoya.co.jp` | WordPress that serves posts, pages and media |
| `NEXT_PUBLIC_SITE_URL` | `https://ichijoya.co.jp` | canonical / og:url / sitemap |
| `ALLOW_INDEXING` | `false` | set `true` on production only; otherwise every page is `noindex` |
| `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_ID` | empty | live site uses `GTM-5VPDRP2` / `G-TX05WFFEQK` |
| `CONTACT_MODE` | `log` | `log` (nothing sent), `cf7` (forward to Contact Form 7 on WordPress — same mail settings as today), `smtp` |

## Notes

- The single-post share buttons reproduce the theme as published, including its sample
  `data-href` (developers.facebook.com) and tweet text ("Hello world"). Point them at the post URL
  in `components/news/SinglePost.tsx` if you want working share links.
- Media library files (`/wp/wp-content/uploads/`) are served by WordPress; if WordPress is ever
  retired, they need to be moved along with the post content.
- `/recruit-test-jimu/` is password protected on WordPress and is not reproduced.
- Redirects that WordPress guesses (old or truncated post slugs) are answered with 308, because a
  Next.js page cannot send 301. All other redirects are 301, as on WordPress.
