<template>
  <!-- TO_DO 상주비상주 cursor pointer ,근무지 api, 달력모양, chipset값 받기  -->
  <div>
    <div style="display: flex; justify-content: center;" class="pt-10 pb-[100px] bg-[#fefefe]">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative relative ">
      <div class="flex justify-between w-[520px] mb-[10px]">
        <p class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919]" style="font-weight:bolder !important">
          프로젝트 등록하기
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-left">
          <span class="text-2xl font-bold text-left text-[#191919]">{{pageNo}} </span>
          <span v-show="pageNo != '' && totPageNo != ''" class="text-2xl text-left text-[#777]">/</span>
          <span class="text-xl text-left text-[#777]">{{totPageNo}}</span>
        </p>
      </div>
      <div class="flex-grow-0 flex-shrink-0 w-[520px] h-px bg-[#191919]"></div>
      <div>

        <div class="mt-[30px]">
          <div class="flex justify-between items-center w-[520px] relative">
            <p class="text-xl text-left text-[#191919] mb-[20px;]">회사명</p>
          </div>
          <input tye="text" v-model="compNm" class="w-[520px] h-[51px] text-base text-left text-[#777] p-4 rounded bg-[#ddd] border border-[#ddd]" disabled="disabled"/>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">담당자 이름
            <span class="text-[#ff5252]">*</span></p>
          <div class="flex flex-col justify-center items-start gap-2">
            <input type="text" v-model="projStep.projFourStep.rprsNm" class="w-[520px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="담당자 이름을 입력해주세요."/>
          </div>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">담당자 휴대폰 번호
            <span class="text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start gap-5">
            <input type="text" v-model="projStep.projFourStep.rprsHp"  class="w-[520px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="담당자 휴대폰 번호를 입력해주세요."/>
          </div>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">담당자 이메일
            <span class="text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start gap-5">
            <input type="text" v-model="projStep.projFourStep.rprsMail"  class="w-[520px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="담당자 이메일을 입력해주세요."/>
          </div>
        </div>
        
        <div class="mt-[40px] flex flex-col justify-start items-start relative">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1" style="cursor:pointer" @click="trmsClick('useTrmsYn')">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect
                x="4.75"
                y="4.75"
                width="22.5"
                height="22.5"
                stroke="#DBDBDB"
                stroke-width="1.5"
              ></rect>
                <path v-if="projStep.projFourStep.useTrmsYn == 'Y'"
                  d="M9 16L14 21L22 13L23 12"
                  stroke="#191919"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
            </svg>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
              (필수) 큐밋 이용약관에 동의합니다.
            </p>
          </div>
          <div class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10">
            <p class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777]">상세보기</p>
          </div>
          <div class="mt-[20px] flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1" style="cursor:pointer" @click="trmsClick('privTrmsYn')">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect
                x="4.75"
                y="4.75"
                width="22.5"
                height="22.5"
                stroke="#DBDBDB"
                stroke-width="1.5"
              ></rect>
                <path v-if="projStep.projFourStep.privTrmsYn == 'Y'"
                  d="M9 16L14 21L22 13L23 12"
                  stroke="#191919"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
            </svg>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
              (필수) 큐밋 이용약관에 동의합니다.
            </p>
          </div>
          <div class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10">
            <p class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777]">상세보기</p>
          </div>
        </div>
      </div>


        
      <div class="w-[520px] mt-[60px] flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <button @click="nextPage('pre')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494] text-[#1ba494]">
          이전 단계로 이동              
        </button>
        <button @click="nextPage('next')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-white">
          등록완료
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import {  ref,onMounted } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()
// const projFourStep = ref({
//   rprsNm:''
//   ,rprsHp:''
//   ,rprsMail:''
//   ,useTrmsYn: "Y"
//   ,privTrmsYn: "Y"
// })

const pageNo = ref(4)
const totPageNo = ref(4) 
const { dataObj } = history.state; 
const projStep = ref(JSON.parse(dataObj));
const compNm = ref(window.$cookies.get("loginCompNm"));

onMounted(() => {
  loadData();
});

async function loadData(){
  if(dataObj != undefined){
    projStep.value = JSON.parse(dataObj);
  }
}

function nextPage(div){
  if(div == 'next'){  
    console.log('등록완료');
    // projStep.value.projOneStep.jobDivCdList.forEach(el=>{
    //   el = {'jobDivCd':el.cd}



    // });
    console.log(projStep.value)
  }else{
    router.push({ 
      name: "PrjtRegiPage3"
      ,state: {
        dataObj : JSON.stringify(projStep.value),
      },
    });
  }
}
function trmsClick(div){
  if(projStep.value.projFourStep[div] == 'Y'){
    projStep.value.projFourStep[div] = 'N'
  }else{
    projStep.value.projFourStep[div] = 'Y'
  }
}
</script>