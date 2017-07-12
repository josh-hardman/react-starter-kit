/*
    ./webpack.config.js
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  "files": {
    "css": [ "styles.css"],
    "js": ["./"]
  },
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "client"),
    compress: true,
    port: 9000
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true })
  ]
}
