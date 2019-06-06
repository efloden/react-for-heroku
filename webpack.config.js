var webpack = require('webpack');

module.exports = env => {
	console.log('API CONST WAS: ', env.API_CONST)
	return {
		entry: [
			'./src/index.js'
		  ],
		  output: {
			path: __dirname,
			publicPath: '/',
			filename: 'bundle.js'
		  },
		  plugins: [
			  new webpack.DefinePlugin({
				  __API__: '"'+env.API_CONST+'"'
			  })
		  ],
		  module: {
			rules: [
			  {
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader"
				}
			  },
			  {
				test: /\.css$/,
				use: [
				  {
					loader: "style-loader"
				  },
				  {
					loader: "css-loader",
					options: {
					  modules: true,
					  importLoaders: 1,
					  localIdentName: "[name]_[local]_[hash:base64]",
					  sourceMap: true,
					  minimize: true
					}
				  }
				]
			  }
			]
		  }
	}
};