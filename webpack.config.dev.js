const baseWebpackConfig = require('./webpack.config');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

var conf = baseWebpackConfig;
conf.mode = 'development';
conf.devtool = 'inline-source-map',

conf.plugins.push(new ngAnnotatePlugin());
conf.plugins.push(
	new TerserPlugin({
		sourceMap: true,
	})
);

module.exports = conf;
