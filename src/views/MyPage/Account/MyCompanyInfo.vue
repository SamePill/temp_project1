<template>
  <div
    class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-5 px-[430px] pt-10 pb-[100px] bg-[#fefefe]"
  >
    <SubHeader/>
    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
      <SideMenu/>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-5">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]">기본 정보</p>
            <p class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919]">화사 정보</p>
          </div>
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] overflow-hidden gap-10 px-5 py-10 rounded-[10px] bg-white border border-[#ddd]"
          >
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">회사명</p>
              <div
                class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">리드워크</p>
              </div>
            </div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">회사주소</p>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">
                    서울특별시 강남구 논현로 125길 9길 타워빌딩
                  </p>
                </div>
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">
                    10층 1016호
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">사업자번호</p>
              <div
                class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">
                  704-81-01605
                </p>
              </div>
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <div
                class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[540px] relative"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">사업자등록증</p>
                <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">
                  최대 50MB 까지
                </p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[360px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                    png, jpg 만 첨부가능합니다.
                  </p>
                </div>
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-0.5 p-4 rounded bg-[#ededed] border border-[#ddd]"
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
                      d="M8.6335 3.16667C8.6335 2.79848 8.34248 2.5 7.9835 2.5C7.62451 2.5 7.3335 2.79848 7.3335 3.16667V13.8333C7.3335 14.2015 7.62451 14.5 7.9835 14.5C8.34248 14.5 8.6335 14.2015 8.6335 13.8333V3.16667Z"
                      fill="#555555"
                    ></path>
                    <path
                      d="M13.3333 9.13301C13.7015 9.13301 14 8.84199 14 8.48301C14 8.12402 13.7015 7.83301 13.3333 7.83301L2.66667 7.83301C2.29848 7.83301 2 8.12402 2 8.48301C2 8.84199 2.29848 9.13301 2.66667 9.13301H13.3333Z"
                      fill="#555555"
                    ></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">파일추가</p>
                </div>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-3"
              >
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-2"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1585d7]">
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
                    <rect width="16" height="16" transform="translate(0 0.5)" fill="white"></rect>
                    <path
                      d="M4 4.5L12 12.5"
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
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <div
                class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[540px] relative"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">회사로고</p>
                <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">
                  최대 50MB 까지
                </p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[360px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                    png, jpg 만 첨부가능합니다.
                  </p>
                </div>
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-0.5 p-4 rounded bg-[#ededed] border border-[#ddd]"
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
                      d="M8.6335 3.16667C8.6335 2.79848 8.34248 2.5 7.9835 2.5C7.62451 2.5 7.3335 2.79848 7.3335 3.16667V13.8333C7.3335 14.2015 7.62451 14.5 7.9835 14.5C8.34248 14.5 8.6335 14.2015 8.6335 13.8333V3.16667Z"
                      fill="#555555"
                    ></path>
                    <path
                      d="M13.3333 9.13301C13.7015 9.13301 14 8.84199 14 8.48301C14 8.12402 13.7015 7.83301 13.3333 7.83301L2.66667 7.83301C2.29848 7.83301 2 8.12402 2 8.48301C2 8.84199 2.29848 9.13301 2.66667 9.13301H13.3333Z"
                      fill="#555555"
                    ></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">파일추가</p>
                </div>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-3"
              >
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-2"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1585d7]">
                    회사로고 이미지.png
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
                    <rect width="16" height="16" transform="translate(0 0.5)" fill="white"></rect>
                    <path
                      d="M4 4.5L12 12.5"
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
