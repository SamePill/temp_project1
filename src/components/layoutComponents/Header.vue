<template>
  <!-- 상단메뉴 -->
  <nav class="flex justify-between items-center h-[80px] mx-auto font-basic"
      :class="getHeaderType[0]">

    <!-- 상단메뉴 -->
    <div :class="getHeaderType[1]">
      <span class="hover:cursor-pointer" @click="goToPage('/')">Q-MEET LOGO</span>
    </div>

    <!-- 상단중간 메뉴 -->
    <ul class="flex text-base bg-white"
      :class="getHeaderType[2]">

      <li class="mr-10 hover:cursor-pointer" @click="goToPage('/project-list')">프로젝트 찾기</li>
      <li class="mx-10 hover:cursor-pointer" @click="goToPage('/project-regi')">프로젝트 등록</li>
      <li class="mx-10 hover:cursor-pointer" @click="goToPage('/test')">마이페이지</li>
      <li class="mx-10 hover:cursor-pointer" @click="goToPage('/testPageSetup')">Test페이지</li>
      <li class="mx-10 hover:cursor-pointer">큐밋이란?</li>
      <li class="mx-10 hover:cursor-pointer">고객센터</li>
    </ul>

    <!-- 로그인 회원가입 -->
   
    <ul class="flex grow basis-[14%]"
      :class="getHeaderType[3]"
      v-if="loginYn == null"
      >
      
      {{ loginYn }}
      <li class="mr-5">
        <button @click="goToPage('/login')">
          로그인
        </button>
      </li>
      <li class="mr-5">|</li>
        <button @click="goToPage('/signUp')">
          회원가입
        </button>
    </ul>
    <ul class="flex grow basis-[14%]"
      :class="getHeaderType[3]"
      v-else>

      <li class="mr-5">
        <button @click="logout()">
          로그아웃
        </button>
      </li>
    </ul>
  </nav>
</template>
<script setup>
// import baseMixin from "@/utils/baseMixin.js";
//import * as gfnUtils from "@/utils/gfnUtils.js";
import { useRouter } from 'vue-router'
import { computed, ref, defineProps } from 'vue'
import * as gfnUtils from "@/utils/gfnUtils.js";

const router = useRouter()
const loginYn = ref(window.$cookies.get("loginYn"));
const props = defineProps({
  headerType : ref("1")})

function goToPage(url){
  if(loginYn.value != "Y"){
    if(url == '/project-regi' ){
      url = "/login";
    }
    if(url == '/test' ){
      url = "/login";
    }
  }

  router.push(url)
}

function logout(){
  gfnUtils.clearCookiesLoginUserInfo();
  loginYn.value = window.$cookies.get("loginYn");
  router.push("/")
}

const getHeaderType = computed(() => {
  //헤더 Width, 각요소 basis      
  if(props.headerType == '1')
  {        
    return ['w-[1060px]', 'basis-[22%]', 'basis-[64%]', 'basis-[14%]']
  }
  else
  {
    return ['w-[1440px]', 'basis-[16%]', 'basis-[73%]', 'basis-[11%]']
  }      
})

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