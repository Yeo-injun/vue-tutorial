<template>
    <v-app-bar color="green" dark app>
      <router-link to="/">
        <div class="d-flex align-center font-weight-bold white--text">농구일기</div>
      </router-link>      

      <v-spacer></v-spacer>
      
      <router-link to="/login">
        <v-btn class="ma-1">로그인</v-btn>
      </router-link>
      
      <router-link to="/signup">
        <v-btn class="ma-1">회원가입</v-btn>
      </router-link>
    </v-app-bar>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>