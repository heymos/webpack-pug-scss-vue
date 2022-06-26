const path = require("path")
const { DefinePlugin }  = require("webpack");
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  mode: "production",

  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    assetModuleFilename: "[name][ext]"
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
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
            "vue-style-loader",
            // 'style-loader',
            "css-loader",
            "sass-loader"
          ]
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
  ],

  // resolve: {
  //   alias: {
  //     vue: "vue/dist/vue.esm-bundler.js"
  //   },
  // },

}