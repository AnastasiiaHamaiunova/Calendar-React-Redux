var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  devtool: 'source-map',
  entry: [
    `webpack-dev-server/client?http://127.0.0.1:8080`,
    'webpack/hot/dev-server',
    path.join(__dirname, './src/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
       {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: 'style-loader!css-loader!sass-loader?cacheDirectory',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0', 'eslint-loader'],
      },
    ]
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    }),
    HotModuleReplacementPlugin,
  ],
};
