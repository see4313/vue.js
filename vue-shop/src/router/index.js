import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ImageInsert from "../views/ImageInsert.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import SalesList from "../views/SalesList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/image_insert",
    name: "imageInsert", // 라우터 등록할때 경로랑 이름으로 등록 가능
    component: ImageInsert,
  },
  {
    path: "/list",
    name: "productList",
    component: ProductList,
  },
  {
    path: "/detail",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/sales", // 판매하는상품등록하는 페이지
    name: "salesList",
    component: SalesList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
