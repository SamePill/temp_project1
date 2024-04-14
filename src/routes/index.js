import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home/Home.vue'
import PrjtSrch from "@/views/Prjt/PrjtSrch.vue";
import PrjtRegi from "@/views/Prjt/PrjtRegi.vue";
import PrjtSrchDetl from "@/views/Prjt/PrjtSrchDetl.vue";

import Login from "@/views/User/Login.vue";
import FindId from "@/views/User/FindId.vue";
import ResetPassword from "@/views/User/ResetPassword.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    
    /*********************** 프로젝트 ***********************/
    //프로젝트 등록
    {
      path: '/project-regi',
      component: PrjtRegi,
    },
    //프로젝트 찾기
    {
      path: '/project-list',
      component: PrjtSrch,
    },
    //프로젝트 찾기 상세
    {
      path: '/project-detail',
      component: PrjtSrchDetl,
    },

    /*********************** 사용자 ***********************/
    //로그인
    {
      path: '/login',
      component: Login,
    },
    //아이디찾기
    {
      path: '/findId',
      component: FindId,
    },
    //비밀번호초기화
    {
      path: '/resetPassword',
      component: ResetPassword,
    },

    /*********************** 마이페이지 ***********************/
    
  ],
});