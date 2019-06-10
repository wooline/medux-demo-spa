const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const PostcssPxtorem = require('postcss-pxtorem');
// const ManifestPlugin = require("webpack-manifest-plugin");
const PostcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const PostcssPresetEnv = require('postcss-preset-env');
const StylelintPlugin = require('stylelint-webpack-plugin');
const pathsConfig = require('./path.conifg');

const conPath = path.join(pathsConfig.configPath, process.env.WEBSITE || './dev');
const conEnv = require(path.join(conPath, './env'));

const htmlReplace = [
  {
    pattern: '$$ENV$$',
    replacement: JSON.stringify(conEnv),
  },
  {
    pattern: '$$CLIENT_PUBLIC_PATH$$',
    replacement: conEnv.clientPublicPath,
  },
];

const getStyleLoaders = (cssOptions, preProcessor, preProcessorOptions) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          PostcssFlexbugsFixes,
          PostcssPresetEnv({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
          PostcssPxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push({loader: require.resolve(preProcessor), options: preProcessorOptions});
  }
  return loaders;
};

const config = {
  mode: 'development',
  entry: [path.join(pathsConfig.srcPath, './index')],
  output: {
    pathinfo: true,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/',
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [pathsConfig.srcPath, 'node_modules'],
    alias: {
      conf: conPath,
    },
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: pathsConfig.srcPath,
        // exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders({importLoaders: 2}, 'less-loader', {javascriptEnabled: true, modifyVars: {hd: '0.026666rem'}}),
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: pathsConfig.srcPath,
        loader: require.resolve('url-loader'),
        query: {
          limit: 50,
          name: 'media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['runtime', 'main'],
      chunksSortMode: 'manual',
      template: path.join(pathsConfig.publicPath, './index.html'),
    }),
    new HtmlReplaceWebpackPlugin(htmlReplace),
    /* new ManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath: conEnv.clientPublicPath,
    }), */
    new StylelintPlugin({
      configFile: path.join(pathsConfig.rootPath, './.stylelintrc.json'),
      context: pathsConfig.srcPath,
      files: '**/*.less',
      syntax: 'less',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ],
};

module.exports = config;
