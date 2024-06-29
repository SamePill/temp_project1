<template>
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
    <div
      class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[790px] relative"
    >
      <div class="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden">
        <div
          
          class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
            preserveAspectRatio="xMidYMid meet"
            @click="$emit('chkItem')"
          >
            <rect
              x="4.75"
              y="4.75"
              width="22.5"
              height="22.5"
              stroke="#DBDBDB"
              stroke-width="1.5"
            ></rect>
            <!-- 체크 표시 -->
            <path
              d="M9 16L14 21L22 13L23 12"
              stroke="#191919"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-show="props.projItem.chkVal == true"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-[30px]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left">
          <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
            >프로젝트 상태 : </span
          ><span class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#1ba494]"
            >{{ props.projItem.projStatCdNm }}</span
          >
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
          등록날짜 : {{ gfnUtils.formatYMDHMS(props.projItem.regDttm) }}
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
      <div
        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] overflow-hidden gap-[30px] p-[30px] rounded-[10px] bg-white border border-[#ddd] hover:cursor-pointer"
        @click="goToPage()"
      >
        <div
          class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4"
        >
          <div
            class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
          >
            <!-- 모집 종료 : 모집 상태에 따라 표시 -->
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5" v-if="props.projItem.projStatCd == 60">
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#999]"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white"
                >
                  모집종료
                </p>
              </div>
            </div>

            <!-- 모집 중 : 모집 상태에 따라 표시 -->
            <div class="flex justify-between"  v-else>
              <div class="flex items-center">
                  <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                    <div v-if="props.projItem.workDivCd =='10'" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dd6431]" >
                      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">상주</p>
                    </div>
                    <div v-if="props.projItem.workDivCd =='20'" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dd6431]" >
                      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">비상주</p>
                    </div> 
                    <div v-show="props.projItem.engrRtngInfo['bgnrEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]" >
                      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
                        초급 엔지니어
                      </p>
                    </div>
                    <div v-show="props.projItem.engrRtngInfo['intrEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]">
                      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]">
                        중급 엔지니어
                      </p>
                    </div>
                    <div v-show="props.projItem.engrRtngInfo['advnEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]" >
                      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]">
                        고급 엔지니어
                      </p>
                    </div>
                    <div v-show="props.projItem.engrRtngInfo['spclEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#faf1db]">
                      <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc630b]">
                        특급 엔지니어
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
            <div
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[65px] h-[29px] gap-2.5"
            ></div>
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">
            {{ props.projItem.projTitl }}
          </p>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <div
              v-for="el in props.projItem.taskDivCdNmList" :key="el"
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                {{el.taskDivCdNm}}
              </p>
            </div>
          
          </div>
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3"
          >
            <div
              class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                <!--TODO 예상금액 값...-->
                예상금액 : {{ props.projItem.expcPric/10000 }}만원
              </p>
              <div
                class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-1 py-0.5 rounded-sm bg-white border border-[#ddd]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-[10px] text-left text-[#555]">
                  월 단위
                </p>
              </div>
            </div>
            <svg
              width="2"
              height="13"
              viewBox="0 0 2 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
            </svg>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
              투입기간 : {{props.projItem.pirdVal}}개월
            </p>
            <svg
              width="2"
              height="13"
              viewBox="0 0 2 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
            </svg>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
              필요인원 : {{props.projItem.engrCnt}}명
            </p>
            <svg
              width="2"
              height="13"
              viewBox="0 0 2 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
            </svg>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
              {{props.projItem.workAddr}}
            </p>
          </div>
        </div>
      </div>
      <!-- 등록 프로젝트 -->
      <div
        v-show="props.mode=='REGI'"
        class="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-[30px] rounded-[10px] bg-white border border-[#ddd]"
      >
        <div
          class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[730px] h-10"
        >
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-10"
          >
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
              >
                {{props.projItem.engrCntInfo.totSprtEngrCnt}}명
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                지원 엔지니어
              </p>
            </div>
            <svg
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0V32" stroke="#DDDDDD"></path>
            </svg>
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
              >
              {{props.projItem.engrCntInfo.passEngrCnt}}명
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                선정 엔지니어
              </p>
            </div>
            <svg
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0V32" stroke="#DDDDDD"></path>
            </svg>
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
              >
              {{props.projItem.engrCntInfo.waitEngrCnt}}명
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                대기 엔지니어
              </p>
            </div>
            <svg
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0V32" stroke="#DDDDDD"></path>
            </svg>
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
              >
                {{props.projItem.engrCntInfo.failEngrCnt}}명
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                불합격 엔지니어
              </p>
            </div>
          </div>
          <button
            class="flex-grow-0 flex-shrink-0 text-base text-left flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-0.5"
            @click="$emit('showEngrDetail')"
            >
            상세 보기
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M6 13L10 8L6 3"
                stroke="#191919"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- 지원 프로젝트 -->
      <div
        v-show="props.mode=='APPL'"
        class="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-[30px] rounded-[10px] bg-white border border-[#ddd]"
      >
        <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[730px] h-10">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[30px]">
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]">{{props.projItem.engrCntInfo.totSprtEngrCnt}}명</p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">총 지원자</p>
            </div>
            <svg
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0V32" stroke="#DDDDDD"></path>
            </svg>
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]">{{props.projItem.engrCntInfo.passEngrCnt}}명</p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">선정 엔지니어</p>
            </div>
            <svg
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0V32" stroke="#DDDDDD"></path>
            </svg>
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]">{{props.projItem.engrCntInfo.meetWillEngrCnt}}명</p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">미팅 예정</p>
            </div>
            <svg
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0V32" stroke="#DDDDDD"></path>
            </svg>
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]">{{props.projItem.engrCntInfo.waitEngrCnt}}명</p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">대기 엔지니어</p>
            </div>
            <svg
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M1 0V32" stroke="#DDDDDD"></path>
            </svg>
            <div
              class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]">{{props.projItem.engrCntInfo.failEngrCnt}}명</p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">불합격 엔지니어</p>
            </div>
          </div>
          <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
            <button class="flex-grow-0 flex-shrink-0 text-sm text-left" @click="$emit('showEngrDetail')">상세보기</button>
            <div class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"></div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>
