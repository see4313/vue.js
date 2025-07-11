//요청하는 ip와 프로토콜이 다르면 동일한 출처로 인식시키기위한 (프록시설정)
// 프론트인 8080에서 api요청을 보낼떄 개발서버가 자동으로 프록시하여 실제로는 3000번으로 요청을 보냄
const target = "http://localhost:3000"; // 백엔드 서버주소
module.exports = {
  devServer: {
    port: 8080, //프론트개발서버포트
    proxy: {
      // 다운로드라는 요청이 들어오면
      "^/download": {
        target,
        changeOrigin: true,
      },
      "^/api": {
        target,
        changeOrigin: true,
      },
      "^/upload": {
        target,
        changeOrigin: true,
      },
    },
  },
};

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
