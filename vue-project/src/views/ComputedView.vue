<template>
  <h3>Computed</h3>
  <h3>FirstName: {{ firstName }}</h3>
  <h3>LastName: {{ lastName }}</h3>
  <h3>{{ fullName }}</h3>

  <h3>장바구니</h3>
  <div v-bind:key="product.id" v-for="product in cart">
    <strong>{{ product.name }}</strong> - 가격: {{ product.price }} 원 - 수량:
    <input type="number" v-model.number="product.quantity" />
  </div>
  <p><strong>총수량: </strong> {{ totalQuantity }}개</p>
  <p><strong>총금액: </strong> {{ totalPrice }}원</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: "이영",
      lastName: "손",
      cart: [
        { id: 1, name: "사과", price: 5000, quantity: 2 },
        { id: 2, name: "오렌지", price: 6000, quantity: 4 },
        { id: 3, name: "복숭아", price: 8000, quantity: 6 },
      ],
    };
  },
  //화면상의 두가지 요소를 한가지로 보여주고싶을때 computed사용(계산된)
  computed: {
    fullName() {
      return this.firstName + ", " + this.lastName;
    },
    totalQuantity() {
      //item.quantity의 갯수가 누적되면서 acc에 증가된 값들이 담김
      //item은  카트에 담긴 배열 하나를 말함({ id: 1, name: "사과", price: 5000, quantity: 2 },)
      return this.cart.reduce((acc, item) => acc + item.quantity, 0); // reduce() 는 기존의 값에 계속해서 누적해줌 //초기값이 0부터 시작
    },
    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },

  mounted() {
    this.firstName = "iyoung";
  },
};
</script>
