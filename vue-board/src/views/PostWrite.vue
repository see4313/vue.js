<template>
  <div class="write-container">
    <h2>✏️ 새 글 작성</h2>
    <form @submit.prevent="submitPost" class="write-form">
      <label for="title">제목</label>
      <input
        id="title"
        v-model="title"
        type="text"
        placeholder="제목을 입력하세요"
        required
      />

      <label for="content">내용</label>
      <textarea
        id="content"
        v-model="content"
        rows="6"
        placeholder="내용을 입력하세요"
        required
      ></textarea>

      <label for="content">작성자</label>
      <textarea
        id="writer"
        v-model="writer"
        rows="3"
        placeholder="작성자를 입력하세요"
        required
      ></textarea>

      <div class="button-group">
        <router-link to="/">
          <button type="button" class="btn list-btn">목록</button>
        </router-link>
        <button type="submit" class="btn submit-btn">등록</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      writer: "",
    };
  },
  methods: {
    submitPost() {
      const id = Date.now();
      this.$store.commit("ADD_POST", {
        id,
        title: this.title,
        content: this.content,
        writer: this.writer,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.write-container {
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  padding: 30px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.write-container h2 {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 8px;
}

.write-form label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
}

.write-form input[type="text"],
.write-form textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #444;
  margin-bottom: 24px;
  transition: border-color 0.3s ease;
  resize: vertical;
}

.write-form input[type="text"]:focus,
.write-form textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}

.btn {
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  user-select: none;
}

.list-btn {
  background-color: #f44336; /* 진한 빨강 */
  color: white;
  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.4);
}

.list-btn:hover {
  background-color: #d32f2f;
  box-shadow: 0 6px 16px rgba(211, 47, 47, 0.5);
}

.submit-btn {
  background-color: #007bff;
  color: white;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
