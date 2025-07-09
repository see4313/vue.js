import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// import DataBinding from "../views/DataBinding.vue";
// import DataBinding from "../views/DataBindingAttr.vue";
// import DataBinding from "../views/DataBindingList.vue";
// import DataBinding from "../views/EventClick.vue";
// import DataBinding from "../views/ShowVue.vue";
// import DataBinding from "../views/ComputedView.vue";
// import DataBinding from "../views/WatchView.vue";
// import DataBinding from "../views/TodoView.vue";

// import DataBinding from "../views/TodoView2.vue"; // 교수님 깃

// import DataBinding from "../views/NestedComponent.vue";
// import DataBinding from "../views/ParentComponent.vue";
import DataBinding from "../views/ParentComponent1.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: DataBinding,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
