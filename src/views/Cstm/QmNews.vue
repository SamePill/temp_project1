<template>
  <div class="w-[1060px] mt-10 mx-auto font-basic mb-[100px]">
    <div class="flex flex-grow-0 flex-shrink-0 relative">
      <p class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#191919]">공지사항</p>
    </div>
    <div class="mt-[10px] flex flex-col justify-start flex-grow-0 flex-shrink-0 w-[1060px]">
      <div v-for="(el,i) in notiList" :key = "i" class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div v-if="i &lt; (showIdx-1)" class="mb-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>        
        <div v-if="i &lt; showIdx" class="flex w-[1060px] relative pl-px pr-2.5" >
          <div class="flex w-[1025px] relative">
            <p class="flex w-[150px] font-bold text-left text-[#191919]">
              {{ el.notiDivCdNm }}
            </p>
            <button @click="goToPage(el.notiSeq)" class="flex-grow-0 flex-shrink-0 w-[875px] text-base text-left text-[#333]">
              {{ el.notiTitl }}
            </button>
          </div>
          <button @click="goToPage(el.notiSeq,i)">
            <img class="w-[25px] rotate-[-90deg]" src="@/assets/ic_small_arrow_001.png"/>
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center mt-[60px]">
        <button v-show="!isShowMore" @click="showMore()"  class="text-center w-[250px] h-[51px]  px-2.5 rounded border border-[#dbdbdb] font-medium text-left text-[#191919]">
            더보기
        </button>
        <div v-show="notiList.length  > 0 && isShowMore" class="paginationDiv w-[1060px] h-10 mx-auto font-basic" style="text-align:center">
          <vue-awesome-paginate
            :total-items=totalCnt
            v-model="pageNo"
            :items-per-page="10"
            :max-pages-shown="10"
            :on-click="pagenation"
          >
            <template #prev-button>
              <span>
                <font-awesome-icon icon="chevron-right" color="black" />
              </span>
            </template>
            <template #next-button>
              <span>
                <font-awesome-icon icon="chevron-right" color="black" />
              </span>
            </template>
          </vue-awesome-paginate>
        </div> 
      </div>
      
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
        <p class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]">이벤트</p>
        <div class="justify-between items-center flex flex-grow-0 flex-shrink-0 w-[1060px] h-[267px]">
          <img class="absolute top-[130px] left-[-35px] w-[60px] cursor-pointer" src="@/assets/qmNews_l_btn.png" @click="moveEvt('pre','Evt')">
          <div v-for="(el,i) in showEvtList" :key ="i" class="w-[250px] flex flex-col justify-start items-start  gap-3" @click="showDetl(el.evtSeq,'Evt')">
            <div class="flex-grow-0 flex-shrink-0 w-[250px] h-[180px] overflow-hidden rounded bg-[#bab8b8] border border-[#ddd]">
              <img :src="el.thmbPhotFileUrl">
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-base font-medium text-left text-[#191919]">
                {{el.evtTitl}}
              </p>
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-sm text-left text-[#777]">
                {{gfnUtils.formatDttm(el.strtDttm) + ' ~ ' + gfnUtils.formatDttm(el.endDttm)}}
              </p>
            </div>
          </div>
          <img class="absolute top-[130px] right-[-35px] w-[60px] cursor-pointer" src="@/assets/qmNews_r_btn.png" @click="moveEvt('nxt','Evt')">
        </div>
      </div>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[321px] relative gap-5 mt-[80px]">
        <p class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]">
          행사 및 기사
        </p>
        <div class="justify-between items-center flex flex-grow-0 flex-shrink-0 w-[1060px] h-[267px]">
          <img class="absolute top-[130px] left-[-35px] w-[60px] cursor-pointer" src="@/assets/qmNews_l_btn.png" @click="moveEvt('pre','News')">
          <div v-for="(el,i) in showNewsList" :key ="i" class="w-[250px] flex flex-col justify-start items-start  gap-3" @click="showDetl(el.newsSeq,'News')">
            <div class="flex-grow-0 flex-shrink-0 w-[250px] h-[180px] overflow-hidden rounded bg-[#bab8b8] border border-[#ddd]">
              <img :src="el.thmbPhotFileUrl">
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-base font-medium text-left text-[#191919]">
                {{el.newsTitl}}
              </p>
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-sm text-left text-[#777]">
                {{gfnUtils.formatDttm(el.newsCrtdDttm)}}
              </p>
            </div>
          </div>
          <img class="absolute top-[130px] right-[-35px] w-[60px] cursor-pointer" src="@/assets/qmNews_r_btn.png" @click="moveEvt('nxt','News')">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import * as gfnUtils from "@/utils/gfnUtils.js";

//const { dataObj } = history.state; 
const router = useRouter()
// const topItemList = ref([ {title:'큐밋 소식', contents1:`큐밋 소식에서`, contents2:'공지사항과 이벤트를 빠르게 볼 수 있어요!', img:'cstmSrvc_qm.png'}
// ,{title:'제휴 서비스 입점신청', contents1:'제휴 서비스 입점신청에서', contents2:'입점관련 상담을 받아보세요!', img:'cstmSrvc_af.png'}
// ,{title:'문의하기', contents1:`문의하기를 통해`, contents2:'궁금했던 부분이나 매칭관련 상담을 받아보세요!', img:'cstmSrvc_iq.png'}
// ]);
const pageNo   = ref(1);
const notiList = ref([]);
const evtList = ref([]);
const newsList = ref([]);
const totalCnt = ref(0);
const showIdx = ref(5);

//evtList
const showEvtList = ref([]); 
const showEvtFrstIdx = ref();
const showEvtLastIdx = ref();

//newsList
const showNewsList = ref([]); 
const showNewsFrstIdx = ref();
const showNewsLastIdx = ref();

const isShowMore = ref(false);
// const notiSeq = ref();

onMounted(() => {
  loadData();
});

onUnmounted(()=>{
});

function loadData(){
  
  // if(dataObj != undefined && dataObj != null){
  //   let params = JSON.parse(dataObj);  
  //   if(params != undefined){
  //     pageNo.value   = params.pageNo;
  //     showIdx.value  = params.showIdx;
  //     isShowMore.value = params.isShowMore;
  //   }
  // }
  srchNotiList();
}

//리스트조회
function srchNotiList(){
  let getParams = {pageNo:pageNo.value};
  // gfnUtils.axiosGet("/v1/common/notice",getParams).then(function(res){
  gfnUtils.axiosGet("/v1/common/customer-center",getParams).then(function(res){
    if(res.rtnCd=='00'){
      res.rtnData.notiList.forEach((el,i)=>{
        if(i < 5){
          notiList.value.push(el);            
        }
      });  
      totalCnt.value = notiList.value.length;
      evtList.value = res.rtnData.evtList;
      newsList.value = res.rtnData.newsList;
      if(evtList.value.length > 0){
        evtList.value.forEach((el,i)=>{
          if(i < 4){
            showEvtList.value.push(el);
          }
        });
        showEvtFrstIdx.value = 0;
        showEvtLastIdx.value = showEvtList.value.length;
      }
      
      if(newsList.value.length > 0){
        newsList.value.forEach((el,i)=>{
          if(i < 4){
            showNewsList.value.push(el);
          }
        });
        showNewsFrstIdx.value = 0;
        showNewsLastIdx.value = showNewsList.value.length;
      }
    }else{
      gfnUtils.openAlert(res.rtnMsg);
    }
  });
}

//이벤트 이전,이후 버튼
function moveEvt(moveDiv,listDiv){
  if(listDiv == 'Evt'){
    showEvtList.value = [];
    if(moveDiv == 'pre'){
      if(showEvtFrstIdx.value > 0){
        showEvtFrstIdx.value = showEvtFrstIdx.value - 1;
        showEvtLastIdx.value = showEvtLastIdx.value - 1;
      }
    }else{
      if(showEvtLastIdx.value < evtList.value.length){
        showEvtFrstIdx.value = showEvtFrstIdx.value + 1;
        showEvtLastIdx.value = showEvtLastIdx.value + 1;
      }
    }
    evtList.value.forEach((el,i)=>{
      if(showEvtFrstIdx.value <= i && i < showEvtLastIdx.value){
        showEvtList.value.push(el);
      }
    });
  }else if(listDiv == 'News'){
    showNewsList.value = [];
    if(moveDiv == 'pre'){
      if(showNewsFrstIdx.value > 0){
        showNewsFrstIdx.value = showNewsFrstIdx.value - 1;
        showNewsLastIdx.value = showNewsLastIdx.value - 1;
      }
    }else{
      if(showNewsLastIdx.value < newsList.value.length){
        showNewsFrstIdx.value = showNewsFrstIdx.value + 1;
        showNewsLastIdx.value = showNewsLastIdx.value + 1;
      }
    }
    newsList.value.forEach((el,i)=>{
      if(showNewsFrstIdx.value <= i && i < showNewsLastIdx.value){
        showNewsList.value.push(el);
      }
    });
  }
}

function showDetl(seq,listDiv){
  if(seq != undefined && seq != null){
    if(listDiv == 'Evt'){
      router.push({
        name :'EvtDetl'
        ,state:{
          dataObj : {seq : seq},
        }
      });
    }else if(listDiv == 'News'){
      router.push({
        name :'NewsDetl'
        ,state:{
          dataObj : {seq : seq}
        }
      });
    }
  }
}
//상세보기
function goToPage(notiSeqVal){
  if(notiSeqVal != undefined && notiSeqVal != null){
    router.push({
      name :'NotiDetl'
      ,state:{
        dataObj : {notiSeq : notiSeqVal},
      }
    });
  }
}

//더보기
function showMore(){
  // isShowMore.value = true;
  // showIdx.value = totalCnt.value;
  // loadData();
  router.push({name : "NotiList"})
}

//페이지네이션
function pagenation(){
  loadData();
}
</script>