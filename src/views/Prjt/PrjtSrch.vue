<template>
  <!-- 헤더 -->
  <Header headerType="1"/>

  <div class="w-[1060px] h-10 my-10 mx-auto font-basic ">

    <!-- 상단 검색 -->
    <div class="flex items-center justify-between w-full">
      <div>
        <DropDown class="mr-5"/>
        <DropDown class="mr-5"/>
        <DropDown />
      </div>

      <!--검색 -->
      <div class="w-[300px] py-[10px] px-[10px] border border-line-1 rounded box-border flex justify-between items-center hover:border-main-0 " >
        <input class="outline-none placeholder:text-sm placeholder:text-text-3" type="text" placeholder="키워드를 입력해 주세요">
        <img class="w-[18px] h-[18px]" src="@/assets/ic_magnifier.png" alt="">
      </div>
    </div>
  </div>

  <!-- 프로젝트 리스트 -->
  <div class="w-[1060px] flex-col mx-auto">        
    <template v-for="(item, index) in jobDivCdNmList" :key="index">
      <QaProject :qaProjectViewInfo="{size:'big', item}" />
    </template>    
  </div>
</template>

<script setup>
import DropDown from '@/components/uiComponents/DropDown.vue'
import QaProject from '@/components/baseComponents/QaProject.vue'
import * as gfnUtils from "@/utils/gfnUtils.js";
import { onMounted, ref } from 'vue'

const projList = ref([{
                      "projId": "C00001P00001",
                      "workDivCd": "10",
                      "projTitl": "김락영의 테스트 공고 입니다._001",
                      "engrCnt": "5",
                      "pirdVal": "24",
                      "strtDay": "20240314",
                      "expcPric": 8000000,
                      "workAddr": "서울 강서구 초록마을로 171",
                      "projStatCd": "10",
                      "regDttm": "20240314150000",
                      "projSprtSeq": null,
                      "engrRtngInfo": {
                          "bgnrEngrCnt": 3,
                          "bgnrEngrUnitPric": 2000000,
                          "intrEngrCnt": 0,
                          "intrEngrUnitPric": 0,
                          "advnEngrCnt": 2,
                          "advnEngrUnitPric": 6000000,
                          "spclEngrCnt": 0,
                          "spclEngrUnitPric": 0
                      },
                      "jobDivCdNmList": [
                          {
                              "jobDivCdNm": "#제조",
                              "jobDivCd": "10"
                          }
                      ],
                      "taskDivCdNmList": [
                          {
                              "taskDivCdNm": "#WEB",
                              "taskDivCd": "10"
                          },
                          {
                              "taskDivCdNm": "#APP",
                              "taskDivCd": "20"
                          },
                          {
                              "taskDivCdNm": "#IOT",
                              "taskDivCd": "30"
                          }
                      ]
                   }])



onMounted(() => {
  loadData();
})


async function loadData(){
  var api = "/v1/home/info";
  var postParams = {};
  let res = await gfnUtils.axiosGet(
    api,
    postParams
  );
  
  console.log(res);
  projList.value = res.projList
}



// export default {
//   components: {
//     Header, DropDown, QaProject
//   },
//   data() {
//     return {      
//     };
//   }
// }
</script>