<template>
  <div class="bg-neutral-100 w-[100]">
    <div
      class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1050px] mx-auto  py-10 "
    >
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#555]">고객센터</p>
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#555]">02-2085-0606</p>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#777]">
            <span class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#777]"
              >리드워크 l 대표이사 : 이재문</span
            ><br /><span class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#777]"
              >주소 : 서울특별시 금천구 디지털로9길 41 삼성IT해링턴타워 1016호</span
            ><br /><span class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#777]"
              >메일 : help@l-walk.com 전화 : 02-2085-0606 fax : 02-2085-0607</span
            ><br /><span class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#777]"
              >사업자 등록번호: 704-81-01605</span
            ><br /><span class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#777]"
              >통신판매업번호: 2021-서울금천-0405호</span
            >
          </p>
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#777]">ⓒ 2020 leadwalk Corp.</p>
        </div>
      </div>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-20">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
          <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#555]">큐밋</p>
          <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]"  @click="goToPage('WhatIsQm')">큐밋소개</button>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
            <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#555]">이용방법</p>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]" @click="goToPage('WhatIsQm')">클라이언트 이용방법</button>
              <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]" @click="goToPage('WhatIsQm2')"> QA파트너스 이용방법</button>
              <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]" @click="goToPage('WhatIsQm3')">이용요금</button>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
          <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#555]">고객센터</p>
          <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]" @click="goToPage('CstmSrvcCntr')">자주하는질문</button>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
          <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#555]">약관동의</p>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]" @click="goToPage('UseTerms')">이용약관</p>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]" @click="goToPage('PrivacyPolicy')">개인정보 처리방침</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToPage(url){
  if(url == 'WhatIsQm2' ){
    router.push({ 
      name: "WhatIsQm"
      ,state: {
        dataObj : {i:1,tabId:'ptns'}
      },
    });
  }else if(url == 'WhatIsQm3'){
    router.push({ 
      name: "WhatIsQm"
      ,state: {
        dataObj : {i: 2, tabId: 'price'}
      },
    });
  }else{
    router.push({name: url})
  }
}

</script>
