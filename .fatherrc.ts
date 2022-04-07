export default {
  esm: 'babel',
  cjs: 'babel',
  lessInBabelMode: true,
  runtimeHelpers: true,
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
  ],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
};
