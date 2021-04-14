const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'index.js',
      chunkFilename: '[name].chunk.js'
   },
   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         template: './public/index.html'
      })
   ],
   module: {
      rules: [
         {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
                  options: {
                     presets: [
                        '@babel/preset-env'
                     ]
                  }
               }
            ]
         }
      ]
   }
}
