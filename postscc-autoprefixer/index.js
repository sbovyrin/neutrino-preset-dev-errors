const path = require('path');
const { LoaderOptionsPlugin } = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = ({ config }) => {
  config.module
    .rule('css')
    .loader('postcss', require.resolve('postcss-loader'));

  config.plugin('loader-options').use(LoaderOptionsPlugin, {
    options: {
      context: path.resolve(process.cwd()),
      postcss: [autoprefixer()]
    }
  });
};
