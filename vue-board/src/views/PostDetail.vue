<template>
  <div class="detail-container" v-if="post">
    <h2 class="detail-title">제목: {{ post.title }}</h2>
    <p class="detail-content">내용: {{ post.content }}</p>
    <p class="detail-writer">작성자: {{ post.writer }}</p>

    <router-link to="/">
      <button class="back-btn">목록</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    post() {
      return this.$store.getters.getPostById(Number(this.id));
    },
  },
};
</script>

<style scoped>
.detail-container {
  max-width: 700px;
  margin: 50px auto;
  background: white;
  padding: 40px 50px;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.detail-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #007bff;
  border-bottom: 3px solid #007bff;
  padding-bottom: 8px;
}

.detail-content {
  font-size: 1.2rem;
  white-space: pre-wrap; /* 줄바꿈 유지 */
  margin-bottom: 40px;
  color: #444;
}

.detail-writer {
  font-size: 1.2rem;
  white-space: pre-wrap; /* 줄바꿈 유지 */
  margin-bottom: 40px;
  color: #444;
}

.back-btn {
  background-color: #007bff;
  color: white;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-btn:hover {
  background-color: #0056b3;
}
</style>
