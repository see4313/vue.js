<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <select class="form-select">
            <option selected></option>
            <option value="1">노트북</option>
            <option value="2">모니터</option>
            <option value="3">마우스/키보드</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          :key="i"
          v-for="(product, i) in productList"
        >
          <div class="card" style="width: 18rem">
            <a @click="goToDetail(product.id)" style="cursor: pointer"
              ><img
                :src="`/download/${product.id}/${product.path}`"
                class="card-img-top"
                alt="..."
            /></a>
            <div class="card-body">
              <h5 class="card-title">{{ product.product_name }}</h5>
              <p class="card-text">
                <span class="badge bg-dark text-white me-1">{{
                  product.category1
                }}</span>
                <span class="badge bg-dark text-white me-1">{{
                  product.category2
                }}</span>
                <span class="badge bg-dark text-white">{{
                  product.category3
                }}</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    장바구니 담기
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    주문하기
                  </button>
                </div>
                <small class="text-dark">{{ product.product_price }}원</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
/*
   File: ProductList.vue
    Content: 상품목록,/ list눌렀을때 productList.vue가 보이게해주는 작업중
    Created: 손이영.
    Date: 2025.07.11
  */
// import axios from "axios";

export default {
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    //상품아이디를 파라미터로 받기 ()안에
    goToDetail(product_id) {
      // this.$router.push('/detail', param) // 라우터의 경로를 넣어줘도 됨(단점은 경로가 바뀌면 경로를 다찾아서 바꿔줘야됨)
      // this.$router.push(/name, param) // 푸쉬할떄 이름을 넣어도됨 (이름은 변동이 없어서 이름을 사용하는걸 추천)
      this.$router.push({
        name: "productDetail",
        query: { product_id: product_id }, // 이름방식 사용
      });
    },
    async getProductList() {
      this.productList = await this.$api("/api/productList", {}); // 전달될 데이터값은 공백(없음)
    },
  },
  mounted() {
    // component 생성후 화면에 출력되는 시점
    this.getProductList(); // async사용하기위해 함수지정 // 페이지가 실행되는 시점에 함수호출
    // axios({
    //   method: "post",
    //   url: "/api/productList",
    //   data: {},
    // })
    //   .then((result) => {
    //     this.productList = result.data;
    //   })
    //   .catch((err) => console.log(err));  // axios부터 주석처리된 이유는 mixins함수파일을 만들어서 위에 한줄로 실행됨
  },
};
</script>
