import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

//site : "https://unrationnal.github.io/website/",
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://unrationnal.world',
  integrations: [react(), sitemap()],
  output: "static"
});