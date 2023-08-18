import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfig } from 'vite';
import { webSocketServer } from './src/server/serverLogic';

const config: UserConfig = {
	plugins: [sveltekit(), webSocketServer]
};

export default defineConfig(config);
