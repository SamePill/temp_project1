<template>
  <div class="w-[1060px] h-10 my-10 mx-auto font-basic">

    <!-- 상단 검색 -->
    <div class="flex items-center justify-between w-full">
      <div>
        <DropDown class="mr-5"/>
        <DropDown class="mr-5"/>
        <DropDown />
      </div>

      <!--검색 -->
      <div class="w-[300px] py-[10px] px-[10px] border border-line-1 rounded box-border flex justify-between items-center hover:border-main-0 " >
        <input class="outline-none placeholder:text-sm placeholder:text-text-3" type="text" placeholder="키워드를 입력해 주세요" v-mode="srchKeyWord">
        <img class="w-[18px] h-[18px]" src="@/assets/ic_magnifier.png" alt="" @click="loadData()">
      </div>
    </div>

    <!-- 프로젝트 리스트 -->
    <div class="w-[1060px] flex-col mx-auto"  v-for="el in projList" :key="el">        
        <QaProjectItem :qaProjectViewInfo="{size:'big'}" :prj="el"  />
    </div>
    <div class="paginationDiv w-[1060px] h-10 my-10 mx-auto font-basic" style="text-align:center">
        <vue-awesome-paginate
          :total-items=totalCnt
          v-model="pageNo"
          :items-per-page="10"
          :max-pages-shown="10"
          :on-click="loadData"
        >
          <template #prev-button>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
              </svg>
            </span>
          </template>
          <font-awesome-icon icon="less-than" />
          <template #next-button>
            <span>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
              </svg>
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