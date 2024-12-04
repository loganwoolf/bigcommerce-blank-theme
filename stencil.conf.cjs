const webpack = require('webpack')

function production() {
  const config = require('./webpack.config.js')

  webpack(config, (err, stats) => {
    if (err || stats.hasErrors() || stats.hasWarnings()) {
      console.error(err)
      process.exit(1)
    }

    process.send('done')
  })
}

if (process.send) {
  process.on('message', (message) => {
    if (message === 'production') {
      production()
    }
  })

  process.send('ready')
}

module.exports = {}
