<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
    <div class="flex flex-grow-0 flex-shrink-0 relative">
      <p class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#191919]">이벤트</p>
    </div>
    <div class="mt-[10px] flex flex-col justify-start flex-grow-0 flex-shrink-0 w-[1060px]">
      <div class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div class="mb-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
          <p class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]">{{gfnUtils.formatDttm(detlInfo.regDttm)}}</p>
          <p class="flex-grow-0 flex-shrink-0 w-[800px] font-bold text-xl text-left text-[#333]">
            {{detlInfo.evtTitl}}
          </p>
          <div class="w-[1060px] mt-[10px] mb-[60px] gap-2.5">
            <div v-html="detlInfo.evtTxt"></div>
          </div>
        </div>
        <div class="w-[1060px] mt-[60px] mb-[100px]">
          <div class="mx-auto flex justify-between items-center flex-grow-0 flex-shrink-0 w-[400px] relative">
            <img 
              v-show="!gfnRules.isNull(detlInfo.preEvtSeq)"
              @click="moveSeq('pre')" class="cursor-pointer w-[20px] mt-[5px]" src="@/assets/ic_small_arrow_002.png"/>
            <button 
              v-show="!gfnRules.isNull(detlInfo.preEvtSeq)"
              @click="moveSeq('pre')" 
              :class='(gfnRules.isNull(detlInfo.preEvtSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left"'>이전글</button>
            <img 
              v-show="gfnRules.isNull(detlInfo.preEvtSeq)"
               class="cursor-pointer w-[20px]" src="@/assets/ic_small_arrow_002_grey.png"/>
            <button 
              v-show="gfnRules.isNull(detlInfo.preEvtSeq)"
              :class='(gfnRules.isNull(detlInfo.preEvtSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left"'>이전글</button>


            <img src="@/assets/line_001.png"/>            
            <button @click="goToPage('QmNews')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">목록</button>
            <img src="@/assets/line_001.png"/>
            
            <button 
              v-show="!gfnRules.isNull(detlInfo.nextEvtSeq)"
              @click="moveSeq('next')" 
              :class='(gfnRules.isNull(detlInfo.nextEvtSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left "'>다음글</button>
            <img 
              v-show="!gfnRules.isNull(detlInfo.nextEvtSeq)"
              @click="moveSeq('next')" class="cursor-pointer w-[20px] mt-[5px]" src="@/assets/ic_small_arrow_003.png"/>
            <button 
              v-show="gfnRules.isNull(detlInfo.nextEvtSeq)"
              :class='(gfnRules.isNull(detlInfo.nextEvtSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left "'>다음글</button>
            <img 
              v-show="gfnRules.isNull(detlInfo.nextEvtSeq)"
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
const seq = ref(dataObj.seq);
const detlInfo = ref({
  evtSeq: ""//"이벤트 순번"
  ,regDttm: ""//"등록일시"
  ,evtTitl: ""//"이벤트제목"
  ,dtlPhotFileUrl: ""//상세사진 url"
  ,evtTxt: ""//"이벤트내용"
  ,preEvtSeq: ""//"이전이벤트 순번"
  ,nextEvtSeq: ""//"다음이벤트 순번"
  
})

onMounted(() => {
  if(dataObj != undefined && dataObj != null){
    loadData();
  }
});

onUnmounted(()=>{
});

function loadData(){
  srchNotiInfo(seq.value);
}

//리스트조회
async function srchNotiInfo(seq){
  let param = {"evtSeq ": seq }
  let rtn = await gfnUtils.axiosGet("/v1/common/event-detail",param);

  if(rtn.rtnCd=='00'){    
    detlInfo.value = rtn.rtnData; 
  }else{
    gfnUtils.openAlert(rtn.rtnMsg,"",2000);
  }
}

//이전글,다음글
function moveSeq(div){
  if(div === 'pre'){
    srchNotiInfo(detlInfo.value.preEvtSeq);
  }else if(div === 'next'){
    srchNotiInfo(detlInfo.value.nextEvtSeq) 
  }
}

//목록
function goToPage(path){
  router.push({
      name :path
  });
}

</script>