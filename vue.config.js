const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  transpileDependencies: true
})
