<template>
  <div style="display: flex; justify-content: center;" >
  <div
      class="flex flex-col justify-start items-center w-[1920px] h-[1080px] overflow-hidden gap-20 px-[745px] py-[110px] bg-white"
    >
      <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[430px] relative gap-5"
        >
          <p class="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-[#191919]">로고 영역</p>
          <div
            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">
              새 비밀번호 설정
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
              8자 ~ 16자 이하의 영문 대소문자, 숫자, 특수문자를 조합하여 입력해 주세요.
            </p>
          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[430px] h-px bg-[#191919]"></div>
      </div>
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-5">
        <div
          class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
        >
          <input
              :class='(pwdChk ? "border-[#ddd]" : "border-[#ff5252]")  + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border "'
              type="password"
              placeholder="새 비밀번호를 입력해주세요."
              v-model="userInfo.pass"
              @blur="ruleChkPwd()"
              @focus="focusPwd()"
            />
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left " v-show="showHint">
              8자 ~ 16자 이하의 영문 대소문자, 숫자, 특수문자를 조합하여 입력해 주세요.
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="!pwdChk && !showHint">
              비밀번호가 올바르지 않습니다. 비밀번호를 다시 확인해주세요.
            </p>          
        </div>
        <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
          >
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
              비밀번호를 한번 더 입력해주세요.
            </p>
            <input
              :class='(pwdCmprChk ? "border-[#ddd]" : "border-[#ff5252]")  + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border"'
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
              @blur="ruleCmprPwd()"
              v-model="userInfo.confirmPass"
              />

            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]"  v-show="!pwdCmprChk">
              입력하신 비밀번호와 맞지 않습니다. 비밀번호를 다시 확인해주세요.
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#999]"
      >
        <button 
          @click="savePw()"
          class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
          비밀번호 변경하기
      </button>
      </div>
      <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <button 
          @click="goToPage('UseTerms')"
          class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]">
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
          @click="goToPage('PrivacyPolicy')"
          class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]">
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
        <p class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#777]">© L-walk Corp</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import * as gfnRules from "@/utils/gfnRules.js";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const showHint = ref(false)
  const btnIsActv =  ref(false)
  const { dataObj } = history.state; 
  const userInfo = ref(dataObj);
  const pwdChk = ref(true) //패스워드 정합성
  const pwdCmprChk = ref(true) //패스워드 재입력 정합성
  // const userInfo = ref({
  //   pass : "",
  //   confirmPass : ""
  // })

  function focusPwd(){
    showHint.value = true
  }
  
  function ruleChkPwd(){
    showHint.value = false
    pwdChk.value = gfnRules.validPwd(userInfo.value.pass);
    btnStatChng()
  }

  function ruleCmprPwd(){
    if (userInfo.value.pass == userInfo.value.confirmPass){
      pwdCmprChk.value = true
      //console.log("일치")
    }else{
      pwdCmprChk.value = false
      //console.log("불일치")
    }
    btnStatChng()
  }

  function btnStatChng() {
    // console.log(email.value == "");
    // console.log(pswd.value == "");
    if ( userInfo.value.pass == "" || userInfo.value.confirmPass == "") {
      btnIsActv.value = false;
    } else {
      btnIsActv.value = true;
    }
  }
  
  async function savePw(){
    if(!btnIsActv.value){
      return false
    }

    var api = "/v1/auth/change-password";
    var params = {newPass :userInfo.value.pass, confirmPass:userInfo.value.confirmPass, userMail:userInfo.value.userMail};
    let rtn = await gfnUtils.axiosPost(
      api,
      params
    );
    if(rtn.rtnCd == "00"){
      gfnUtils.openAlert("패스워드가 변경되었습니다.","", 2000)
      router.push({name :'Login'})
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
    
  }


  function goToPage(pageName){
    router.push({name :pageName})
  }

</script>
