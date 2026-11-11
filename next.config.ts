import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // WordPress permalinks all end with a slash; keep the exact same URLs.
  trailingSlash: true,
  // proxy.ts adds the slash itself, with WordPress's 301 and only for URLs that exist there
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return {
      beforeFiles: [
        // RSS feeds keep their WordPress URLs
        { source: "/feed/", destination: "/api/feed/" },
        { source: "/news/feed/", destination: "/api/feed/news/" },
        { source: "/news/:path+/feed/", destination: "/api/feed/news/:path+/" },
      ],
    };
  },
};

/*
 * The build prerenders pages from the WordPress REST API, so it has to be reachable from the build
 * machine. Vercel builds run in the USA, and Xserver's 国外アクセス制限 answers /wp-json/ with 403 for
 * addresses outside Japan. Without this check the build fails later with a bare
 * "Failed to collect page data", so check once up front and say why.
 */
async function checkWordPress() {
  if (process.env.WP_REST_CHECKED) return;
  const base = (process.env.WP_URL || "https://ichijoya.co.jp").replace(/\/+$/, "");
  const url = `${base}/wp-json/wp/v2/posts?per_page=1&_fields=id`;
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0 (compatible; ichijoya-next)" },
    signal: AbortSignal.timeout(30_000),
  }).catch((error: Error) => error);
  if (res instanceof Response && res.ok) {
    // build workers inherit the environment and skip the check
    process.env.WP_REST_CHECKED = "1";
    return;
  }
  const answer = res instanceof Response ? `answered ${res.status}` : `could not be reached (${res.message})`;
  const lines = [`The WordPress REST API ${answer} for this build machine: ${url}`];
  if (res instanceof Response && res.status === 403) {
    lines.push(
      "The pages are prerendered from it at build time. Vercel builds run in the USA, and Xserver blocks /wp-json/",
      "for addresses outside Japan by default. Turn it off for this domain in the Xserver server panel:",
      "WordPressセキュリティ設定 > 国外アクセス制限 > REST API アクセス制限 = OFF. See README.md, 'Deploying to Vercel'.",
    );
  }
  throw new Error(lines.join("\n"));
}

export default async function config(phase: string): Promise<NextConfig> {
  if (phase === PHASE_PRODUCTION_BUILD) await checkWordPress();
  return nextConfig;
}
