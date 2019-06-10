const path = require('path');

const rootPath = path.join(__dirname, '../../');
const srcPath = path.join(rootPath, './src');
const buildPath = path.join(rootPath, './build');
const configPath = path.join(buildPath, './config');
// const scriptsPath = path.join(rootPath, './scripts');
const publicPath = path.join(rootPath, './public');
const distPath = path.join(rootPath, './dist');

module.exports = {rootPath, srcPath, configPath, publicPath, distPath};
