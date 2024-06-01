<template>
  <div
  
    class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-[100px] bg-white"
  >
    <!-- -->
    <div v-show="props.showDiv == '1'" class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
      <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
        <p class="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-[#555]">
          지원한 프로젝트가 없습니다.
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#777]">
          다양한 프로젝트에서 QA 전문가를 기다리고 있습니다.
        </p>
      </div>
      <button
        class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-2 rounded-[100px] bg-[#1ba494]"
        @click="btnClick('PrjtSrch')"
        >
          프로젝트 찾기
      </button>
    </div>


    <div v-show="props.showDiv == '2'" class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
      <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
        <p class="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-[#555]">
          등록한 프로젝트가 없습니다.
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#777]">
          프로젝트를 등록하여 전문 QA 파트너스를 만나보세요.
        </p>
      </div>
      <button
        class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-2 rounded-[100px] bg-[#1ba494]"
        @click="btnClick('PrjtRegiPage1')"
        >
          프로젝트 등록
      </button>
    </div>

    <div v-show="props.showDiv == '3'" class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
      <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
        <p class="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-[#555]">
          지원한 엔지니어가 없습니다.
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#777]">
          지원한 엔지니어가 없습니다. 지원을 기다려주세요.
        </p>
      </div>
    </div>

  </div>

</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  showDiv : {}
 })

function btnClick(div){

    router.push({name: div})
}
</script>
