<!--Componets라는 파일에는 공통적으로 들어가는것들이 들어감 views에 들어가도 상관 없으나 공통된것들만 따로 나눠서 파일 만들어줌-->

<template>
  <!-- <h3>MyButton.vue</h3> -->
  <button v-on:click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "클릭하세요" },
  },
  methods: {
    handleClick() {
      //$emit을 사용
      // console.log(this);
      this.$emit("my-event", this.label + "을 전달"); //$emit사용 부모에게로방출 my-event는 부모요소에 존재, // this.label에 들었는 값들을 parrentButton에 data로 방출해줌 그래서 $emit으로 방출해줌
    },
  },
};
</script>

<style scoped>
button {
  background-color: darkslateblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
}
</style>
