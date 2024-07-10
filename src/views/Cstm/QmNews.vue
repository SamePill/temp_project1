<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
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
            <button @click="goToPage(el.notiSeq,i)" class="flex-grow-0 flex-shrink-0 w-[875px] text-base text-left text-[#333]">
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
          <img class="absolute top-[130px] left-[-35px] w-[60px] cursor-pointer" src="@/assets/qmNews_l_btn.png" @click="moveEvt('pre')">
          <div v-for="(el,i) in showEvtList" :key ="i" class="w-[250px] flex flex-col justify-start items-start  gap-3">
            <div class="flex-grow-0 flex-shrink-0 w-[250px] h-[180px] overflow-hidden rounded bg-[#bab8b8] border border-[#ddd]">
              <img :src="el.thmbPhotFileUrl">
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-base font-medium text-left text-[#191919]">
                {{el.evtTitl}}
              </p>
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-sm text-left text-[#777]">
                {{el.strtDttm + '~' + el.endDttm}}
              </p>
            </div>
          </div>
          <img class="absolute top-[130px] right-[-35px] w-[60px] cursor-pointer" src="@/assets/qmNews_r_btn.png" @click="moveEvt('nxt')">
        </div>
      </div>
      <div
        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[321px] relative gap-5"
      >
        <p class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]">
          행사 및 기사
        </p>
        <div class="flex-grow-0 flex-shrink-0 w-[1060px] h-[261px] relative">
          <div class="flex flex-col justify-start items-start absolute left-0 top-0 gap-3">
            <div
              class="flex-grow-0 flex-shrink-0 w-[250px] h-[180px] relative overflow-hidden rounded bg-[#bab8b8] border border-[#ddd]"
            ></div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p
                class="flex-grow-0 flex-shrink-0 w-[250px] text-base font-medium text-left text-[#191919]"
              >
                큐밋을 이용하기!! 회원가입하고 치킨 쿠폰 받아가자!
              </p>
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-sm text-left text-[#777]">
                2024.04.06
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start absolute left-[270px] top-0 gap-3">
            <div
              class="flex-grow-0 flex-shrink-0 w-[250px] h-[180px] relative overflow-hidden rounded bg-[#bab8b8] border border-[#ddd]"
            ></div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p
                class="flex-grow-0 flex-shrink-0 w-[250px] text-base font-medium text-left text-[#191919]"
              >
                큐밋을 이용하기!! 회원가입하고 치킨 쿠폰 받아가자!
              </p>
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-sm text-left text-[#777]">
                2024.04.06
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start absolute left-[540px] top-0 gap-3">
            <div
              class="flex-grow-0 flex-shrink-0 w-[250px] h-[180px] relative overflow-hidden rounded bg-[#bab8b8] border border-[#ddd]"
            ></div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p
                class="flex-grow-0 flex-shrink-0 w-[250px] text-base font-medium text-left text-[#191919]"
              >
                큐밋을 이용하기!! 회원가입하고 치킨 쿠폰 받아가자!
              </p>
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-sm text-left text-[#777]">
                2024.04.06
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start absolute left-[810px] top-0 gap-3">
            <div
              class="flex-grow-0 flex-shrink-0 w-[250px] h-[180px] relative overflow-hidden rounded bg-[#bab8b8] border border-[#ddd]"
            ></div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p
                class="flex-grow-0 flex-shrink-0 w-[250px] text-base font-medium text-left text-[#191919]"
              >
                큐밋을 이용하기!! 회원가입하고 치킨 쿠폰 받아가자!
              </p>
              <p class="flex-grow-0 flex-shrink-0 w-[250px] text-sm text-left text-[#777]">
                2024.04.06
              </p>
            </div>
          </div>
          <svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 absolute left-[-38px] top-[66px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <g filter="url(#filter0_d_4043_1039)">
              <rect
                x="15"
                y="11"
                width="48"
                height="48"
                rx="24"
                fill="white"
                fill-opacity="0.5"
                shape-rendering="crispEdges"
              ></rect>
              <path
                d="M43 24L33 35L43 46"
                stroke="#191919"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_d_4043_1039"
                x="0"
                y="0"
                width="78"
                height="78"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.15 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4043_1039"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4043_1039"
                  result="shape"
                ></feBlend>
              </filter>
            </defs></svg
          ><svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 absolute left-[1098px] top-[114px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <g filter="url(#filter0_d_4043_1041)">
              <rect
                x="63"
                y="59"
                width="48"
                height="48"
                rx="24"
                transform="rotate(-180 63 59)"
                fill="white"
                fill-opacity="0.5"
                shape-rendering="crispEdges"
              ></rect>
              <path
                d="M35 46L45 35L35 24"
                stroke="#191919"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_d_4043_1041"
                x="0"
                y="0"
                width="78"
                height="78"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0 0.0980392 0 0 0 0.15 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4043_1041"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4043_1041"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
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

const showEvtList = ref([]); //보여지는 이미지
const showEvtFrstIdx = ref();
const showEvtLastIdx = ref();

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

        let data = {endDttm: "20250625",
evtSeq
: 
"4",
evtTitl
: 
"큐밋 테스트 이벤트_004",
strtDttm
: 
"20240625",
thmbPhotFileUrl
: 
"https://d2o04aboxunrcy.cloudfront.net/evt/202406/test_event_004.png"}

evtList.value.push(data);
evtList.value.push(data);
evtList.value.push(data);
evtList.value.push(data);
evtList.value.push(data);
evtList.value.push(data);
evtList.value.push(data);

        showEvtFrstIdx.value = 0;
        showEvtLastIdx.value = showEvtList.value.length;
        
      }
    }else{
      gfnUtils.openAlert(res.rtnMsg);
    }
  });
}

//이벤트 이전,이후 버튼
function moveEvt(div){
  showEvtList.value = [];
  if(div == 'pre'){
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