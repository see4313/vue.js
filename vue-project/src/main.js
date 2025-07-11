// 제일 먼저 실행되는 js파일
import { createApp } from "vue";
import App from "./App.vue"; // "./App.vue" 를 임포트해오는게 시작 //Root 컴포넌트(제일상위 컴포넌트)
import router from "./router"; // 라우팅정보 ( index 파일에 router존재)
import store from "./store/index.js"; // 저장소

// createApp(App).use(router).mount("#app"); //뷰 인스턴스를 만들어줌 //mount는 아이디가 app인(#app은 html에 있음) 애에게 mount 해줌

//mount가 발생하면서 mounted가 실행되고 그 실행되는걸 훅이라고 한다.
//훅이 실행되면서 그 전에 기본값으로 화면에 나오던게 mounted에 있는 내용으로 덮어져서 씌워짐.
// mount = Vue 컴포넌트를 화면에 띄우는 일
// mounted() = 화면에 뜬 직후 Vue가 자동으로 불러주는 이벤트 콜백 함수


// createApp(App).use(router).mount("#app"); // 밑에 
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app"); // 위에 createApp이랑 3줄(const ~~~("#app"))이랑 같은 의미
