<template>
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
    <div
      class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[790px] relative"
    >
      <div class="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden">
        <div
          class="w-6 h-6 absolute left-[2.75px] top-[2.75px] border-[1.5px] border-[#ddd]"
        ></div>
      </div>
      <div
        class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-[30px]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left">
          <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
            >프로젝트 상태 : </span
          ><span class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#1ba494]"
            >모집 중 {{ props }}</span
          >
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
          등록날짜 : 2023.11.28
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
      <div
        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] overflow-hidden gap-[30px] p-[30px] rounded-[10px] bg-white border border-[#ddd]"
      >
        <div
          class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4"
        >
          <div
            class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
          >
            <!--TODO 모집 종료 : 모집 상태에 따라 표시 -->
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
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
            <!--TODO 모집 중 : 모집 상태에 따라 표시 -->
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#1ba494]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
                  비상주
                </p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]"
                >
                  초급 엔지니어
                </p>
              </div>
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 h-7 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]"
                >
                  중급 엔지니어
                </p>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
            <div
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[65px] h-[29px] gap-2.5"
            ></div>
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">
            [대기업] 농협은행 (내부 직원용) 인사관련 프로그램 QA
          </p>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
            <div
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                # 웹사이트
              </p>
            </div>
            <div
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                # 어플리케이션
              </p>
            </div>
            <div
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                # 셋톱박스
              </p>
            </div>
            <div
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"># 초급</p>
            </div>
            <div
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"># 중급</p>
            </div>
            <div
              class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"># 고급</p>
            </div>
          </div>
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3"
          >
            <div
              class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
            >
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                예상금액 : 600만원~800만원
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
              투입기간 : 4개월
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
              필요인원 : 10명
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
              서울특별시 강남구
            </p>
          </div>
        </div>
      </div>
      <div
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
                124명
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
                12명
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
                30명
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
                30명
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                불합격 엔지니어
              </p>
            </div>
          </div>
          <div
            class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-0.5"
          >
            <p class="flex-grow-0 flex-shrink-0 text-base text-left">상세 보기</p>
            <div class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  regProjList : [
                  {
                    // "projId": "프로젝트 id",
                    // "workDivCd": "근무방식 코드",
                    // "projTitl": "프로젝트 제목",
                    // "engrCnt": "필요 엔지니어 인원",
                    // "pirdVal": "예상 기간 개월",
                    // "strtDay": "프로젝트 시작일(yyyyMMdd)",
                    // "expcPric": 0,
                    // "workAddr": "근무 주소",
                    // "projStatCd": "프로젝트 상태 코드",
                    // "regDttm": "프로젝트 등록 날짜",
                    // "engrRtngInfo": "엔지니어 등급 수,단가 정보",
                    // "projSprtSeq": "프로젝트 지원 순번",
                    // "jobDivCdNmList": "직군 코드 list",
                    // "taskDivCdNmList": "업무 코드 list",
                    // "engrCntInfo": {
                    //   "totSprtEngrCnt": 0,
                    //   "passEngrCnt": 0,
                    //   "waitEngrCnt": 0,
                    //   "meetWillEngrCnt": 0,
                    //   "failEngrCnt": 0
                    // }
                  }
                ],
  prj : {
  }

})

</script>