<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div
      class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1920px] overflow-hidden gap-5 px-[430px] pt-10 pb-[100px] bg-[#fefefe]"
    >
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-5">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[1060px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
              지원한 엔지니어
            </p>
            <button class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#777]"
              @click="goBack()">
              이전으로 가기
            </button>
          </div>
          <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[1060px]">
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3"
              >
                <p class="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#191919]">
                  {{ projInfo.projTitl }}
                </p>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">필요인원 : {{ projInfo.engrCnt }}명</p>
                  <svg
                    width="2"
                    height="13"
                    viewBox="0 0 2 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                    시작일 : {{ projInfo.strtDay }}
                  </p>
                  <svg
                    width="2"
                    height="13"
                    viewBox="0 0 2 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                    예상금액 : {{ projInfo.expcPric }}
                  </p>
                  <svg
                    width="2"
                    height="13"
                    viewBox="0 0 2 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                    투입기간 : {{ projInfo.pirdVal }}개월
                  </p>
                  <svg
                    width="2"
                    height="13"
                    viewBox="0 0 2 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                    {{ projInfo.workAddr }}
                  </p>
                </div>
              </div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">
                  총 지원 수 : {{ engrCntInfo.totSprtEngrCnt }}명
                </p>
                <svg
                  width="2"
                  height="13"
                  viewBox="0 0 2 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                </svg>
                <svg
                  width="2"
                  height="13"
                  viewBox="0 0 2 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                </svg>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">
                  선정 엔지니어 : {{ engrCntInfo.passEngrCnt }}명
                </p>
                <svg
                  width="2"
                  height="13"
                  viewBox="0 0 2 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                </svg>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">
                  미팅예정 엔지니어 : {{ engrCntInfo.meetWillEngrCnt }}명
                </p>
                <svg
                  width="2"
                  height="13"
                  viewBox="0 0 2 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                </svg>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">
                  불합격 엔지니어 : {{ engrCntInfo.failEngrCnt }}명
                </p>
                <svg
                  width="2"
                  height="13"
                  viewBox="0 0 2 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path d="M1 0.5V12.5" stroke="#DDDDDD" stroke-linecap="round"></path>
                </svg>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">
                  대기 엔지니어 : {{ engrCntInfo.waitEngrCnt }}명
                </p>
              </div>
            </div>
            <!-- 매니저 배정후 -->  
            <div
              v-if="qmMngrInfo != null"
              class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]">
                  {{qmMngrInfo.qmMngrNm}}
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">
                  담당 매니저
                </p>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#777]">
                연락처 : {{qmMngrInfo.hp}}
              </p>
            </div>
            <!-- 매니저 배정전 -->            
            <div
              v-else
              class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 relative gap-2"
            >
              <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]">
                  담당 매니저 배정중
                </p>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#777]">
                담당 매니저를 배정중입니다.
              </p>
            </div>          
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1060px]">

            
            <div class="w-[214px]" style="position: relative; text-align: left">
              <input class="w-[214px]  py-[8px]  px-[10px] justify-between border-line-1 border rounded box-border placeholder:text-sm placeholder:text-text-3" type="text" placeholder="이름을 검색해주세요." v-model="srchKeyWord" @keyup.enter="loadData()">
              <img style="cursor: pointer; position:absolute; right:10px; top:14px;" class="w-[18px] h-[15px]" src="@/assets/ic_magnifier.png" alt="" @click="loadData()">
            </div>
            <!-- <div
              class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[214px] relative overflow-hidden px-2.5 py-2 rounded bg-white border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">
                이름을 검색해주세요.
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
                  stroke="#191919"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M16 16L21 21"
                  stroke="#191919"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div> -->
            
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3" >
              <DropDown style="z-index: 99" @click="documentClick('EngrRtngDivCd','dropDown')" id="EngrRtngDivCd" ref="$EngrRtngDivCd" @setData="getEngrRtngDivCd" :title="'등급'" :listDivCd="'ENGR_RTNG_DIV_CD'"/>
              
              <DropDown style="z-index: 99" @click="documentClick('SelEngrSort','dropDown')" id="SelEngrSort" ref="$SelEngrSort" @setData="getSelEngrSort" :title="'지원순'" :listDivCd="'SEL_ENGR_SORT'"/>
            </div>
          </div>
          <div class="flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ededed]"></div>
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1060px] relative gap-[100px]"
          >
            <p class="flex-grow-0 flex-shrink-0 w-[60px] text-sm text-left text-[#555]">상태</p>
            <p class="flex-grow-0 flex-shrink-0 w-[100px] text-sm text-left text-[#555]">회사명</p>
            <p class="flex-grow-0 flex-shrink-0 w-[70px] text-sm text-left text-[#555]">엔지니어 명</p>
            <p class="flex-grow-0 flex-shrink-0 w-[77px] text-sm text-left text-[#555]">경력</p>
            <p class="flex-grow-0 flex-shrink-0 w-[140px] text-sm text-left text-[#555]">최종학력</p>
            <p class="flex-grow-0 flex-shrink-0 w-[93px] text-sm text-left text-[#555]">
              엔지니어 등급
            </p>
          </div>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                      
            <div v-for="el, idx in engrList" :key="idx">
              <div @click="showProfile(el)" class="hover:cursor-pointer" :profile="engrProfile">
                <SelEngineerItem :engineerInfo="el"/>
              </div>
            </div>
            <!-- 반복부 1-->
          
          </div>
        </div>
        <div
          class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1060px] relative gap-5"
        >
          <!-- pagenation -->
          <div v-show="totalCnt > 0" class="paginationDiv h-10 my-10 mx-auto font-basic" style="text-align:center">
            <vue-awesome-paginate
              :total-items=totalCnt
              v-model="pageNo"
              :items-per-page="10"
              :max-pages-shown="10"
              :on-click="loadData"
            >
            <template #prev-button>
              <span>
                <font-awesome-icon icon="chevron-right" color="black" />
              </span>
            </template>
            <template #next-button>
              <span>
                <font-awesome-icon icon="chevron-right" color="black" />
              </span>
            </template>
            </vue-awesome-paginate>
          </div>
        </div>
      </div>
    </div>
    <modal ref="modalShowProfile" :width="810">
      <engineerProfilePopup :mode='profileMode' :profile="engrProfile" @popBtn1="profileBtn1" @popBtn2="profileBtn2" @close="close"/>
    </Modal>
  </div>
