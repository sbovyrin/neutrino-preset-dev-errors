const postcss = require('neutrino-middleware-postcss');
const autoprefixer = require('autoprefixer');
const merge = require('deepmerge');

module.exports = (neutrino, options = {}) => {
  const defaultOptions = {
    plugins: [autoprefixer()],
  };
  neutrino.use(postcss, merge(defaultOptions, options));
};
