<template>
  <div>
    <!-- vue에서는 form태그의 기본동작을 제어하는데 이벤트 모디파이어로 제어. .prevent-->
    <form v-on:submit.prevent="submitForm">
      <div>
        <div>
          <label for="username"></label>
          아이디 : <input id="username" type="text" v-model="username">
        </div>
        <div>
          <label for="password"></label>
          비밀번호 : <input id="password" type="password" v-model="password">
        </div>
        <!-- 버튼의 type을 submit으로 하면 해당 버튼을 클릭했을 경우 이벤트가 form태그로 전달됨 -->
        <!-- 그렇기 때문에 form태그에 이벤트 함수를 v-on:click으로 걸어두어야 함 -->
        <button type="submit">Login</button>
      </div>      
    </form>
    {{ userData }}    
  </div>
</template>

<script>
import axios from 'axios'; // axois를 npm으로 설치한 후 import하여 사용
export default {
  // input의 입력값을 받을 수 있는 변수를 선언해줘야 함
  // 컴포넌트 단위로 개발을 할 때는 컴포넌트(객체)간의 데이터가 공유되지 않도록
  // 객체형으로 쓰지 않고, 함수형으로 return받아서 사용. 컴포넌트마다 함수가 실행되어 값을 생성하기 떄문!
  data: function() {
    return {
      username: '',
      password: '',
      userData: {},
    }
  },
  methods: {
    submitForm: function() {
      /**
       * form태그의 기본 동작은 새로고침 되는것. 
       * .preventDefault()함수를 이용하면 이벤트가 발생했을 경우 그 기본동작을 저지함.
       *  event.preventDefault();
       **/ 

      // Http 비동기 통신후 Vue인스턴스의 data속성에 데이터를 접근하기 위해서는 
      // this가 vue인스턴스를 가리키고 있을때 변수에 담아줘서 axios 통신후 해당 변수를 바라보게끔 처리 
      var vm = this;
      var url = 'http://localhost:8080/api/user/login';
      var data = {
        userId: this.username,
        password: this.password,
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(vm);
          vm.userData = response;
        })
        .catch(function(error) {
          console.log(error);
        });      
    }
  }
}
</script>

<style>

</style>