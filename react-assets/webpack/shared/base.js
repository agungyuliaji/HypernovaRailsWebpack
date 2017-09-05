const path = require('path')

const config = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      app: path.resolve(__dirname, '../../app/'),
    }
  },
  module: {
    rules: [
      {
        include: path.join(__dirname, '../../app/'),
        test: /\.jsx?$/,
        use: 'babel-loader',
      }
    ]
  }
}

module.exports = config