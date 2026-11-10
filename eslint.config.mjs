import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The theme markup is reproduced verbatim (sizes come from the original CSS, SVG
      // labels must stay crisp), so plain <img> elements are intentional.
      "@next/next/no-img-element": "off",
      // Theme stylesheets are linked in their original order and with their original
      // media attributes to keep the cascade identical to the WordPress site.
      "@next/next/no-css-tags": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-sync-scripts": "off",
      // Navigation is a full page load like on WordPress (see components/runtime/ThemeRuntime.tsx).
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-location-assign-relative-destination": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "public/**",
    // A separate project that sits in this folder; not part of this site.
    "find-dev/**",
  ]),
]);

export default eslintConfig;
