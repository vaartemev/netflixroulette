const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withPlugins([withSass, withTypescript]);
