<template>
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
    <div class="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0 relative">
      <p class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black">{{ props.topInfo.userNm }}</span>
        <br />
        <span class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black">
          안녕하세요
        </span>
      </p>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">기업이름 : {{props.topInfo.compNm}}</p>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
          지원한 프로젝트 : {{props.topInfo.sprtProjCnt}}개
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
          진행중 프로젝트 : {{props.topInfo.prgsProjCnt}}개
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">완료된 프로젝트 : {{props.topInfo.cpltProjCnt}}개</p>
      </div>
    </div>
    <div class="flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]">
    </div>
  </div>
</template>  

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  topInfo : {
    compNm: "",
    userNm: "",
    sprtProjCnt: 0,
    prgsProjCnt: 0,
    cpltProjCnt: 0
  }
 })

</script>