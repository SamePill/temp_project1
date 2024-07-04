<template>
  <div  >

    <div class="flex flex-col justify-start items-center w-[1920px] h-[1080px] overflow-hidden gap-[60px] px-[745px] py-[110px] bg-white">
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
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-5 mt-10">
        <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2" >
          <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
            <!-- 전송전 -->
            <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2">
              <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5">
                <!-- border-[#ddd] 오류시 border-[#ff5252]  -->
                <input
                  :class='(chkHp ? "border-[#ddd]" : "border-[#ff5252]") + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[300px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border" '
                  type="text"
                  placeholder="휴대폰번호"
                  v-model="hp"
                  @blur="ruleChkHp()"
                  :readonly="isInputReadonly"
                  @input="validateHp"
                  maxlength="11"
                />
                <button
                  :class='(blSendCertNo ? " bg-white border-[#ddd] text-[#191919]" :  (chkHp && hp.length > 0 ? " border-[#1ba494] bg-[#1BA494]  text-white" : "bg-[#999]  text-white")) + " flex-grow-0 flex-shrink-0 text-base text-left text-[#191919] flex justify-center items-center flex-grow-0 flex-shrink-0 w-[125px] h-[51px] relative overflow-hidden gap-2.5 p-2.5 rounded border "'
                  @click = "reqCertNo()"
                  :disabled="isButtonDisabled"
                >
                  <span v-show="!blSendCertNo">인증번호 전송</span>
                  <span v-show="blSendCertNo">인증번호 재전송</span>
                </button>
                
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="!chkHp">
                휴대폰 번호가 올바르지 않습니다. 다시 한번 확인해주세요.
              </p>
            </div>
            <!-- 전송후 -->
            
            <div style="position:relative" class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5" v-show="blSendCertNo">
              <input style="padding-right:100px" maxlength="6"
                :class='(certNoChk ? "border-[#ddd]" : "border-[#ff5252]")  + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-between items-center flex-grow-0 flex-shrink-0 w-[300px] h-[51px] relative overflow-hidden p-4 rounded bg-white border "'
                type="text"
                placeholder="인증번호"
                v-model="authNo"
                @input="validateCert"
                />
                <!-- <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]">04:59</p> -->
                <button
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494] flex justify-center items-center flex-grow-0 flex-shrink-0 w-[125px] h-[51px] relative overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#1ba494]"
                  @click="checkCertNo()"
                  :disabled="isButtonDisabled"
                >
                인증번호 확인
              </button>
              <span style="position:absolute; right:160px;" float:right>{{ countdown }}</span>
            </div>
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="certNoChk == 'ERROR'">
            인증번호가 올바르지 않습니다. 인증번호를 확인해주세요.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-20"
      >
        <button 
          class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#999]"
          @click="findEmail()"
        >
            이메일 찾기
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
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import * as gfnRules from "@/utils/gfnRules.js";

  const hp = ref("");
  const authNo = ref("");
  // const isAuthFail = ref(false);
  // const sendHpBtn = ref("인증번호 전송");
  const chkHp = ref(true) //휴대폰번호 정합성
  const isButtonDisabled = ref(false)
  const isInputReadonly = ref(false)
  const certNoChk = ref('NONE') //인증번호 일치 확인 후 true 
  const blSendCertNo = ref(false) //발송요청 상태
  const countdown = ref('03:00')

  //인증번호 요청
  async function reqCertNo(){
    if(chkHp.value != true || hp.value.length != 11){
      return false;
    }

    let blReq = true

    if(blSendCertNo.value == true){
      //재요청
      if(countdown.value != '0:00') {
        //제한시간 초과전
        blReq = false
        return;
      }else{
        blReq = true
      }

    }else{
      //처음요청
      blReq = true
    }

    //TODO 인증번호 요청 추가  : reqAuthHpDivCd 확인 필요, 이메일 입력 불가 필수인가??
    // 요청가능 상태 인경우
    if(blReq){
      var api = "/v1/auth/req-auth-hp";
      // if(signUp.value.joinOneStep.userMail == ""){
      //   gfnUtils.openAlert("이메일을 입력해주세요.","", 2000)
      //   return false;
      // }
      var postParams = { "hp": hp.value ,  "reqAuthHpDivCd": "20" };


      var rtn = await gfnUtils.axiosPost(api, postParams);
      //var rtn = {}
      //rtn.rtnCd = "00"

      if (rtn.rtnCd == "00") {
        //요청 완료 되면 입력창 표시여부
        blSendCertNo.value = true
        //카운트 다운 시간 초기화
        countdown.value = '03:00'
        startCount()
      } else {
        gfnUtils.openAlert("인증 SMS요청중 오류가 발생하였습니다.","", 2000)
      }

    }
  }

  
  function ruleChkHp(){
    chkHp.value = gfnRules.validHp(hp.value);
  }

  async function checkCertNo(){

    if(authNo.value == ""){
      gfnUtils.openAlert("인증번호를 입력해주세요.","", 2000)
      return false;
    }

    var api = "/v1/auth/join/step1/verify-auth-hp"
    var postParams = {   "hp": hp.value,   "authNo": authNo.value };

    //var loading = "";
    //var isErr = "";
    //var rtn = await gfnUtils.axiosPost(api, postParams);
  
    var rtn = await gfnUtils.axiosPost(api, postParams);
    
    if (rtn.rtnCd == "00") {
      //인증 번호 확인 완료
 
      certNoChk.value = "OK"
      isButtonDisabled.value = true //인증버튼 비활성
      isInputReadonly.value = true //전화번호 수정불가
      blSendCertNo.value = false   //인증번호 입력 부분 비노출
      gfnUtils.openAlert("인증이 완료 되었습니다.","", 2000)

    } else {
      certNoChk.value = "ERROR"
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
  }

function findEmail(){
  console.log("이메일 찾기")
}

function startCount(){
 
 let totalSeconds = 180; // 3분을 초 단위로 계산
 const countdownInterval = setInterval(() => {
     if (totalSeconds <= 0) {
         clearInterval(countdownInterval);
         countdown.value = '00:00';

         //TODO 버튼 잠금 처리 필요...(인증번호 확인 잠금, 인증 재요청 열기)???
         return;
     }

     const minutes = Math.floor(totalSeconds / 60);
     const seconds = totalSeconds % 60;
     countdown.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
     
     totalSeconds--;
 }, 1000);
            
}

</script>