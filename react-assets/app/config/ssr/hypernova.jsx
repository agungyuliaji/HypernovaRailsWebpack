const bundle = require('../../../build/ssr-bundle');
const hypernova = require('hypernova/server');
const renderReact = require('hypernova-react').renderReact;

hypernova({
  devMode: true,
  getComponent(name) {
    return renderReact(name, bundle["App"])
  }
});
