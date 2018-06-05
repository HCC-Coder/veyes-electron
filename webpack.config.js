const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VeyesHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  chunks: ['index'],
  inject: 'body'
})


module.exports = {
  devServer : {
    contentBase: path.join(__dirname, "build")
  },  
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    // filename: 'crew.js',
    path: path.resolve(__dirname, 'build')
  },
  module : {
    rules: [
      { test: /\.css$/, use: [ {loader: "style-loader"}, {loader: "css-loader"} ] },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(png|svg|jpg|gif|mp4|otf)$/, use: ['file-loader'] }
    ]
  },
  plugins: [VeyesHtmlWebpackPluginConfig]
};