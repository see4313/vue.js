<template>
  <h3>Event</h3>

  <!-- v-binde는 생략이 가능해서 :key로 사용했음-->
  <p :key="i" v-for="(num, i) in list">
    <!--v-on:은 @로 사용가능-->
    <button @click="ClickFnc(num)">이벤트클릭</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      list: [10, 20, 30],
    };
  },
  methods: {
    ClickFnc(num) {
      alert(num + "클릭을 해버렸다고?");
    },
  },
};
</script>
