import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import sass from 'vite-plugin-sass-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),sass()],
	server: {
		port: 3001,
		strictPort: true,
		host: true,
		fs: {
			allow: ['../']
		}
	},
	preview: {
		port: 8081,
		strictPort: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../'),
			'~': path.resolve(__dirname, './src'),
			path: 'path-browserify'
		}
	}
})
