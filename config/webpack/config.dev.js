const merge = require('webpack-merge')
const server = require('./server')

module.exports.setup = function (PATHS) {
  console.log('Loading development configuration')

  return merge(
    server.setup(PATHS)
  )
}
