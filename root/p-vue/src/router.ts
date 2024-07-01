import { createRouter, createWebHistory } from 'vue-router';
import Drinks from './components/pages/Drinks.vue';

const routes = [
	{ path: '/', redirect: '/margarita' },
	{
		path: '/margarita',
		name: 'margarita',
		component: Drinks
	},
	{
		path: '/mojito',
		name: 'mojito',
		component: Drinks
	},
	{
		path: '/a1',
		name: 'a1',
		component: Drinks
	},
	{
		path: '/kir',
		name: 'kir',
		component: Drinks
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('./components/pages/NotFound.vue')
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
