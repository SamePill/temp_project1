<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
    <!--Top items-->
    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 cursor-pointer">
      <div @click="goToPage(i)" v-for="(el,i) in topItemList" :key = "i" class="py-[30px] px-[20px] flex-grow-0 flex-shrink-0 w-[340px] h-[200px] relative overflow-hidden rounded-[10px] bg-white border border-[#ddd]">
        <img :src="require(`@/assets/${el.img}`)" class="object-none" />
        <p class="mt-[20px] text-2xl font-bold text-left text-[#191919]">{{ el.title }}</p>
        <p class="mt-[10px] text-sm text-left text-[#555]">
          <span class=" text-sm text-left text-[#555]">{{ el.contents1 }}</span><br />
          <span class=" text-sm text-left text-[#555]"></span>{{ el.contents2 }}<br />
        </p>
      </div>
    </div>

    <div class="mt-[80px] flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1060px]">
      <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]">
          자주하는 질문
        </p>
      </div>
      <div class="mt-[30px] mb-[20px] flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <button  @click="clickTapItem('10')" class="pb-[10px] w-[170px] text-center text-xl text-left text-[#191919] border-b-[3px]" :class="faqDivCd=='10' ? ' text-[#191919] border-[#1ba494] border-b-[3px]  pb-[10px] font-bold' : 'text-[#777777] border-[#dddddd] border-b-[1px] pb-[12px] font-medium '">
            클라이언트 FAQ
        </button>
        <button @click="clickTapItem('20')" class=" w-[170px] text-center text-xl text-left text-[#191919] " :class="faqDivCd=='20' ? ' text-[#191919] border-[#1ba494] border-b-[3px] pb-[10px] font-bold' : 'text-[#777777] border-[#dddddd] border-b-[1px] pb-[12px] font-medium '">
          QA파트너스 FAQ
        </button>
      </div>

      <div v-for="(el,i) in faqList" :key = "i" class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div v-if="i < showIdx" class="flex w-[1060px] relative pl-px pr-2.5" >
          <div class="flex w-[1025px] relative">
            <p class="flex w-[150px] font-bold text-left text-[#191919]">
              {{ el.faqSubDivCdNm }}
            </p>
            <button @click="showFaqRepyTxt(i)" class="flex-grow-0 flex-shrink-0 w-[875px] text-base text-left text-[#333]">
              {{ el.faqTitl }}
            </button>
          </div>
          <button @click="showFaqRepyTxt(i)">
            <img class="w-[25px]" src="@/assets/ic_small_arrow_001.png"/>
          </button>
        </div>
        <div v-if ="i < showIdx && showFaqRepyTxtIdx == i" class="w-[1060px] mt-[20px] gap-2.5 px-[34px] py-[30px] bg-[#ededed]">
          <p class="self-stretch  w-[992px] text-base text-left text-black">
            {{ el.faqRepyTxt }}
          </p>
        </div>
        <div v-if="i < (showIdx-1)" class="mt-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>
      </div>
      <div  v-if="faqList.length > 4" class="flex justify-center items-center mb-[60px] mt-[60px]">
        <button  @click="showMore()"  class="text-center w-[250px] h-[51px]  px-2.5 rounded border border-[#dbdbdb] font-medium text-left text-[#191919]">
            더보기
        </button>
        
      </div>
    </div>
  </div>
</template>
<script setup>

import * as gfnUtils from "@/utils/gfnUtils.js";
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const topItemList = ref([ {title:'큐밋 소식', contents1:`큐밋 소식에서`, contents2:'공지사항과 이벤트를 빠르게 볼 수 있어요!', img:'cstmSrvc_qm.png'}
,{title:'제휴 서비스 입점신청', contents1:'제휴 서비스 입점신청에서', contents2:'입점관련 상담을 받아보세요!', img:'cstmSrvc_af.png'}
,{title:'문의하기', contents1:`문의하기를 통해`, contents2:'궁금했던 부분이나 매칭관련 상담을 받아보세요!', img:'cstmSrvc_iq.png'}
]);
const pageNo   = ref(1);
const faqDivCd = ref('');
const faqList = ref([]);
const showFaqRepyTxtIdx = ref(null)
const showIdx = ref(5);
// const isShowMore = ref(false);

onMounted(() => {
  loadData();
});

onUnmounted(()=>{
});

function loadData(){
  srchFaqList();
}

//상단아이템 선택
function goToPage(i){
  if(i != null){
    let path = '';
    path = i==0 ? 'QmNews' : (i==1 ? 'ApplyPtnSrve' : 'SendAsk');
    router.push({name :path});
  }
}

//리스트조회
async function srchFaqList(){
  if(faqDivCd.value == ''){
    faqDivCd.value = '10';
  }
  faqList.value = [];
  let getParams = {faqDivCd: faqDivCd.value
                   ,pageNo:pageNo.value};
  let res = await gfnUtils.axiosGet("/v1/common/faq",getParams)
  if(res.rtnCd=='00'){
    res.rtnData.faqList.forEach((el,i)=>{
      if(i < 5){
        faqList.value.push(el);            
      }
      //totalCnt.value = res.rtnData.faqTotCnt;
    });  
  }else{
    gfnUtils.openAlert(res.rtnMsg,"",2000);
  }
  
}

//답변보기
function showFaqRepyTxt(idx){
  if(showFaqRepyTxtIdx.value === idx){
    showFaqRepyTxtIdx.value = null;
  }else{
    showFaqRepyTxtIdx.value = idx;
  }
}

//더보기
function showMore(){
  // isShowMore.value = true;
  // showIdx.value = totalCnt.value;
  // loadData();
  router.push({name : "QstnList"
  ,state: {
      dataObj : {div : faqDivCd.value},
    }
  })  
}

//탭선택
function clickTapItem(faqDivCdVal){
  faqDivCd.value = faqDivCdVal;  
  showFaqRepyTxtIdx.value = null;
  pageNo.value = 1;
  srchFaqList()
}

//페이지네이션
// function pagenation(){
//   showFaqRepyTxtIdx.value = null;
//   loadData();
// }
</script>