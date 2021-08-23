const { resolve } = require('path');

module.exports = {
  "entry": './src/index.ts',
  "output": {
    filename: 'index.bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  // mode: 'production',
  mode: 'development'
}