<template>
  <div
    class="pt-[34px] pr-[30px] pb-[30px] pl-[30px] mt-5 border-solid border-line-1 border-[1px] rounded-[10px] font-basic hover:cursor-pointer"
    @click="goToPage('/project-detail')"
    :class="getVieType">

    <!-- 상단 -->
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="py-[4px] px-2 bg-blue-0 bg-opacity-[.15] rounded mr-[10px]">
          <span class="text-xs text-blue-0">기간제 상주</span>
        </div>
        <div class="py-[4px] px-2 bg-red-0 bg-opacity-[.15] rounded mr-[10px]">
          <span class="text-xs text-red-0">초급가능</span>
        </div>
      </div>
      <button>
        <img class="w-8 h-8" src="@/assets/ic_book_mark.png" alt="">
      </button>
    </div>
    <!-- 제목 -->
    <p class="mt-5 text-xl font-medium text-text-0">[대기업] 농협은행 (내부 직원용) 인사관련 프로그램 QA</p>

    <!-- 해시테그 -->
    <div class="mt-4" :class="getHashTagViewType">

      <button class="">
        <span class="text-1 py-2 px-4 bg-tag-0 rounded-[100px] text-text-1 mr-3"># 웹사이트</span>
      </button>
    </div>

    <!-- 하단정보 -->
    <div class="justify-between mt-4 text-sm text-text-1" :class="getBottomViewType">

      <span>예상금액 : 600만원~800만원</span>
      <span class="py-[2px] px-1 border-solid border border-line-0 rounded-sm" :class="dd"> 월단위</span>
      <span>|</span>
      <span>투입기간 : 40일</span>
      <span>|</span>
      <span>필요인원 : 10명</span>
    </div>
    <span class="mt-3 text-sm text-text-1">서울특별시 강남구</span>
  </div>
</template>
<script>
export default {
  props: {
    qaProjectViewInfo: Object
  },
  methods: {
    goToPage(url){
      this.$router.push(url)
    }        
  },
  computed: {
    getVieType() {
      if (this.qaProjectViewInfo.size == 'small') {
        return ['w-[520px]', this.qaProjectViewInfo.position == 'left' ? 'mr-[10px]' : 'ml-[10px]'];
      }
      else {
        return ['w-full'];
      }
    },
    getHashTagViewType() {
      if (this.qaProjectViewInfo.size == 'small') {
        return ['w-96', 'flex-wrap', 'content-start']
      }
      else {
        return ['w-full']
      }
    },
    getBottomViewType() {
      if (this.qaProjectViewInfo.size == 'small') {
        return "flex items-center"
      }
      else {
        return ""
      }
    }
  }
}
</script>