const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      '/': 'http://localhost:3000/',
    },
    contentBase: './client',
    publicPath: '/dist',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env", "@babel/react"],
          plugins: ["@babel/plugin-proposal-class-properties", '@babel/plugin-transform-runtime', '@babel/transform-async-to-generator']
        }
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
    resolve: {
      extensions: [".js", ".jsx", ".css", ".scss"]
    }
  },
};
