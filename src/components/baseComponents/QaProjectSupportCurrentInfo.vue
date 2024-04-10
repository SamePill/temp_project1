<template>
  <!-- 지원현황 -->
  <div class="w-[340px] py-5 px-5 border border-solid border-line-1 rounded-[10px] box-border">
    <div class="mb-5 text-xl text-text-0 leading-6">지원현황</div>

    <div class="flex items-center mb-3">
      <!-- <TypeText class="mr-4" color="main-0" text="초급 엔지니어" /> -->
      <span class="mr-1 text-main-0">16명</span>
      <span class="text-text-0">모집 중 150명 지원</span>
    </div>

    <div class="flex items-center mb-3">
      <!-- <TypeText class="mr-4" color="blue-0" text="중급 엔지니어" /> -->
      <span class="mr-1 text-text-0">16명</span>
      <span class="text-text-0">모집 중 150명 지원</span>
    </div>

    <div class="flex items-center">
      <TypeText class="mr-4" color="red-0" text="고급 엔지니어" />
      <span class="mr-1 text-text-0">16명</span>
      <span class="text-text-0">모집 중 150명 지원</span>
    </div>
  </div>
</template>
<script>
// import TypeText from '@/components/uiComponents/TypeText.vue'
export default {
  components: {
    // TypeText
  }
}
</script>