const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add ProvidePlugin
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ]);config.plugins.push(new NodePolyfillPlugin());

  // You can also add other configurations here

  return config;
};