</template>

<script setup>
  import DropDown from '@/components/uiComponents/DropDown.vue'
  import { ref, onMounted } from 'vue'
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import SelEngineerItem from '@/components/baseComponents/SelEngineerItem.vue'
  import { useRouter } from 'vue-router'
  import Modal from '@/components/baseComponents/Modal.vue'
  import engineerProfilePopup from '@/components/popupComponents/engineerProfilePopup.vue'

  onMounted(() => {
    loadData();
  })
  const { dataObj } = history.state; 
  const projParam = ref(JSON.parse(dataObj));

  const router = useRouter()
  const pageNo = ref(1)
  const totalCnt = ref()
  const userMail = ref(window.$cookies.get("loginUserMail"))
  const engrProfile = ref({})
  const profileMode = ref("")
  const profileProcess =ref({})

  const EngrRtngDivCd = ref("")
  const $EngrRtngDivCd = ref()
  const SelEngrSort = ref("")
  const $SelEngrSort = ref("")
  const srchKeyWord = ref("")

  const projInfo = ref({
    // "projId": "string",
    // "projTitl": "string",
    // "engrCnt": "string",
    // "strtDay": "yyyyMMdd",
    // "expcPric": 0,
    // "pirdVal": "string",
    // "workAddr": "string"
  })
  const qmMngrInfo =  ref({
    // "qmMngrNm": "string",
    // "hp": "string"
  })
  const engrCntInfo =  ref({
    // "totSprtEngrCnt": 0,
    // "passEngrCnt": 0,
    // "waitEngrCnt": 0,
    // "meetWillEngrCnt": 0,
    // "failEngrCnt": 0
  })
  const engrList =  ref([])

  //프로필 팝업 창
  const modalShowProfile = ref(null)
  const showModalProfile = () => {
    modalShowProfile.value.open()            
  }
  //취소버튼
  const close = function (){
    modalShowProfile.value.close()      
  }
  // //확인버튼
  // const confirm = function (){
  //   modalShowProfile.value.close()      
    
  // }

  async function profileBtn1(){
    modalShowProfile.value.close()      

    var api = "/v1/my/cancel/support-project-engineer";
    var getParams = {userMail : userMail.value};
    var postParams = profileProcess.value;
    

    let rtn = await gfnUtils.axiosPost(
      api,
      postParams,
      getParams
    );

    if(rtn.rtnCd == "00"){
      gfnUtils.openAlert("정상처리 되었습니다.","", 2000)
      loadData()
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
    
  }

  
  function getEngrRtngDivCd(data){
    EngrRtngDivCd.value = data;
  }

  function getSelEngrSort(data){
    SelEngrSort.value = data;
  }

  async function showProfile(el){

    console.log(el.engrId)
    var api = "/v1/my/engineer/detail";
    var getParams = {userMail: userMail.value, engrId:el.engrId , projId:projParam.value.projId};
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );
    
    if(rtn.rtnCd == "00"){
      engrProfile.value = rtn.rtnData   
      profileProcess.value.projSprtSeq = el.projSprtSeq
      profileProcess.value.engrId = el.engrId

      profileMode.value = "10"

      showModalProfile()
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
  }

  function documentClick(div,eventTarget){
    if(eventTarget == 'dropDown'){

      if(div != 'EngrRtngDivCd'){
        $EngrRtngDivCd.value.noShowItem();
      }
      if(div != 'SelEngrSort'){
        $SelEngrSort.value.noShowItem();
      }
      
    }
  }

  async function loadData(selPage){
    
    console.log(projParam)

    console.log(selPage)
    if(selPage != null){
      pageNo.value = selPage;
    }

    var api = "/v1/my/support-project-engineer-info";
    var getParams = {userMail: userMail.value, projId:projParam.value.projId, projSprtSeq:projParam.value.projSprtSeq ,engrNm:srchKeyWord.value, engrRtngDivCd:EngrRtngDivCd.value, engrSortDiv:"", pageNo:pageNo.value};
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );
    console.log(rtn)
    if(rtn.rtnCd == "00"){
      let res = rtn.rtnData
  
      projInfo.value = res.projInfo
      qmMngrInfo.value = res.regProjCntInfo
      engrCntInfo.value = res.engrCntInfo
      engrList.value = res.engrList

      console.log(engrList.value)

      totalCnt.value = res.engrTotlCnt
  
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
    
  }

  function goBack(){
    router.back()
  }

</script>