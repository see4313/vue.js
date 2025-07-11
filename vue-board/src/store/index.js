// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    ADD_POST(state, post) {
      state.posts.push(post);
    },
  },
  getters: {
    getPostById: (state) => (id) => state.posts.find((p) => p.id === id),
  },
});
