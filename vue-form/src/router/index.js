// 해당 방식은 Vue2.x와 Vue3.x 지원
// Vue4.x에서는 VueRouter, Vue 지원 안되고, {}안에 필요한 모듈을 import 시켜야 함
import Vue from 'vue';
import VueRouter from 'vue-router';

// import AppMain from '@/components/AppMain.vue';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    // 기본은 Hash모드지만 이경우 웹브라우저 url입력창에 #이 계속 붙음.
    // 이를 방지하기 위해 history 모드로 변경.
    // requires HTML5 History API and server config. See HTML5 History Mode.
    mode: "history",
    // routes: Vue router에 의해서 컨트롤되는 페이지 정보를 담는 array객체
    routes: [
        createRoute('AppMain', '/'),
        createRoute('LoginPage', '/login'),
        createRoute('SignupPage', '/signup')
    ]
})

function createRoute(component, url) {
    var route = 
    {
        path: url,
        component: () => import(`@/views/${component}.vue`)
    }
    
    return route;
} 
