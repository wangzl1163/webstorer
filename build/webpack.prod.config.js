const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
   mode: 'production',
   optimization: {
      // https://webpack.js.org/configuration/optimization/#optimizationnamedmodules
      // This is because each module.id is incremented based on resolving order by default.
      // Meaning when the order of resolving is changed, the IDs will be changed as well.
      moduleIds: 'hashed',
      chunkIds: 'named'
   },
   plugins: [
      new CleanWebpackPlugin()
   ]
})
