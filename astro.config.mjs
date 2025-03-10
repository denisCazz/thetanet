import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://deniscazz.github.io/thetanet',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  base: "/thetanet/",
  build: {
    site: 'https://deniscazz.github.io/thetanet',
  },
  
})