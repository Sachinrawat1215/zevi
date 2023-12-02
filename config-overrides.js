const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  return alias({
    '@components': 'src/components',
    '@utils': 'src/utils',
    '@pages': 'src/pages',
    '@icons': 'src/icons',
  })(config);
};
