const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: "development",

  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
          use: [
            'vue-style-loader',
            // 'style-loader',
            'css-loader',
            'sass-loader'
          ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    }),
    new VueLoaderPlugin()
  ],

  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    },
  },

}