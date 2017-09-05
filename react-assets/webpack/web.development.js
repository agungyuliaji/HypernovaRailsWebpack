const path = require('path')

var config = require('./shared/base.js')

config.entry = './app/app.client.jsx',
config.output = {
  path: path.join(__dirname, '..', 'build'),
  filename: 'bundle.js'
}

module.exports = config
