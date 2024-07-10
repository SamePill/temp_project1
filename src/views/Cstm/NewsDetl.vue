<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
    <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[1060px] relative">
      <div class="flex-grow-0 flex-shrink-0 w-[576.5px] h-[34px] relative">
        <p class="absolute left-0 top-0 text-[28px] font-bold text-left text-[#191919] ">
          행사 및 기사
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 text-[13px] font-medium text-left text-[#777]">
        고객센터 - 큐밋소식 - 행사 및 기사
      </p>
    </div>
    <div class="mt-[10px] flex flex-col justify-start flex-grow-0 flex-shrink-0 w-[1060px]">
      <div class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div class="mb-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
          <p class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]">{{gfnUtils.formatDttm(detlInfo.newsCrtdDttm)}}</p>
          <div class="relative w-[1060px]">
            <p class="flex-grow-0 flex-shrink-0 w-[800px] font-bold text-xl text-left text-[#333]">
              {{detlInfo.newsTitl}}
            </p>
            <div v-if="!gfnRules.isNull(detlInfo.newsUrl)" class=" absolute right-[0px] top-[0px] text-right  flex justify-start items-start flex-grow-0 flex-shrink-0  gap-4">
              <p @click="newsUrl(detlInfo.newsUrl,'show')" class="cursor-pointer flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494] border-b border-b-[1px] border-b-[#1ba494]">기사보기</p>
              <p @click="newsUrl(detlInfo.newsUrl,'copy')" class="cursor-pointer flex-grow-0 flex-shrink-0 text-base text-left text-[#333] border-b border-b-[1px] border-b-[#333]">링크복사</p>
            </div>
          </div>
          <div class="w-[1060px] mt-[10px] mb-[60px] gap-2.5">
            <div v-html="detlInfo.newsTxt"></div>
            <!-- <img :src="detlInfo.dtlPhotFileUrl"> -->
          </div>
        </div>
        <div class="w-[1060px] mt-[60px] mb-[100px]">
          <div class="mx-auto flex justify-between items-center flex-grow-0 flex-shrink-0 w-[400px] relative">
            <img 
              v-show="!gfnRules.isNull(detlInfo.preNewsSeq)"
              @click="moveSeq('pre')" class="cursor-pointer w-[20px] mt-[5px]" src="@/assets/ic_small_arrow_002.png"/>
            <button 
              v-show="!gfnRules.isNull(detlInfo.preNewsSeq)"
              @click="moveSeq('pre')" 
              :class='(gfnRules.isNull(detlInfo.preNewsSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left"'>이전글</button>
            <img 
              v-show="gfnRules.isNull(detlInfo.preNewsSeq)"
               class="cursor-pointer w-[20px]" src="@/assets/ic_small_arrow_002_grey.png"/>
            <button 
              v-show="gfnRules.isNull(detlInfo.preNewsSeq)"
              :class='(gfnRules.isNull(detlInfo.preNewsSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left"'>이전글</button>


            <img src="@/assets/line_001.png"/>            
            <button @click="goToPage('QmNews')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">목록</button>
            <img src="@/assets/line_001.png"/>
            
            <button 
              v-show="!gfnRules.isNull(detlInfo.nextNewsSeq)"
              @click="moveSeq('next')" 
              :class='(gfnRules.isNull(detlInfo.nextNewsSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left "'>다음글</button>
            <img 
              v-show="!gfnRules.isNull(detlInfo.nextNewsSeq)"
              @click="moveSeq('next')" class="cursor-pointer w-[20px] mt-[5px]" src="@/assets/ic_small_arrow_003.png"/>
            <button 
              v-show="gfnRules.isNull(detlInfo.nextNewsSeq)"
              :class='(gfnRules.isNull(detlInfo.nextNewsSeq) ? "text-[#999]" :  "text-[#191919]" ) + " flex-grow-0 flex-shrink-0 text-base text-left "'>다음글</button>
            <img 
              v-show="gfnRules.isNull(detlInfo.nextNewsSeq)"
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
  newsCrtdDttm: ""
  ,newsTitl: ""   
  ,newsUrl: ""
  ,newsTxt: ""
  ,preNewsSeq: "" 
  ,nextNewsSeq: ""
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
  let param = {"newsSeq  ": seq }
  let rtn = await gfnUtils.axiosGet("/v1/common/news-detail",param);

  if(rtn.rtnCd=='00'){    
    detlInfo.value = rtn.rtnData; 
  }else{
    gfnUtils.openAlert(rtn.rtnMsg,"",2000);
  }  
}
//이전글,다음글
function moveSeq(div){
  if(div === 'pre'){
    srchNotiInfo(detlInfo.value.preNewsSeq);
  }else if(div === 'next'){
    srchNotiInfo(detlInfo.value.nextNewsSeq) 
  }
}

//목록
function goToPage(path){
  router.push({
      name :path
  });
}
function newsUrl(url,div){
  if(div == 'copy'){
    navigator.clipboard.writeText(url)
    gfnUtils.openAlert("복사되었습니다.","", 1000)
  }else if(div =='show'){
    window.open(url, '_blank');
  }
}
</script>