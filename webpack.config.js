const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  entry: './index.js',
  output: {
    filename: "bundle.[contenthash].js",
    // path: path.resolve(__dirname, 'output'),
    path: path.resolve(__dirname),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    // new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.svg$/,
        use: [{
          loader: 'file-loader',
          options: {
            path: 'img',
            name: '[path][contenthash].[ext]'
          },
        }],
      }
    ]
  }
}