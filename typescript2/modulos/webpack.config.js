const path = require('path');

module.exports = {
  entry: './modulos.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'modulos.js',
    path: path.resolve(__dirname, 'dist')
  }
};