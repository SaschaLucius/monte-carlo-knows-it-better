import { defineConfig, mergeConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

// https://vitest.dev/config/
// When using a separate vitest.config.js, you can also extend Vite's options from another config file if needed
export default mergeConfig(
	viteConfig, //// Extending from an existing Vite configuration (`vite.config.ts` file)
	defineConfig({
		test: {
			// Extending Vitest's default options
			...configDefaults,
			// jest like globals
			globals: true,
			environment: 'jsdom',
			// in-source testing
			includeSource: ['src/**/*.{js,ts,svelte}'],
			// Add @testing-library/jest-dom matchers & mocks of SvelteKit modules
			setupFiles: ['./src/setupTest.ts'],
			// Exclude files in c8
			coverage: {
				exclude: ['./src/setupTest.ts']
			},
			// Exclude playwright tests folder
			exclude: [...configDefaults.exclude, 'tests']
		}
	})
);
