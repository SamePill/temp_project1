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
          <p
            class="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-[#191919]"
          >
            로고 영역
          </p>
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
        <input
          type="text"
          v-model="email"
          class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
          @keyup="btnStatChng()"
          @blur="ruleChk()"
          placeholder="이메일"
        />
        <input
          type="password"
          v-model="pswd"
          class="mb-[70px] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
          @keyup="btnStatChng()"
          placeholder="비밀번호"
        />
      </div>
    </div>
    <div
      class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-20"
    >
      <button
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[430px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#999] text-white"
        :class="btnIsActv ? 'bg-[#1BA494]' : ''"
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
// import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
// const route = useRoute()
const email = ref("");
const pswd = ref("");
const btnIsActv = ref(false);
// const postParams = reactive({userMail : "" , pass: ""})

function btnStatChng() {
  console.log(email.value == "");
  console.log(pswd.value == "");
  if (email.value == "" || pswd.value == "") {
    btnIsActv.value = false;
  } else {
    btnIsActv.value = true;
  }
}
function ruleChk() {
  console.log("체크");
  console.log(gfnRules.validEmail(email.value));
}

async function reqLogin() {
  console.log(email.value);
  console.log(pswd.value);

  var api = "/v1/auth/login";
  var postParams = { userMail: email.value, pass: pswd.value };

  console.log("val ::" + postParams);

  //var loading = "";
  //var isErr = "";
  var rtn = await gfnUtils.axiosPost(api, postParams);
  if (rtn.rtnCd == "00") {
    console.log(rtn)
    router.replace("/");
  } else {
    console.log("에러처리...");
  }
}

function resetPassword() {
  router.push({name: 'ResetPassword'});
}

function findId() {
  router.push({name: 'FindId'});
}

function signUp() {
  router.push({name: 'signUp'});
}
</script>
<style scoped>
</style>