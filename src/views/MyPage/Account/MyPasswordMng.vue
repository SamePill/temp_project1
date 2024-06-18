<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div
      class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-5 px-[430px] pt-10 pb-[100px] bg-[#fefefe]"
    >
      <SubHeader :topInfo="topInfo"/>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <SideMenu/>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-5">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
              비밀번호 재설정
            </p>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] overflow-hidden gap-10 px-5 py-10 rounded-[10px] bg-white border border-[#ddd]"
            >
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">현재 비밀번호</p>
                <div
                    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
                  >
                  <input
                    type="password"
                    :class='(curPwd ? "border-[#ddd]" : "border-[#ff5252]")  + " flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"'
                    placeholder="현재 비밀번호를 입력해주세요."
                    v-model="password.crntPass"
                    />
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="!curPwd">
                      비밀번호가 올바르지 않습니다. 비밀번호를 다시 확인해주세요.
                    </p>
                </div>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">새 비밀번호</p>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                  <div
                    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
                  >
                    <input
                      type="password"
                      :class='(pwdChk ? "border-[#ddd]" : "border-[#ff5252]")  + " flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"'
                      placeholder="새 비밀번호를 입력해주세요."
                      v-model="password.newPass"
                      @blur="ruleChkPwd()"
                    />
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="!pwdChk">
                      비밀번호가 올바르지 않습니다. 비밀번호를 다시 확인해주세요.
                    </p>
                  </div>
                  <div
                    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2"
                  >
                    <input
                      type="password"
                      :class='(pwdCmprChk ? "border-[#ddd]" : "border-[#ff5252]")  + " flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"'
                      placeholder="새 비밀번호를 다시 입력해주세요."
                      v-model="password.newConfirmPass"
                      @blur="ruleCmprPwd()"
                    />
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]"  v-show="!pwdCmprChk">
                      입력하신 비밀번호와 맞지 않습니다. 비밀번호를 다시 확인해주세요.
                    </p>               
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] gap-5">
            <button
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
              @click="back()"
              >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">
                돌아가기
              </p>
            </button>
            <button
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
              @click="modifyPass()"
              >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                수정하기
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SubHeader from '@/components/layoutComponents/SubHeader.vue'
  import SideMenu from '@/components/layoutComponents/SideMenu.vue'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import * as gfnRules from "@/utils/gfnRules.js";

  const { dataObj } = history.state; // 이렇게 받는다.
  const topInfo = ref(JSON.parse(dataObj));

  const router = useRouter()
  const userMail = ref(window.$cookies.get("loginUserMail"))
  const password = ref({  
    crntPass: "",
    newPass: "",
    newConfirmPass: ""
  })

  const curPwd = ref(true)

  const pwdChk = ref(true)
  const pwdCmprChk = ref(true)

  
  function back(){
    router.back()
  }

  function ruleChkPwd(){
    pwdChk.value = gfnRules.validPwd(password.value.newPass);
  }

  function ruleCmprPwd(){
    if (password.value.newPass == password.value.newConfirmPass){
      pwdCmprChk.value = true
      //console.log("일치")
    }else{
      pwdCmprChk.value = false
      //console.log("불일치")
    }
  } 

  async function modifyPass(){

    if(!pwdChk.value  || !pwdCmprChk.value  || password.value.newConfirmPass == '' || password.value.newPass == '' || password.value.newPass == ''){
      return false
    }

    var api = "/v1/my/modify/pass";
    var queryParams = { userMail: userMail.value };
    var postParams =  password.value;
    let rtn = await gfnUtils.axiosPost(
      api,
      postParams,
      queryParams
    );

    console.log(rtn);

    if(rtn.rtnCd == "00"){
      
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
      
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }

  } 

</script>