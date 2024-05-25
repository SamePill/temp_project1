<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div
      class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-5 px-[430px] pt-10 pb-[100px] bg-[#fefefe]"
    >
      <SubHeader/>
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
                <input
                  type="password"
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                  placeholder="현재 비밀번호를 입력해주세요."
                  v-model="password.crntPass"
                  />
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">새 비밀번호</p>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                  <input
                    type="password"
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                    placeholder="새 비밀번호를 입력해주세요."
                    v-model="password.newPass"
                  />
                  <input
                    type="password"
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                    placeholder="새 비밀번호를 다시 입력해주세요."
                    v-model="password.newConfirmPass"
                  />                  
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


const router = useRouter()
const userMail = ref(window.$cookies.get("loginUserMail"))
const password = ref({  
  crntPass: "",
  newPass: "",
  newConfirmPass: ""
})
function back(){
  router.back()
}

async function modifyPass(){

  // TODO 패스워드 패턴 검사 추가 필요...


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
    //TODO 저장 완료 표시 처리
    alert("성공")
  }else{
    alert(rtn.rtnMsg);
  }

} 

</script>