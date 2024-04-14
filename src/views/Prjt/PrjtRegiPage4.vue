<template>
  <div>
    <div class="mt-[30px]">
      <div class="flex justify-between items-center w-[520px] relative">
        <p class="text-xl text-left text-[#191919] mb-[20px;]">회사명</p>
      </div>
      <input tye="text" v-model="params.cmpyName" class="w-[520px] h-[51px] text-base text-left text-[#777] p-4 rounded bg-[#ddd] border border-[#ddd]" placeholder="회사명을 입력해주세요." disabled="disabled"/>
    </div>
    <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
      <p class="text-xl text-left text-[#191919]">담당자 이름
        <span class="text-[#ff5252]">*</span></p>
      <div class="flex flex-col justify-center items-start gap-2">
        <input type="text" class="w-[520px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="담당자 이름을 입력해주세요."/>
      </div>
    </div>
    <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
      <p class="text-xl text-left text-[#191919]">담당자 휴대폰 번호
        <span class="text-[#ff5252]">*</span>
      </p>
      <div class="flex justify-start items-start gap-5">
        <input type="text" class="w-[520px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="담당자 휴대폰 번호를 입력해주세요."/>
      </div>
    </div>
    <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
      <p class="text-xl text-left text-[#191919]">담당자 이메일
        <span class="text-[#ff5252]">*</span>
      </p>
      <div class="flex justify-start items-start gap-5">
        <input type="text" class="w-[520px] h-[51px] text-base text-left text-[#999] p-4 rounded border border-[#ddd]" placeholder="담당자 이메일을 입력해주세요."/>
      </div>
    </div>
    
    <div class="mt-[40px] flex flex-col justify-start items-start relative">
      <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
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
        </svg>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
          (필수) 큐밋 이용약관에 동의합니다.
        </p>
      </div>
      <div class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10">
        <p class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777]">상세보기</p>
      </div>
      <div class="mt-[20px] flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
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
        </svg>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
          (필수) 큐밋 이용약관에 동의합니다.
        </p>
      </div>
      <div class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10">
        <p class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777]">상세보기</p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  components:{
  } 
 ,props: {
  }
  ,data(){
    return {
      params:{
        cmpyName:'리드워크'
      }
    }
  }
  ,methods:{
    getInfo(){
      return this.params;
    }
  }
  ,mounted(){
  }
}
</script>