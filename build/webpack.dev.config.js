const { merge } = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
   // cheap-module-eval-source-map is faster for development
   devtool: 'cheap-module-eval-source-map',
   mode: 'production',
   output: {
      filename: 'webStorer.js',
      chunkFilename: '[name].chunk.js',
      library: 'webStorer',
      libraryTarget: 'umd',
      umdNamedDefine: true
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env': {
            NODE_ENV: JSON.stringify('development')
         }
      })
   ],
   optimization: {
      minimize: false
   }
})
