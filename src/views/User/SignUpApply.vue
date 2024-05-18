<template>
  <div style="display: flex; justify-content: center;" >
    <div
      class="flex flex-col justify-start items-center w-[430px] overflow-hidden gap-10 pt-[110px] pb-[100px] bg-white"
    >
      <div
        class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5"
      >
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[430px] relative gap-5"
        >
          <p
            class="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-[#191919]"
          >
            로고 영역
          </p>
          <div
            class="flex justify-between items-end flex-grow-0 flex-shrink-0 w-[430px] relative"
          >
            <p
              class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
            >
              <span
                class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                >회원가입을 위해 </span
              ><br /><span
                class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                >정보를 입력해주세요.</span
              >
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-left">
              <span
                class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]"
                >2 </span
              ><span
                class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#777]"
                >/</span
              ><span
                class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]"
                >2</span
              >
            </p>
          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[430px] h-px bg-[#191919]"></div>
      </div>
      <div
        class="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 gap-20"
      >
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-10"
        >
          <div
            class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5"
          >
            <input
              type="text"
              class="text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
              placeholder="회사명"
            />
            <input
              type="text"
              class="text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
              placeholder="사업자등록번호"
            />
            <div
              class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]"
              >
                서울특별시 금천구 디지털로9길 41
              </p>
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
                  d="M9 19.5L15 12.5L9 5.5"
                  stroke="#191919"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <input
              class="text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
              type="text"
              placeholder="상세주소"
            />
            <div
              class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[430px] gap-5"
            >
              <div
                class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5"
              >
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]"
                  >
                    회사 로고를 추가해주세요. (PNG,JPG)
                  </p>
                  <input type="file" id="upload-log" hidden />
                </div>
                <label for="upload-log">
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[120px] relative overflow-hidden gap-0.5 p-4 rounded bg-[#ededed] border border-[#ddd]"
                  >
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
                        d="M8.63337 3.16667C8.63337 2.79848 8.34236 2.5 7.98337 2.5C7.62439 2.5 7.33337 2.79848 7.33337 3.16667V13.8333C7.33337 14.2015 7.62439 14.5 7.98337 14.5C8.34236 14.5 8.63337 14.2015 8.63337 13.8333V3.16667Z"
                        fill="#555555"
                      ></path>
                      <path
                        d="M13.3333 9.13301C13.7015 9.13301 14 8.84199 14 8.48301C14 8.12402 13.7015 7.83301 13.3333 7.83301L2.66667 7.83301C2.29848 7.83301 2 8.12402 2 8.48301C2 8.84199 2.29848 9.13301 2.66667 9.13301H13.3333Z"
                        fill="#555555"
                      ></path>
                    </svg>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"
                    >
                      파일추가
                    </p>
                  </div>
                </label>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[430px] gap-3"
              >
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] relative gap-2"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 w-[116px] text-base font-medium text-left text-[#1585d7]"
                  >
                    회사 로고.png
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
                    <rect
                      width="16"
                      height="16"
                      transform="translate(0 0.5)"
                      fill="white"
                    ></rect>
                    <path
                      d="M4.00006 4.5L12.0001 12.5"
                      stroke="#999999"
                      stroke-width="1.3"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M12 4.5L4 12.5"
                      stroke="#999999"
                      stroke-width="1.3"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[430px] relative gap-5"
            >
              <div
                class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5"
              >
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]"
                  >
                    사업자 등록증을 추가해주세요.
                  </p>
                  <input type="file" id="upload-docu" hidden />
                </div>
                <label for="upload-docu">
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[120px] relative overflow-hidden gap-0.5 p-4 rounded bg-[#ededed] border border-[#ddd]"
                  >
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
                        d="M8.63337 3.16667C8.63337 2.79848 8.34236 2.5 7.98337 2.5C7.62439 2.5 7.33337 2.79848 7.33337 3.16667V13.8333C7.33337 14.2015 7.62439 14.5 7.98337 14.5C8.34236 14.5 8.63337 14.2015 8.63337 13.8333V3.16667Z"
                        fill="#555555"
                      ></path>
                      <path
                        d="M13.3333 9.13301C13.7015 9.13301 14 8.84199 14 8.48301C14 8.12402 13.7015 7.83301 13.3333 7.83301L2.66667 7.83301C2.29848 7.83301 2 8.12402 2 8.48301C2 8.84199 2.29848 9.13301 2.66667 9.13301H13.3333Z"
                        fill="#555555"
                      ></path>
                    </svg>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"
                    >
                      파일추가
                    </p>
                  </div>
                </label>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                <span
                  class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]"
                  >사업자 등록증을 추가해 주세요. </span
                ><br /><span
                  class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]"
                  >추가하지않을 시 엔지니어를 모집하기 어려울 수 있습니다.</span
                >
              </p>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[430px] gap-3"
              >
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] relative gap-2"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 w-[116px] text-base font-medium text-left text-[#1585d7]"
                  >
                    사업자등록증.pdf
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
                    <rect
                      width="16"
                      height="16"
                      transform="translate(0 0.5)"
                      fill="white"
                    ></rect>
                    <path
                      d="M4.00006 4.5L12.0001 12.5"
                      stroke="#999999"
                      stroke-width="1.3"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M12 4.5L4 12.5"
                      stroke="#999999"
                      stroke-width="1.3"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-[60px]"
          >
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5"
            >
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
                    @click="checkBox('privTrmsYn')"
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
                      v-show="signUp.joinTwoStep.privTrmsYn == 'Y'"
                    ></path>
                  </svg>
                  <p
                    class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
                  >
                    (필수) 큐밋 이용약관에 동의합니다.
                  </p>
                </div>
                <div
                  class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777]"
                  >
                    상세보기
                  </p>
                </div>
              </div>
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
                    @click="checkBox('useTrmsYn')"
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
                      v-show="signUp.joinTwoStep.useTrmsYn == 'Y'"
                    ></path>
                  </svg>
                  <p
                    class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
                  >
                    (필수) 개인정보 제 3자 제공에 동의합니다.
                  </p>
                </div>
                <div
                  class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777]"
                  >
                    상세보기
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5"
              >
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
                      @click="checkBox('mrktYn')"
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
                        v-show="signUp.joinTwoStep.mrktYn == 'Y'"
                      ></path>
                    </svg>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
                    >
                      (선택) 큐밋 소식, 이벤트 등 다양한 소식 받기
                    </p>
                  </div>
                </div>
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5 pl-9"
                >
                  <div
                    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
                  >
                    <div
                      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
                    >
                      <!-- 선택 -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                        v-show="signUp.joinTwoStep.mrktMailRcptYn == 'Y'"
                        @click="checkBoxMrkt('mrktMailRcptYn')"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="#1BA494"
                          @click="selEmail()"
                        ></circle>
                        <path
                          d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <!-- 미선택 -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                        v-show="signUp.joinTwoStep.mrktMailRcptYn != 'Y'"
                        @click="checkBoxMrkt('mrktMailRcptYn')"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="white"
                          stroke="#1BA494"
                          stroke-width="1"
                        ></circle>
                        <path
                          d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                          stroke="#1BA494"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <p
                        class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
                      >
                        이메일
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
                  >
                    <div
                      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
                    >
                      <!-- 선택 -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                        v-show="signUp.joinTwoStep.mrktSmsRcptYn == 'Y'"
                        @click="checkBoxMrkt('mrktSmsRcptYn')"
                      >
                        <circle cx="12" cy="12" r="10" fill="#1BA494"></circle>
                        <path
                          d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <!-- 미선택 -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                        v-show="signUp.joinTwoStep.mrktSmsRcptYn != 'Y'"
                        @click="checkBoxMrkt('mrktSmsRcptYn')"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="white"
                          stroke="#1BA494"
                          stroke-width="1"
                        ></circle>
                        <path
                          d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                          stroke="#1BA494"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <p
                        class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
                      >
                        문자메세지
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-5"
            >
              <button
                @click="prevPage()"
                class="text-base font-medium text-left text-[#1ba494] flex justify-center items-center flex-grow-0 flex-shrink-0 w-[205px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-white border border-[#1ba494]"
              >
                이전 단계로 이동
              </button>
              <button
                @click="regiUser()"
                class="text-base font-medium text-left text-white flex justify-center items-center flex-grow-0 flex-shrink-0 w-[205px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
              >
                회원가입 완료
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-10"
        >
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
          >
            <p
              class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]"
            >
              이용약관
            </p>
            <svg
              width="1"
              height="14"
              viewBox="0 0 1 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M0.5 1V13" stroke="#DDDDDD" stroke-linecap="round"></path>
            </svg>
            <p
              class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]"
            >
              개인정보처리방침
            </p>
            <svg
              width="1"
              height="14"
              viewBox="0 0 1 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M0.5 1V13" stroke="#DDDDDD" stroke-linecap="round"></path>
            </svg>
            <p
              class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]"
            >
              문의: 1000-0000
            </p>
            <svg
              width="1"
              height="14"
              viewBox="0 0 1 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path d="M0.5 1V13" stroke="#DDDDDD" stroke-linecap="round"></path>
            </svg>
            <p
              class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]"
            >
              © L-walk Corp
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, onBeforeRouteLeave  } from 'vue-router';
import * as gfnUtils from "@/utils/gfnUtils.js";

