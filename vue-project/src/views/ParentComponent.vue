<template>
  <h3>부모컴포넌트(ParentComponent.vue)</h3>
  <p class="parent-component">{{ msg }}</p>
  <!--v-on:send-message 사용자가 임의로 지정한 이벤트 -->
  <!--childcomponent에서 방출해준걸 받음-->
  <ChildComponent v-on:send-message="sendMessage" />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  data() {
    return {
      msg: "손이영",
    };
  },
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log("전달받은 데이터:" + data);
    },
  },
};
</script>
