<!--v-if와 v-show의 차이점-->
<!--내부에서 DOM을 지우느냐 유지하느냐의 차이가 있다, 그래서 외부에서 봤을때는 그냥 둘다 동시에 열리고 닫히는걸로 보이지만 내부에서변화가 일어나고 있다.-->
<!-- <template>
  <div id="app">
    <h2>v-if vs v-show 예제(지피티가 줘써여)</h2>

    <button @click="showBox = !showBox">
      {{ showBox ? "숨기기" : "보이기" }}
    </button>

    <h3>v-if:</h3>
    <div v-if="showBox" class="box">👀 이 박스는 v-if로 제어되고 있어요.</div>

    <h3>v-show:</h3>
    <div v-show="showBox" class="box">
      🔄 이 박스는 v-show로 제어되고 있어요.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBox: true,
    };
  },
};
</script>

<style>
.box {
  padding: 10px;
  margin-top: 10px;
  background-color: #def;
  border: 1px solid #89c;
}
</style> -->

<!-- if는 dom에서 아에 지워졌다가 다시 생기는것-->
<!-- show는 html로 따지면 그냥 접었다가 펼치는것 ( 숨김 보기 정도 ? 흠흠 지피티 첵오)-->
<template>
  <div id="app">
    <h2>v-if vs v-show 차이점 보기</h2>

    <button @click="showIf = !showIf">
      v-if: {{ showIf ? "숨기기" : "보이기" }}
    </button>

    <button @click="showShow = !showShow">
      v-show: {{ showShow ? "숨기기" : "보이기" }}
    </button>

    <h3>v-if:</h3>
    <div v-if="showIf" class="box">
      👀 v-if 박스<br />
      DOM에 생성되었다가 사라집니다.
    </div>

    <h3>v-show:</h3>
    <div v-show="showShow" class="box">
      🔄 v-show 박스<br />
      DOM에는 항상 있지만 보이기/숨기기만 됩니다.
    </div>
  </div>
</template>

<script>
export default {
  name: "IfVsShow",
  data() {
    return {
      showIf: true,
      showShow: true,
    };
  },
};
</script>

<style scoped>
.box {
  padding: 10px;
  margin-top: 10px;
  background-color: #def;
  border: 1px solid #89c;
  color: #003366;
}
</style>
