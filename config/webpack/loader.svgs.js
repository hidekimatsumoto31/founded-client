'use strict'

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports.setup = function (PATHS) {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: PATHS.svgs,
          use: [{
            loader: 'svg-sprite-loader',
            options: {
              name: '[name]_[hash]',
              prefixize: true
            }
          }]
        }
      ]
    },
    plugins: [
      new SpriteLoaderPlugin()
    ]
  }
}
