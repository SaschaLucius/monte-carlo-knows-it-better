import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const TARGET = process.env.TARGET;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter:
			TARGET === 'gh-page'
				? staticAdapter({
						pages: 'build',
						assets: 'build',
						strict: false
				  })
				: autoAdapter(),
		paths: {
			// base path for GitHub Pages
			base: TARGET === 'gh-page' ? process.env.BASE_PATH : ''
		}
	}
};

export default config;
