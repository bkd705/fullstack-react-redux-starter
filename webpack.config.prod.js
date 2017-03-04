var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtools: 'cheap-module-source-map',
  entry: [
    path.join(__dirname, 'client/index.js'),
  ],
  output: {
    path: './server/public',
    filename: 'bundle.js',
    publicPath: './server/public'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [ 'babel' ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js' ]
  }
}
