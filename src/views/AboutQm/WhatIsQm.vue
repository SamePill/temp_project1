<template>
  <div class="w-[1060px] my-10 mx-auto font-basic bg-[#ffffff] min-h-[900px]">
    <div class="w-[1060px] h-[120px] bg-[#fff] fixed top-[60px]" style="z-index:9"></div>
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 fixed top-[120px] bg-[#ffffff]" style="z-index:9">
      <!-- fixed top-[120px] -->
      <!--상단 탭-->
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <button @click="clickMainTab(el,i)" v-for="(el,i) in mainTabMenu" :key="i" :class="slctMainTabIdx.i == i ? 'border border-1 border-[#1ba494] text-lg font-bold text-left text-[#1ba494] bg-[#f3faf9]' : 'border-[#ddd] text-lg font-medium text-left text-[#666]' " class="flex justify-center w-[340px] gap-2.5 px-2.5 py-5 rounded-[10px]">
            {{ el.tabNm }}
        </button>
      </div>    
      
      <!--하단 탭-->
      <div class="flex-grow-0 flex-shrink-0 w-[1060px] h-[25px] relative bg-[#fff]" style="z-index:9">
        <div class="w-[1060px] h-px absolute left-[-1px] top-[35px] bg-[#ddd]" style="z-index:99"></div>
        <div class="flex justify-start items-start absolute left-0 top-0  w-[1060px] gap-10 bg-[#fff]">
          <button @click="clickSpecTab(el)" v-for="(el,i) in specTabMenu[slctMainTabIdx.i][slctMainTabIdx.tabId]" :key="i" :class="slctSpecTab == el.tabId ? 'flex flex-col justify-center font-medium text-left text-[#1ba494] pb-[11px] border-b-[3px] border-[#1ba494] bg-[#fff]' : 'flex flex-col justify-center font-medium text-left text-[#999] pb-[11px] bg-[#fff]'">
              {{ el.tabNm }}
          </button>
        </div>
      </div>
    </div>

    <!--프로젝트등록-->
    <div v-show="slctMainTabIdx.i < 2" class="mt-[120px] flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10">
      <div v-show="slctMainTabIdx.i == 0" class="flex flex-col justify-start items-center gap-4 h-[849px]  pt-[180px]">
        <p class="flex-grow-0 flex-shrink-0 text-[28px] text-left">
          <span class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]">
            큐밋과 함께라면, 프로젝트 등록을 </span>
          <span class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#1ba494]">
            무료로 단 10분</span><span class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]"> 만에 완료!</span>
        </p>
        <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[30px]">
          <p class="flex-grow-0 flex-shrink-0 text-lg text-left text-[#555]">
            큐밋은 사용자 친화적인 인터페이스와 간편한 절차로 신속한 프로젝트 신청이 가능합니다.
          </p>
          <button id="prjtRegi"  @click="goToPage('PrjtRegiPage1')"  class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 font-medium text-lg text-left text-[#1ba494]">
              프로젝트 등록하기 >
          </button>
        </div>
        <img src="@/assets/aboutQm_prjtRegi.png"  class="w-1080 h-[565px] object-none mt-[40px] z-1" />        
      </div>    
     <!--엔지니어 등록-->  
      <div v-show="slctMainTabIdx.i == 1" class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4 h-[730px] pt-[180px]">
        <p class="flex-grow-0 flex-shrink-0 text-[28px] text-left">
          <span class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#1ba494]">
            엔지니어를 등록</span><span class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]"> 후 프로젝트에 지원해보세요</span>
        </p>
        <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[30px]">
          <p class="flex-grow-0 flex-shrink-0 text-lg text-left text-[#555]">
            엔지니어와 주요 내용을 구체적으로 입력해 주세요 클라이언트가 선정할 확률이 높아져요
          </p>
          <button id="engiRegi" @click="goToPage('AddEngineerInfo')" class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 font-medium text-lg text-left text-[#1ba494]">
              엔지니어 등록하기 >
          </button>
        </div>
        <img v-show="slctMainTabIdx.i == 1" src="@/assets/aboutQm_engiRegi.png" class="w-1080 h-[400px] object-none mt-[40px] z-1" />          
      </div>
      <!--프로젝트 지원-->   
      <div v-show="slctMainTabIdx.i == 1" class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4 py-[160px]">
        <p class="flex-grow-0 flex-shrink-0 text-[28px] text-left">
          <span class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]">
            다양한 프로젝트를 확인 후 나에게 맞는 </span>
          <span class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#1ba494]">
            프로젝트를 지원</span><span class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]">해 보세요.</span>
        </p>
        <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[30px]">
          <p class="flex-grow-0 flex-shrink-0 text-lg text-left text-[#555]">
            내가 등록한 엔지니어가 돋보일 수 있도록 엔지니어 프로필을 작성해 보세요.
          </p>
          <button id="prjtAply" @click="goToPage('PrjtSrch')" class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5 font-medium text-lg text-left text-[#1ba494] mb-[40px]">
              프로젝트 둘러보기 >
          </button>
        </div>
        <img v-show="slctMainTabIdx.i == 1" src="@/assets/aboutQm_prjtAply.png" class="w-1080 h-[400px] object-none" />           
      </div>

      <img id="prjtMngGide" v-show="slctMainTabIdx.i == 0 || slctMainTabIdx.i == 1" src="@/assets/aboutQm_prjtMngGide.png" class="w-1080 h-[790px] object-none pt-[260px]" />           <!--큐밋매니저가이드-->   
      <img id="prjtApli"    v-show="slctMainTabIdx.i == 0"                           src="@/assets/aboutQm_prjtApli.png"    class="w-1080 h-[611px] object-none pt-[160px]" />           <!--프로젝트지원자-->
      <img id="meet"        v-show="slctMainTabIdx.i == 0"                           src="@/assets/aboutQm_meet.png"        class="w-1080 h-[611px] object-none pt-[160px]" />           <!--미팅-->
      <img id="meet2"       v-show="slctMainTabIdx.i == 1"                           src="@/assets/aboutQm_meet2.png"       class="w-1080 h-[845px] object-none pt-[160px]" />           <!--미팅-->
      <img id="ctrtCcld"    v-show="slctMainTabIdx.i == 0 || slctMainTabIdx.i == 1"  src="@/assets/aboutQm_ctrtCcld.png"    class="w-1080 h-[612px] object-none pt-[160px]" />           <!--계약체결-->
      <img id="prjtMng"     v-show="slctMainTabIdx.i == 0 || slctMainTabIdx.i == 1"  src="@/assets/aboutQm_prjtMng.png"     class="w-1080 h-[692px] object-none pt-[160px]" />           <!--프로젝트관리-->
      <img id="prjtCmpl"    v-show="slctMainTabIdx.i == 0 || slctMainTabIdx.i == 1"  src="@/assets/aboutQm_prjtCmpl.png"    class="w-1080 h-[672px] object-none pt-[160px] mb-[220px]" /><!--프로젝트완료-->
    </div>
  </div> 
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const { dataObj } = history.state; 
const router = useRouter()
const mainTabMenu = ref([{tabId:'clnt'  ,tabNm:'클라이언트 이용방법'}
                        ,{tabId:'ptns'  ,tabNm:'파트너스 이용방법'}
                        ,{tabId:'price' ,tabNm:'이용요금'}]);
                   
const specTabMenu = ref([{clnt:[{tabId:'prjtRegi'     ,tabNm:'프로젝트 등록'}
                                ,{tabId:'prjtMngGide' ,tabNm:'큐밋 매니저 가이드'}
                                ,{tabId:'prjtApli'    ,tabNm:'프로젝트 지원자'}
                                ,{tabId:'meet'        ,tabNm:'미팅'}
                                ,{tabId:'ctrtCcld'    ,tabNm:'계약체결'}
                                ,{tabId:'prjtMng'     ,tabNm:'프로젝트 관리'}
                                ,{tabId:'prjtCmpl'    ,tabNm:'프로젝트 완료'}]}
                        ,{ptns:[{tabId:'engiRegi'     ,tabNm:'엔지니어 등록'}
                              ,{tabId:'prjtAply'      ,tabNm:'프로젝트 지원'}
                              ,{tabId:'prjtMngGide'   ,tabNm:'프로젝트 매니저 가이드'}
                              ,{tabId:'meet2'         ,tabNm:'미팅'}
                              ,{tabId:'ctrtCcld'      ,tabNm:'계약체결'}
                              ,{tabId:'prjtMng'       ,tabNm:'프로젝트 관리'}
                              ,{tabId:'prjtCmpl'      ,tabNm:'프로젝트 완료'}]}
                        ,{price:[{tabId:'price'       ,tabNm:'이용요금'}]}
]);
const slctMainTabIdx = ref( {i:0,tabId:'clnt'});
const slctSpecTab = ref('prjtRegi');

onMounted(() => {
  slctMainTabIdx.value = {i:0,tabId:'clnt'}
  slctSpecTab.value = 'prjtRegi';
  
  if(dataObj != undefined){
    loadData(dataObj)
  }
})

onUnmounted(()=>{
})

function loadData(dataObj){
  slctMainTabIdx.value = dataObj;
  slctSpecTab.value = dataObj.i == 0 ? 'prjtRegi' : (dataObj.i == 1 ?'engiRegi' : 'price')
}

function clickMainTab(el,i){
  slctMainTabIdx.value = {i:i ,tabId:el.tabId};
  console.log(slctMainTabIdx.value)
  if(i==0){
    slctSpecTab.value = 'prjtRegi';
    scroll('prjtRegi');
  }else if(i==1){
    slctSpecTab.value = 'engiRegi';
    scroll('engiRegi');
  }else{
    slctSpecTab.value = 'price';
  }
}

function clickSpecTab(el){
  slctSpecTab.value = el.tabId;
  scroll(el.tabId);
}

async function scroll(tabId){
  const reftp = document.getElementById(tabId);
  await nextTick();
  reftp.scrollIntoView({behavior:"smooth", block:"center"});
}

function goToPage(name){
  router.push({name: name})
}

</script>
