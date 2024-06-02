<template>
  <div
    class="flex flex-col justify-start items-center w-[800px] gap-[30px] px-10 pt-[30px] pb-[60px] bg-white"
  >
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
      <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[720px] relative">
        <p class="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#191919]">
          엔지니어 프로필 상세
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
          @click="$emit('close')"
        >
          <path
            d="M19 5L5 19"
            stroke="#191919"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          ></path>
          <path
            d="M5 5L19 19"
            stroke="#191919"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
      <div class="flex-grow-0 flex-shrink-0 w-[720px] h-px bg-[#191919]"></div>
    </div>
    <div style="height: 600px; overflow-y: auto">
      <div class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 relative gap-[30px]">
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
          <svg
            width="150"
            height="200"
            viewBox="0 0 150 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-[150px] h-[200px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect x="0.5" y="0.5" width="149" height="199" fill="#DDDDDD"></rect>
            <rect x="0.5" y="0.5" width="149" height="199" stroke="#DDDDDD"></rect>
            <circle cx="75" cy="80" r="35" fill="white"></circle>
            <path
              d="M75 125C33.5786 125 0 158.579 0 200H150C150 158.579 116.421 125 75 125Z"
              fill="white"
            ></path>
          </svg>
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-5"
          >
            <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[540px] relative">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
                <p class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#555]">
                  {{ props.profile.engrNm }}
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#555]">
                  {{ props.profile.compNm }}
                </p>
              </div>
              <button class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]">
                이력서 다운받기
              </button>
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">상태</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">선정대기</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#ff5252]">선정탈락</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]">선정합격</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">미팅예정</p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">생년월일</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">2000.02.22</p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">주소</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                  {{ props.profile.baseAddr }}
                </p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">상세주소</p>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                  {{ props.profile.dtlAddr }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[720px] h-px bg-[#ddd]"></div>
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
          <p class="flex-grow-0 flex-shrink-0 w-[150px] text-base font-bold text-left text-[#191919]">
            기본 인적사항
          </p>
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-4"
          >
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">등급</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">초급 엔지니어</p>
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">경력</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{props.profile.crrMon}}년 {{props.profile.crrYear}}개월</p>
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">최종학력</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{props.profile.schlNm}}</p>
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">학과</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{props.profile.dprt}}</p>
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">자격증</p>
              <div v-for="el in props.profile.crtfList" :key="el" >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{ el.crtfNm }}</p>
              </div>
              
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">업무스킬</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{props.profile.taskSkil }}</p>
            </div>
          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[720px] h-px bg-[#ddd]"></div>
        <div
          class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 relative gap-[30px]"
        >
          <div v-for="el in props.profile.engrProjHstrList" :key="el" >
            <!-- 반복내용 1 -->
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
              <p class="flex-grow-0 flex-shrink-0 w-[150px] text-base font-bold text-left text-[#191919]">
                프로젝트 수행 이력
              </p>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-4"
              >
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">
                    프로젝트 명
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">초급 엔지니어</p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">수행기간</p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                    2022.01.01 ~ 재직중
                  </p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">직군</p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">Web</p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">클라이언트</p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">배달의 민족</p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">업무 영역</p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">모바일</p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">활용 Tool</p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                    엑셀, 지라, 레드마인
                  </p>
                </div>
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] relative gap-5"
                >
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">업무 내용</p>
                  <div
                    class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#333]">
                      프로젝트 설명 및 주요 담당 업무
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">더보기</p>
                  </div>
                  <!-- 펼침 -->
                  <div
                    class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                  >
                    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                      <div
                        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#333]">
                          프로젝트 설명 및 주요 담당 업무
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                          <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]"
                            >현재상황은 시나리오 및 기획서만 만들어져 있는 상태입니다.</span
                          ><br /><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]"
                            >TC 및 테스트와 관련된 문서는 없습니다.</span
                          >
                        </p>
                      </div>
                      <div
                        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#333]">
                          업무스킬
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                          <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]"
                            >현재상황은 시나리오 및 기획서만 만들어져 있는 상태입니다.</span
                          ><br /><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]"
                            >TC 및 테스트와 관련된 문서는 없습니다.</span
                          >
                        </p>
                      </div>
                      <div
                        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#333]">
                          기타 사항
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                          <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]"
                            >현재상황은 시나리오 및 기획서만 만들어져 있는 상태입니다.</span
                          ><br /><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]"
                            >TC 및 테스트와 관련된 문서는 없습니다.</span
                          >
                        </p>
                      </div>
                    </div>
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">접기</p>
                  </div>                  
                  <!-- 펼침 끝 -->
                </div>
              </div>
            </div>
            <!-- 구분선 -->
            <div class="flex-grow-0 flex-shrink-0 w-[540px] h-px bg-[#ddd]"></div>
          </div>
        </div>
      </div>
    </div>

    {{ props.mode }}
    
    <!-- 하단 버튼 제어-->
    <!-- 프로젝트지원 엔지니어 선택.... -->
    <!-- 지원취소 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5" v-show="props.mode == '10'">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]" @click="$emit('popBtn1')">
          지원취소
        </button>
      </div>
    </div>

    <!-- 수정하기 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5" v-show="props.mode == '20'">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]" @click="$emit('popBtn1')">수정하기</button>
      </div>
    </div>

    <!-- 등록프로젝트 엔지니어 선택.... -->
    <!-- 선정후 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5" v-show="props.mode == '30'">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]" @click="$emit('popBtn1')">불합격</button>
      </div>
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
      >
        <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white" @click="$emit('popBtn2')">미팅요청</button>
      </div>
    </div>

    <!-- 선정전 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5" v-show="props.mode == '40'">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]" @click="$emit('popBtn1')">불합격</button>
      </div>
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
      >
        <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white" @click="$emit('popBtn2')">선정하기</button>
      </div>
    </div>

    <!-- 선정대기 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5" v-show="props.mode == '50'">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]" @click="$emit('popBtn1')">선정대기</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  mode:{default:"99"},
  profile:{
    // "engrId": "엔지니어 id",
    // "engrNm": "엔지니어 이름",
    // "engrRtngDivCd": "엔제니어 등급 구분 코드",
    // "engrRtndDivCdNm": "엔지니어 등급 구분 코드 명",
    // "crrYear": "경력 년",
    // "crrMon": "경력 월",
    // "projSprtSeq": "string",
    // "schlNm": "string",
    // "compNm": "string",
    // "engrSprtStatCd": "string",
    // "bith": "string",
    // "baseAddr": "string",
    // "dtlAddr": "string",
    // "dprt": "string",
    // "taskSkil": "string",
    // "engrPhotUrl": "string",
    // "crtfList": [
    //   {
    //     "crtfNm": "string",
    //     "acqsDt": "string"
    //   }
    // ],
    // "engrProjHstrList": [
    //   {
    //     "engrProjHstrSeq": "string",
    //     "projTitl": "string",
    //     "strtYm": "string",
    //     "endYm": "string",
    //     "crntProjPrgsYn": "string",
    //     "clntNm": "string",
    //     "projUseTool": "string",
    //     "projCtntTask": "string",
    //     "projDmndSkil": "string",
    //     "projEtcInfo": "string",
    //     "crrYear": "string",
    //     "crrMon": "string",
    //     "jobDivCdList": [
    //       {
    //         "jobDivCd": "string"
    //       }
    //     ],
    //     "taskDivCdList": [
    //       {
    //         "jobDivCd": "string"
    //       }
    //     ]
    //   }
    // ]
  },

})

</script>