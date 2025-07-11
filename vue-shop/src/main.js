import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App) //
  .use(router) //
  .mixin(mixins) // 공동함수
  .mount("#app");

//카카오로그인
window.Kakao.init("0e8d53ab09bc525ff4bb514748cbe78f");
