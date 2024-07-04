<template>
  <div style="display: flex; justify-content: center;" >
    <div
      class="flex flex-col justify-start items-center w-[1920px] overflow-hidden gap-10 px-[745px] pt-[110px] pb-[100px] bg-white"
    >
      <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[430px] relative gap-5"
        >
          <p class="flex-grow-0 flex-shrink-0 text-3xl font-bold text-left text-[#191919]">로고 영역</p>
          <div class="flex justify-between items-end flex-grow-0 flex-shrink-0 w-[430px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">
              <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                >회원가입을 위해 </span
              ><br /><span
                class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                >정보를 입력해주세요.</span
              >
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-left">
              <span class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]"
                >1 </span
              ><span class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#777]">/</span
              ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]">2</span>
            </p>
          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[430px] h-px bg-[#191919]"></div>
      </div>
    <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-20">
      <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[60px]">
        <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
          <div
            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <input
              :class='(chkEmail ? "border-[#ddd]" : "border-[#ff5252]") + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border "'
              type="text"
              placeholder="이메일"
              v-model="signUp.joinOneStep.userMail"
              @blur="ruleChkEmail()"
              />
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="!chkEmail">
              이메일이 올바르지 않습니다. 다시 한번 확인해주세요.
            </p>
          </div>
          <div
            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <input
              :class='(chkName ? "border-[#ddd]" : "border-[#ff5252]") + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border "'
              type="text"
              placeholder="이름"
              v-model="signUp.joinOneStep.userNm"
              @blur="ruleChkName()"
            />
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="!chkName">
              이름이 올바르지 않습니다. 다시 한번 확인해주세요.
            </p>
          </div>
          <div
            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
              <!-- 전송전 -->
              <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5">
                  <!-- border-[#ddd] 오류시 border-[#ff5252]  -->
                  <input
                    :class='(chkHp ? "border-[#ddd]" : "border-[#ff5252]") + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[300px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border" '
                    type="text"
                    placeholder="휴대폰번호"
                    v-model="signUp.joinOneStep.hp"
                    @blur="ruleChkHp()"
                    :readonly="isInputReadonly"
                    @input="validateHp"
                  />
                  <button
                    :class='(blSendCertNo ? " bg-white border-[#ddd] text-[#191919]" :  (chkHp && signUp.joinOneStep.hp != null ? " border-[#1ba494] bg-[#1BA494]  text-white" : "bg-[#999]  text-white")) + " flex-grow-0 flex-shrink-0 text-base text-left text-[#191919] flex justify-center items-center flex-grow-0 flex-shrink-0 w-[125px] h-[51px] relative overflow-hidden gap-2.5 p-2.5 rounded border "'
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
          <div
            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <input
              :class='(pwdChk ? "border-[#ddd]" : "border-[#ff5252]")  + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border "'
              type="password"
              placeholder="비밀번호"
              v-model="signUp.joinOneStep.pass"
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
          <div
            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <input
              :class='(pwdCmprChk ? "border-[#ddd]" : "border-[#ff5252]")  + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[430px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border"'
              type="password"
              placeholder="비밀번호"
              @blur="ruleCmprPwd()"
              v-model="signUp.joinOneStep.confirmPass"
              />

            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]"  v-show="!pwdCmprChk">
              입력하신 비밀번호와 맞지 않습니다. 비밀번호를 다시 확인해주세요.
            </p>
          </div>
        </div>
        <button
          :class='(btnIsActv ? "bg-[#1BA494]" : "bg-[#999]") + " flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white flex justify-center items-center flex-grow-0 flex-shrink-0 w-[430px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"'
          @click="nextPage()"
          :disabled="!btnIsActv"
          >         
            다음 단계로 넘어가기
        </button>
      </div>
      <div class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10">
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
</div>

</template>

<script setup>
  import {  ref, onMounted } from "vue";
  import * as gfnRules from "@/utils/gfnRules.js";
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import { useRouter } from 'vue-router';

  const { dataObj } = history.state; 
  const showHint = ref(false)
  const isButtonDisabled = ref(false)
  const isInputReadonly = ref(false)
  //const chkCertNo = ref(false) //인증번호 일치 확인 후 true
  const chkEmail = ref(true)  //이메일 정합성
  const chkName =ref(true) //이름 정합성
  const blSendCertNo = ref(false) //발송요청 상태
  const chkHp = ref(true) //휴대폰번호 정합성
  const pwdChk = ref(true) //패스워드 정합성
  const pwdCmprChk = ref(true) //패스워드 재입력 정합성
  const certNoChk = ref('NONE') //인증번호 일치 확인 후 true 
  const router = useRouter()
  const authNo = ref('')
  const btnIsActv = ref(false)
  const countdown = ref('03:00')
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

  onMounted(() => {
    loadData();
  })

  function loadData(){
    if(dataObj != undefined){
      signUp.value = JSON.parse(dataObj);
    }
    console.log(signUp.value)
  }

  function focusPwd(){
    showHint.value = true
  }
  
  function ruleChkPwd(){
    showHint.value = false
    pwdChk.value = gfnRules.validPwd(signUp.value.joinOneStep.pass);
    btnStatChng()
  }

  function ruleCmprPwd(){
    if (signUp.value.joinOneStep.pass == signUp.value.joinOneStep.confirmPass){
      pwdCmprChk.value = true
      //console.log("일치")
    }else{
      pwdCmprChk.value = false
      //console.log("불일치")
    }
    btnStatChng()
  }  

  async function reqCertNo(){
    if(chkHp.value != true){
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

    // 요청가능 상태 인경우
    if(blReq){
      var api = "/v1/auth/req-auth-hp";
      if(signUp.value.joinOneStep.userMail == ""){
        gfnUtils.openAlert("이메일을 입력해주세요.","", 2000)
        return false;
      }
      var postParams = { "hp": signUp.value.joinOneStep.hp ,  "reqAuthHpDivCd": "10",   "userMail":  signUp.value.joinOneStep.userMail };

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

  async function checkCertNo(){

    if(authNo.value == ""){
      gfnUtils.openAlert("인증번호를 입력해주세요.","", 2000)
      return false;
    }

    var api = "/v1/auth/join/step1/verify-auth-hp"
    var postParams = {   "hp": signUp.value.joinOneStep.hp,   "authNo": authNo.value };

    console.log("api ::" + api);
    console.log("val ::" + postParams);

    //var loading = "";
    //var isErr = "";
    //var rtn = await gfnUtils.axiosPost(api, postParams);
  
    var rtn = await gfnUtils.axiosPost(api, postParams);
    
    if (rtn.rtnCd == "00") {
    
      certNoChk.value = "OK"
      isButtonDisabled.value = true //인증버튼 비활성
      isInputReadonly.value = true //전화번호 수정불가
      blSendCertNo.value = false   //인증번호 입력 부분 비노출
      gfnUtils.openAlert("인증 되었습니다.","", 2000)
    
    } else {
      certNoChk.value = "ERROR"
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
  }

  function ruleChkEmail(){
    chkEmail.value = gfnRules.validEmail(signUp.value.joinOneStep.userMail);
    btnStatChng()
  }

  function ruleChkName(){
    chkName.value = gfnRules.validName(signUp.value.joinOneStep.userNm);
    btnStatChng()
  }

  function ruleChkHp(){
    chkHp.value = gfnRules.validHp(signUp.value.joinOneStep.hp);
    btnStatChng()
  }

  function btnStatChng() {
    // console.log(email.value == "");
    // console.log(pswd.value == "");
    if (signUp.value.joinOneStep.userMail == "" || signUp.value.joinOneStep.userNm == ""
      || signUp.value.joinOneStep.pass == "" || signUp.value.joinOneStep.confirmPass == ""
      || signUp.value.joinOneStep.hp == "" || certNoChk.value != "OK"
    ) {
      btnIsActv.value = false;
    } else {
      btnIsActv.value = true;
    }
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

  function validateHp(event){
    const value = event.target.value;
    if (!/^\d*$/.test(value)) {
      event.target.value = value.replace(/\D/g, '');
      signUp.value.joinOneStep.hp = event.target.value;
    }
  }

  function validateCert(event){
    const value = event.target.value;
    if (!/^\d*$/.test(value)) {
      event.target.value = value.replace(/\D/g, '');
      authNo.value = event.target.value;
    }
  }

  function nextPage(){

 
    //const signUpdData = signUp.value.map(item => item);
    router.push({ name: "SignUpApply"
              // ,state: { data : signUp.value}
              //  ,param: {
              //             dataObj : { a:1, b:'string', c:true },
              //           }
              ,state : {
                          //dataObj : { a:1, b:'string', c:true },
                          dataObj : JSON.stringify(signUp.value),
                        }
              });
  }
</script>