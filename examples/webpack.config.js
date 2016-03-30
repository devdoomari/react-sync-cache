const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, '..');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './examples/index.tsx'
  ],
  output: {
    path: path.join(rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.ts?$/,
        loaders: ['react-hot', 'ts-loader'],
        includes: [
          path.join(rootPath, 'src'),
          path.join(rootPath, 'examples'),
        ],
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'ts-loader'],
        includes: [
          path.join(rootPath, 'src'),
          path.join(rootPath, 'examples'),
        ],
      },
    ]
  },
};
