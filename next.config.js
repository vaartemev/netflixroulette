const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const { DefinePlugin } = require('webpack');

module.exports = withPlugins([withSass], {
  webpack(config) {
    config.plugins.push(new DefinePlugin({ CLIENT_SIDE_RENDERING: false }));
    return config;
  },
});
