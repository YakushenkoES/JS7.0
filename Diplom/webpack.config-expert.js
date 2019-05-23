'use strict';

// npx webpack --config webpack.config-expert.js

let path = require('path');

module.exports = {

  mode: 'development',// 'production'
  entry: {
    index: './src/js/script.js',
    modules: './src/js/modules.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",


  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader?optional[]=runtime',
        options: {
          presets: [
            ["@babel/env", {
              targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
                ie: "11"
              }
            }]
          ],
          plugins: ["es6-promise"]
          
        }
       
      }
    }]
  }
};