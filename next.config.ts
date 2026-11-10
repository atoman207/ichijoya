import type { NextConfig } from "next";

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

export default nextConfig;
