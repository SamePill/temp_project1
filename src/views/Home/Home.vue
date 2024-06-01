<template>    

<div>
  <!-- 배너 -->
  <div style="display: flex; justify-content: center;" class="my-[40px]">
    <div class="w-[1060px] h-[360px] rounded-[10px] bg-[#e9efff] flex flex-col relative justify-start items-start pt-[60px] pl-[60px]">
      <div>
        <p class="flex-grow-0 flex-shrink-0 text-[28px] font-base text-left text-[#191919]">
          <span class="font-semibold text-[#191919] ">{{ bnnrInfo.homeBnnrTitl }}</span>
        </p>
        <p class="mt-[16px] flex-grow-0 flex-shrink-0 text-left text-[#777]">
          {{ bnnrInfo.homeBnnrTxt }}
        </p>
        <button @click="goToPage('PrjtRegiPage1')" class="mt-[40px]  font-basic flex justify-center items-center w-[209px] gap-1  py-3 rounded-[1000px] bg-black font-medium text-left text-[#fefefe]">
        무료로 프로젝트 등록 〉
        </button>
      </div>
      <img :src="bnnrInfo.bnnrUrl" class="w-[300px] h-[300px] absolute left-[699px] top-[18px] object-cover"/>
      <!-- <img src="@/assets/home_notebook.png" class="w-[300px] h-[200.02px] absolute left-[499px] top-[139px] object-cover"/> -->
    </div>
  </div>
  <!-- 전문가를 기다리는 프로젝트 -->
  <div class="font-basic">
    <p class="text-center text-[28px] font-medium">전문가를 기다리는 프로젝트</p>
    <div class="w-[1060px] flex justify-start flex-wrap mx-auto">
      <!-- 공고 card -->
      <div v-for="el in projList" :key="el">
        <QaProjectItem :qaProjectViewInfo="{ div: 'card'}" :prj="el"  />
      </div>
    </div>
  </div>

  <!-- 프로젝트 찾기 등록 큐밋 소개 -->
  <p class="mt-20 text-[28px] text-center text-text-0 font-basic">QA 구하기가 힘들다고??</p>
  <p class="text-[28px] text-center text-text-0  mt-1 font-basic">큐밋에서 쉽게 구해봐!</p>

  <div class="w-[1060px] mx-auto font-basic mt-5 flex justify-between">
    <div class="w-[340px] h-[340px] relative overflow-hidden rounded-[10px] bg-[#ddf2ef]">
      <p class="absolute left-[93px] top-[218px] text-[28px] font-medium text-center text-[#191919] font-basic">
        프로젝트 찾기
      </p>
      <p class="absolute left-24 top-[262px] text-base font-medium text-center text-[#555]">
        <span class="text-base font-medium text-center text-[#555] font-basic font-semibold">참여하고 싶은<br/>프로젝트를 찾아보세요.</span>
      </p>
      <img src="@/assets/ic_project_003.png" class="w-80 h-40 absolute left-[9px] top-[37px] object-none" />
    </div>
    <div class="w-[340px] h-[340px] relative overflow-hidden rounded-[10px] bg-[#ddf2ef]">
      <p class="absolute left-[93px] top-[218px] text-[28px] font-medium text-center text-[#191919]">
        프로젝트 등록
      </p>
      <p class="absolute left-24 top-[262px] text-base font-medium text-center text-[#555]">
        <span class="text-base font-medium text-center text-[#555]">인력 모집하고 싶은<br/>프로젝트를 등록해주세요.</span>
      </p>
      <img src="@/assets/ic_project_002.png" class="w-80 h-40 absolute left-[9px] top-[37px] object-none" />
    </div>
    <div class="w-[340px] h-[340px] relative overflow-hidden rounded-[10px] bg-[#ddf2ef]">
      <p class="absolute left-[93px] top-[218px] text-[28px] font-medium text-center text-[#191919]">
        큐밋 소개
      </p>
      <p class="absolute left-24 top-[262px] text-base font-medium text-center text-[#555]">
        <span class="text-base font-medium text-center text-[#555]">큐밋에 대해<br/>자세히 아아보세요.</span>
      </p>
      <img src="@/assets/ic_project_001.png" class="w-80 h-40 absolute left-[9px] top-[67px] object-none" />
    </div>
  </div>

  <!-- 큐밋 전문 검증 엔지니어 -->
  <p class="mt-20 text-[28px] text-center text-text-0 font-medium">큐밋 전문 검증 엔지니어</p>
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

  <!-- 푸터 -->
  <!-- <Footer /> -->
  <div class="mt-20 bg-sub-2 w-full">
      <div class="w-[1060px] mx-auto flex flex-col py-10">
        <div class="text-text-0 font-bold text-[28px]">큐밋로고</div>
        <span class="text-xs text-text-1 mt-5">리드워크 l 대표이사 : {{ siteInfo.reprNm }}</span>
        <span class="text-xs text-text-1">주소 : {{siteInfo.compAddr}}</span>
        <span class="text-xs text-text-1">메일 : {{siteInfo.compMail}} 전화 : {{siteInfo.compNo}} 팩스 : {{siteInfo.faxNo}}</span>
      </div>
    </div>
</div>
</template>

<script setup>
// import Footer from '@/components/layoutComponents/Footer.vue'
import QaProjectItem from '@/components/baseComponents/QaProjectItem.vue'
import * as gfnUtils from "@/utils/gfnUtils.js";
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

// import { commonStore } from '@/stores'
// const cmmnStore = commonStore()

onMounted(() => {
  loadCode();
  loadData();
})

const loginYn = ref(window.$cookies.get("loginYn"));
const router = useRouter()
const projList = ref([])
const bnnrInfo = ref([])
//let projList = []
const siteInfo = ref({reprNm:"", compAddr:"", compNo:"", csctNo:"", faxNo:""})

function goToPage(path){

  if(loginYn.value != "Y"){
    if(path == 'PrjtRegiPage1' ){
      path = "Login";
    }
  }

  router.push({name :path})
}


async function loadCode() {
  gfnUtils.loadCommCode()
  // gfnUtils.getCommCode("ENGN_RTNG_DIV_CD")
}


async function loadData(){

  // let rtn = '';
  var api = "/v1/home/info";
  var postParams = {};
  let rtn = await gfnUtils.axiosGet(
    api,
    postParams
  );
  
  console.log(rtn);
  var res = rtn.rtnData;
  //projList = res.projList
  projList.value = res.projList
  siteInfo.value = res.footerInfo
  bnnrInfo.value = res.bnnrInfo
  //console.log(projList.value);
  console.log("footerInfo");
  console.log(siteInfo.value);
}


</script>