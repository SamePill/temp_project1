<template>
  <div
    class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1060px] relative gap-[100px]"
  >
    <p v-show="props.engineerInfo.engrSprtStatCd == '10'" class="flex-grow-0 flex-shrink-0 w-[60px] text-sm font-medium text-left text-[#1ba494]">선정합격</p>
    <p v-show="props.engineerInfo.engrSprtStatCd == '20'" class="flex-grow-0 flex-shrink-0 w-[60px] text-sm font-medium text-left text-[#1ba494]">선정대기</p>
    <p v-show="props.engineerInfo.engrSprtStatCd == '30'" class="flex-grow-0 flex-shrink-0 w-[60px] text-sm font-medium text-left text-[#1ba494]">미팅예정</p>
    <p v-show="props.engineerInfo.engrSprtStatCd == '40'" class="flex-grow-0 flex-shrink-0 w-[60px] text-sm font-medium text-left text-[#1ba494]">선정탈락</p>
    <p class="flex-grow-0 flex-shrink-0 w-[100px] text-sm text-left text-[#191919]">
      {{ props.engineerInfo.compNm }}
    </p>
    <p class="flex-grow-0 flex-shrink-0 w-[70px] text-sm text-left text-[#191919]">{{ props.engineerInfo.engrNm }}</p>
    <p class="flex-grow-0 flex-shrink-0 w-[77px] text-sm text-left text-[#191919]">
      {{ props.engineerInfo.crrYear }}년{{ props.engineerInfo.crrMon }}개월
    </p>
    <p class="flex-grow-0 flex-shrink-0 w-[140px] text-sm text-left text-[#191919]">
      {{ props.engineerInfo.schlNm }}
    </p>
    <!-- <div
      class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]"
    >
      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
        {{ props.engineerInfo.engrRtndDivCdNm }}
      </p>
    </div> -->

    <div v-show="props.engineerInfo.engrRtngDivCd == 10" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]" >
      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
        초급 엔지니어
      </p>
    </div>
    <div v-show="props.engineerInfo.engrRtngDivCd == 20" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]">
      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]">
        중급 엔지니어
      </p>
    </div>
    <div v-show="props.engineerInfo.engrRtngDivCd == 30" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]" >
      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]">
        고급 엔지니어
      </p>
    </div>
    <div v-show="props.engineerInfo.engrRtngDivCd == 40" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#faf1db]">
      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc630b]">
        특급 엔지니어
      </p>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  engineerInfo:{
    // "engrId": "엔지니어 id",
    // "engrNm": "엔지니어 이름",
    // "engrRtngDivCd": "엔제니어 등급 구분 코드",
    // "engrRtndDivCdNm": "엔지니어 등급 구분 코드 명",
    // "crrYear": "경력 년",
    // "crrMon": "경력 월",
    // "projSprtSeq": "string",
    // "schlNm": "string",
    // "compNm": "string",
    // "engrSprtStatCd": "string"
  }
})


</script>