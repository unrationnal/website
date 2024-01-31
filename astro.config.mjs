import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

//site : "https://unrationnal.github.io/website/",
export default defineConfig({
  site: 'https://unrationnal.world',
  integrations: [react()],
  output: "static",
});
