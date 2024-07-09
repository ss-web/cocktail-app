const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true,
					},
					mangle: true,
					output: {
						comments: false,
					},
				},
			}),
		],
	},
};