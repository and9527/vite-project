import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import setupPlugins from './vite/plugins';
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	const isBuild = command === 'build';

	return {
		plugins: [...setupPlugins(isBuild, env)],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		base: isBuild ? '/' : '/',
		server: {
			host: true,
			port: env.VITE_PORT,
			proxy: {
				'/api': {
					target: env.VITE_MOCK_ENABLE ? '/' : env.VITE_API_URL,
					changeOrigin: true,
				},
			},
		},
	};
});
