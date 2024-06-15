<template>
  <div>
    <div style="display: flex; justify-content: center;" class="pt-10 bg-[#fefefe] mb-[100px]">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative relative ">
      <div class="flex justify-between w-[520px] mb-[10px]">
        <p class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919] font-medium">
          프로젝트 등록하기
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-left">
          <span class="text-2xl font-bold text-left text-[#191919]">{{pageNo}} </span>
          <span v-show="pageNo != '' && totPageNo != ''" class="text-2xl text-left text-[#777]">/</span>
          <span class="text-xl text-left text-[#777]">{{totPageNo}}</span>
        </p>
      </div>
      <div class="flex-grow-0 flex-shrink-0 w-[520px] h-px bg-[#191919]"></div>
      <!-- 프로젝트영역 -->
      <div>
        <div class="mt-[30px]" @click="test">
          <p class="text-xl font-medium text-left text-[#191919]">직군 
            <span class="text-xl text-left text-[#ff5252]">*</span>
          </p>
          <Chipset ref="$jobChipset"  :cdList="projStep.projOneStep.jobDivCdList" :listDivCd="'JOB_DIV_CD'" class="mt-[10px]"/>
          <!-- <Chips :cdList=jobDivCdList class="mt-[10px]"/> -->
        </div>
        <div class="mt-[40px]">
          <p class="text-xl text-left text-[#191919]">업무영역 
            <span class="text-xl text-left text-[#ff5252]">*</span>
          </p>
          <Chipset ref="$taskChipset" :cdList="projStep.projOneStep.taskDivCdList" :listDivCd="'TASK_DIV_CD'" class="mt-[10px]"/>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start gap-5">
          <div class="flex justify-between items-center w-[520px] relative">
            <p class="text-xl text-left text-[#191919]">프로젝트명 
              <span class="text-xl text-left text-[#ff5252]">*</span>
            </p>
            <p class="text-sm text-left">
              <span class="text-sm text-left text-[#1ba494]">{{projStep.projOneStep.projTitl != undefined ? projStep.projOneStep.projTitl.length : 0}}</span>
              <span class="text-sm font-bold text-left text-[#191919]"></span>
              <span class="text-sm text-left text-[#777]">/50</span>
            </p>
          </div>
          <input maxlength='100' tye="text" v-model="projStep.projOneStep.projTitl" class="w-[520px] h-[51px] text-[#191919] p-4 rounded border border-[#ddd]" placeholder="프로젝트명을 입력주세요."/>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">희망 시작일 <span class="text-[#ff5252]">*</span></p>
          <div class="flex flex-col justify-center items-start gap-2">
            <input type="date" v-model="projStep.projOneStep.strtDay" :min="today" class="w-[520px] h-[51px] text-[#999] p-4 rounded border border-[#ddd]" dataplaceholder="프로젝트 시작 희망일을 선택해 주세요."/>
            <div class="flex justify-start items-center relative gap-0.5">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1" style="cursor: pointer;" @click="strtDayCnslYnClick()">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect x="4.75" y="4.75" width="22.5" height="22.5" stroke="#DBDBDB" stroke-width="1"></rect>
                  <path v-if="projStep.projOneStep.strtDayCnslYn =='Y'"
                    d="M9 16L14 21L22 13L23 12"
                    stroke="#191919"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-text-2">
                    협의가능
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">예상기간
            <span class="text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start gap-5">
            <div class="flex justify-between items-center w-40 h-[51px] relative  p-4 rounded border border-[#ddd]">
              <p class="text-base text-left text-[#191919]">월 단위</p>
            </div>
            <input v-model="projStep.projOneStep.pirdVal" type="number" min="0" class="w-[340px] h-[51px] text-[#999] p-4 rounded border border-[#ddd]" placeholder="예상 근무기간을 입력해주세요."/>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start mt-[40px]">
          <div class="">
            <p class="text-xl text-left text-[#191919]">근무방식
              <span class="text-[#ff5252]">*</span>
            </p>
            <div class="mt-[15px]" style="display: inline-block; width:30%;" >
              <div class="flex justify-start items-center relative gap-1" >
                  <label style="width:200px; cursor:pointer" @click="changeWorkDivCd('10')" >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 relative"
                      preserveAspectRatio="none">
                    <circle v-if="projStep.projOneStep.workDivCd=='10'"  cx="16" cy="16" r="11.25" fill="#1BA494"/>
                    <circle v-else cx="16" cy="16" r="11.25" stroke="#DDDDDD" stroke-width="1.5"/>
                    <path
                      d="M11 15.2L14.5924 19.7983C14.6725 19.9008 14.8275 19.9008 14.9076 19.7983L21 12"
                      stroke="#DDDDDD"
                      stroke-width="1.5"
                      stroke-linecap="round"/>
                    </svg>
                    
                    <p style="position:relative; top:-28px; left:40px" class="text-base text-left text-[#777]">상주</p>
                  </label>
                  <label style="width:200px" @click="changeWorkDivCd('20')">
                    <svg 
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                      preserveAspectRatio="none"
                    >
                      <circle v-if="projStep.projOneStep.workDivCd=='20'"  cx="16" cy="16" r="12" fill="#1BA494"/>
                      <circle v-else cx="16" cy="16" r="12" stroke="#DDDDDD" stroke-width="1.5"/>
                      <path
                        d="M11 15.2L14.5924 19.7983C14.6725 19.9008 14.8275 19.9008 14.9076 19.7983L21 12"
                        stroke="#DDDDDD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    <p style="position:relative; top:-28px; left:40px" class="text-base text-left text-[#777]">비상주</p>
                  </label>
              </div>
            </div>
            <div class="flex flex-col justify-start items-start relative gap-2">
              <p class="text-base text-left text-[#777]">근무지</p>
              <input v-model="projStep.projOneStep.workAddr" type="text" class="w-[520px] h-[51px] text-base text-left text-[#191919] p-4 rounded border border-[#ddd]" placeholder="예시) 서울특별시 강남구 테헤란로 000-0"/>
              <input v-model="projStep.projOneStep.workDtlAddr" type="text" class="w-[520px] h-[51px] text-base text-left text-[#191919] p-4 rounded border border-[#ddd]" placeholder="예시) 큐밋빌딩 1층"/>
            </div>
            <div class="flex justify-start items-start gap-5 mt-[20px]">
              <div class="flex flex-col justify-start items-start relative gap-2">
                <p class="text-base text-left text-[#777]">출근시간</p>
                <input  v-model="projStep.projOneStep.atndTime"  type="time" class="w-[250px] h-[51px] text-base text-left text-[#191919] p-4 rounded border border-[#ddd]" placeholder="예시) 09:00"/>
              </div>
              <div class="flex flex-col justify-start items-start relative gap-2">
                <p class="text-base text-left text-[#777]">퇴근시간</p>
                <input  v-model="projStep.projOneStep.lvwkTime"  type="time" class="w-[250px] h-[51px] text-base text-left text-[#191919] p-4 rounded border border-[#ddd]" placeholder="예시) 18:00"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[520px] mt-[60px] flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
        <button @click="nextPage()" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-white">
          다음 단계로 이동하기
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import {  ref, onMounted, onUnmounted } from "vue";
import Chipset             from '@/components/uiComponents/Chipset.vue'
// import Chips             from '@/components/uiComponents/Chips.vue'
import * as gfnUtils       from "@/utils/gfnUtils.js";
import { useRouter, onBeforeRouteLeave } from 'vue-router';

const $jobChipset = ref(null);
const $taskChipset = ref(null);

const router = useRouter()
const projStep = ref({
  projOneStep : {
    jobDivCdList:[]
    ,taskDivCdList:[]
    ,projTitl:''     //프로젝트 제목
    ,strtDay:''      //프로젝트 시작일(yyyyMMdd)
    ,strtDayCnslYn:''//협의 가능(Y,N)
    ,pirdVal:''      //예상 기간 개월
    ,workDivCd:'10'    //근무방식 코드
    ,workAddr:''     //근무 주소
    ,workDtlAddr:''
    ,atndTime:''     //근무시작 시간(HHmm)
    ,lvwkTime:''     //근무종료 시간(HHmm)
  },
  projTwoStep : {
    projCtntTask:''  //프로젝트 설명 및 주요 담당 업무
    ,projDmndSkil:'' //프로젝트 요구 스킬
    ,projUseTool:''  //프로젝트 사용 툴
    ,projEtcInfo:''  //프로젝트 기타 사항
    ,fileList:[]     //프로젝트 파일자료 리스트
  },
  projThreeStep : {
      bgnrEngrCnt:0
    ,bgnrEngrUnitPric:0
    ,intrEngrCnt:0
    ,intrEngrUnitPric:0
    ,advnEngrCnt:0
    ,advnEngrUnitPric:0
    ,spclEngrCnt:0
    ,spclEngrUnitPric:0
    ,projChck01yn:''
    ,projChck02yn:''
    ,projChck03yn:''
    ,projChck04yn:''
  }

  })
const pageNo = ref(1)
const totPageNo = ref(4) 
const today = gfnUtils.getToday()
// const workDivCdList = ref([])
// const jobDivCdList = ref([])

onMounted(() => {
  // jobDivCdList.value = []
  loadData();
  $jobChipset.value.loadData();
  $taskChipset.value.loadData();
  projStep.value.projOneStep.strtDayCnslYn = 'N'; //협의 가능
  scrollToTop();
})

onUnmounted(()=>{
})

onBeforeRouteLeave(async () => {
});

const { dataObj } = history.state; 

async function loadData(){
  if(dataObj != undefined){
    projStep.value = JSON.parse(dataObj);
  }
}

function nextPage(){
  projStep.value.projOneStep.jobDivCdList = $jobChipset.value.returnCdList();
  projStep.value.projOneStep.taskDivCdList = $taskChipset.value.returnCdList();
  router.push({ 
    name: "PrjtRegiPage2"
    ,state: {
      dataObj : JSON.stringify(projStep.value),
    },
  });
}

function changeWorkDivCd(cdVal){
  projStep.value.projOneStep.workDivCd = cdVal;
}

//협의가능 체크
function strtDayCnslYnClick(){
  if(projStep.value.projOneStep.strtDayCnslYn == 'Y'){
    projStep.value.projOneStep.strtDayCnslYn = 'N';
  }else{
    projStep.value.projOneStep.strtDayCnslYn = 'Y';
  }
}
function scrollToTop(){
    window.scrollTo({
    top: 0,
    behavior: 'smooth' });
}
</script>
<style scoped>
input[type="checkbox"]{
  display: none;
}
</style>