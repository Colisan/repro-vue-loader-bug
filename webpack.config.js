const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: './src/index.ts',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        use: [{loader: 'ts-loader', options: {onlyCompileBundledFiles: true}}],
      },
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					"css-loader",
				],
			},
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
	plugins: [
    new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			title: "MAIN UI",
			scriptLoading: "module",
			template: "src/index.ejs",
			filename: "index.html",
		}),
  ],
};