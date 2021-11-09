# react-shop

sophy with react

## Configuración de Webpack y Babel

```sh
npm install @babel/core @babel/preset-env @babel/preset-react
```

```sh
npm install webpack webpack-cli webpack-dev-server
```

## Loaders

```sh
npm install babel-loader html-loader html-webpack-plugin
```

## Archivos a crear

- .babelrc

```sh
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

- webpack.config.js

```sh
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
	]
}
```

## intall css - scss

```sh
npm install mini-css-extract-plugin css-loader style-loader sass -D
```
