// mixins 파일은 공통된 함수들을 적어놓고 불러서 사용하는 것
//사용하는 함수들은 methods라는 곳에 정의

import axios from "axios";

export default {
  methods: {
    // 다른사람들과 공통될까봐 특이함을주려고 $를 사용함, 사용 안해도 괜찮음
    async $api(url, data) {
      let result = await axios({
        // 처리된 결과를 가지고오면 result에 담아서 data로 반환해줌
        method: "post",
        url: url,
        data: data,
      });
      return result.data; // data로 반환
    },
    $base64(file) {
      return new Promise((resolve) => {
        let fn = new FileReader(); //FileReader()는 readAsDataURL가 호출되면 onload를 실행
        fn.onload = (e) => {
          resolve(e.target.result); //;base64, dlfkja;sdifj의 문자값을 readAsDataURL이 변환??
        };
        fn.readAsDataURL(file); // file은 base64(file)의 file을 말한다
      });
    },
  },
};
