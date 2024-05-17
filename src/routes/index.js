import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home/Home.vue'

//프로젝트 등록
import PrjtRegi from "@/views/Prjt/PrjtRegi.vue";

//프로젝트 찾기
import PrjtSrch from "@/views/PrjtList/PrjtSrch.vue";
import PrjtSrchDetl from "@/views/PrjtList/PrjtSrchDetl.vue";

//마이페이지
import MyCompanyInfo from "@/views/MyPage/Account/MyCompanyInfo.vue";
import MyIdDeactivation from "@/views/MyPage/Account/MyIdDeactivation.vue";
import MyInformation from "@/views/MyPage/Account/MyInformation.vue";
import MyPasswordMng from "@/views/MyPage/Account/MyPasswordMng.vue";

//클라이언트
import RegisteredProjectList from "@/views/MyPage/Client/RegisteredProjectList.vue";
import SelEngineerList from "@/views/MyPage/Client/SelEngineerList.vue";

//파트너
import AddEngineerCareerInfo from "@/views/MyPage/Partner/AddEngineerCareerInfo.vue";
import AddEngineerCareerList from "@/views/MyPage/Partner/AddEngineerCareerList.vue";
import AddEngineerInfo from "@/views/MyPage/Partner/AddEngineerInfo.vue";
import AppliedEngineerList from "@/views/MyPage/Partner/AppliedEngineerList.vue";
import AppliedProjectList from "@/views/MyPage/Partner/AppliedProjectList.vue";
import ManageEngineer from "@/views/MyPage/Partner/ManageEngineer.vue";

//로그인
import Login from "@/views/User/Login.vue";
import SignUp from "@/views/User/SignUp.vue";
import SignUpApply from "@/views/User/SignUpApply.vue";
import FindId from "@/views/User/FindId.vue";
import ResetPassword from "@/views/User/ResetPassword.vue";
import Test from "@/views/Prjt/Test.vue";

import TestPage from "@/views/Test/TestPage.vue";
import TestPageSetup from "@/views/Test/TestPageSetup.vue";

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
    //회원가입 steo1
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp,
    },
    //회원가입 step2
    {
      path: '/signUpApply',
      name: 'signUpApply',
      component: SignUpApply,
      //props : true,
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
    //비밀번호초기화
    {
      path: '/myCompanyInfo',
      component: MyCompanyInfo,
    },

    {
      path: '/myInformation',
      component: MyInformation,
    },

    {
      path: '/myPasswordMng',
      component: MyPasswordMng,
    },
    
    {
      path: '/myIdDeactivation',
      component: MyIdDeactivation,
    },
    

    /*--------- 클라이언트 ----------*/
    {
      path: '/registeredProjectList',
      component: RegisteredProjectList,
    },

    {
      path: '/selEngineerList',
      component: SelEngineerList,
    },

    /*--------- 파트너 ----------*/
    {
      path: '/addEngineerCareerInfo',
      component: AddEngineerCareerInfo,
    },

    {
      path: '/addEngineerCareerList',
      component: AddEngineerCareerList,
    },

    {
      path: '/addEngineerInfo',
      component: AddEngineerInfo,
    },

    {
      path: '/appliedEngineerList',
      component: AppliedEngineerList,
    },

    {
      path: '/appliedProjectList',
      component: AppliedProjectList,
    },

    {
      path: '/manageEngineer',
      component: ManageEngineer,
    },


    {
      path: '/Test',
      component: Test,
    },

   /*********************** 테스트 페이지 ***********************/
    
    //테스트 페이지
    {
      path: '/testPage',
      component: TestPage,
    },
    {
      path: '/testPageSetup',
      component: TestPageSetup,
    },
    
  ],
});
