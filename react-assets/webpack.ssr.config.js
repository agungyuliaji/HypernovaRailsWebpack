const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './ssr/entrypoint.jsx',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'build'),
    filename: 'ssr-bundle.js'
  },
  module: {
    rules: [
      {
        include: path.join(__dirname, 'src'),
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        include: path.join(__dirname, 'ssr'),
        test: /\.jsx?$/,
        use: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
