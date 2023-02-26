const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
          // { test: /\.hdr$/, use: ["url-loader?limit=65536"] }
          // { test: /\.jpg|png|gif|hdr$/, use: ["url-loader?limit=65536"] }
          { test: /\.hdr$/, use: ["file-loader"] }
      ]
    },
  }
})
