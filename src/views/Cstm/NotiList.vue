<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
    <div class="flex flex-grow-0 flex-shrink-0 relative">
      <p class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#191919]">공지사항</p>
    </div>
    <div class="mt-[10px] flex flex-col justify-start flex-grow-0 flex-shrink-0 w-[1060px]">
      <div v-for="(el,i) in notiList" :key = "i" class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div v-if="i < (showIdx-1)" class="mb-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>        
        <div v-if="i < showIdx" class="flex w-[1060px] relative pl-px pr-2.5" >
          <div class="flex w-[1025px] relative">
            <p class="flex w-[150px] font-bold text-left text-[#191919]">
              {{ el.notiDivCdNm }}
            </p>
            <button @click="goToPage(el.notiSeq,i)" class="flex-grow-0 flex-shrink-0 w-[875px] text-base text-left text-[#333]">
              {{ el.notiTitl }}
            </button>
          </div>
          <button @click="goToPage(el.notiSeq,i)">
            <img class="w-[25px] rotate-[-90deg]" src="@/assets/ic_small_arrow_001.png"/>
          </button>
        </div>
      </div>

      <div v-show="notiList.length  > 0" class="mt-[60px] paginationDiv w-[1060px] h-10 mx-auto font-basic" style="text-align:center">
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
      
      
      <!--Top items-->
      <!-- <div class=" mt-[80px] flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 cursor-pointer" @click="goToPage(el)">
        <div v-for="el in topItemList" :key = "el" class="py-[30px] px-[20px] flex-grow-0 flex-shrink-0 w-[340px] h-[200px] relative overflow-hidden rounded-[10px] bg-white border border-[#ddd]">
          <img :src="require(`@/assets/${el.img}`)" class="object-none" />
          <p class="mt-[20px] text-2xl font-bold text-left text-[#191919]">{{ el.title }}</p>
          <p class="mt-[10px] text-sm text-left text-[#555]">
            <span class=" text-sm text-left text-[#555]">{{ el.contents1 }}</span><br />
            <span class=" text-sm text-left text-[#555]"></span>{{ el.contents2 }}<br />
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script setup>

import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import * as gfnUtils from "@/utils/gfnUtils.js";

const { dataObj } = history.state; 
const router = useRouter()
// const topItemList = ref([ {title:'큐밋 소식', contents1:`큐밋 소식에서`, contents2:'공지사항과 이벤트를 빠르게 볼 수 있어요!', img:'cstmSrvc_qm.png'}
// ,{title:'제휴 서비스 입점신청', contents1:'제휴 서비스 입점신청에서', contents2:'입점관련 상담을 받아보세요!', img:'cstmSrvc_af.png'}
// ,{title:'문의하기', contents1:`문의하기를 통해`, contents2:'궁금했던 부분이나 매칭관련 상담을 받아보세요!', img:'cstmSrvc_iq.png'}
// ]);
const pageNo   = ref(1);
const notiList = ref([]);
const totalCnt = ref(0);
const showIdx = ref(10);
const isShowMore = ref(false);
// const notiSeq = ref();

onMounted(() => {
  loadData();
});

onUnmounted(()=>{
});

function loadData(){
  
  if(dataObj != undefined && dataObj != null){
    let params = JSON.parse(dataObj);  
    if(params != undefined){
      pageNo.value   = params.pageNo;
      showIdx.value  = params.showIdx;
      isShowMore.value = params.isShowMore;
    }
  }
  srchNotiList();
}

//리스트조회
function srchNotiList(){
  let getParams = {pageNo:pageNo.value};
  gfnUtils.axiosGet("/v1/common/notice",getParams).then(function(res){
    if(res.rtnCd=='00'){
      if(showIdx.value == 5){
        res.rtnData.notiList.forEach((el,i)=>{
          if(i < 5){
            notiList.value.push(el);            
          }
          totalCnt.value = res.rtnData.notiTotCnt;
        });  
      }else{
        notiList.value = res.rtnData.notiList; 
        totalCnt.value = res.rtnData.notiTotCnt;
      }
    }else{
      gfnUtils.openAlert(res.rtnMsg);
    }
  });
}

//상세보기
function goToPage(notiSeqVal,i){
  console.log(i)
  console.log(notiSeqVal)
  if(notiSeqVal != undefined && notiSeqVal != null){
    // let getParam = {notiSeq    :notiSeqVal
    //                 ,notiList  :notiList.value
    //                 ,pageNo    :pageNo.value
    //                 ,showNotiRepyTxtIdx: i
    //                 ,showIdx   :showIdx.value
    //                 ,isShowMore:isShowMore.value
    //                 ,totalCnt  :totalCnt.value
    // }
    router.push({
      name :'NotiDetl'
      ,state:{
        dataObj : {notiSeq : notiSeqVal},
      }
    });
  }
}

//더보기
// function showMore(){
//   isShowMore.value = true;
//   showIdx.value = totalCnt.value;
//   loadData();
// }

//페이지네이션
function pagenation(){
  loadData();
}
</script>