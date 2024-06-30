<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
    <div class="flex flex-grow-0 flex-shrink-0 relative">
      <p class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#191919]">공지사항</p>
    </div>
    <div class="mt-[10px] flex flex-col justify-start flex-grow-0 flex-shrink-0 w-[1060px]">
      <div v-for="(el,i) in notiList" :key = "i" class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div v-if="i < (showIdx-1)" class="mb-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>


        <div v-if="showNotiRepyTxtIdx != null && detlData != {}" class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
          <p class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]">{{detlData.regDttm}}</p>
          <p class="flex-grow-0 flex-shrink-0 w-[800px] text-xl text-left text-[#333]">
            {{detlData.notiTitl}}
          </p>
          <div v-show ="i < showIdx && showNotiRepyTxtIdx == i && !gfnRules.isNull(el.notiRepyTxt) " class="w-[1060px] mt-[10px] mb-[60px] gap-2.5 px-[34px] py-[30px] bg-[#ededed]">
            <p class="self-stretch  w-[992px] text-base text-left text-black">
              {{ detlData.notiTxt }}
            </p>
          </div>
        </div>
        <div v-if="showNotiRepyTxtIdx != null" class="w-[1060px] mt-[60px] mb-[100px]">
          <div class="mx-auto flex justify-between items-center flex-grow-0 flex-shrink-0 w-[400px] relative">
            <img class="w-[20px]" src="@/assets/ic_small_arrow_002.png"/>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">이전글</p>
            <img src="@/assets/line_001.png"/>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">목록</p>
            <img src="@/assets/line_001.png"/>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">다음글</p>
            <img class="w-[20px]" src="@/assets/ic_small_arrow_003.png"/>
          </div>
        </div>




        
        <div v-if="i < showIdx" class="flex w-[1060px] relative pl-px pr-2.5" >
          <div class="flex w-[1025px] relative">
            <p class="flex w-[150px] font-bold text-left text-[#191919]">
              {{ el.notiDivCdNm }}
            </p>
            <button @click="showNotiRepyTxt(i,el.notiSeq)" class="flex-grow-0 flex-shrink-0 w-[875px] text-base text-left text-[#333]">
              {{ el.notiTitl }}
            </button>
          </div>
          <button @click="showNotiRepyTxt(i,el.notiSeq)">
            <img class="w-[25px]" src="@/assets/ic_small_arrow_001.png"/>
          </button>
        </div>
      </div>
      <div v-if="notiList.length > 4" class="flex justify-center items-center mt-[60px]">
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
      
      <!--Top items-->
      <div class=" mt-[80px] flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 cursor-pointer" @click="goToPage(el)">
        <div v-for="el in topItemList" :key = "el" class="py-[30px] px-[20px] flex-grow-0 flex-shrink-0 w-[340px] h-[200px] relative overflow-hidden rounded-[10px] bg-white border border-[#ddd]">
          <img :src="require(`@/assets/${el.img}`)" class="object-none" />
          <p class="mt-[20px] text-2xl font-bold text-left text-[#191919]">{{ el.title }}</p>
          <p class="mt-[10px] text-sm text-left text-[#555]">
            <span class=" text-sm text-left text-[#555]">{{ el.contents1 }}</span><br />
            <span class=" text-sm text-left text-[#555]"></span>{{ el.contents2 }}<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import * as gfnUtils from "@/utils/gfnUtils.js";
import * as gfnRules from "@/utils/gfnRules.js";

const router = useRouter()
const topItemList = ref([ {title:'큐밋 소식', contents1:`큐밋 소식에서`, contents2:'공지사항과 이벤트를 빠르게 볼 수 있어요!', img:'cstmSrvc_qm.png'}
,{title:'제휴 서비스 입점신청', contents1:'제휴 서비스 입점신청에서', contents2:'입점관련 상담을 받아보세요!', img:'cstmSrvc_af.png'}
,{title:'문의하기', contents1:`문의하기를 통해`, contents2:'궁금했던 부분이나 매칭관련 상담을 받아보세요!', img:'cstmSrvc_iq.png'}
]);
const pageNo   = ref(1);
const notiList = ref([]);
const totalCnt = ref(0);
const showNotiRepyTxtIdx = ref(null)
const detlData = ref({})
const showIdx = ref(5);
const isShowMore = ref(false);
// const notiSeq = ref();

onMounted(() => {
  loadData();
});

onUnmounted(()=>{
});

function loadData(){
  srchNotiList();
}

//상단아이템 선택
function goToPage(path){
  console.log(path)
  //company news
  //ApplyPtnSrve
  //Questions,inquire
  router.push({name :path})
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
    
    console.log(notiList.value)
  });
}

//답변보기
function showNotiRepyTxt(idx,notiSeqVal){
  if(showNotiRepyTxtIdx.value === idx){
    showNotiRepyTxtIdx.value = null;
  }else{
    showNotiRepyTxtIdx.value = idx;
  }
  
  let getParams = {notiSeq: notiSeqVal};
  gfnUtils.axiosGet("/v1/common/notice-detail",getParams).then(function(res){
    if(res.rtnCd=='00'){
      detlData.value = res.rtnData;
    }else{
      gfnUtils.openAlert(res.rtnMsg);
    }
    console.log(detlData.value)
  });

}

//더보기
function showMore(){
  isShowMore.value = true;
  showIdx.value = totalCnt.value;
  loadData();
}

//페이지네이션
function pagenation(){
  showNotiRepyTxtIdx.value = null;
  loadData();
}
</script>