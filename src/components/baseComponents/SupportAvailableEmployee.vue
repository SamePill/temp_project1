<template>
  <div class="w-[340px] py-5 px-5 border border-solid border-line-1 rounded-[10px] box-border">
    <div class="mb-5 text-xl text-text-0 leading-6">현재 지원가능한 인원</div>

    <div class="flex items-center mb-3">
      <TypeText class="mr-4" color="main-0" text="초급 엔지니어" />
      <span class="mr-1 text-text-0">16명</span>
      <span class="text-text-2">(총인원 100명)</span>
    </div>

    <div class="flex items-center mb-3">
      <TypeText class="mr-4" color="blue-0" text="중급 엔지니어" />
      <span class="mr-1 text-text-0">16명</span>
      <span class="text-text-2">(총인원 100명)</span>
    </div>

    <div class="flex items-center">
      <TypeText class="mr-4" color="red-0" text="고급 엔지니어" />
      <span class="mr-1 text-text-0">16명</span>
      <span class="text-text-2">(총인원 100명)</span>
    </div>

    <div
      class="py-4 mt-5 font-medium text-center border border-solid rounded border-main-0 text-main-0 hover:cursor-pointer leading-[19.2px]">
      관심 공고
    </div>
    <div
      class="py-4 mt-[10px] font-medium text-center border border-solid bg-main-0 border-main-0 rounded text-white hover:cursor-pointer leading-[19.2px]">
      지원하기
    </div>

  </div>
</template>
<script>
import TypeText from '@/components/uiComponents/TypeText.vue'
export default {
  components:{
    TypeText        
  }
}
</script>