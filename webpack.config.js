const path = require('path')

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: './assets/scripts/entry.js',
  output: {
    chunkFilename: 'theme-bundle.chunk.[name].js',
    filename: 'theme-bundle.[name].js',
    path: path.resolve(__dirname, 'assets/dist'),
  },
}
