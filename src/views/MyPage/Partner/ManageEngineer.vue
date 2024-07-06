<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div class="flex flex-col justify-start items-center w-[1060px] gap-5 bg-white">
      <SubHeader :topInfo="topInfo"/>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <SideMenu/>
        <div class="flex justify-center items-center flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-5">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[790px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
                엔지니어 관리
              </p>
              <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]" @click="addEngineerInfo()">
                엔지니어 추가하기
              </button>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">총 인원 : {{engrRtngCntInfo.totEngrCnt}}명</p>
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
                초급 엔지니어 : {{engrRtngCntInfo.bgnrCnt}}명
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
                중급 엔지니어 : {{engrRtngCntInfo.intrCnt}}명
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
                고급 엔지니어 : {{engrRtngCntInfo.advnCnt}}명
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
                특급 엔지니어 : {{engrRtngCntInfo.spclCnt}}명
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div
              class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 w-[790px] gap-5"
            >
              <div class="w-[1060px]" style="position: relative; text-align: right">
                <input class="w-[300px]  py-[8px]  px-[10px] justify-between border-line-1 border rounded box-border placeholder:text-sm placeholder:text-text-3" type="text" placeholder="이름을 검색해주세요." v-model="srchKeyWord" @keyup.enter="loadData()">
                <img style="cursor: pointer; position:absolute; right:10px; top:14px;" class="w-[18px] h-[18px]" src="@/assets/ic_magnifier.png" alt="" @click="loadData()">
              </div>
              <!-- <div
                class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden px-2.5 py-2 rounded bg-white border border-[#ddd]"
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
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3" style="z-index: 99">
                <DropDown @click="documentClick('EngrRtngDivCd','dropDown')" id="EngrRtngDivCd" ref="$EngrRtngDivCd" @setData="getEngrRtngDivCd" :title="'등급'" :listDivCd="'ENGR_RTNG_DIV_CD'"/>
                <!-- <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">등급</p>
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">전체</p>
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
                        d="M8.76822 10.5781C8.36843 11.0579 7.63157 11.0579 7.23178 10.5781L4.36682 7.14019C3.82405 6.48886 4.2872 5.5 5.13504 5.5L10.865 5.5C11.7128 5.5 12.176 6.48886 11.6332 7.14019L8.76822 10.5781Z"
                        fill="#191919"
                      ></path>
                    </svg>
                  </div>
                </div> -->
                <DropDown @click="documentClick('SrvdStatCd','dropDown')" id="SrvdStatCd" ref="$SrvdStatCd" @setData="getSrvdStatCd" :title="'재직'" :listDivCd="'SRVD_STAT_CD'"/>
                <!-- <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">재직</p>
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">전체</p>
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
                        d="M8.76822 10.5781C8.36843 11.0579 7.63157 11.0579 7.23178 10.5781L4.36682 7.14019C3.82405 6.48886 4.2872 5.5 5.13504 5.5L10.865 5.5C11.7128 5.5 12.176 6.48886 11.6332 7.14019L8.76822 10.5781Z"
                        fill="#191919"
                      ></path>
                    </svg>
                  </div>
                </div> -->
                <DropDown @click="documentClick('MngEngrSort','dropDown')" id="MngEngrSort" ref="$MngEngrSort" @setData="getMngEngrSort" :title="'등록순'" :listDivCd="'MNG_ENGR_SORT'"/>
                <!-- <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
                >
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">등록순</p>
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
                        d="M8.76822 10.5781C8.36843 11.0579 7.63157 11.0579 7.23178 10.5781L4.36682 7.14019C3.82405 6.48886 4.2872 5.5 5.13504 5.5L10.865 5.5C11.7128 5.5 12.176 6.48886 11.6332 7.14019L8.76822 10.5781Z"
                        fill="#191919"
                      ></path>
                    </svg>
                  </div>
                </div> -->
              </div>
            </div>
            <div
              class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[790px] relative gap-10"
            >
              <p class="flex-grow-0 flex-shrink-0 w-[93px] text-sm text-center text-[#555]">
                엔지니어 등급
              </p>
              <p class="flex-grow-0 flex-shrink-0 w-[70px] text-sm text-left text-[#555]">엔지니어명</p>
              <p class="flex-grow-0 flex-shrink-0 w-[30px] text-sm text-left text-[#555]">재직</p>
              <p class="flex-grow-0 flex-shrink-0 w-[100px] text-sm text-left text-[#555]">최종학력</p>
              <p class="flex-grow-0 flex-shrink-0 w-[77px] text-sm text-left text-[#555]">경력</p>
              <p class="flex-grow-0 flex-shrink-0 w-[99px] text-sm text-left text-[#555]">주소</p>
              <p class="flex-grow-0 flex-shrink-0 w-[52px] text-sm text-left text-[#555]">투입여부</p>
            </div>
            <!-- 반복부 -->
            <div
              v-show="totalCnt > 0"
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] gap-3"
            >
              <div v-for="el in engineerList" :key="el" @click="showProfile(el)"  class="hover:cursor-pointer">
                <EngineerItem :engineerInfo="el"/>
              </div>
            </div>
          </div>

                      
          <!-- 조회 내용이 없을 때 -->
          <MyPageNodata class="mt-[20px]" v-show="totalCnt == 0" :showDiv="3"/>

          <div v-show="totalCnt > 0"
            class="paginationDiv flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] relative gap-5"
          >
            <vue-awesome-paginate
              :total-items=totalCnt
              v-model="pageNo"
              :items-per-page="20"
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
            <!-- <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M15 5L9 12L15 19"
                stroke="#191919"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
              <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#191919]">1</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">2</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">3</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">4</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">5</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">6</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">7</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">8</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">9</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">10</p>
            </div>
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
                d="M9 19L15 12L9 5"
                stroke="#191919"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg> -->
          </div>
        </div>
      </div>
    </div>
    <modal ref="modalShowProfile" :width="810">
      <engineerProfilePopup :mode='profileMode' :profile="engrProfile" @popBtn1="profileBtn" @close="close" />
    </Modal>
  </div>
