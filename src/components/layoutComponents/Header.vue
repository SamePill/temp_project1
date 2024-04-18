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
      <li class="mx-10 hover:cursor-pointer" @click="goToPage('/testPage')">Test페이지</li>
      <li class="mx-10 hover:cursor-pointer">큐밋이란?</li>
      <li class="mx-10 hover:cursor-pointer">고객센터</li>
    </ul>

    <!-- 로그인 회원가입 -->
    <ul class="flex grow basis-[14%]"
      :class="getHeaderType[3]">

      <li class="mr-5 bg-main-0">
        <button>
          로그인
        </button>
      </li>
      <li class="mr-5">|</li>
        <button>
          회원가입
        </button>
    </ul>
  </nav>
</template>
<script>
// import baseMixin from "@/utils/baseMixin.js";

export default {
  // mixins: [baseMixin],
  props: ['headerType'],
  methods: {
    goToPage(url){
      this.$router.push(url)
    }
  },
  computed: {
    getHeaderType()
    {
      //헤더 Width, 각요소 basis      
      if(this.headerType == '1')
      {        
        return ['w-[1060px]', 'basis-[22%]', 'basis-[64%]', 'basis-[14%]']
      }
      else
      {
        return ['w-[1440px]', 'basis-[16%]', 'basis-[73%]', 'basis-[11%]']
      }      
    }
  }
}
</script>