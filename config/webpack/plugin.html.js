'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports.setup = function (PATHS) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(PATHS.src, 'index.ejs'),
        filename: './index.html'
      })
    ]
  }
}
