export default {
  esm: 'babel',
  lessInBabelMode: true,
  runtimeHelpers: true,
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }, 'antd'],
  ],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
};
