import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  trailingSlash: "never",
  vite: {
    plugins: [],
    server: {
      https: false
    }
  }
});