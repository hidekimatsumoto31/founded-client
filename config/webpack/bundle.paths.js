'use strict'

const path = require('path')

module.exports.setup = function (root) {
  return {
    root,
    src: path.resolve(root, 'src'),
    build: path.resolve(root, 'dist'),
    storybook: path.resolve(root, '.storybook'),
    fonts: path.resolve(root, 'src/assets/fonts'),
    images: path.resolve(root, 'src/assets/images')
  }
}
