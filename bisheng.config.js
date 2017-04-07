var path = require('path');

module.exports = {
  source: ['./components', './articles', 'CHANGELOG.md'],
  output: './_site',
  entry: {
    index: {
      theme: './_theme',
      htmlTemplate: './_theme/static/template.html'
    }
  },
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd'
  ],
  port: 9001,
  webpackConfig(config) {
    config.resolve.alias = {
      'b-rc': path.join(process.cwd(), 'lib'),
      'react-router': 'react-router/umd/ReactRouter'
    };
    config.babel.plugins.push([
      require.resolve('babel-plugin-import'),
      {
        style: true,
        libraryName: 'antd',
      },
    ]);
    return config;
  },
  root: '/b-rc/'
};
