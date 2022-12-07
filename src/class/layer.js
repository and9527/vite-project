import GraphicFactory from './graphicFactory';
export default class layer {
	constructor(id) {
		this.id = id;
		this.graphics = [];
		this.layerCanvas = null;
	}
	addGraphic(graphicObj) {
		const findGraphic = this.graphics.find((graphic) => graphic.id === graphicObj.id);
		if (findGraphic) return;
		else {
			const graphic = GraphicFactory.CreateObject(graphicObj.type, graphicObj.id);
			graphic.points = graphicObj.points;
			this.graphics.push(graphic);
		}
	}
	getGraphic(id) {
		return this.graphics.find((graphic) => graphic.id === id);
	}
}
