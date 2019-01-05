const path = require('path');

module.exports = {
  entry: './src/js/bundle.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, './styleguide/js')
  },
  resolve: {
    modules: ['node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, './styleguide/'),
    compress: true,
    port: 9000
  },
  mode: 'development'
};