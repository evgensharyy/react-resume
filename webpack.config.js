const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
			},
			{
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
			},
			{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
		test: /\.(scss)$/,
		use: [{
		  loader: 'style-loader', // inject CSS to page
		}, {
		  loader: 'css-loader', // translates CSS into CommonJS modules
		}, {
		  loader: 'postcss-loader', // Run post css actions
		  options: {
			plugins: function () { // post css plugins, can be exported to postcss.config.js
			  return [
				require('precss'),
				require('autoprefixer')
			  ];
			}
		  }
		}, {
		  loader: 'sass-loader' // compiles Sass to CSS
		}]
	  }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
	}),
	new CleanWebpackPlugin()
  ],
  devServer: {
	writeToDisk: true,
  port: 9000,
  publicPath: '/',
  historyApiFallback: true,
  }
};
