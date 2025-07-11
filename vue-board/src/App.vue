<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <div class="max-w-3xl mx-auto py-10">
      <h1 class="text-4xl font-bold text-center mb-10">📌 게시판</h1>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
