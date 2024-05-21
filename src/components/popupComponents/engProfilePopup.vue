<template>
  <div
    class="flex flex-col justify-start items-center w-[800px] overflow-hidden gap-[30px] px-10 pt-[30px] pb-[60px] bg-white"
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
                김 큐 밋
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#555]">
                (주)리드워크
              </p>
            </div>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]">
              이력서 다운받기
            </p>
          </div>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">상태</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">선정대기</p>
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">생년월일</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">2000.02.22</p>
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">주소</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                서울특별시 금천구 디지털로9길 41
              </p>
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">상세주소</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
                삼성 IT 해링턴타워 10층 1016호
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
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">3년 6개월</p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">최종학력</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">서울대학교(4년제)</p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">학과</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">컴퓨터 전공학과</p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">자격증</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">ISTQB</p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">업무스킬</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">지라, 레드마인</p>
          </div>
        </div>
      </div>
      <div class="flex-grow-0 flex-shrink-0 w-[720px] h-px bg-[#ddd]"></div>
      <div
        class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 relative gap-[30px]"
      >
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
            </div>
          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[540px] h-px bg-[#ddd]"></div>
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-4"
        >
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">프로젝트 명</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">초급 엔지니어</p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">수행기간</p>
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#333]">
              2022.01.01 ~ 2022.01.01
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
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 w-20 text-base text-left text-[#555]">업무 내용</p>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#333]">
                프로젝트 설명 및 주요 담당 업무
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">더보기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 지원취소 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">
          지원취소
        </p>
      </div>
    </div>

    <!-- 수정하기 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">수정하기</p>
      </div>
    </div>


    <!-- 선정후 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">불합격</p>
      </div>
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">미팅요청</p>
      </div>
    </div>

    <!-- 선정전 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">불합격</p>
      </div>
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">선정하기</p>
      </div>
    </div>

    <!-- 선정대기 -->
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">선정대기</p>
      </div>
    </div>

  </div>
</template>


<script setup>
import { defineProps } from 'vue'

const props = defineProps({
})

</script>