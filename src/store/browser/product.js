import axios from 'axios';

export const product = {
	state: {
		products: [
		  {
		    id: 1,
		    productName: "Licensed Cotton Table",
		    uuid: "9046febb-f785-43e7-84fd-c3fa1492cf40",
		    spec: {
		      id: 130,
		      matrix: {
			"0": 1,
			"1": 0,
			"2": 0,
			"3": 1,
			"4": 0,
			"5": 0
		      },
		      type: "Polygon",
		      points: [
			{
			  "x": 100,
			  "y": 160
			},
			{
			  "x": 30,
			  "y": 120
			},
			{
			  "x": 360,
			  "y": 210
			},
			{
			  "x": 120,
			  "y": 50
			}
		      ]
		    }
		  },		
		],
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
