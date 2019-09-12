const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');

module.exports = withPlugins([withSass], {
  webpack(config) {
    config.plugins.push(
      new webpack.DefinePlugin({ CLIENT_SIDE_RENDERING: true }),
    );
    return config;
  },
});
