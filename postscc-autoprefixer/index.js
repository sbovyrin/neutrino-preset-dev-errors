const path = require('path');
const { LoaderOptionsPlugin } = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = ({ config }) => {
  const pluginOptions = {
    options: {
      context: path.resolve(process.cwd()),
      postcss: [autoprefixer({ browsers: ['last 2 versions', 'IE > 10'] })]
    }
  };

  config.module
    .rule('postcss')
    .test(/\.css$/)
    .use('postcss')
    .loader(require.resolve('postcss-loader'));
  config.plugin('loader-options').use(LoaderOptionsPlugin, [pluginOptions]);
};
