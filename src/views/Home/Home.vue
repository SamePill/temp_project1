<template>    

  <!-- 헤더 -->
  <!-- <Header headerType="2" /> -->

  <!-- 배너 -->
  <div
    class="w-[1060px] h-[360px] my-10 mx-auto bg-[#DDF2EF] pl-[52px] flex justify-between items-center rounded-[10px] font-basic">
    <div>
      <p class="text-[32px] font-semibold">테스트의 모든것</p>
      <span class="text-[32px] font-bold">[큐밋]</span>
      <span class="text-[32px] font-semibold">에서 해결하세요.</span>
      <br>
      <span class="text-lg text-text-1">소프트웨어, 하드웨어 모든 테스트는 큐밋에서 해결하세요.</span>
      <br>
      <span class="text-lg text-text-1">쉽고 빠르게 테스트 인력을 구할 수 있습니다.</span>

      <!-- 공고 등록하기 -->
      <div class="w-[210px] h-14 bg-main-0 rounded-full mt-10 flex justify-center items-center">
        <button class="text-white">공고 등록하기</button>
      </div>
    </div>
    <img class="mr-[100px]" src="@/assets/rafiki.png" width="300px" height="286px" alt="">
  </div>

  <!-- 마감 직전 공고 -->
  <div class="font-basic">
    <p class="text-center text-[28px] font-bold">마감 직전 공고</p>

    <div class="w-[1060px] flex justify-start flex-wrap mx-auto">
      <!-- 공고 card -->
      <QaProject :qaProjectViewInfo="{ size: 'small', position: 'left' }" />
      <QaProject :qaProjectViewInfo="{ size: 'small', position: 'right' }" />
      <QaProject :qaProjectViewInfo="{ size: 'small', position: 'left' }" />
      <QaProject :qaProjectViewInfo="{ size: 'small', position: 'right' }" />

    </div>
  </div>

  <!-- 프로젝트 찾기 등록 큐밋 소개 -->
  <p class="mt-20 text-[28px] text-center text-text-0 font-basic">QA 구하기가 힘들다고??</p>
  <p class="text-[28px] text-center text-text-0 font-bold mt-1 font-basic">큐밋에서 쉽게 구해봐!</p>

  <div class="w-[1060px] mx-auto font-basic mt-5 flex justify-between">
    <div class="w-[360px] h-[360px] bg-sub-0 rounded-[10px] py-10 px-[90px] mr-[10px]">
      <img class="w-[160px] h-[160px]" src="@/assets/ic_project_002.png" alt="">
      <p class="mx-auto font-medium text-center text-[28px]">프로젝트 찾기</p>
      <p class="mx-auto font-medium text-text-1 text-[16px] mt-[10px] text-center">참여하고 싶은</p>
      <p class="mx-auto font-medium text-text-1 text-[16px] text-center">프로젝트를 찾아보세요.</p>
    </div>

    <div class="w-[360px] h-[360px] bg-sub-0 rounded-[10px] py-10 px-[90px] ml-[10px] mr-[10px]">
      <img class="w-[160px] h-[160px]" src="@/assets/ic_project_002.png" alt="">
      <p class="mx-auto font-medium text-center text-[28px]">프로젝트 찾기</p>
      <p class="mx-auto font-medium text-text-1 text-[16px] mt-[10px] text-center">참여하고 싶은</p>
      <p class="mx-auto font-medium text-text-1 text-[16px] text-center">프로젝트를 찾아보세요.</p>
    </div>

    <div class="w-[360px] h-[360px] bg-sub-0 rounded-[10px] py-10 px-[90px]  ml-[10px]">
      <img class="w-[160px] h-[160px]" src="@/assets/ic_project_002.png" alt="">
      <p class="mx-auto font-medium text-center text-[28px]">프로젝트 찾기</p>
      <p class="mx-auto font-medium text-text-1 text-[16px] mt-[10px] text-center">참여하고 싶은</p>
      <p class="mx-auto font-medium text-text-1 text-[16px] text-center">프로젝트를 찾아보세요.</p>
    </div>
  </div>

  <!-- 큐밋과 함께 하는 브랜드 -->
  <p class="mt-20 text-[28px] text-center text-text-0 font-bold font-basic">큐밋과 함께 하는 브랜드</p>
  <div class="w-[1060px] mx-auto font-basic mt-5 flex justify-between">
    <div class="w-[196px] h-[196px] rounded-lg bg-sub-1"></div>
    <div class="w-[196px] h-[196px] rounded-lg bg-sub-1"></div>
    <div class="w-[196px] h-[196px] rounded-lg bg-sub-1"></div>
    <div class="w-[196px] h-[196px] rounded-lg bg-sub-1"></div>
    <div class="w-[196px] h-[196px] rounded-lg bg-sub-1"></div>
  </div>

  <p class="font-basic mt-10 text-center text-text-1 text-[32px]">
    <span class="mr-10">등록된 업체</span>
    <span class="font-bold mr-[100px]">120업체</span>
    <span class="mr-10">등록된 전문 인력</span>
    <span class="font-bold">5200명</span>
  </p>

  <!-- 푸더 -->
  <!-- <Footer /> -->
</template>

<script>
// import Header from '@/components/layoutComponents/Header.vue'
// import Footer from '@/components/layoutComponents/Footer.vue'
// import QaProject from '@/components/baseComponents/QaProject.vue'

export default {
  components: {
    // Header, Footer, QaProject
  },
  methods: {
    goToPage(path){
      this.$router.push(path)
    }
  },
  data() {
    return {
    }
  }
}

</script>