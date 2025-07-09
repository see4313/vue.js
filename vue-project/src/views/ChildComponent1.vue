<!-- <template>
  <button type="button" @click="childFunc" ref="btn">click</button>
</template>

<script>
export default {
  methods: {
    childFunc() {
      console.log("부모컴포넌트에서 직접 발생시킨 이벤트");
    },
  },
};
</script> -->

<!--지피티코드-->
<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">삭제</button>
  </li>
</template>

<script>
export default {
  props: ["todo"],
};
</script>
