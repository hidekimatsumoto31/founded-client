const merge = require('webpack-merge')
const paths = require('./config/webpack/bundle.paths')
const configProduction = require('./config/webpack/config.production')
const configDev = require('./config/webpack/config.dev')
const configCommon = require('./config/webpack/config.common')

const PATHS = paths.setup(__dirname)

module.exports = async function (mode) {
  const config = { mode }
  const envConfig = mode === 'development' ? configDev : configProduction

  return merge(
    config,
    await configCommon.setup(PATHS),
    envConfig.setup(PATHS)
  )
}
