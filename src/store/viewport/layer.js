import layer from '@/class/layer';
export const Layer = {
	state: {
		layers: [],
		currentLayer: 0,
	},
	mutations: {
		storeLayer(state, layers) {
			state.layers = layers;
		},
		addGraphic(state, { layerId, graphicObj }) {
			const findLayer = state.layers.find((layer) => layer.id === layerId);
			if (findLayer) findLayer.addGraphic(graphicObj);
			else {
				let tempLayer = null;
				tempLayer = new layer(layerId);
				tempLayer.addGraphic(graphicObj);
				state.layers.push(tempLayer);
			}
		},
	},
	getters: {
		getCurrentLayer(state) {
			return state.layers.find((layer) => layer.id === state.currentLayer);
		},
	},
};
