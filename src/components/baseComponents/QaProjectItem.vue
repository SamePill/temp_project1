<template>
  <div
    class="pt-[34px] pr-[30px] pb-[30px] pl-[30px] mt-5 border-solid border-line-1 border-[1px] rounded-[10px] font-basic hover:cursor-pointer"
    @click="goToPage('PrjtSrchDetl')"
    :class="getViewType">

    <!-- 상단 -->
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="py-[4px] px-2 bg-blue-0 bg-opacity-[.15] rounded mr-[10px]">
          <span class="text-xs text-blue-0">기간제 상주</span>
        </div>
        <div class="py-[4px] px-2 bg-red-0 bg-opacity-[.15] rounded mr-[10px]">
          <span class="text-xs text-red-0">초급가능</span>
        </div>
      </div>
      <button>
        <img class="w-8 h-8" src="@/assets/ic_book_mark.png" alt="">
      </button>
    </div>
    <!-- 제목 -->
    <p class="mt-5 text-xl font-medium text-text-0">{{props.prj.projTitl}}</p>

    <!-- 해시테그 -->
    <div class="mt-4" :class="getHashTagViewType" >   
        <button class="" v-for="(item, index) in props.prj.taskDivCdNmList" :key="index" >
          <span class="text-1 py-2 px-4 bg-tag-0 rounded-[100px] text-text-1 mr-3">{{item.taskDivCdNm}}</span>
        </button>
    </div>
    <!-- 하단정보 -->
    <div class="justify-between mt-4 text-sm text-text-1" :class="getBottomViewType">
      
      <span>예상금액 : {{props.prj.expcPric}}만원</span>
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





const getHashTagViewType = computed(() =>  {
  if (props.qaProjectViewInfo.size == 'small') {
    return ['w-96', 'flex-wrap', 'content-start']
  }
  else {
    return ['w-full]']
  }
})

const getBottomViewType = computed(() =>  {
  if (props.qaProjectViewInfo.size == 'small') {
    return "flex items-center"
  }
  else {
    return ""
  }
})

// export default {
//   props: {
//     qaProjectViewInfo: Object
//   },
//   methods: {
//     goToPage(url){
//       this.$router.push(url)
//     }        
//   },
//   computed: {
//     getVieType() {
//       if (this.qaProjectViewInfo.size == 'small') {
//         return ['w-[520px]', this.qaProjectViewInfo.position == 'left' ? 'mr-[10px]' : 'ml-[10px]'];
//       }
//       else {
//         return ['w-full'];
//       }
//     },
//     getHashTagViewType() {
//       if (this.qaProjectViewInfo.size == 'small') {
//         return ['w-96', 'flex-wrap', 'content-start']
//       }
//       else {
//         return ['w-full']
//       }
//     },
//     getBottomViewType() {
//       if (this.qaProjectViewInfo.size == 'small') {
//         return "flex items-center"
//       }
//       else {
//         return ""
//       }
//     }
//   }
// }
</script>