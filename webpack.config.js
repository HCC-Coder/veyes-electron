const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CrewHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/crew.html',
  filename: 'crew.html',
  chunks: ['crew'],
  inject: 'body'
})
const JudgeHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/judge.html',
  filename: 'judge.html',
  chunks: ['judge'],
  inject: 'body'
})
const ScreenHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/screen.html',
  filename: 'screen.html',
  chunks: ['screen'],
  inject: 'body'
})
const MonitorHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/monitor.html',
  filename: 'monitor.html',
  chunks: ['monitor'],
  inject: 'body'
})

module.exports = {
  devServer : {
    contentBase: path.join(__dirname, "build")
  },  
  mode: 'development',
  entry: {
    screen: './src/screen.js',
    crew: './src/crew.js',
    judge: './src/judge.js',
    monitor: './src/monitor.js'
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
  plugins: [CrewHtmlWebpackPluginConfig, JudgeHtmlWebpackPluginConfig, ScreenHtmlWebpackPluginConfig, MonitorHtmlWebpackPluginConfig]
};