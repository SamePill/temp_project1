<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
    <div class="flex flex-grow-0 flex-shrink-0 relative">
      <p class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#191919]">공지사항</p>
    </div>
    <div class="mt-[10px] flex flex-col justify-start flex-grow-0 flex-shrink-0 w-[1060px]">
      <div class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div class="mb-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
          <p class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]">{{notiDetlData.regDttm}}</p>
          <p class="flex-grow-0 flex-shrink-0 w-[800px] text-xl text-left text-[#333]">
            {{notiDetlData.notiTitl}}
          </p>
          <div class="w-[1060px] mt-[10px] mb-[60px] gap-2.5 px-[34px] py-[30px] bg-[#ededed]">
            <p v-html="notiTxtVal" class="self-stretch  w-[992px] text-base text-left text-black">
            </p>
          </div>
        </div>
        <div class="w-[1060px] mt-[60px] mb-[100px]">
          <div class="mx-auto flex justify-between items-center flex-grow-0 flex-shrink-0 w-[400px] relative">
            <img @click="moveSeq('pre')" class="cursor-pointer w-[20px]" src="@/assets/ic_small_arrow_002.png"/>
            <button @click="moveSeq('pre')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">이전글</button>
            <img src="@/assets/line_001.png"/>
            <button @click="goToPage('QmNews')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">목록</button>
            <img src="@/assets/line_001.png"/>
            <button @click="moveSeq('next')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">다음글</button>
            <img @click="moveSeq('next')" class="cursor-pointer w-[20px]" src="@/assets/ic_small_arrow_003.png"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import * as gfnUtils from "@/utils/gfnUtils.js";
import * as gfnRules from "@/utils/gfnRules.js";

const { dataObj } = history.state; 
const router = useRouter()
const notiDetlData = ref({});
const totalCnt = ref(null);
const showNotiRepyTxtIdx = ref(null);
const notiList = ref([])

onMounted(() => {
  if(dataObj != undefined && dataObj != null){
    loadData();
  }
});

onUnmounted(()=>{
});

function loadData(){
    let params = JSON.parse(dataObj);
    if(params != undefined && params != {}){
      totalCnt.value = params.totalCnt;
      showNotiRepyTxtIdx.value = params.showNotiRepyTxtIdx;
      notiList.value = params.notiList;

      let notiSeq = {'notiSeq':JSON.parse(dataObj).notiSeq}
      srchNotiList(notiSeq);
    }
}

//리스트조회
function srchNotiList(notiSeq){
  gfnUtils.axiosGet("/v1/common/notice-detail",notiSeq).then(function(res){
    if(res.rtnCd=='00'){
      notiDetlData.value = res.rtnData; 
    }else{
      gfnUtils.openAlert(res.rtnMsg);
    }
  });
}

//이전글,다음글
function moveSeq(div){
  let notiSeq = {};
  if(div === 'pre'){
    if(showNotiRepyTxtIdx.value > 0){
      showNotiRepyTxtIdx.value = showNotiRepyTxtIdx.value-1;
      notiSeq = {'notiSeq':notiList.value[showNotiRepyTxtIdx.value].notiSeq}
      srchNotiList(notiSeq)
    }
  }else if(div === 'next'){
    if(totalCnt.value > showNotiRepyTxtIdx.value+1){
      showNotiRepyTxtIdx.value = showNotiRepyTxtIdx.value+1;
      notiSeq = {'notiSeq':notiList.value[showNotiRepyTxtIdx.value].notiSeq}
      srchNotiList(notiSeq)
    }
  }
}

//목록
function goToPage(path){
  router.push({
      name :path
      ,state:{
        dataObj : dataObj,
      }
  });
}
//TODO 줄바꿈필요
const notiTxtVal = computed(() => {
  // let val = ''
  let val = notiDetlData.value.notiTxt
  if (!gfnRules.isNull(notiDetlData.value.notiTxt)){
      // val =  notiDetlData.value.notiTxt.replace("\n", "<br/>");
    }
  return val;
});

</script>