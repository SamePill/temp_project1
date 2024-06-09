const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // proxyTable 설정
      "/addrlink": {
        target: "https://business.juso.go.kr",
        changeOrigin: true
      }
    }
  }

})
