const path = require('path');


module.exports ={
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'myBundle.js'
  },
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader','css-loader']
        },
        {
          test: /\.(gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
      ] 
  },
  devServer: {
    before:   function(src,server){
      server._watch(__dirname,'./src/*.html')
    },        
    contentBase: 
      path.resolve(__dirname,'src'),
      hot: true,
      port: 3000
  }
}




