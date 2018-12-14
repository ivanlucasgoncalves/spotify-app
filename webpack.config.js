const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Generates an HTML file with <script> injected
const htmlPlugin = new HtmlWebPackPlugin({
  inject: false,
  hash: true,
  template: './src/index.html',
  filename: 'index.html'
});

// Extract text from a bundle, or bundles, into a separate file
const cssPlugin = new MiniCssExtractPlugin({
  filename: 'style.[hash].css'
});

module.exports = {
  entry: { main: './src/app.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [htmlPlugin, cssPlugin]
};