<template>
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
        <div>
          <div class="mt-[30px]">
            <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">프로젝트 예산
                <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
              </p>
              <button class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
            </div>
            <div>
              <div class="flex flex-col justify-start items-start self-stretch gap-4">
                <div class="flex justify-start items-start gap-5">
                  <div class="flex justify-center w-40 relative gap-12 p-4 rounded bg-[#ddf2ef] text-[#1ba494]">
                    초급 엔지니어
                  </div>
                  <input type="text" class="flex justify-start items-start w-40 relative gap-2 p-4 rounded bg-white border border-[#ddd] text-[#191919]" placeholder="명" />
                  <input type="text" class="flex justify-start items-start w-40 relative gap-2 p-4 rounded bg-white border border-[#ddd] text-[#191919]" placeholder="만원" />
                </div>
                <div class="flex justify-start items-start gap-5">
                  <div class="flex justify-center w-40 relative gap-12 p-4 rounded bg-[#dbe9fa] text-[#0b6bdc]">
                    중급 엔지니어
                  </div>
                  <input type="text" class="flex justify-start items-start w-40 relative gap-2 p-4 rounded bg-white border border-[#ddd] text-[#191919]" placeholder="명" />
                  <input type="text" class="flex justify-start items-start w-40 relative gap-2 p-4 rounded bg-white border border-[#ddd] text-[#191919]" placeholder="만원" />
                </div>
                <div class="flex justify-start items-start gap-5">
                  <div class="flex justify-center w-40 relative gap-12 p-4 rounded bg-[#fadbe6] text-[#dc0b56]">
                    고급 엔지니어
                  </div>
                  <input type="text" class="flex justify-start items-start w-40 relative gap-2 p-4 rounded bg-white border border-[#ddd] text-[#191919]" placeholder="명" />
                  <input type="text" class="flex justify-start items-start w-40 relative gap-2 p-4 rounded bg-white border border-[#ddd] text-[#191919]" placeholder="만원" />
                </div>
                <div class="flex justify-start items-start gap-5">
                  <div class="flex justify-center w-40 relative gap-12 p-4 rounded bg-[#faf1db] text-[#dc630b]">
                    특급 엔지니어
                  </div>
                  <input type="text" class="flex justify-start items-start w-40 relative gap-2 p-4 rounded bg-white border border-[#ddd] text-[#191919]" placeholder="명" />
                  <input type="text" class="flex justify-start items-start w-40 relative gap-2 p-4 rounded bg-white border border-[#ddd] text-[#191919]" placeholder="만원" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-[20px] flex-shrink-0 w-[520px] h-px border border-[#ddd]"></div>
            <div class="mt-[20px] flex flex-col gap-3">
            <div class="flex justify-between items-center self-stretch">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]">초급 엔지니어</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                  <span class="mr-[5px]">{{'4500'}}</span>
                  <span>만원</span>
                </p>
            </div>
            <div class="flex justify-between items-center self-stretch">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#0b6bdc]">중급 엔지니어</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                  <span class="mr-[5px]">{{'4500'}}</span>
                  <span>만원</span>
                </p>
            </div>
            <div class="flex justify-between items-center self-stretch">
              <p class="flex-grow-0 flex-shrink-0 text-lg text-left text-[#333]">총인원 20명</p>
              <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2 text-[#333] text-xl">
                <span>총 금액</span>
                <span>{{'4500'}}</span>
                <span>만원</span>
              </div>
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative overflow-hidden gap-2.5 px-5 py-4 rounded bg-[#f3faf9]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left">
                <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#067d68]">예산은 VAT를 제외한 금액</span>
                <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#191919]">으로 기재해주세요.</span>
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left">
                <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#191919]">예산 견적 : </span>
                <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#067d68]">최소 330만원 ~ 최대 660만원</span>
                <span class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#191919]">(부가세 10% 포함한 최종 금액)</span>
              </p>
            </div>
          </div>   
          <div class="mt-[40px]">
            <div>
              <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#191919]">
                Check Check !
              </p>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
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
                    <path
                      d="M9 16L14 21L22 13L23 12"
                      stroke="#191919"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">
                    프로젝트 수행 시 연장 및 휴일 근무가 필요합니다.
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
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
                    <path
                      d="M9 16L14 21L22 13L23 12"
                      stroke="#191919"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                    연장 / 휴일 근무 발생 시 대체휴무 제공합니다.
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
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
                    <path
                      d="M9 16L14 21L22 13L23 12"
                      stroke="#191919"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                    월차 및 반차 제공 합니다.
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
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
                    <path
                      d="M9 16L14 21L22 13L23 12"
                      stroke="#191919"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                    최초 의뢰 클라이언트가 있습니다. (예: 에이전시, 정부 과제 등)
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-5 p-5 rounded-[10px] border border-[#ddd]"
            >
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-10">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
                    <p class="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#191919]">베이직</p>
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#999]">플랜</p>
                  </div>
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <p class="flex-grow-0 flex-shrink-0 text-s font-bold text-right text-[#555555]">
                      결제 수수료 3%
                    </p>
                  </div>
                </div>
                <div class="flex-grow-0 flex-shrink-0 w-[255px] h-px bg-[#ddd]"></div>
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                  <span class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#067d68]"
                    >1. </span
                  ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                    >무료 공고 등록</span
                  >
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                  <span class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#067d68]"
                    >2. </span
                  ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                    >빠른 파트너스 매칭</span
                  >
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                  <span class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#067d68]"
                    >3.</span
                  ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#067d68]">
                  </span
                  ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                    >표준 계약서 사용</span
                  >
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                  <span class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#067d68]"
                    >4.</span
                  ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#067d68]">
                  </span
                  ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                    >큐밋 담당 매니저 배정</span
                  >
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                  <span class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#067d68]"
                    >5. </span
                  ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                    >비용 측정 서비스</span
                  >
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                  <span class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#067d68]"
                    >6. </span
                  ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                    >빠른 정산 처리</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[520px] mt-[60px] flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <button @click="nextPage('pre')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494] text-[#1ba494]">
          이전 단계로 이동              
        </button>
        <button @click="nextPage('next')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-white">
          다음 단계로 이동 
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import {  ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()
const projTwoStep =ref({
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
    ,pageNo:3
    ,totPageNo:4 
  })

  const pageNo = ref(3)
  const totPageNo = ref(4) 
      
  const { dataObj } = history.state; 
  console.log(JSON.parse(dataObj)); 
  
  function nextPage(div){
    if(div == 'next'){  
      router.push({ 
        name: "PrjtRegiPage4"
        ,state: {
          dataObj : JSON.stringify(projTwoStep.value),
        },
      });
    }else{
      router.push({ 
        name: "PrjtRegiPage2"
        ,state: {
          dataObj : dataObj,
        },
      });
    }
  }
</script>