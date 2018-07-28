const merge = require('webpack-merge')
const html = require('./plugin.html')
const styles = require('./loader.styles')
const fonts = require('./loader.fonts')
const absolutePaths = require('./bundle.absolutePaths')
const loaderSvgs = require('./loader.svgs')
const imageLoader = require('./loader.images')
const precompiler = require('./bundle.precompiler')

module.exports.setup = async function (PATHS) {
  return merge(
    precompiler.setup(PATHS),
    html.setup(PATHS),
    styles.setup(PATHS),
    fonts.setup(PATHS),
    absolutePaths.setup(PATHS),
    loaderSvgs.setup(PATHS),
    imageLoader.setup(PATHS)
  )
}
