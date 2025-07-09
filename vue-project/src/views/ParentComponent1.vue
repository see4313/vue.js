<!-- <template>
  <child-component1 @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponent1 from "./ChildComponent1.vue";
export default {
  components: { ChildComponent1 },
  mounted() {
    this.$refs.child_component.$refs.btn.click(); // click을 가짜로 발생시키고 실제 클릭은 자식컴포넌트에서 이뤄짐
  },
};
</script> -->

<!--지피티코드-->
<template>
  <div>
    <h1>📋 할 일 목록</h1>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="할 일을 입력하세요"
    />
    <ul>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";

export default {
  components: { TodoItem },
  data() {
    return {
      newTodo: "",
      todoList: [
        { id: 1, text: "공부하기" },
        { id: 2, text: "운동하기" },
      ],
      nextId: 3,
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodo.trim()) return;
      this.todoList.push({ id: this.nextId++, text: this.newTodo });
      this.newTodo = "";
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
  },
};
</script>
