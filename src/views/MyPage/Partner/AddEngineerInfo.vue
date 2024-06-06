<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[700px] pt-10 pb-[100px] bg-[#fefefe]"
    >
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative gap-2.5"
          >
            <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919] font-medium">
                엔지니어 추가
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-left">
                <span class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]"
                  >1 </span
                ><span class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#777]">/</span
                ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]">2</span>
              </p>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[519px] h-px bg-[#191919]"></div>
          </div>
          <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">프로필 사진</p>
            </div>
            <div class="mt-[20px] flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative border border-[#ddd] rounded " >
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
            </div>
            <button class="flex mt-[10px] justify-center items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-0.5 py-2.5 rounded bg-[#ededed] border border-[#ddd] text-left text-[#555]">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none">
                    <path
                      d="M8.63398 3.16667C8.63398 2.79848 8.34297 2.5 7.98398 2.5C7.625 2.5 7.33398 2.79848 7.33398 3.16667V13.8333C7.33398 14.2015 7.625 14.5 7.98398 14.5C8.34297 14.5 8.63398 14.2015 8.63398 13.8333V3.16667Z"
                      fill="#555555"></path>
                    <path
                      d="M13.3333 9.13301C13.7015 9.13301 14 8.84199 14 8.48301C14 8.12402 13.7015 7.83301 13.3333 7.83301L2.66667 7.83301C2.29848 7.83301 2 8.12402 2 8.48301C2 8.84199 2.29848 9.13301 2.66667 9.13301H13.3333Z"
                      fill="#555555"></path>
                </svg>
                사진추가
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">이름 및 상태 </span>
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <input type="text" class="flex h-[51px] w-[340px] p-4 rounded border border-[#ddd] text-left text-[#191919]" placeholder="이름을 입력해주세요."/>
            <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-40 h-[51px] relative overflow-hidden p-4 rounded bg-[#ddd]">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">재직</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">생년월일 </span
            ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex h-[51px] justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]">
              <input type="number" placeholder="YYYY" min="1" max="31" style="border:none"/>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">년</p>
            </div>
            <div
              class="flex h-[51px] justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <input type="number" placeholder="MM" min="1" max="12" style="border:none"/>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">월</p>
            </div>
            <div class="flex h-[51px] justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]">
              <input type="number" placeholder="DD" min="1" max="31" style="border:none"/>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">일</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">주소 </span>
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
          </p>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
            <input type="text" placeholder="주소를 입력해주세요." class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]">
            <input type="text" placeholder="상세주소를 입력해주세요.." class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]">
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">최종학력 </span
            ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div
              class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-40 h-[51px] relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">대학교</p>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 9.5L12 15.5L19 9.5"
                  stroke="#191919"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <input type="text" placeholder="학교명을 입력해주세요." class="h-[51px] w-[340px] p-4 rounded bg-white border border-[#ddd]">
          </div>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">학과</p>
            <input type="text" placeholder="전공학과를 입력해주세요." class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]">
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-5"
          >
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">경력 </span
              ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] gap-5">
            <div
              class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]">
                초급 엔지니어
              </p>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 6.5L8 10.5L13 6.5"
                  stroke="#191919"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div
              class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">0</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">년</p>
            </div>
            <div
              class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">0</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">개월</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[520px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">업무스킬 </span>
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-[3px] rounded-[100px] bg-white border border-[#1ba494]">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">작성 TIP</p>
            </div>
          </div>
          <input type="text" placeholder="예) 지라, 레드마인, 포토샵, 일러스트" class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]">
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[520px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">자격증</p>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <div class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"></div>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left">추가하기</p>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">자격증 명</p>
              <input type="text" placeholder="자격증 명을 입력해주세요." class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]">
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">취득일자</p>
                <input type="date" class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[60px]">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">자격증 1</p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">삭제하기</p>
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">자격증 명</p>
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                    자격증 명을 입력해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white flex justify-center items-center flex-grow-0 flex-shrink-0 w-[520px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
            @click="nextStep()"
          >
            
              다음 단계로 넘어가기
            
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function nextStep(){
    router.push({name: "AddEngineerCareerList"})
  }
</script>