<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <!-- <div
      class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-5 px-[430px] pt-10 pb-[100px] bg-[#fefefe]"
    > -->
    <div class="flex flex-col justify-start items-center w-[1060px] gap-5 bg-white">
      <SubHeader :topInfo="topInfo"/>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <SideMenu/>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-5">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
              <button class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919]">기본 정보</button>
              <button class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]" @click="myCompany()">회사정보</button>
            </div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] overflow-hidden gap-10 px-5 py-10 rounded-[10px] bg-white border border-[#ddd]"
            >
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">이메일</p>
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-[#ddd] border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">
                    {{userMail}}
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">이름</p>
                <input
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                  v-model="userInfo.userNm"
                >
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">연락처</p>
                <input
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                  :value="hpNoFormatted"
                  @input="updateHpNo($event.target.value)"
                />
                <!-- v-model="userInfo.hp" -->
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">이벤트 동의</p>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                  <div
                    class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
                  >
                    <div
                      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                        preserveAspectRatio="xMidYMid meet"
                        @click="checkBox('mrktYn')"
                      >
                        <rect
                          x="4.75"
                          y="4.75"
                          width="22.5"
                          height="22.5"
                          stroke="#DBDBDB"
                          stroke-width="1.5"
                        ></rect>
                        <!-- 체크 표시 -->
                        <path
                          d="M9 16L14 21L22 13L23 12"
                          stroke="#191919"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          v-show="userInfo.mrktYn == 'Y'"
                        ></path>
                      </svg>
                      <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                        큐밋 소식, 이벤트 등 다양한 소식 받기
                      </p>
                    </div>
                  </div>
                  <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5 pl-9">
                    <div
                      class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
                    >
                      <div
                        class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
                      >
                        <!-- 선택 -->
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                          preserveAspectRatio="none"
                          v-show="userInfo.mrktMailRcptYn == 'Y'"
                          @click="checkBoxMrkt('mrktMailRcptYn')"
                        >
                          <circle cx="12" cy="12" r="10" fill="#1BA494" ></circle>
                          <path
                            d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      <!-- 미선택 -->
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                        v-show="userInfo.mrktMailRcptYn != 'Y'"
                        @click="checkBoxMrkt('mrktMailRcptYn')"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="white"
                          stroke="#1BA494"
                          stroke-width="1"
                        ></circle>
                        <path
                          d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                          stroke="#1BA494"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">이메일</p>
                      </div>
                    </div>
                    <div
                      class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
                    >
                      <div
                        class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
                      >
                        <!-- 선택 -->
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                          preserveAspectRatio="none"
                          v-show="userInfo.mrktSmsRcptYn == 'Y'"
                          @click="checkBoxMrkt('mrktSmsRcptYn')"
                        >
                          <circle cx="12" cy="12" r="10" fill="#1BA494"></circle>
                          <path
                            d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                        <!-- 미선택 -->
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                          preserveAspectRatio="none"
                          v-show="userInfo.mrktSmsRcptYn != 'Y'"
                          @click="checkBoxMrkt('mrktSmsRcptYn')"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill="white"
                            stroke="#1BA494"
                            stroke-width="1"
                          ></circle>
                          <path
                            d="M8 11.4L10.8464 14.8156C10.9263 14.9116 11.0737 14.9116 11.1536 14.8156L16 9"
                            stroke="#1BA494"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </svg>                        
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                          문자메세지
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[750px] relative"
              >
                <button class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]"  @click="goToPage('MyPasswordMng')">
                  비밀번호 변경
                </button>
                <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative">
                  <button class="flex-grow-0 flex-shrink-0 text-base text-left text-[#666]" @click="showModalDelUser()">회원탈퇴</button>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M6 13.5L10 8.5L6 3.5"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] gap-5">
            <div
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
            >
              <button class="flex-grow-0 flex-shrink-0 text-base text-left text-white" @click="saveInfo()">수정하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal ref="delUser" :width="640">
      <deleteUserPopup  @close="cancel"  />
    </modal>
  </div>
</template>

<script setup>
  import SubHeader from '@/components/layoutComponents/SubHeader.vue'
  import SideMenu from '@/components/layoutComponents/SideMenu.vue'
  import Modal from '@/components/baseComponents/Modal.vue'
  import deleteUserPopup from '@/components/popupComponents/deleteUserPopup.vue'  
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import { useRouter } from 'vue-router'
  import { onMounted, ref, computed } from 'vue'

  onMounted(() => {
    loadData();
  })

  //프로필 팝업 창
  const delUser = ref(null)
  const showModalDelUser = () => {
    delUser.value.open()            
  }
  //취소버튼
  const cancel = function (){
    delUser.value.close()      
  }

  const router = useRouter()
  const userMail = ref(window.$cookies.get("loginUserMail"))
  const userInfo = ref({
    compId: "",
    userMail: "",
    userNm: "",
    hp: "",
    mrktMailRcptYn: "",
    mrktSmsRcptYn: "",
    mrktYn: ""
  })

  const topInfo = ref({
      compNm: "",
      userNm: "",
      sprtProjCnt: 0,
      prgsProjCnt: 0,
      cpltProjCnt: 0
    })

  const hpNoFormatted = computed( () => {
    if (userInfo.value.hp.length === 11){
      return gfnUtils.formattedHpNo(userInfo.value.hp);
    }else{
      return userInfo.value.hp;
    }  
    
  })

  function updateHpNo(value) {
    const cleanedValue = value.replace(/-/g, '');
    if (cleanedValue.length === 11) {
      userInfo.value.hp = cleanedValue;
    }else{
      userInfo.value.hp = cleanedValue;
    }
  }

  function goToPage(pageNm){

    if('MyPasswordMng' == pageNm){
      router.push({ name: pageNm
                ,state : {
                            dataObj : JSON.stringify(topInfo.value),
                        }
                });
    }else{
      router.push({name : pageNm})
    }

  }

  function myCompany(){

    router.push({name :"MyCompanyInfo"})
  }

  async function loadData(){

    var api = "/v1/my/myinfo";
    var getParams = {userMail: userMail.value};
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );
        
    if(rtn.rtnCd == "00"){
      userInfo.value = rtn.rtnData

      if(rtn.rtnData.mrktMailRcptYn == "Y" || rtn.rtnData.mrktSmsRcptYn == "Y"){
        userInfo.value.mrktYn = "Y"
      }
      topInfo.value = rtn.rtnData.topInfo
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
    
  }

  function checkBoxMrkt(id){
    if(id == "mrktMailRcptYn"){
      
      if(userInfo.value.mrktMailRcptYn == "Y"){
        userInfo.value.mrktMailRcptYn = "N";
      }else{
        userInfo.value.mrktMailRcptYn = "Y";
      }

    }else if(id == "mrktSmsRcptYn"){
      
      if(userInfo.value.mrktSmsRcptYn == "Y"){
        userInfo.value.mrktSmsRcptYn = "N";
      }else{
        userInfo.value.mrktSmsRcptYn = "Y";
      }

    }

    if(userInfo.value.mrktMailRcptYn == "Y" || userInfo.value.mrktSmsRcptYn == "Y"){
      userInfo.value.mrktYn = "Y"
    }

    if(userInfo.value.mrktMailRcptYn != "Y" && userInfo.value.mrktSmsRcptYn != "Y"){
      userInfo.value.mrktYn = "N"
    }
  }


  async function saveInfo(){
    //TODO 기본정보 수정 API 확인 필요.
    var api = "";
    //var getParams = {userMail: userMail.value};
    var postParams = userInfo.value;
    let rtn = await gfnUtils.axiosPost(
      api,
      postParams
    );
   
    
    if(rtn.rtnCd == "00"){
      userInfo.value = rtn.rtnData

      if(rtn.rtnData.mrktMailRcptYn == "Y" || rtn.rtnData.mrktSmsRcptYn == "Y"){
        userInfo.value.mrktYn = "Y"
      }
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }

  }
</script>
