<template>
  <div
    class="flex flex-col justify-start items-center w-[1920px] h-[1080px] overflow-hidden gap-[120px] px-[745px] py-[110px] bg-white"
  >
    <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
      <div
        class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[430px] relative gap-5"
      >
        <button class="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-[#191919]"
          @click="router.push({name: 'Home'})">
          로고 영역
        </button>
        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">
          <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
            >이메일 찾기를 완료했습니다.</span
          ><br /><span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
            >로그인 후 큐밋을 이용해주세요.</span
          >
        </p>
      </div>
      <div class="flex-grow-0 flex-shrink-0 w-[430px] h-px bg-[#191919]"></div>
    </div>
    <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
      <div
        class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
      >
        <p class="flex-grow-0 flex-shrink-0 text-[28px] font-bold text-left text-[#191919]">
          {{ }} Qm***@gmail.com
        </p>
        <div class="flex-grow-0 flex-shrink-0 w-[266px] h-px bg-[#191919]"></div>
      </div>
      <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
        "마스킹 처리된 정보 확인 필요 시 고객센터 문의 바랍니다."
      </p>
    </div>
    <div
      class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-20"
    >
      <button
        class="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-white flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
      >
          로그인 하러가기
      </button>
      <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]">이용약관</p>
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
        <p class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]">
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
        <p class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]">
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
        <p class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]">
          © L-walk Corp
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>




</script>
