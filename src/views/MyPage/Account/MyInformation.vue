<template>
  <div
    class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-5 px-[430px] pt-10 pb-[100px] bg-[#fefefe]"
  >
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
      <div
        class="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-[41px]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black">
          <span class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black">김현성님</span
          ><br /><span class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black"
            >안녕하세요</span
          >
        </p>
      </div>
      <div class="flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>
    </div>
    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
      <SideMenu/>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-5">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919]">기본 정보</p>
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]">회사정보</p>
          </div>
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] overflow-hidden gap-10 px-5 py-10 rounded-[10px] bg-white border border-[#ddd]"
          >
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">이메일</p>
              <div
                class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-[#ddd] border border-[#ddd]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">
                  kysstaw@naver.com
                </p>
              </div>
            </div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">이름</p>
              <div
                class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">김현성</p>
              </div>
            </div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">연락처</p>
              <div
                class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">
                  010-0000-0000
                </p>
              </div>
            </div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">이벤트 동의</p>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                <div
                  class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
                >
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
                      큐밋 소식, 이벤트 등 다양한 소식 받기
                    </p>
                  </div>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5 pl-9">
                  <div
                    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
                  >
                    <div
                      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                      >
                        <circle cx="12" cy="12" r="10" fill="#1BA494"></circle>
                        <path
                          d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">이메일</p>
                    </div>
                  </div>
                  <div
                    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
                  >
                    <div
                      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                      >
                        <circle cx="12" cy="12" r="10" fill="#1BA494"></circle>
                        <path
                          d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                        문자메세지
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[750px] relative"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]">
                비밀번호 변경
              </p>
              <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative">
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#666]">회원탈퇴</p>
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
                    d="M6 13.5L10 8.5L6 3.5"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] gap-5">
          <div
            class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
          >
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-white">수정하기</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//import SubHeader from '@/components/layoutComponents/SubHeader.vue'
//import SideMenu from '@/components/layoutComponents/SideMenu.vue'
</script>
