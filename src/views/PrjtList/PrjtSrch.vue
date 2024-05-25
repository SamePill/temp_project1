<template>
  <div class="w-[1060px] h-10 my-10 mx-auto font-basic">

    <!-- 상단 검색 -->
    <div class="flex items-center justify-between w-full" style="position: relative;">
      <!-- <div style="position:absolute; top:0px"> -->
      <div style="position:absolute; z-index: 999;  ">
        <DropDown :cdVal="post.workDivCd" class="mr-2" :title="'근무형태'" :listDivCd="'WORK_DIV_CD'"/>
        <DropDown :cdVal="workPirdDivCd" class="mr-2" :title="'근무기간'" :listDivCd="'WORK_PIRD_DIV_CD'"/>
        <DropDown :cdVal="engrRtngDivCd" :title="'등급'" :listDivCd="'ENGR_RTNG_DIV_CD'"/>
      </div>

      <!--검색 -->
      <!-- <div class="w-[1060px]" style="text-align: right;"> -->
        <div class="w-[1060px]" style="position: relative; text-align: right">
          <input class="w-[300px]  py-[10px]  px-[10px] justify-between border-line-1 border rounded box-border placeholder:text-sm placeholder:text-text-3" type="text" placeholder="키워드를 입력해 주세요" v-model="srchKeyWord" @keyup.enter="loadData()">
          <img style="cursor: pointer; position:absolute; right:10px; top:14px;" class="w-[18px] h-[18px]" src="@/assets/ic_magnifier.png" alt="" @click="loadData()">
        </div>
      <!-- </div> -->
    </div>

    <!-- 프로젝트 리스트 -->
    <div v-if="projList.length  > 0" >
      <div class="w-[1060px] flex-col mx-auto"  v-for="el in projList" :key="el">        
          <QaProjectItem :qaProjectViewInfo="{div:'list'}" :prj="el"  />
      </div>
    </div>
    <div v-else class="mt-[350px]">
      <p class="text-lg font-bold text-center text-[#555]">찾으시는 프로젝트를 찾지 못했습니다.</p>
      <p class="text-sm font-medium text-center text-[#777] mt-[10px]">
      <span class="text-sm font-medium text-center text-[#777]"
        >찾으시는 프로젝트를 찾지 못했습니다.</span
      ><br /><span class="text-sm font-medium text-center text-[#777]"
        >찾으시는 프로젝트의 검색어가 맞는지 다시 한번 확인해주세요.</span
      >
    </p>
    </div>
    

    
    <div v-if="projList.length  > 0" class="paginationDiv w-[1060px] h-10 my-10 mx-auto font-basic" style="text-align:center">
      
        <vue-awesome-paginate
          :total-items=totalCnt
          v-model="pageNo"
          :items-per-page="10"
          :max-pages-shown="10"
          :on-click="loadData"
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
</template>

<script setup>
import DropDown from '@/components/uiComponents/DropDown.vue'
import QaProjectItem from '@/components/baseComponents/QaProjectItem.vue'
import * as gfnUtils from "@/utils/gfnUtils.js";
import { onMounted, ref } from 'vue'


onMounted(() => {
  loadData();
})
const post ={workDivCd:""}
const pageNo = ref(1)
const totalCnt = ref(100)
const srchKeyWord = ref("")
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


async function loadData(selPage){
  console.log(selPage)
  if(selPage != null){
    pageNo.value = selPage;
  }
  var api = "/v1/project/list";
  var postParams = {workDivCd:"", workPirdDivCd:"", engrRtngDivCd:"", pageNo: pageNo.value, srchKeyWord:srchKeyWord.value};
  console.log( postParams);
  let rtn = await gfnUtils.axiosGet(
    api,
    postParams
  );
  
  console.log(rtn);
  let res = rtn.rtnData
  projList.value = res.projList
}


</script>

<style>
.paginationDiv .pagination-container {
  column-gap: 10px;
  align-items: center;
}
.paginationDiv .paginate-buttons {
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  color: black;
}

.paginationDiv .back-button,
.paginationDiv .next-button {
  background-color: white;
  color: white;
  border-radius: 8px;
  height: 45px;
  width: 45px;
}
.paginationDiv .active-page {
  background-color: #e5e5e5;
}
.paginationDiv .paginate-buttons:hover {
  background-color: #f5f5f5;
}
.paginationDiv .active-page:hover {
  background-color: #e5e5e5;
}

.paginationDiv .back-button svg {
  transform: rotate(180deg) translateY(-2px);
}
.paginationDiv .next-button svg {
  transform: translateY(2px);
}

/* .paginationDiv .back-button:hover,
.paginationDiv .next-button:hover {
  background-color: rgb(45, 45, 45);
} */

.paginationDiv .back-button:active,
.paginationDiv .next-button:active {
  background-color: rgb(85, 85, 85);
}
</style>