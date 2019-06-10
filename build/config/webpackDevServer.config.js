const path = require('path');
const devMock = require('@medux/dev-utils/dist/express-middleware/dev-mock').default;
const pathsConfig = require('./path.conifg');

const appPackage = require(path.join(pathsConfig.rootPath, './package.json'));

const config = {
  contentBase: pathsConfig.publicPath,
  watchContentBase: true,
  publicPath: '/',
  compress: true,
  historyApiFallback: true,
  hot: true,
  overlay: {
    warnings: true,
    errors: true,
  },
  stats: {
    colors: true,
  },
  quiet: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  proxy: appPackage.devServer.proxy,
  before: app => {
    app.use(devMock(appPackage.devServer.mock, appPackage.devServer.proxy, true));
  },
};
module.exports = config;
