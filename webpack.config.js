const path = require('path');
const autoprefixer = require('autoprefixer');
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]


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
          test: /\.(css|scss)$/i,
          exclude: /node_modules/,
          use: ['style-loader','css-loader',
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: postCSSPlugins
                    }
                  }
                }
        ],
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
  },
 
}




