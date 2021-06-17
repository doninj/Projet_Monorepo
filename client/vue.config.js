
const path = require('path')
module.exports = {
  // proxy API requests to Valet during development
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
    }
  },
  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: path.resolve('../server/public/dist'),

  publicPath: '/dist',
  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: path.resolve('../server/resources/views/index.html')
}
