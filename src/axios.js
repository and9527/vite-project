import axios from 'axios';
const networkConfig = {
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 10000,
	headers: {
		Accept: 'application/json, text/plain, */*',
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
	},
};
export function requestService(config) {
	const service = axios.create({
		baseURL: networkConfig.baseURL,
		timeout: networkConfig.timeout,
	});

	service.interceptors.request.use(
		(config) => {
			return config;
		},
		(error) => {
			console.log(error);
			Promise.reject(error);
		},
	);

	service.interceptors.response.use(
		(res) => {
			console.log(res);
		},
		(error) => {
			return Promise.reject(error);
		},
	);
	return service(config);
}
