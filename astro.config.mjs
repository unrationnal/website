import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  //site: 'https://unrationnal.world',
  site: 'https://unrationnal.github.io/website',
  integrations: [react()]
});
