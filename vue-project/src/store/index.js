// src/store/ index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, name: "Vue공부하기", chk: false },
      { id: 2, name: "tv시청", chk: false },
      { id: 3, name: "야끼우동먹기", chk: false },
    ],
    title: "Hello,World",
  },
  //getters는 this 사용하면 값이 안불러와짐
  getters: {
    //this. 이 안불러와지기 때무넹 (state)로 불러옴
    titling(state) {
      return state.title; // this에 state가 가지고있는 title을 가지고옴
    },
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    //메소드처럼 기능을 정의(기능구현)
    addTodo(state, name) {
      const id = state.todos[state.todos.length - 1].id; // length -1은 배열의 마지막인덱스를 말함, 제일큰 값을 구하기위함
      const todo = {
        id: id + 1, // 맨 마지막 id에다가 +1해서 아이디 증가시켜줌
        name: name,
        chk: false,
      };
      state.todos.push(todo); //push: 추가
    },
  },
});
