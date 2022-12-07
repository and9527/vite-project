import { GraphicsObject } from './graphicsObject.js';
import * as gmatrix from 'gl-matrix';
export class PolygonObject extends GraphicsObject {
	constructor(id) {
		super(id);
		this.matrix = gmatrix.mat2d.create();
		this.type = 'Polygon';
		this.points = [];
	}
	convertToClientPos(matrix, x, y) {
		let cpos = { x: 0, y: 0 };
		let v0 = gmatrix.vec2.fromValues(x, y);
		let v1 = gmatrix.vec2.create();
		gmatrix.vec2.transformMat2d(v1, v0, matrix);
		cpos.x = v1[0];
		cpos.y = v1[1];
		return cpos;
	}

	Paint(graph) {
		let context = graph.getContext('2d');
		let pointNum = this.points.length;
		let newPoints = [];
		for (let i = 0; i < pointNum; ++i) {
			let cp = this.convertToClientPos(this.matrix, this.points[i].x, this.points[i].y);
			newPoints.push({ x: cp.x, y: cp.y });
		}
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = '#c0c0c0';
		for (let i = 1; i < newPoints.length; ++i) {
			let pt = newPoints[i - 1];
			context.moveTo(pt.x, pt.y);
			context.lineTo(newPoints[i].x, newPoints[i].y);
			context.stroke();
		}
	}
}