<script setup>
  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router';
  import * as gfnUtils from "@/utils/gfnUtils.js";

  const router = useRouter()
  const props = defineProps({
    mode:{}
    ,projItem : {
      //     "projId": "C00005P00001",
      //     "workDivCd": "10",
      //     "workDivCdNm": "상주",
      //     "projTitl": "아마존 웹서비스 검증_수정_001",
      //     "engrCnt": "10",
      //     "pirdVal": "12",
      //     "strtDay": "20240801",
      //     "expcPric": 17000000,
      //     "workAddr": "서울시 강남구 홍제동",
      //     "projStatCd": "10",
      //     "projStatCdNm": "모집중",
      //     "regDttm": "20240415142852",
      //     "engrRtngInfo": {
      //         "bgnrEngrCnt": 2,
      //         "bgnrEngrUnitPric": 2000000,
      //         "intrEngrCnt": 4,
      //         "intrEngrUnitPric": 4000000,
      //         "advnEngrCnt": 3,
      //         "advnEngrUnitPric": 5000000,
      //         "spclEngrCnt": 1,
      //         "spclEngrUnitPric": 6000000
      //     },
      //     "projSprtSeq": null,
      //     "jobDivCdNmList": [
      //         {
      //             "jobDivCdNm": "#교육",
      //             "jobDivCd": "50"
      //         }
      //     ],
      //     "taskDivCdNmList": [
      //         {
      //             "taskDivCdNm": "#WEB",
      //             "taskDivCd": "10"
      //         }
      //     ],
      //     "engrCntInfo": {
      //         "totSprtEngrCnt": 7,
      //         "passEngrCnt": 5,
      //         "waitEngrCnt": 2,
      //         "meetWillEngrCnt": 0,
      //         "failEngrCnt": 0
      //     }
      }

  })

  function goToPage(){
    router.push({ 
      name: "PrjtSrchDetl"
      ,state : {
                dataObj : {projId: props.projItem.projId}
              }
    });
  }

</script>