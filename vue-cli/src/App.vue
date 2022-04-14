<template>
  <!-- 최상위 element는 하나여야만 한다. 같은 층위에서 태그가 2개 이상 쓰이면 안됨 -->
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
        v-bind:propsTitle="str"
        v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
// 파일로 만들어진 컴포넌트를 가져오기
import AppHeader from './components/AppHeader.vue';

// 컴포넌트의 재사용으로 재사용된 컴포넌트간의 데이터가 독립적이어야 됨.
// 따라서 기존의 new Vue() 인스턴스 안에 data속성으로 관리하던 방식을 지양.
// data를 함수로 만들어서 필요한 속성을 return으로 받아야 함.
export default {
    data: function() {
      return {
        str: 'App Header!!',
      }
    },
    components: {
      'app-header': AppHeader,
    },
    methods: {
      renewStr: function() {
        this.str = "hi App reNew!!";
      }
    },
}
</script>

<style>

</style>