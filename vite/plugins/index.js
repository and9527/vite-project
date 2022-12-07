import vue from '@vitejs/plugin-vue';
import setupMockPlugin from './mock.js';
import setupHtmlPlugin from './html.js';

export default function setupPlugins(isBuild, env) {
	const plugins = [vue()];

	if (env.VITE_MOCK_ENABLE) {
		plugins.push(setupMockPlugin(false));
	}
	plugins.push(setupHtmlPlugin(isBuild, env));
	return plugins;
}
