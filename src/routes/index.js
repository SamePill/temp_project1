import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home/Home.vue'

//프로젝트 등록
import PrjtRegiPage1 from "@/views/Prjt/PrjtRegiPage1.vue";
import PrjtRegiPage2 from "@/views/Prjt/PrjtRegiPage2.vue";
import PrjtRegiPage3 from "@/views/Prjt/PrjtRegiPage3.vue";
import PrjtRegiPage4 from "@/views/Prjt/PrjtRegiPage4.vue";

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
      name:"Home"
    },
    
    /*********************** 프로젝트 ***********************/
    //프로젝트 등록 1단계
    {
      path: '/project-regi-1',
      component: PrjtRegiPage1,
      name:'PrjtRegiPage1',
      props:true
    },
    //프로젝트 등록 2단계
    {
      path: '/project-regi-2',
      component: PrjtRegiPage2,
      name:'PrjtRegiPage2',
      props:true
    },
    //프로젝트 등록 3단계
    {
      path: '/project-regi-3',
      component: PrjtRegiPage3,
      name:'PrjtRegiPage3'
    },
    //프로젝트 등록 4단계
    {
      path: '/project-regi-4',
      component: PrjtRegiPage4,
      name:'PrjtRegiPage4'
    },
    //프로젝트 찾기
    {
      path: '/project-list',
      component: PrjtSrch,
      name: 'PrjtSrch'
    },
    //프로젝트 찾기 상세
    {
      path: '/project-detail',
      component: PrjtSrchDetl,
      name: 'PrjtSrchDetl'
    },

    /*********************** 사용자 ***********************/
    //로그인
    {
      path: '/login',
      component: Login,
      name: 'Login'
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
      name: 'FindId'
    },
    //비밀번호초기화
    {
      path: '/resetPassword',
      component: ResetPassword,
      name: 'ResetPassword'
    },

    /*********************** 마이페이지 ***********************/
    //비밀번호초기화
    {
      path: '/myCompanyInfo',
      component: MyCompanyInfo,
      name: 'MyCompanyInfo'
    },

    {
      path: '/myInformation',
      component: MyInformation,
      name: 'MyInformation'
    },

    {
      path: '/myPasswordMng',
      component: MyPasswordMng,
      name: 'MyPasswordMng'
    },
    
    {
      path: '/myIdDeactivation',
      component: MyIdDeactivation,
      name: 'MyIdDeactivation'
    },
    

    /*--------- 클라이언트 ----------*/
    {
      path: '/registeredProjectList',
      component: RegisteredProjectList,
      name: 'RegisteredProjectList'
    },

    {
      path: '/selEngineerList',
      component: SelEngineerList,
      name: 'SelEngineerList'
    },

    /*--------- 파트너 ----------*/
    {
      path: '/addEngineerCareerInfo',
      component: AddEngineerCareerInfo,
      name: 'AddEngineerCareerInfo'
    },

    {
      path: '/addEngineerCareerList',
      component: AddEngineerCareerList,
      name: 'AddEngineerCareerList'
    },

    {
      path: '/addEngineerInfo',
      component: AddEngineerInfo,
      name: 'AddEngineerInfo'
    },

    {
      path: '/appliedEngineerList',
      component: AppliedEngineerList,
      name: 'AppliedEngineerList'
    },

    {
      path: '/appliedProjectList',
      component: AppliedProjectList,
      name: 'AppliedProjectList'
    },

    {
      path: '/manageEngineer',
      component: ManageEngineer,
      name: 'ManageEngineer'
    },


    {
      path: '/Test',
      component: Test,
      name: Test,
    },

   /*********************** 테스트 페이지 ***********************/
    
    //테스트 페이지
    {
      path: '/testPage',
      component: TestPage,
      name: 'TestPage'
    },
    {
      path: '/testPageSetup',
      component: TestPageSetup,
      name: 'TestPageSetup'
    },
    
  ],
});
