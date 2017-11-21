const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: ['./app/js/index.js','./app/css/main.sass'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        query:
          {
            presets:["es2015", "react"]
          },
        exclude: /node_modules/ },
        { test: /\.jsx?$/,
        loader: 'babel',
        query:
          {
            presets:["es2015", "react"]
          },
        exclude: /node_modules/ },
        {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
       },

         {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
