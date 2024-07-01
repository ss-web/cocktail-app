import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLazyLoad from 'vue3-lazyload'
import '@/assets/styles/reset.scss';
import '@/assets/styles/main.scss';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(VueLazyLoad, {
	// options...
})
app.use(pinia);

app.mount('#root');