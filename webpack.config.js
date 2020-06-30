const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  entry: './index.js',
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /.svg$/,
        use: ['file-loader']
      }
    ]
  }
}