import axois from 'axios';

// API설정 공통화
// 참고자료 : https://jess2.xyz/vue/vue-tip/#2-router--%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%A4%EA%B3%84
const axoisService = axois.create({
    baseURL: 'http://54.180.147.129/api/user'
})

// Controller의 function이름과 동일하게 작성하기
function login(data) {
    return axoisService.post('/login', data);
}

export { login };