const path = require('path')
const nodeExternals = require('webpack-node-externals')

var config = require('./shared/base.js')

config.entry = './app/app.server.jsx'
config.target = 'node'
config.externals = [nodeExternals()]
config.output = {
  libraryTarget: 'commonjs',
  path: path.join(__dirname, '..', 'build'),
  filename: 'ssr-bundle.js'
}

module.exports = config
