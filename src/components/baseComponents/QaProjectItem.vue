<template>
  <div
    class="pt-[34px] pr-[30px] pb-[30px] pl-[30px] mt-5 border-solid border-line-1 border-[1px] rounded-[10px] font-basic hover:cursor-pointer"
    @click="goToPage()"
    :class="getViewType">

    <!-- 상단 -->
    <div class="flex justify-between">
      <div class="flex items-center">
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
            <div v-if="props.prj.workDivCd =='10'" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dd6431]" >
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">상주</p>
            </div>
            <div v-if="props.prj.workDivCd =='20'" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dd6431]" >
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">비상주</p>
            </div> 
           <div v-show="props.prj.engrRtngInfo['bgnrEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]" >
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
                초급 엔지니어
              </p>
            </div>
            <div v-show="props.prj.engrRtngInfo['intrEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]">
                중급 엔지니어
              </p>
            </div>
            <div v-show="props.prj.engrRtngInfo['advnEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]" >
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]">
                고급 엔지니어
              </p>
            </div>
            <div v-show="props.prj.engrRtngInfo['spclEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#faf1db]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc630b]">
                특급 엔지니어
              </p>
            </div>
          </div>
      </div>
    </div>
    <!-- 제목 -->
    <p class="mt-3 text-xl font-medium font-semibold text-text-0">{{props.prj.projTitl}}</p>

    <!-- 해시테그 -->
    <div class="mt-4" >   
        <button class="" v-for="(item, index) in props.prj.taskDivCdNmList" :key="index" >
          <span class="text-1 py-2 px-4 bg-tag-0 rounded-[100px] text-text-1 mr-3">{{item.taskDivCdNm}}</span>
        </button>
    </div>
    <!-- 하단정보 -->
    <div class="justify-between mt-4 text-sm text-text-1">
      
      <span>예상금액 : {{props.prj.expcPric/10000}}만원</span>
      <span class="ml-2 py-[2px] px-1 border-solid border border-line-0 text-[10px] text-[#555] rounded-sm"> 월 단위 </span>
      <span class="px-2">|</span>
      <span>투입기간 : {{props.prj.pirdVal}}개월</span>
      <span class="px-2">|</span>
      <span>필요인원 : {{props.prj.engrCnt}}명</span>
      <span class="px-2">|</span>
      <span v-if="qaProjectViewInfo.div == 'list'" class="mt-3 text-sm text-text-1">{{props.prj.workAddr}}</span>
    </div>
    <span v-if="qaProjectViewInfo.div != 'list'"  class="mt-3 text-sm text-text-1">{{props.prj.workAddr}}</span>
  </div>
</template>
<script setup>
import { computed, defineProps } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
  qaProjectViewInfo : { div:""},
  prj : {
          // "projId": "C00001P00001",
          // "workDivCd": "10",
          // "projTitl": "김락영의 테스트 공고 입니다._001",
          // "engrCnt": "5",
          // "pirdVal": "24",
          // "strtDay": "20240314",
          // "expcPric": 8000000,
          // "workAddr": "서울 강서구 초록마을로 171",
          // "projStatCd": "10",
          // "regDttm": "20240314150000",
          // "projSprtSeq": null,
          // "engrRtngInfo": {
          //     "bgnrEngrCnt": 3,
          //     "bgnrEngrUnitPric": 2000000,
          //     "intrEngrCnt": 0,
          //     "intrEngrUnitPric": 0,
          //     "advnEngrCnt": 2,
          //     "advnEngrUnitPric": 6000000,
          //     "spclEngrCnt": 0,
          //     "spclEngrUnitPric": 0
          // },
          // "jobDivCdNmList": [
          //     {
          //         "jobDivCdNm": "#제조",
          //         "jobDivCd": "10"
          //     }
          // ],
          // "taskDivCdNmList": [
          //     {
          //         "taskDivCdNm": "#WEB",
          //         "taskDivCd": "10"
          //     },
          //     {
          //         "taskDivCdNm": "#APP",
          //         "taskDivCd": "20"
          //     },
          //     {
          //         "taskDivCdNm": "#IOT",
          //         "taskDivCd": "30"
          //     }
          // ]
        }
})


const getViewType = computed(() => {
  if (props.qaProjectViewInfo.div == 'card') {
    return ['w-[520px] mr-[5px] ml-[5px]'];
  } 
  if (props.qaProjectViewInfo.div == 'list') {
    return ['w-full h-[216px]'];
  } 
  else {
    return ['w-full'];
  }
})

function goToPage(){
  router.push({ 
    name: "PrjtSrchDetl"
    ,state : {
              dataObj : {projId: props.prj.projId}
            }
  });
}
</script>