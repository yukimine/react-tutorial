const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const documentRoot = path.join(__dirname, 'src');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './js/client.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_mopdules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'client.min.js',
    publicPath: '/',
  },
  plugins: debug
    ? []
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: false,
          sourcemap: false,
        }),
      ],
  devServer: {
    contentBase: documentRoot,
    historyApiFallback: true,
  },
};
