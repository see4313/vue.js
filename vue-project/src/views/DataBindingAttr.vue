<template>
  <h3>DataBindingAttr.vue</h3>
  <p>attribute 바인딩하기.</p>
  <!--v-bind는 attribute를 바인딩할때 사용-->
  <img v-bind:src="imgSrc" v-bind:width="imgWid" />
  <!--imgWid라는데 width를 바인딩하겠다-->

  <p>
    <input type="number" v-model.number="widVal" v-on:change="changeSize" />
  </p>

  <p>
    <input type="text" v-model="msg" />
    <!-- 속성에다가 바인딩할때는 v-bind,  event는 지시자의 이름이 v-on-->
    <button v-bind:disabled="msg == '' ? true : false" v-on:click="alertFnc">
      클릭
    </button>
  </p>
  <p>객체를 활용한 바인딩</p>
  <!-- 두개의 단어면 ''사용하고 하나의 단어면 ''사용X-->
  <h3 v-bind:class="{ 'text-red': isRed, active: isActive }">홍길동</h3>

  <p>배열을 활용한 바인딩</p>
  <!--<h3 v-bind:class="[activeClass, errorClass]">소니영</h3>-->
  <!--아래와 같은 의미-->
  <h3 v-bind:class="classAry">소니영</h3>
  <p><button v-on:click="showFnc">에러스타일</button></p>
</template>

<script>
export default {
  //data영역
  data() {
    return {
      imgSrc: "http://vuejs.org/images/logo.png",
      imgWid: "130px",
      widVal: 100,
      btnShow: true,
      msg: "",

      isRed: true, //객체를활용한 방식 {'클래스명': true, '클래스명': false} 형태로 바인딩 // true일땐 스타일이 적용되고 false일때는 스타일적용X
      isActive: true, // isActive도 사용하고싶으면 true

      activeClass: "active", //배열을 활용한 방식
      errorClass: "text-red",

      classAry: ["active", "text-red"],
    };
  },
  //이벤트
  methods: {
    alertFnc() {
      alert(this.msg);
    },
    showFnc() {
      //소니영 이름의 폰트색을 누를때마다 변경
      this.isRed = !this.isRed; // true일때는 false로, false일때는 true로 클릭할때마다 변경해서 isRed(폰트컬러)가 색이 변함
      this.isActive = !this.isActive;
    },
    //크기 바꾸는 기능
    changeSize() {
      this.imgWid = this.widVal + "px";
    },
  },

  // mounted 메소드를 사용하면 훅이 발생
  //Vue 컴포넌트가 화면에 그려지고 난 직후에 실행되는 함수
  mounted() {
    console.log(this);
    this.msg = "길동홍";
    this.imgWid = "230px"; // mounted 되는 시점에 크기변경도 가능
  },
};
</script>

<style scoped>
.text-red {
  color: rgb(255, 73, 103);
}

.active {
  background-color: skyblue;
}
</style>
