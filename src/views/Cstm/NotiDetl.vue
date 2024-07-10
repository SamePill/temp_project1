<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
    <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[1060px] relative">
      <div class="flex-grow-0 flex-shrink-0 w-[576.5px] h-[34px] relative">
        <p class="absolute left-0 top-0 text-[28px] font-bold text-left text-[#191919] ">
          공지사항
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 text-[13px] font-medium text-left text-[#777]">
        고객센터 - 큐밋소식 - 공지사항
      </p>
    </div>
    <div class="mt-[10px] flex flex-col justify-start flex-grow-0 flex-shrink-0 w-[1060px]">
      <div class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div class="mb-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
          <p class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]">{{gfnUtils.formatDttm(notiInfo.regDttm)}}</p>
          <p class="flex-grow-0 flex-shrink-0 w-[800px] text-xl text-left text-[#333]">
            {{notiInfo.notiTitl}}
          </p>
          <div class="w-[1060px] mt-[10px] mb-[60px] gap-2.5 px-[34px] py-[30px] bg-[#ededed]">
            <p class="self-stretch  w-[992px] text-base text-left text-black">
              {{ notiInfo.notiTxt }}
            </p>
          </div>
        </div>
        <div class="w-[1060px] mt-[60px] mb-[100px]">
          <div class="mx-auto flex justify-between items-center flex-grow-0 flex-shrink-0 w-[400px] relative">
            <img 
              v-show="!gfnRules.isNull(notiInfo.preNotiSeq)"
              @click="moveSeq('pre')" class="cursor-pointer w-[20px] mt-[5px]" src="@/assets/ic_small_arrow_002.png"/>
            <button 
              v-show="!gfnRules.isNull(notiInfo.preNotiSeq)"
              @click="moveSeq('pre')" 
              :class='(gfnRules.isNull(notiInfo.preNotiSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left"'>이전글</button>
            <img 
              v-show="gfnRules.isNull(notiInfo.preNotiSeq)"
              class="cursor-pointer w-[20px]" src="@/assets/ic_small_arrow_002_grey.png"/>
            <button 
              v-show="gfnRules.isNull(notiInfo.preNotiSeq)"
              :class='(gfnRules.isNull(notiInfo.preNotiSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left"'>이전글</button>
            <img src="@/assets/line_001.png"/>            
            <button @click="goToPage('QmNews')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">목록</button>
            <img src="@/assets/line_001.png"/>
            
            <button 
              v-show="!gfnRules.isNull(notiInfo.nextNotiSeq)"
              @click="moveSeq('next')" 
              :class='(gfnRules.isNull(notiInfo.nextNotiSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left "'>다음글</button>
            <img 
              v-show="!gfnRules.isNull(notiInfo.nextNotiSeq)"
              @click="moveSeq('next')" class="cursor-pointer w-[20px] mt-[5px]" src="@/assets/ic_small_arrow_003.png"/>
            <button 
              v-show="gfnRules.isNull(notiInfo.nextNotiSeq)"
              :class='(gfnRules.isNull(notiInfo.nextNotiSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left "'>다음글</button>
            <img 
              v-show="gfnRules.isNull(notiInfo.nextNotiSeq)"
              class="cursor-pointer w-[20px]" src="@/assets/ic_small_arrow_003_grey.png"/>
          </div>
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
const { dataObj } = history.state; 
const viewNoti = ref(dataObj);
const notiInfo = ref({
  notiSeq: ""//"공지사항 순번"
  ,regDttm: ""//"등록일시"
  ,notiTitl: ""//"공지제목"
  ,notiTxt: ""//"공지내용"
  ,preNotiSeq: ""//"이전공지 순번"
  ,nextNotiSeq: ""//"다음공지 순번"
  
})

onMounted(() => {
  if(dataObj != undefined && dataObj != null){
    loadData();
  }
});

onUnmounted(()=>{
});

function loadData(){
  srchNotiInfo(viewNoti.value.notiSeq)
}

//리스트조회
async function srchNotiInfo(notiSeq){
  let param = {"notiSeq": notiSeq }
  let rtn = await gfnUtils.axiosGet("/v1/common/notice-detail",param);

  if(rtn.rtnCd=='00'){    
    notiInfo.value = rtn.rtnData; 
  }else{
    gfnUtils.openAlert(rtn.rtnMsg,"",2000);
  }
}
//이전글,다음글
function moveSeq(div){

  if(div === 'pre'){
    srchNotiInfo(notiInfo.value.preNotiSeq) 
  }else if(div === 'next'){
    srchNotiInfo(notiInfo.value.nextNotiSeq) 
  }
}
//목록
function goToPage(path){
  router.push({
      name :path
  });
}
</script>