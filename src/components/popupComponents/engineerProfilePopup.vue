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
          style="cursor: pointer"
          @click="showMore=false;$emit('close')"
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
      <div class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 relative gap-[30px]" id="resume">
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
              <button class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494] hidden-print" @click="resumeDownClick">
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
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{ el.projTitl}}</p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">수행기간</p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                    {{ el.strtYm }} ~ {{ el.endYm }}
                  </p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">직군</p>
                  <div v-for="subEl in el.jobDivCdList" :key="subEl" >
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{ subEl.jobDivCdNm }}</p>
                  </div>                  
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">클라이언트</p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{ el.clntNm }}</p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">업무 영역</p>
                  <div v-for="subEl in el.taskDivCdList" :key="subEl" >
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">{{ subEl.taskDivCdNm }}</p>
                  </div>                                    
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">활용 Tool</p>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                    {{ el.projUseTool }}
                  </p>
                </div>
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] relative gap-5"
                >
                  <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">업무 내용</p>
                  <div
                    v-show="!showMore"
                    class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#333]">
                      프로젝트 설명 및 주요 담당 업무
                    </p>
                    <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]"  @click="showMore=true">더보기</button>
                  </div>
                  <!-- 펼침 -->
                  <div 
                    v-show="showMore"
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
                          <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                            {{ el.projCtntTask }}
                          </span>
                        </p>
                      </div>
                      <div
                        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#333]">
                          업무스킬
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                          <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                            {{ el.projDmndSkil }}
                          </span>
                        </p>
                      </div>
                      <div
                        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#333]">
                          기타 사항
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                          <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                            {{ el.projEtcInfo }}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]" @click="showMore=false">접기</button>
                  </div>                  
                  <!-- 펼침 끝 -->
                </div>
              </div>
            </div>
            <!-- 구분선 -->
            <div class="flex-grow-0 flex-shrink-0 w-[540px] h-px mt-[10px] bg-[#ddd]"></div>
          </div>
        </div>
      </div>
    </div>
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

import { defineProps, ref } from 'vue'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const showMore = ref(false)
//테스트중
async function  resumeDownClick(){
  const elementsToHide = document.getElementsByClassName('hidden-print');
  for (let i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = 'none';
  }

  const resume = document.getElementById('resume');
  const canvas = await html2canvas(resume, {
    scale: 1, // 더 높은 해상도를 위해 스케일을 높임
  });
  // 숨긴 요소를 다시 보이게 설정
  for (let i = 0; i < elementsToHide.length; i++) {
    elementsToHide[i].style.display = '';
  }
  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgWidth = 210; // A4 크기 너비(mm)
  const pageHeight = 297; // A4 크기 높이(mm)
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  const margin = 0; // 페이지 분할 시 추가할 여백

  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight + margin;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save('resume.pdf');  
}

const props = defineProps({
  mode:{},
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