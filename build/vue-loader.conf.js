var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  /**
   * vue-loader.esModule
   * Useful for interoperating with transpiler other than Babel, like TypeScript.
   */
  esModule: true,
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
