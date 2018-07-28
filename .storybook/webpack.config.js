'use strict'

const merge = require('webpack-merge')

const path = require('path')
const paths = require('../config/webpack/bundle.paths')
const html = require('../config/webpack/plugin.html')
const styles = require('../config/webpack/loader.styles')
const fonts = require('../config/webpack/loader.fonts')
const absolutePaths = require('../config/webpack/bundle.absolutePaths')
const loaderSvgs = require('../config/webpack/loader.svgs')

const PATHS = paths.setup(path.resolve(__dirname, '../'))

const htmlSetup = html.setup(PATHS)
const stylesSetup = styles.setup(PATHS)
const fontsSetup = fonts.setup(PATHS)
const absolutePathsSetup = absolutePaths.setup(PATHS)
const loaderSvgsSetup = loaderSvgs.setup(PATHS)

module.exports = function (storybookBaseConfig) {
  const config = {
    resolve: {
      modules: [
        PATHS.storybook
      ],
      alias: {
        storybook: PATHS.storybook
      }
    }
  }

  return merge(
    storybookBaseConfig,
    config,
    htmlSetup,
    stylesSetup,
    fontsSetup,
    absolutePathsSetup,
    loaderSvgsSetup
  )
}
