import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sass from 'vite-plugin-sass-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(),sass()],
	server: {
		port: 3000,
		fs: {
			allow: ['../']
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../'),
			'~': path.resolve(__dirname, './src'),
			path: 'path-browserify'
		}
	}
})
