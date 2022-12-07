import axios from 'axios';

export const product = {
	state: {
		products: [{"id":1,"productName":"Licensed Cotton Table","uuid":"9046febb-f785-43e7-84fd-c3fa1492cf40","spec":{"id":130,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":100,"y":160},{"x":30,"y":120},{"x":360,"y":210},{"x":120,"y":50}]}},{"id":2,"productName":"Handcrafted Fresh Hat","uuid":"d465f47a-67f7-4a10-b23c-1c80c8745f24","spec":{"id":140,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":40,"y":100},{"x":240,"y":400},{"x":400,"y":360},{"x":60,"y":10}]}},{"id":3,"productName":"Practical Steel Soap","uuid":"3373aaa7-1a0a-4a11-87e4-7069e2e8084d","spec":{"id":70,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":20,"y":180},{"x":300,"y":280},{"x":200,"y":90},{"x":140,"y":180}]}},{"id":4,"productName":"Intelligent Cotton Shoes","uuid":"36ceff5e-0515-4563-ad09-dc62ff599575","spec":{"id":90,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":80,"y":40},{"x":120,"y":280},{"x":40,"y":330},{"x":220,"y":200}]}},{"id":5,"productName":"Practical Fresh Pizza","uuid":"2b71ee47-6060-4201-bc65-4a3ba4acb986","spec":{"id":200,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":80,"y":100},{"x":240,"y":120},{"x":80,"y":60},{"x":180,"y":200}]}},{"id":6,"productName":"Small Granite Cheese","uuid":"b524c4a4-2162-4460-8f99-ca92e37f2bb9","spec":{"id":130,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":90,"y":60},{"x":270,"y":320},{"x":280,"y":360},{"x":160,"y":130}]}},{"id":7,"productName":"Sleek Plastic Shoes","uuid":"829e58db-3bc9-4c7e-a76a-bfe248d5da78","spec":{"id":30,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":50,"y":80},{"x":30,"y":40},{"x":200,"y":210},{"x":160,"y":160}]}},{"id":8,"productName":"Small Soft Tuna","uuid":"5d1739b2-3ba8-45ed-9899-ba4473205d53","spec":{"id":200,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":20,"y":100},{"x":150,"y":360},{"x":40,"y":150},{"x":260,"y":130}]}},{"id":9,"productName":"Sleek Plastic Pants","uuid":"7f8201ce-cfd7-41a3-8557-89491f9dc452","spec":{"id":160,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":90,"y":140},{"x":90,"y":280},{"x":120,"y":300},{"x":140,"y":40}]}},{"id":10,"productName":"Small Granite Tuna","uuid":"84bcb1bc-3b8f-44f2-9427-9ed542394410","spec":{"id":40,"matrix":{"0":1,"1":0,"2":0,"3":1,"4":0,"5":0},"type":"Polygon","points":[{"x":80,"y":120},{"x":120,"y":320},{"x":40,"y":180},{"x":300,"y":100}]}}],
	},
	mutations: {
		storeProducts(state, products) {
			state.products = products;
		},
	},
	actions: {
		async getProducts(context, state, data) {
			const url = `/api/products`;
			await axios
				.get(url)
				.then((res) => {
					context.commit('storeProducts', res.data.data);
				})
				.catch((err) => {
					throw new Error(err.data.data.message);
				});
		},
	},
};
