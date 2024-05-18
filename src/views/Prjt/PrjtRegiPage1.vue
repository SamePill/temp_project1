<template>
  <div>
    <div style="display: flex; justify-content: center;" class="pt-10 pb-[100px] bg-[#fefefe]">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative relative ">
      <div class="flex justify-between w-[520px] mb-[10px]">
        <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
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
          <p class="text-xl font-medium text-left text-[#191919] mb-5">직군 
            <span class="text-xl text-left text-[#ff5252]">*</span>
          </p>
          <Chipset :listDivCd="'JOB_DIV_CD'"/>
        </div>
        <div class="mt-[40px]">
          <p class="text-xl text-left text-[#191919] mb-5">업무영역 
            <span class="text-xl text-left text-[#ff5252]">*</span>
          </p>
          <Chipset :listDivCd="'TASK_DIV_CD'"/>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start gap-5">
          <div class="flex justify-between items-center w-[520px] relative">
            <p class="text-xl text-left text-[#191919]">프로젝트명 
              <span class="text-xl text-left text-[#ff5252]">*</span>
            </p>
            <p class="text-sm text-left">
              <span class="text-sm text-left text-[#1ba494]">{{projOneStep.projTitl.length}}</span>
              <span class="text-sm font-bold text-left text-[#191919]"></span>
              <span class="text-sm text-left text-[#777]">/100</span>
            </p>
          </div>
          <input maxlength='100' tye="text" @keyup="chngPrjtTitl()" v-model="projOneStep.projTitl" class="w-[520px] h-[51px] text-[#999] p-4 rounded border border-[#ddd]" placeholder="프로젝트명을 입력주세요."/>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">희망 시작일 <span class="text-[#ff5252]">*</span></p>
          <div class="flex flex-col justify-center items-start gap-2">
            <input type="date" :min="today" class="w-[520px] h-[51px] text-[#999] p-4 rounded border border-[#ddd]" placeholder="프로젝트 시작 희망일을 선택해 주세요."/>
            <div class="flex justify-start items-center relative gap-0.5">
              <input type="checkbox" class="w-[15px] h-[15px]"/>
              <p class="text-base px-1 text-left text-[#777]">협의가능</p>
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
            <input type="text" class="w-[340px] h-[51px] text-[#999] p-4 rounded border border-[#ddd]" placeholder="예상 근무기간을 입력해주세요."/>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start mt-[30px]">
          <div class="flex flex-col justify-start items-start relative gap-5">
            <p class="text-xl text-left text-[#191919]">근무방식
              <span class="text-[#ff5252]">*</span>
            </p>
            <div class="flex justify-start items-center gap-5">
              <div class="flex justify-start items-center relative gap-1">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 relative"
                  preserveAspectRatio="none"
                >
                  <circle cx="16" cy="16" r="12" fill="#1BA494"></circle>
                  <path
                    d="M11 15.2L14.5924 19.7983C14.6725 19.9008 14.8275 19.9008 14.9076 19.7983L21 12"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p class="text-base text-left text-[#777]">비상주</p>
              </div>
              <div class="flex justify-start items-center relative gap-1">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 relative"
                  preserveAspectRatio="none"
                >
                  <circle cx="16" cy="16" r="11.25" stroke="#DDDDDD" stroke-width="1.5"></circle>
                  <path
                    d="M11 15.2L14.5924 19.7983C14.6725 19.9008 14.8275 19.9008 14.9076 19.7983L21 12"
                    stroke="#DDDDDD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <p class="text-base text-left text-[#777]">상주</p>
              </div>
            </div>
            <div class="flex flex-col justify-start items-start relative gap-2">
              <p class="text-base text-left text-[#777]">근무지</p>
              <input type="text" class="w-[520px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="예시) 서울특별시 강남구 테헤란로 000-0"/>
              <input type="text" class="w-[520px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="예시) 큐밋빌딩 1층"/>
            </div>
            <div class="flex justify-start items-start gap-5">
              <div class="flex flex-col justify-start items-start relative gap-2">
                <p class="text-base text-left text-[#777]">출근시간</p>
                <input type="text" class="w-[250px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="예시) 09:00"/>
              </div>
              <div class="flex flex-col justify-start items-start relative gap-2">
                <p class="text-base text-left text-[#777]">퇴근시간</p>
                <input type="text" class="w-[250px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="예시) 18:00"/>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="w-[520px] mt-[60px] flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <button @click="nextPage()" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-white">
          다음 단계로 넘어가기
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import {  ref }      from "vue";
import Chipset       from '@/components/baseComponents/Chipset.vue'
import * as gfnUtils from "@/utils/gfnUtils.js";

  const  projOneStep =ref({
      jobDivCdList:[]
      ,taskDivCdList:[]
      ,projTitl:''
      ,strtDay:''
      ,strtDayCnslYn:''
      ,pirdVal:''
      ,workDivCd:''
      ,workAddr:''
      ,workDtlAddr:''
      ,atndTime:''
      ,lvwkTime:''
    })
  const pageNo = ref(1)
  const totPageNo = ref(4) 
  const today = gfnUtils.getToday()
  
  function nextPage(){
    this.$router.push({ 
      name: "PrjtRegiPage2"
      ,state: {
        dataObj : this.params,
      },
    });
  }
</script>