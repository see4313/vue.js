<template>
  <div class="post-item" @click="$emit('view-detail', post.id)">
    <h3>{{ post.title }}</h3>
    <p>내용: {{ post.content }}</p>
    <p>작성자: {{ post.writer }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.post-item {
  background: white;
  padding: 18px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  overflow: hidden;
}

.post-item:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.post-item h3 {
  font-size: 20px;
  color: #007bff;
  font-weight: 700;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-item p {
  color: #444;
  font-size: 15px;
  line-height: 1.4;
  height: 3.2em; /* 2 lines approx */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
