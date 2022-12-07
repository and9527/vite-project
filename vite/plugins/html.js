import { createHtmlPlugin } from 'vite-plugin-html';

export default function setupHtmlPlugin(isBuild, env) {
	return createHtmlPlugin({
		minify: isBuild,
		inject: {
			data: {
				title: env.VITE_GLOB_APP_TITLE,
			},
		},
	});
}
