import { PolygonObject } from './graphics.js';

export default class GraphicFactory {
	static CreateObject(type, id) {
		let graph = null;
		switch (type) {
			case 'Polygon':
				graph = new PolygonObject(id);
				break;
		}
		return graph;
	}
}
