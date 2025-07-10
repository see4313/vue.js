<template>
  <nav>
    <!--보여줘야할 url-->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/data">Data link</router-link>
  </nav>
  <!--보여줘야할 url 위치-->
  <!--위에 router링크들에 있는 것(index.js에 있는 router)들이 보여지게 해주는 코드-->
  <router-view />

  <div class="appUse" v-if="appUse">
    <div>
      <h3>App.vue(부모컴포넌트 - Provider)</h3>
      <p>
        제공자이름: <strong>{{ username }}</strong>
      </p>
      <MiddleComponent />
    </div>
  </div>

  <div v-if="appUse">
    <h1>🛍 Vue Provide/Inject 장바구니 예제</h1>
    <ProductList />
    <CartView />
  </div>

  <!-- <p>App.vue : {{ msg }}</p> -->
</template>

<script>
import MiddleComponent from "./views/MiddleComponent.vue"; // app.vue가 제일 상위 컴포넌트
import ProductList from "./components/ProductList.vue";
import CartView from "./components/CartView.vue";

export default {
  components: {
    MiddleComponent,
    ProductList,
    CartView,
  },
  data() {
    return {
      msg: "",
      appUse: false,
      username: "손거니",
      cart: [],
    };
  },
  //provide에서 값을 제공해주고 inject에서 값을 받음 inject는 GrandChildComponent에 있음
  provide() {
    return {
      providerUsername: this.username, // 데이터속성
      updateUserName: this.changeUserName, // 메소드
      cart: this.cart,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
    };
  },
  methods: {
    // 전달받은 매개값을 가지고 값을 변경해주는게 changeUserName이다
    changeUserName(name) {
      this.username = name;
    },
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty++;
      } else {
        this.cart.push({ ...product, qty: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
