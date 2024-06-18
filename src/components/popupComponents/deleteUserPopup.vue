<template>
  <div
    class="flex flex-col justify-start items-end w-[640px] overflow-hidden gap-5 p-[30px] bg-white"
  >
    <div class="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative gap-5">
      <div class="flex-grow-0 flex-shrink-0 w-[580px] h-[74px] relative">
        <div class="w-[300px] h-2.5 absolute left-[-1px] top-[80px] bg-[#76c8bf]"></div>
        <p class="w-[580px] absolute left-0 top-0 text-[31px] font-bold text-left text-[#191919]">
          <span class="w-[580px] text-[31px] font-bold text-left text-[#191919]">어떤점이</span
          ><br /><span class="w-[580px] text-[31px] font-bold text-left text-[#191919]"
            >마음에 들지 않으셨어요?</span
          >
        </p>
        <div @click="$emit('close')" style="cursor: pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 absolute left-[556px] top-0"
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
      </div>
      <div class="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#ddd]"></div>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[580px] gap-5">
        <!-- 반복부 -->
        <div v-for="(el,idx) in messages" :key="idx">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="none"
              @click="check(idx)"
            >
              <circle v-if="el.chk " cx="16" cy="16" r="12" fill="#1BA494"></circle>
              <circle v-else cx="16" cy="16" r="11.25" stroke="#DDDDDD" stroke-width="1.5"></circle>
              
              <path
                d="M11 15.2L14.5924 19.7983C14.6725 19.9008 14.8275 19.9008 14.9076 19.7983L21 12"
                :stroke='(el.chk ?  "white" : "#DDDDDD")'
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>

            <p :class='(el.chk ? "text-[#666]  font-bold":"text-[#333]  font-medium" ) +  " flex-grow-0 flex-shrink-0 text-base text-left "'>
              {{el.cdNm}}
            </p>
          </div>
        </div>
        <textarea
            class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-start flex-grow-0 flex-shrink-0 w-[580px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
            placeholder="탈퇴하시는 사유를 입력해주세요."
          />
      </div>
    </div>
    <div class="flex justify-end items-start flex-grow-0 flex-shrink-0 gap-5">
      <button
        class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555] flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#dbdbdb]"
        @click="process()"
      >
        탈퇴하기
      </button>
      <button
        class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
        @click="$emit('close')"
      >
        돌아가기
      </button>
    </div>
  </div>
</template>


<script setup>
  import { ref, computed } from 'vue'

  const messages = ref(
     [{cd:'01', cdNm:'사용하기 어려워요.1', chk:true},
     {cd:'02', cdNm:'사용하기 어려워요.2', chk:false},
     {cd:'03', cdNm:'사용하기 어려워요.3', chk:false},
     {cd:'04', cdNm:'사용하기 어려워요.4', chk:false},
     {cd:'99', cdNm:'기타', chk:false}]
  )
  const msgLength = computed(() => messages.value.length)

  function check(idx){
    
    for (let i = 0; i< msgLength.value; i++){
      if(i == idx){
        messages.value[i].chk = true
      }else{
        messages.value[i].chk = false
      }
    }  

  }

  function process(){
    alert("탈퇴처리....");
  }

// const props = defineProps({
//   message:""
//   ,btnOk:""
//   ,btnCancel:""
// })

</script>
