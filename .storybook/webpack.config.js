const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.sass|scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });
  config.module.rules.push({
    test: /\.jsx$/,
    use: ['babel-loader'],
    include: path.resolve(__dirname, '../')
  });

  return config;
};
