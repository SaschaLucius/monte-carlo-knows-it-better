import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';

//https://kit.svelte.dev/docs/integrations
import { vitePreprocess } from '@sveltejs/kit/vite';

const TARGET = process.env.TARGET;

function adapter() {
	return TARGET === 'gh-page'
		? staticAdapter({
				pages: 'build',
				assets: 'build',
				strict: false
		  })
		: nodeAdapter();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			// base path for GitHub Pages
			base: TARGET === 'gh-page' ? process.env.BASE_PATH : ''
		}
	}
};

export default config;
