import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: () => import('../views/viewer/viewer.vue'),
		meta: {
			title: 'main',
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
