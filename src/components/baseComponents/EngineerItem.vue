<template>
  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10">
    <!-- <div
      class="flex justify-center items-center flex-grow-0 flex-shrink-0 h-7 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]"
    >
      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]">
        {{props.engineerInfo.engrRtngDivCdNm}}
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
    <p class="flex-grow-0 flex-shrink-0 w-[70px] text-sm text-left text-[#191919]">
      {{props.engineerInfo.engrNm}}
    </p>
    <p class="flex-grow-0 flex-shrink-0 w-[30px] text-sm text-left text-[#191919]">재직</p>
    <p class="flex-grow-0 flex-shrink-0 w-[100px] text-sm text-left text-[#191919]">
      {{props.engineerInfo.schlNm}}
    </p>
    <p class="flex-grow-0 flex-shrink-0 w-[77px] text-sm text-left text-[#191919]">
      {{props.engineerInfo.crrYear}}년{{props.engineerInfo.crrMon}}개월
    </p>
    <p class="flex-grow-0 flex-shrink-0 w-[99px] text-sm text-left text-[#191919]">
      {{props.engineerInfo.baseAddr}}
    </p>
    <p class="flex-grow-0 flex-shrink-0 w-[52px] text-sm text-left text-[#1ba494]">
      {{ props.engineerInfo.engrInptStatCdNm }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  engineerInfo:{}
})


</script>