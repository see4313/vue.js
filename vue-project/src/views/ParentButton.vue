<template>
  <h3>ParentButton.vue</h3>
  <MyButton v-on:my-event="eventClick" label="확인" />
  <MyButton @my-event="eventClick" label="취소" />
  <MyButton @my-event="eventClick" />
</template>

<script>
import MyButton from "../components/MyButton.vue";
export default {
  components: { MyButton },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    eventClick(data) {
      console.log(data); // data는 자식 컴포넌트에서 this.label에 있는 값들이 들어있음
    },
  },
};
</script>

<style scoped>
h3 {
  color: #333;
}
</style>
