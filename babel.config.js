module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ].filter(Boolean),
  plugins: [
    // [
    //   'module-resolver',
    //   {
    //     root: pathsConfig.moduleSearch,
    //     alias: pathsConfig.alias,
    //   },
    // ],
    ['import', {libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css'}],
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', {legacy: false, decoratorsBeforeExport: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    '@babel/plugin-proposal-object-rest-spread',
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: true,
      },
    ],
  ].filter(Boolean),
  ignore: ['**/*.d.ts'],
};
