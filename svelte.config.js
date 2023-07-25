import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/lib/components',
			$stores: './src/lib/stores',
			$styles: './src/lib/styles',
			$scripts: './src/lib/scripts',
		}
	},
	preprocess: vitePreprocess()
};

export default config;
