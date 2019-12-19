const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
           MiniCssExtractPlugin.loader,
           'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
            //
            // options: {
            //   sourceMap: isDev
            // }
          },
          {
            loader: 'less-loader'
            //
            // options: {
            //   sourceMap: isDev
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new VueLoaderPlugin()
  ],
};
