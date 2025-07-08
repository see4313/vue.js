<!--템플릿영역-->
<template>
  <!-- 머스테시{{  }}라고함 :중괄호 두개에다가 보여주고싶은값 넣기-->
  <h1>★Hello, {{ msg }}</h1>

  <!-- 텍스트값으로 넣을수도 있음(=바인딩 할수있다) -->
  <h1 v-text="msg"></h1>
  <h2 v-html="htmlStr"></h2>

  <!-- type(value)에 바이딩하고싶으면 v-model 사용 -->
  <!--number타입으로 사용하려면 .number사용 -->
  <p><input type="text" v-model="valueModel" /></p>
  <p><input type="number" v-model.number="numberModel" /></p>

  <!--select 태그도 v-model사용 -->
  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="053">대구</option>
      <option value="052">부산</option>
    </select>
  </p>

  <!--input타입도 다 v-model사용 , checked 속성에 바인딩 시켜줌(checked는 true or false반환)-->
  <p>
    <label>{{ checking }}</label>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checking"
    />
  </p>

  <!--양방향 바인딩(화면에 있는 값이 바뀌면 모델에 있는 값도 같이 바뀜) , 바뀐 결과를 보는게 양방향 바인딩 -->
  <p>{{ valueModel }}, {{ numberModel }}, {{ city }}</p>
</template>

<!--스크립트영역-->
<script>
//view -- model 의 바인딩
export default {
  data() {
    return {
      //v-model에 지정한 이름으로 불러와야됨
      msg: "World★", // return구문 안에다가 처리해줘야 실행됨.
      htmlStr: '<span style="color:red;">Red Text</span>',
      valueModel: "또니영",
      numberModel: 10,
      city: "053",
      checking: "yes",
    };
  },
};
</script>

<!--스타일영역-->
<style scoped>
/* scoped 현재 페이지에서만 스타일준다는의미 */
h1 {
  color: greenyellow;
}
</style>