const router = useRouter()
const { dataObj } = history.state; // 이렇게 받는다.
const signUp = ref(JSON.parse(dataObj));

// {
//   "joinOneStep":
//   {"userMail":"sdasd","pass":"","confirmPass":"","userNm":"sdfdsf","hp":"","userHp":"sdfds"}
//  ,"joinTwoStep":
//   {"privTrmsYn":"","useTrmsYn":"","mrktMailRcptYn":"","mrktSmsRcptYn":"","compNm":"","compBaseAddr":"","compDtlAddr":"","bizRegNo":""}
// }
// signUp.value.joinTwoStep.mrktYn = "N"
// signUp.value.joinTwoStep.privTrmsYn = "N"
// signUp.value.joinTwoStep.useTrmsYn = "N"

console.log(dataObj); 
console.log(signUp.value)

function selEmail(){
  console.log("check!!!!!!!!!!!!!!!!!!")
}

function checkBox(id){
  console.log(id);
  
  if(id == "privTrmsYn"){
  
    if(signUp.value.joinTwoStep.privTrmsYn == "Y"){
      signUp.value.joinTwoStep.privTrmsYn = "N";
    }else{
      signUp.value.joinTwoStep.privTrmsYn = "Y";
    }
  
  }else if(id == "useTrmsYn"){

    if(signUp.value.joinTwoStep.useTrmsYn == "Y"){
      signUp.value.joinTwoStep.useTrmsYn = "N";
    }else{
      signUp.value.joinTwoStep.useTrmsYn = "Y";
    }

  }else if(id == "mrktYn"){
    
    if(signUp.value.joinTwoStep.mrktYn == "Y"){
      signUp.value.joinTwoStep.mrktYn = "N";
      signUp.value.joinTwoStep.mrktMailRcptYn = "N"
      signUp.value.joinTwoStep.mrktSmsRcptYn = "N";
    }else{
      signUp.value.joinTwoStep.mrktYn = "Y";
      signUp.value.joinTwoStep.mrktMailRcptYn = "Y"
      signUp.value.joinTwoStep.mrktSmsRcptYn = "Y";
    }

  }

}