</template>
<script setup>
  import DropDown from '@/components/uiComponents/DropDown.vue'
  import SubHeader from '@/components/layoutComponents/SubHeader.vue'
  import SideMenu from '@/components/layoutComponents/SideMenu.vue'
  import EngineerItem from '@/components/baseComponents/EngineerItem.vue'
  import MyPageNodata from '@/components/baseComponents/MyPageNodata.vue'
  import { ref, onMounted } from 'vue'
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import Modal from '@/components/baseComponents/Modal.vue'
  import engineerProfilePopup from '@/components/popupComponents/engineerProfilePopup.vue'  
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const pageNo = ref(1)
  const totalCnt = ref()
  const userMail = ref(window.$cookies.get("loginUserMail"));
  // const sortDiv = ref(20)
  const engineerList = ref([])
  const topInfo = ref({
      compNm: "",
      userNm: "",
      sprtProjCnt: 0,
      prgsProjCnt: 0,
      cpltProjCnt: 0
    })
  const srchKeyWord = ref("")
  const EngrRtngDivCd = ref("")
  const $EngrRtngDivCd = ref()
  const SrvdStatCd = ref("")
  const $SrvdStatCd = ref()
  const MngEngrSort = ref("")
  const $MngEngrSort = ref()
  const engrRtngCntInfo = ref({})
  
  const engrProfile = ref({})
  const profileMode = ref('')

  //프로필 팝업 창
  const modalShowProfile = ref(null)
  const showModalProfile = () => {
    modalShowProfile.value.open()            
  }
  //수정 하기 버튼 
  function profileBtn(engrId){
    console.log(engrId)
    let engrInfo = {engrId : engrId}
    modalShowProfile.value.close()
    router.push({
       name: "AddEngineerInfo"
      ,state: {dataObj : JSON.stringify(engrInfo)}  
    })
  }
  //취소버튼
  const close = function (){
    modalShowProfile.value.close()      
  }

  onMounted(() => {
    loadData();
  })

  async function showProfile(el){

    console.log(el.engrId)
    var api = "/v1/my/engineer/detail";
    var getParams = {userMail: userMail.value, engrId:el.engrId};
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );

    if(rtn.rtnCd == "00"){
      engrProfile.value = rtn.rtnData   
      console.log(engrProfile.value)
      profileMode.value = "20"
      // if(engrProfile.value.engrSprtStatCd == '10'){
      //   //선정합격
      //   profileMode.value = "30"
      // }else if(engrProfile.value.engrSprtStatCd == '20'){
      //   //선정대기
      //   profileMode.value = "40"
      // }else if(engrProfile.value.engrSprtStatCd == '30'){
      //   //미팅예정
      //   profileMode.value = "40"
      // }else if(engrProfile.value.engrSprtStatCd == '40'){
      //   //선정탈락
      //   profileMode.value = "50"
      // }

      showModalProfile()
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
  }



  function getEngrRtngDivCd(data){
    EngrRtngDivCd.value = data;
  }

  function getSrvdStatCd(data){
    SrvdStatCd.value = data;
  }
      
  function getMngEngrSort(data){
    MngEngrSort.value = data;
  }


  function documentClick(div,eventTarget){
    if(eventTarget == 'dropDown'){

      if(div != 'EngrRtngDivCd'){
        $EngrRtngDivCd.value.noShowItem();
      }
      if(div != 'SrvdStatCd'){
        $SrvdStatCd.value.noShowItem();
      }
      if(div != 'MngEngrSort'){
        $MngEngrSort.value.noShowItem();
      }
    }
  }

  function addEngineerInfo(){
    router.push({name: "AddEngineerInfo"})
  }

  async function loadData(selPage){
    
    console.log(selPage)
    if(selPage != null){
      pageNo.value = selPage;
    }

    var api = "/v1/my/engineer/management";
    var getParams = {userMail: userMail.value, pageNo:pageNo.value, engrNm:srchKeyWord.value, srvdStatCd:SrvdStatCd.value , engrRtngDivCd:EngrRtngDivCd.value, engrSortDiv:MngEngrSort.value };
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );
    
    if(rtn.rtnCd == "00"){
      let res = rtn.rtnData

      engineerList.value = res.engrList
      topInfo.value = res.topInfo
      totalCnt.value = res.engrTotlCnt
      // totalCnt.value = 0
      engrRtngCntInfo.value = res.engrRtngCntInfo
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
    
    

  }


</script>




<style>
  .paginationDiv .pagination-container {
    column-gap: 10px;
    align-items: center;
  }
  .paginationDiv .paginate-buttons {
    height: 35px;
    width: 35px;
    cursor: pointer;
    border-radius: 4px;
    background-color: transparent;
    border: none;
    color: black;
  }

  .paginationDiv .back-button,
  .paginationDiv .next-button {
    background-color: white;
    color: white;
    border-radius: 8px;
    height: 45px;
    width: 45px;
  }
  .paginationDiv .active-page {
    background-color: #e5e5e5;
  }
  .paginationDiv .paginate-buttons:hover {
    background-color: #f5f5f5;
  }
  .paginationDiv .active-page:hover {
    background-color: #e5e5e5;
  }

  .paginationDiv .back-button svg {
    transform: rotate(180deg) translateY(-2px);
  }
  .paginationDiv .next-button svg {
    transform: translateY(2px);
  }

  /* .paginationDiv .back-button:hover,
  .paginationDiv .next-button:hover {
    background-color: rgb(45, 45, 45);
  } */

  .paginationDiv .back-button:active,
  .paginationDiv .next-button:active {
    background-color: rgb(85, 85, 85);
  }
</style>