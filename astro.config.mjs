import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

export default defineConfig({
  //site: 'https://unrationnal.world',
  site : "https://unrationnal.github.io/website/",
  integrations: [react()],
  output: "static",
});
