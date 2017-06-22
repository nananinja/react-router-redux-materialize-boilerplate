'use strcit';
var path = require('path');
var webpack = require('webpack');

// Current environment
const CURRENT_ENV = 'development';
// const CURRENT_ENV = 'production';

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
  },
  // For details: https://webpack.js.org/configuration/devtool/
  // eval-source-map: With fast re-build for development
  devtool: (CURRENT_ENV === 'production')? 'source-map': 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // Tell webpack what directories should be searched when resolving modules.
    modules: [
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname, 'node_modules')
    ],
    // Automatically resolve following extensions
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        // injecting a variable process.env.NODE_ENV set to "production" at
        // build time will turn React into production
        'NODE_ENV': JSON.stringify(CURRENT_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
};
