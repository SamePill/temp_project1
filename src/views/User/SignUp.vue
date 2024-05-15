<template>
  <div
    class="flex flex-col justify-start items-center w-[1920px] h-[1080px] overflow-hidden gap-10 px-[745px] py-[110px] bg-white"
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
              >1 </span
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
      class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-20"
    >
      <div
        class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[60px]"
      >
        <div
          class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5"
        >
          <input
            class="text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
            type="text"
            placeholder="이메일"
            v-model="signUp.joinOneStep.userMail"
          />         
          <input
            class="text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
            type="text"
            placeholder="이름"
            v-model="signUp.joinOneStep.userNm"
            />          
          <div
            class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5"
          >
            <div
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5"
            >
              <input
                type="text"
                class="text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[300px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                placeholder="휴대폰번호"
                v-model="signUp.joinOneStep.userHp"
                />
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[120px] h-[51px] relative overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
              >
                <button
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                >
                  인증번호 재전송
                </button>
              </div>
            </div>
            <div
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5"
            >
              <input
                type="text"
                class="text-base font-medium text-left text-[#191919] flex justify-between items-center flex-grow-0 flex-shrink-0 w-[300px] h-[51px] relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
                placeholder="인증번호"
                v-model="authNo"
              />                
                <!-- <p
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]"
                >
                  {{  }}
                </p> -->

              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[120px] h-[51px] relative overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#1ba494]"
              >
                <button
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]"
                >
                  인증번호 확인
                </button>
              </div>
            </div>
          </div>
          <input
            class="text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
            type="password"
            placeholder="비밀번호"
            v-model="signUp.joinOneStep.pass"
            />
          <input
            class="text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
            type="password"
            placeholder="비밀번호"
            v-model="signUp.joinOneStep.confirmPass"
            />
        </div>
        <div
          class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[430px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
        >
          <button
            class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white"
            @click="nextPage()"
          >
            다음 단계로 넘어가기
          </button>
        </div>
      </div>
      <div
        class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10"
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
</template>

<script setup>
import {  ref } from "vue";
// import * as gfnRules from "@/utils/gfnRules.js";
// import * as gfnUtils from "@/utils/gfnUtils.js";
import { useRouter } from 'vue-router';

const router = useRouter()
const authNo = ref('')
const signUp = ref(
                  {
                    joinOneStep: {
                        userMail: "",
                        pass: "",
                        confirmPass: "",
                        userNm: "",
                        hp: ""
                    },
                    joinTwoStep: {
                      privTrmsYn: "",
                      useTrmsYn: "",
                      mrktMailRcptYn: "",
                      mrktSmsRcptYn: "",
                      compNm: "",
                      compBaseAddr: "",
                      compDtlAddr: "",
                      bizRegNo: ""
                    }
                  })

function nextPage(){
  console.log(authNo.value)

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log(signUp.value)
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@")
  // const signUpdData = signUp.value.map(item => item);
  router.push({ name: "signUpApply"
             // ,state: { data : signUp.value}
               ,params: {  paramData : signUp }
            });
}
</script>