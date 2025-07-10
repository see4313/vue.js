<template>
  <div class="grand-child">
    <h3>GrandChildComponent.vue(최하위컴포넌트 -Injector)</h3>
    <p>
      주입받은이름: <strong>{{ probiderUername }}</strong>
    </p>
    <button @click="updateParentName">부모사용이름 변경</button>
  </div>
</template>

<script>
export default {
  //provide에서 값을 제공해주고 inject에서 값을 받음 (provide는 app.vue에 있음)
  inject: ["providerUsername", "updateUserName"], // [providerUsername사용자이름(데이타속성) , updateUserName바뀔 사용자이름(change메소드속성)]
  methods: {
    updateParentName() {
      this.updateUserName("손이영");
    },
  },
};
</script>

<style scoped>
.grand-child {
  border: 1px solid rgb(31, 204, 31);
  padding: 10px;
}
</style>
