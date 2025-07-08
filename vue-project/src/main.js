// 제일 먼저 실행되는 js파일
import { createApp } from "vue";
import App from "./App.vue"; // "./App.vue" 를 임포트해오는게 시작
import router from "./router";

createApp(App).use(router).mount("#app"); //뷰 인스턴스를 만들어줌 //mount는 아이디가 app인(#app은 html에 있음) 애에게 mount 해줌
// const app = createApp(APP);
//app.use(router);
//app.mout("#app"); // 위에 createApp이랑 3줄(const ~~~("#app"))이랑 같은 의미
