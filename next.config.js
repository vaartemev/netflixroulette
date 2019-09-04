import withTypescript from '@zeit/next-typescript';
import withPlugins from 'next-compose-plugins';
import withSass from '@zeit/next-sass';

module.exports = withPlugins([withSass, withTypescript]);
