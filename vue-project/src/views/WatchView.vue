<template>
  <h3>Watch</h3>
  <textarea v-bind:disabled="charFull" v-model="messageContent"></textarea>
  <p>현재: {{ charCount }} 자 / 최대 50자</p>
  <p>{{ feedMessage }}</p>
  <p>메세지를 입력하세요</p>
</template>

<script>
export default {
  //화면상에 있는 속성이 data에 없으면 오류, 속성이 남는건 상관 없음
  data() {
    return {
      msg: "",
      messageContent: "",
      charCount: 0,
      charFull: false, //charFull (최대글자수)가 disabled가 true이면 초기값입력이 안됨
      feedMessage: "메세지를 입력하세요",
    };
  },
  // watch는 지켜보다가 원하는데 도달했으면 제한해줌
  watch: {
    //nv는 값이 바뀐 이후의 값 (현재 작성하는글)
    //ov는 값이 바뀐 이전의 값 (작성하기 직전의 글)
    messageContent(nv, ov) {
      console.log(nv + ", " + ov);
      this.charCount = nv.length;
      // 50자가되면 => charFull: true로 변경, feedMessage: '제한 50자입니다'
      if (nv.length >= 50) {
        this.charFull = true;
        this.feedMessage = "제한 50자 입니다";
        alert("제한 50자 입니다");
      }
    },
  },
};
</script>

<style></style>
