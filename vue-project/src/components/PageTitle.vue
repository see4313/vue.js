<template>
  <slot name="header"></slot>
  <h3>PageTitle(하위컴포넌트)</h3>
  <p>{{ title }}</p>
  <p>{{ likes }}</p>
  <p v-bind:class="{ 'red-font': isOK }">환영합니다</p>
  <slot></slot>
  <ul>
    <li v-bind:key="i" v-for="(member, i) in members">
      이름: {{ member.name }}, 나이:{{ member.age }}
    </li>
  </ul>
  <slot name="footer"></slot>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  }, // props: 상위요소에서 하위요소로 값을 가지고올떄 사용, 값을 가지고 오려면 선언해주는게 props
  props: {
    //props: 상위컴포넌트에서 하위컴포넌트로 값을 전달
    title: { type: String, default: "페이지제목" }, //상위요소에 값이 없으면 상위요소에 있는 default에 있는 값을 가지고 옴.
    likes: { type: Number, default: 0 },
    isOK: { type: Boolean, default: false },
    members: {
      type: Array,
      default: function () {
        return [{ name: "삼촌", age: 33 }];
      },
    },
  },
};
</script>

<style scoped>
.red-font {
  color: red;
}
</style>
