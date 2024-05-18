<template>    


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
      <button class="w-[210px] h-14 bg-main-0 rounded-full mt-10 flex justify-center items-center text-white" @click="goToPage('/project-regi')">공고 등록하기</button>
    </div>
    <img class="mr-[100px]" src="@/assets/rafiki.png" width="300px" height="286px" alt="">
  </div>

  <!-- 마감 직전 공고 -->
  <div class="font-basic">
    <p class="text-center text-[28px] font-bold">마감 직전 공고</p>
    <div class="w-[1060px] flex justify-start flex-wrap mx-auto">
      <!-- 공고 card -->
      <div v-for="el in projList" :key="el">
        <QaProjectItem :qaProjectViewInfo="{ size: 'small', position: 'left'}" :prj="el"  />
      </div>
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
</template>

<script setup>
// import Footer from '@/components/layoutComponents/Footer.vue'
import QaProjectItem from '@/components/baseComponents/QaProjectItem.vue'
import * as gfnUtils from "@/utils/gfnUtils.js";
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { commonStore } from '@/stores'
const cmmnStore = commonStore()

onMounted(() => {
  loadCode();
  loadData();
})

const loginYn = ref(window.$cookies.get("loginYn"));
const router = useRouter()
const projList = ref([])
//let projList = []
const siteInfo = ref({reprNm:"", compAddr:"", compNo:"", csctNo:"", faxNo:""})

function goToPage(path){

  if(loginYn.value != "Y"){
    if(path == '/project-regi' ){
      path = "/login";
    }
  }

  router.push(path)
}


async function loadCode() {
  // EDCT_DIV_CD / 학력구분코드
  // ENGN_RTNG_DIV_CD / 엔지니어등급구분코드
  // ENGR_INPT_STAT_CD / 엔지니어투입상태코드
  // ENGR_SPRT_STAT_CD / 엔지니어지원상태코드
  // JOB_DIV_CD / 직군구분코드
  // PIRD_DIV_CD / 기간구분코드
  // PROJ_STAT_CD / 프로젝트상태코드
  // SMS_DIV_CD / SMS구분코드
  // SRVD_STAT_CD / 재직상태코드
  // TASK_DIV_CD / 업무구분코드
  // WORK_DIV_CD / 근무구분코드
  // WORK_PIRD_DIV_CD / 업무기간구분코드
  var api = "/v1/common/code";
  var postParams = {codeGrpList:['EDCT_DIV_CD','ENGN_RTNG_DIV_CD','ENGR_INPT_STAT_CD','ENGR_SPRT_STAT_CD'
                                 ,'JOB_DIV_CD','PIRD_DIV_CD','PROJ_STAT_CD','SMS_DIV_CD','SRVD_STAT_CD'
                                 ,'TASK_DIV_CD','WORK_DIV_CD','WORK_PIRD_DIV_CD']};
  //var loading = "";
  //var isErr = "";
  let rtn = await gfnUtils.axiosPost(
    api,
    postParams
  );
  console.log(rtn)
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&' + rtn.rtnCd)
  console.log(cmmnStore.getCodeList.value)
  if(rtn.rtnCd == "00"){
    cmmnStore.setCodeList(rtn.rtnData.codeList)
  }else{
    console.log("err")    
  }
  console.log(cmmnStore.getCodeList.value)
  console.log(cmmnStore.getCodeList.value.ENGN_RTNG_DIV_CD)

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
  //console.log(projList.value);
  console.log("footerInfo");
  console.log(siteInfo.value);
}


</script>