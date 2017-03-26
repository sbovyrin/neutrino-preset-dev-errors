const path = require('path');
const { LoaderOptionsPlugin } = require('webpack');
const cssnext = require('postcss-cssnext');

module.exports = ({ config }) => {
  const pluginOptions = {
    options: {
      context: path.resolve(process.cwd()),
      postcss: [cssnext({ browsers: ['last 2 versions', 'IE > 10'] })]
    }
  };

  if (
    !config.module.rules.has('postcss') && !config.plugins.has('loader-options')
  ) {
    config.module
      .rule('postcss')
      .test(/\.css$/)
      .use('postcss')
      .loader(require.resolve('postcss-loader'));
    config.plugin('loader-options').use(LoaderOptionsPlugin, [pluginOptions]);
  } else {
    const postcssPlugins = config
      .plugin('loader-options')
      .get('args')
      .shift().options.postcss;

    config
      .plugin('loader-options')
      .set('args', pluginArg.concat(pluginOptions.options.postcss));
  }
};
