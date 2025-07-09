<template>
  <h3>자식컴포넌트 (ChildComponent.vue)</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage">메세지보내기</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMessage() {
      this.$emit("send-message", this.msg); // send-message는 부모컴포넌트에서 정의해줌 // emit: 방출해서 보내주겠다의미
      // this.$parent.msg = this.msg;
      // this.$root.msg = this.msg; // $root 는 어디서든지 제일 상위 컴포넌트를 말함
    },
  },
  mounted() {
    console.log(this.$parent);
  },
};
</script>
