module.exports = {
   mode: 'production',
   entry: './src/index.js',
   output: {
      filename: 'index.js',
      chunkFilename: '[name].chunk.js'
   },
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
