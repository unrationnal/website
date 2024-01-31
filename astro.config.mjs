import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

export default defineConfig({
  site: 'https://unrationnal.world',
  integrations: [react()],
  output: "static",
});
