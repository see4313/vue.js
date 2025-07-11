<template>
  <div class="list-container">
    <div class="header">
      <router-link to="/write">
        <button class="btn new-post-btn">✍️ 새 글 쓰기</button>
      </router-link>
    </div>

    <div class="posts">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @view-detail="goToDetail"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostItem from "../components/PostItem.vue";

export default {
  components: { PostItem },
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style scoped>
.list-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.btn {
  cursor: pointer;
  border: none;
  padding: 10px 22px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  user-select: none;
}

.new-post-btn {
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
}

.new-post-btn:hover {
  background-color: #0056b3;
  box-shadow: 0 6px 16px rgba(0, 86, 179, 0.5);
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>
