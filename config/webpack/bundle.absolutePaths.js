'use strict'

module.exports.setup = function (PATHS) {
  return {
    resolve: {
      modules: [
        PATHS.src,
        'node_modules'
      ],
      alias: {
        src: PATHS.src
      },
      descriptionFiles: ['package.json'],
      extensions: ['.js', '.scss']
    }
  }
}
