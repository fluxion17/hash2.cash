import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Minimal Svelte configuration with Vite preprocess support.
const config = {
  preprocess: vitePreprocess()
};

export default config;
