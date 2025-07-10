<template>
  <div class="middle-component">
    <h3>MiddleComponent.vue(중간역할의 컴포넌트)</h3>
    <GrandChildComponent />
  </div>
</template>

<script>
import GrandChildComponent from "./child/GrandChildComponent.vue";
export default {
  components: {
    GrandChildComponent,
  },
};
</script>

<style scoped>
.middle-component {
  border: 1px solid orange;
  padding: 10px;
  margin: 10px;
}
</style>
