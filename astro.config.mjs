import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kamilkedzior.pl',
  integrations: [react(), tailwind(), mdx(), astroImageTools, sitemap()]
});