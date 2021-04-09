const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
   // cheap-module-eval-source-map is faster for development
   devtool: 'cheap-module-eval-source-map',
   mode: 'development',
   plugins: [
      new CleanWebpackPlugin()
   ]
})
