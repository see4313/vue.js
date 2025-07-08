import { createApp } from "vue";
import App from "./App.vue"; // "./App.vue" 를 임포트해오는게 시작
import router from './router'

createApp(App).use(router).mount("#app"); //뷰 인스턴스를 만들어줌 //mount는 아이디가 app인(#app은 html에 있음) 애에게 mount 해줌
