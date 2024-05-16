<template>
  <div>
    <div class="flex flex-col justify-start items-center py-[110px] bg-white">
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
            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <p
              class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
            >
              이메일 찾기
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
              가입하신 휴대폰 번호를 입력하고 인증번호를 입력해주세요.
            </p>
          </div>
        </div>
        <div
          class="flex-grow-0 flex-shrink-0 w-[430px] h-px bg-[#191919]"
        ></div>
      </div>
      <div
        class="pt-[40px] flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5"
      >
        <div
          class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5"
        >
          <input
            type="text"
            v-model="hp"
            class="w-[300px] h-[51px] text-[#191919] p-4 rounded border border-[#ddd]"
            placeholder="휴대폰 번호"
          />
          <button
            @click="sendAutoNo()"
            class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[120px] h-[51px] relative overflow-hidden gap-2.5 p-2.5 rounded"
            :class="hp == '' ? 'bg-[#999]' : 'bg-white border border-[#1ba494]'"
            :disabled="hp == ''"
          >
            <p
              class="flex-grow-0 flex-shrink-0 text-base text-left"
              :class="hp == '' ? 'text-white' : 'text-[#1ba494]'"
            >
              {{ sendHpBtn }}
            </p>
          </button>
        </div>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]">
          가입되어 있지 않은 휴대폰 번호입니다. 다시 확인해주세요.
        </p>
      </div>
      <div
        class="pt-[40px] flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5"
        style="display: none"
      >
        <div
          class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5"
        >
          <input
            type="text"
            v-model="authNo"
            class="w-[300px] h-[51px] text-[#191919] p-4 rounded border border-[#ddd]"
            placeholder="인증 번호"
          />
          <button
            @click="sendAutoNo()"
            class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[120px] h-[51px] relative overflow-hidden gap-2.5 p-2.5 rounded"
            :class="hp == '' ? 'bg-[#999]' : 'bg-white border border-[#1ba494]'"
            :disabled="hp == ''"
          >
            <p
              class="flex-grow-0 flex-shrink-0 text-base text-left"
              :class="authNo == '' ? 'text-white' : 'text-[#1ba494]'"
            >
              인증번호 확인
            </p>
          </button>
        </div>
      </div>
      <div class="w-[430px] pt-[8px]">
        <p
          v-show="isAuthFail"
          style="
            flex-grow: 0;
            flex-shrink: 0;
            font-size: 14px;
            text-align: left;
            color: #ff5252;
          "
        >
          인증번호가 올바르지 않습니다. 다시 확인해주세요.
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]">
          인증번호가 올바르지 않습니다. 다시 확인해주세요.
        </p>
      </div>
      <div
        class="pt-[80px] flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
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
</template>
<script setup>
import { ref } from "vue";
import * as gfnUtils from "@/utils/gfnUtils.js";

const hp = ref("");
const authNo = ref("");
const isAuthFail = ref(false);
const sendHpBtn = ref("인증번호 전송");

async function sendAutoNo() {
  let api = "/v1/auth/find-hp";
  let postParams = { hp: hp.value, authNo: authNo.value };

  let rtn = await gfnUtils.axiosPost(api, postParams);
  console.log("@@@--------------------------------");
  console.log(rtn);

  if (rtn.rtnCd == "00") {
    sendHpBtn.value = "인증번호 재전송";
  } else {
    console.log("에러");
  }
}
</script>