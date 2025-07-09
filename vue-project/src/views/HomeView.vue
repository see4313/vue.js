<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--또다른 컴포넌트-->
    <!--상위컴포넌트가 있고 helloWorld컴포넌트가 하위에 있음-->
    <!-- 공통되는 부분에서 컴포넌트 사용함 (중복해서 사용 가능)-->
    <HelloWorld msg="환영합니다" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"; // 하위컴포넌트인 HelloWorld 임포트

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
