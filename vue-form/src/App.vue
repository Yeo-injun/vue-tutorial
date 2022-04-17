<template>
<!-- https://vuetifyjs.com/en/components/application/#default-application-markup -->
<!-- v-app태그가 vuetify의 기본 골격됨. 도화지 역할 -->
  <v-app>
    <AppNavbar/> <!-- 라우팅을 이용해서 v-main 컴포넌트 하위의 내용 바꿔치기 하기 -->
    <v-main>
      <!-- v-main 하위의 컴포넌트는 라우팅에 따라서 다른 컴포넌트 보여주기 : Tap 영역 컴포넌트 추가 -->
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
    AppNavbar,
  },

  data: () => ({
    //
  }),
};
</script>
