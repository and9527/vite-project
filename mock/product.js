import * as faker from 'faker';
import GraphicFactory from '../src/class/graphicFactory.js';

export default [
	{
		url: '/api/products',
		method: 'get',
		response: () => {
			return {
				code: 200,
				message: '',
				status: 'success',
				total: 10,
				data: new Array(10).fill('').map((_, index) => {
					const spec = GraphicFactory.CreateObject(
						'Polygon',
						faker.datatype.number({ min: 30, max: 200, precision: 10 }),
					);
					spec.points = [
						{
							x: faker.datatype.number({ min: 20, max: 100, precision: 10 }),
							y: faker.datatype.number({ min: 30, max: 200, precision: 20 }),
						},
						{
							x: faker.datatype.number({ min: 40, max: 300, precision: 30 }),
							y: faker.datatype.number({ min: 50, max: 400, precision: 40 }),
						},
						{
							x: faker.datatype.number({ min: 40, max: 400, precision: 40 }),
							y: faker.datatype.number({ min: 30, max: 350, precision: 30 }),
						},
						{
							x: faker.datatype.number({ min: 20, max: 300, precision: 20 }),
							y: faker.datatype.number({ min: 10, max: 200, precision: 10 }),
						},
					];
					return {
						id: index + 1,
						productName: faker.commerce.productName(),
						uuid: faker.datatype.uuid(),
						spec: spec,
					};
				}),
			};
		},
	},
];
