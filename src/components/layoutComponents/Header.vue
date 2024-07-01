<template>
  <div class= "flex justify-between items-center h-[80px] mx-auto font-basic">
    <div
      class="flex flex-col justify-center items-center mx-auto w-[1200px] h-20 overflow-hidden gap-2.5 px-[60px] py-5 bg-white"
    >
      <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[1060px]">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[120px]">
          <button class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#191919]" @click="goToPage('Home')">
            Q-MEET LOGO
          </button>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-20">
            <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]" @click="goToPage('PrjtSrch')">
              프로젝트 찾기
            </button>
            <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]" @click="goToPage('PrjtRegiPage1')">
              프로젝트 등록
            </button>
            <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]" @click="goToPage('WhatIsQm')">
              큐밋이란?
            </button>
            <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]" @click="goToPage('CstmSrvcCntr')">
              고객센터
            </button>
            <!-- <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]" @click="goToPage('TestPageSetup')">
              test
            </button>           -->
          </div>
        </div>
        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-5" v-if="loginYn == null">
          <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]" @click="goToPage('Login')">
            로그인
          </button>
          <div class="flex-grow-0 flex-shrink-0 w-px h-4 rounded-[100px] bg-[#aaa]"></div>
          <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]" @click="goToPage('SignUp')">
            회원가입
          </button>
        </div>
        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-5"  v-else>
          <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]" @click="goToPage('MyInformation')" >
            마이페이지
          </button>
          <div class="flex-grow-0 flex-shrink-0 w-px h-4 rounded-[100px] bg-[#aaa]"></div>
          <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]" @click="logout()">
            로그아웃
          </button>
        </div>
      </div>
    </div> 
  </div> 
</template>
<script setup>
// import baseMixin from "@/utils/baseMixin.js";
//import * as gfnUtils from "@/utils/gfnUtils.js";
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import * as gfnUtils from "@/utils/gfnUtils.js";

const router = useRouter()
const loginYn = ref(window.$cookies.get("loginYn"));
// const props = defineProps({
//   headerType : ref("1")
// })

function goToPage(url){
  if(loginYn.value != "Y"){
    if(url == 'PrjtRegiPage1' ){
      url = "Login";
    }
    if(url == 'AppliedProjectList' ){
      url = "Login";
    }
    if(url == 'MyInformation' ){
      url = "Login";
    }       
    if(url == 'Test' ){
      url = "Login";
    }
  }

  router.push({name: url})
}

function logout(){
  gfnUtils.clearCookiesLoginUserInfo();
  loginYn.value = window.$cookies.get("loginYn");
  router.push({name: "Home"})
}

// const getHeaderType = computed(() => {
//   //헤더 Width, 각요소 basis      
//   if(props.headerType == '1')
//   {        
//     return ['w-[1060px]', 'basis-[22%]', 'basis-[64%]', 'basis-[14%]']
//   }
//   else
//   {
//     return ['w-[1440px]', 'basis-[16%]', 'basis-[73%]', 'basis-[11%]']
//   }      
// })

// export default {
//   // mixins: [baseMixin],
//   props: ['headerType'],
//   methods: {
//     goToPage(url){
//       gfnUtils.routerPush.push(url)
//     }
//   },
//   computed: {
//     getHeaderType()
//     {
//       //헤더 Width, 각요소 basis      
//       if(this.headerType == '1')
//       {        
//         return ['w-[1060px]', 'basis-[22%]', 'basis-[64%]', 'basis-[14%]']
//       }
//       else
//       {
//         return ['w-[1440px]', 'basis-[16%]', 'basis-[73%]', 'basis-[11%]']
//       }      
//     }
//   }
// }
</script>