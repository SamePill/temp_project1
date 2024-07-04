<template>
  <div>
    <div
      class="pt-[110px] flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10"
    >
      <div
        class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5"
      >
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[430px] relative gap-5"
        >
          <button
            class="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-[#191919]"
            @click="router.push({name: 'Home'})"
            >
            로고 영역
          </button>
          <p
            class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
          >
            <span
              class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
              >클라이언트와 </span
            ><br />
            <span
              class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
              >QA 파트너스의 만남</span
            >
          </p>
        </div>
        <div
          class="flex-grow-0 flex-shrink-0 w-[430px] h-px bg-[#191919]"
        ></div>
      </div>
      <div
        class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5"
      >
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
        >     
          <input
            type="text"
            v-model="email"
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
            @keyup="btnStatChng()"
            @blur="ruleChk()"
            placeholder="이메일"
          />
          <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]"
           v-show="!emailChk">
            이메일이 올바르지 않습니다. 다시 한번 확인해주세요.
          </p>
        </div>

        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2 mb-[70px] "
        > 
          <input
            type="password"
            v-model="pswd"
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
            @keyup="btnStatChng()"
            @blur="ruleChkPwd()"
            placeholder="비밀번호"
          />
          <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]"
          v-show="!pwdChk">
            이메일 또는 비밀번호가 올바르지 않습니다. 다시 한번 확인해주세요.
          </p>
        </div>

      </div>
    </div>
    <div
      class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-20"
    >
      <button
        :class='(btnIsActv ? "bg-[#1BA494]" : "bg-[#999]") + " flex justify-center items-center flex-grow-0 flex-shrink-0 w-[430px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded text-white"'
        @click="reqLogin()"
      >
        로그인 하기
      </button>
      <div
        class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10"
      >
        <div
          class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5"
        >
          <button
            class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
            @click="signUp()"
          >
            회원가입
          </button>
          <svg
            width="1"
            height="13"
            viewBox="0 0 1 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M0.5 0.5V12.5"
              stroke="#DDDDDD"
              stroke-linecap="round"
            ></path>
          </svg>
          <button
            class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
            @click="findId()"
          >
            이메일 찾기
          </button>
          <svg
            width="1"
            height="13"
            viewBox="0 0 1 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path
              d="M0.5 0.5V12.5"
              stroke="#DDDDDD"
              stroke-linecap="round"
            ></path>
          </svg>
          <button
            class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
            @click="resetPassword()"
          >
            비밀번호 찾기
          </button>
        </div>
        <div
          class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
        >
          <button
            class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]"
          >
            이용약관
          </button>
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
          <button
            class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]"
          >
            개인정보처리방침
          </button>
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
import { ref } from "vue";
import * as gfnRules from "@/utils/gfnRules.js";
import * as gfnUtils from "@/utils/gfnUtils.js";
import { useRouter } from "vue-router";

const router = useRouter();
// const route = useRoute()
const email = ref("");
const pswd = ref("");
const btnIsActv = ref(false);
const emailChk = ref(true)
const pwdChk = ref(true)
// const postParams = reactive({userMail : "" , pass: ""})

function btnStatChng() {
  // console.log(email.value == "");
  // console.log(pswd.value == "");
  if (email.value == "" || pswd.value == "") {
    btnIsActv.value = false;
  } else {
    btnIsActv.value = true;
  }
}




function ruleChk() {
  emailChk.value = gfnRules.validEmail(email.value);
}

function ruleChkPwd(){
  pwdChk.value = gfnRules.validPwd(pswd.value);
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;

  // let password = pswd.value //"Abcdef1!"; // 이 비밀번호는 조건을 만족합니다.
  // if (passwordRegex.test(password)) {
  //     console.log("비밀번호가 유효합니다.");
  // } else {
  //     console.log("비밀번호가 유효하지 않습니다.");
  // }
}

async function reqLogin() {

  if( btnIsActv.value != true){
    return
  } 

  var api = "/v1/auth/login";
  var postParams = { userMail: email.value, pass: pswd.value };

  //var loading = "";
  //var isErr = "";
  var rtn = await gfnUtils.axiosPost(api, postParams);
  if (rtn.rtnCd == "00") {
    router.replace("/");
  } else {
    gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
  }
}

function resetPassword() {
  router.push({name: 'ResetPassword'});
}

function findId() {
  router.push({name: 'FindId'});
}

function signUp() {
  router.push({name: 'SignUp'});
}
</script>
<style scoped>
</style>