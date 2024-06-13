const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // proxyTable 설정
      "/addrlink": {
        target: "https://business.juso.go.kr",
        changeOrigin: true
      },
      "/v1" : {
        target: "http://dev.l-walk.com:29080",
        changeOrigin: true
      }
    }
  },
  // server: {
  //   proxy: {
  //       '/addrlink': 'https://business.juso.go.kr'
  //   }
  // }

})
