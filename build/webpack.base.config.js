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
      // 如果去掉'.js'，则会报Module not found: Error: Can't resolve '@babel/runtime/helpers/asyncToGenerator' in 'E:\OpenSourceCode\webStorer\src'错误
      extensions: ['.ts', '.js']
   },
   externals: {
      jsstore: {
         commonjs: 'jsstore',
         commonjs2: 'jsstore',
         amd: 'jsstore',
         root: 'jsstore'
      }
   },
   plugins: [
      new SmartBannerPlugin(banner)
   ],
   module: {
      rules: [
         {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader'
               }
            ]
         }
      ]
   }
}
