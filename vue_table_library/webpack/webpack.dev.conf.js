/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const chokidar = require('chokidar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  entry: './dev/serve.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './dev/index.html',
      inject: true,
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
  devServer: {
    hot: true,
    hotOnly: true,
    open: true,
    inline: true,
    stats: {
      children: false,
      modules: false,
      chunks: false,
    },
    port: 10000,
    before(app, server) {
      chokidar.watch([
        './**/*.html',
      ]).on('all', () => {
        server.sockWrite(server.sockets, 'content-changed');
      });
    },
  },
});
