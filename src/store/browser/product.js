import axios from 'axios';

export const product = {
	state: {
		products: [],
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