function checkBoxMrkt(id){
  if(id == "mrktMailRcptYn"){
    
    if(signUp.value.joinTwoStep.mrktMailRcptYn == "Y"){
      signUp.value.joinTwoStep.mrktMailRcptYn = "N";
    }else{
      signUp.value.joinTwoStep.mrktMailRcptYn = "Y";
    }

  }else if(id == "mrktSmsRcptYn"){
    
    if(signUp.value.joinTwoStep.mrktSmsRcptYn == "Y"){
      signUp.value.joinTwoStep.mrktSmsRcptYn = "N";
    }else{
      signUp.value.joinTwoStep.mrktSmsRcptYn = "Y";
    }

  }
}

async function regiUser(){

  var api = "/v1/project/list";
  var postParams = {};
  let rtn = await gfnUtils.axiosGet(
    api,
    postParams
  );

  console.log(rtn)

}

function prevPage(){

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log(dataObj)
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@")
  //const signUpdData = signUp.value.map(item => item);
  router.push({ name: "signUp"
             ,state : {
                        //dataObj : { a:1, b:'string', c:true },
                        dataObj : dataObj,
                      }
            });
}

onBeforeRouteLeave((to, from, next) => {
  
  //next(false);  //뒤로가기 무력화
  console.log(to);
  console.log(from);
  console.log(next);
  // next(false);
});
</script>