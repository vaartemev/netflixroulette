const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.jsx',
	module: {
		rules: [{
				test: /\.jsx|js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};