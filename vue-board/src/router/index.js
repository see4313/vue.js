// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import PostWrite from "../views/PostWrite.vue";
import PostDetail from "../views/PostDetail.vue";

const routes = [
  { path: "/", component: PostList },
  { path: "/write", component: PostWrite },
  { path: "/post/:id", component: PostDetail, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
