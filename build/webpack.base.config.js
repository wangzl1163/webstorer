const path = require('path')
const SmartBannerPlugin = require('smart-banner-webpack-plugin')
const banner = require('../license.js')

module.exports = {
   context: path.resolve(__dirname, '../'),
   entry: {
      main: './src/main.ts'
   },
   output: {
      library: 'webStorer',
      libraryTarget: 'umd',
      umdNamedDefine: true
   },
   resolve: {
      extensions: ['.ts']
   },
   plugins: [
      new SmartBannerPlugin(banner)
   ],
   module: {
      rules: [
         {
            test: /\.ts$/,
            // exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader'
               }
            ]
         }
      ]
   }
}
