import { viteMockServe } from 'vite-plugin-mock';
export default function setupMockPlugin(isBuild) {
	return viteMockServe({
		mockPath: 'mock',
		supportTs: false,
		watchFiles: true,
		localEnabled: !isBuild,
	});
}
