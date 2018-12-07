/* eslint-env node */
module.exports = {
  css: {
    loaderOptions: {
    }
  },
  devServer: {
    proxy: 'http://localhost:3000'
  }
};