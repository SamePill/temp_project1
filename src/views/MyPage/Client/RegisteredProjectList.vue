<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div class="flex flex-col justify-start items-center w-[1060px] gap-5 bg-white">
      <SubHeader :topInfo="topInfo"/>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <SideMenu/>
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-10 pt-5"
        >
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
            등록한 프로젝트
          </p>
          <div class="flex justify-center items-center flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <div class="flex justify-between items-end flex-grow-0 flex-shrink-0 w-[790px]">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <div class="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden">
                  <!-- <div
                    class="w-6 h-6 absolute left-[2.75px] top-[2.75px] border-[1.5px] border-[#ddd]"
                  ></div> -->
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
                      @click="chkItemAll()"
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
                        v-show="chkAll == true"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">전체선택</p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                <DropDown style="z-index: 99" @click="documentClick('RegPrjtSort','dropDown')" id="RegPrjtSort" ref="$RegPrjtSort" @setData="getRegPrjtSort" :title="'정렬'" :listDivCd="'REG_PRJT_SORT'"/>
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
                >
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                  >
                    <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]" 
                    @click="openPopup()">모집종료</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[790px] h-px bg-[#ededed]"></div>

            <!-- 프로젝트 리스트 반복부 -->
            <div v-show="totalCnt > 0" v-for="el,idx in regProjList" :key="el">
              <RegisteredPrjtItem :projItem="el" @chkItem="chkItem(idx)" @showEngrDetail="showEngrDetail(idx)" mode="REGI"/>
            </div>
            
            <!-- 조회 내용이 없을 때 -->
            <MyPageNodata class="mt-[20px]" v-show="totalCnt == 0" :showDiv="2"/>
            
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
          <div
            class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] relative gap-5"
          >
       
          </div>
        </div>
      </div>
    </div>
    <modal ref="modalShow" :width="340">
      <confirmPopup message="정말로 엔지니어 모집을 종료 하시겠습니까?" btnOk="확인" btnCancel="닫기" @cancel="cancel" @confirm="confirm" />
    </modal>
    <modal ref="alertShow" :width="340">
      <messagePopup :message="alertMsg"  />
    </modal>
  </div>
</template>
<script setup>
  import DropDown from '@/components/uiComponents/DropDown.vue'
  import SubHeader from '@/components/layoutComponents/SubHeader.vue'
  import SideMenu from '@/components/layoutComponents/SideMenu.vue'
  import RegisteredPrjtItem from '@/components/baseComponents/RegisteredPrjtItem.vue'
  import MyPageNodata from '@/components/baseComponents/MyPageNodata.vue'
  import { ref, onMounted, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import Modal from '@/components/baseComponents/Modal.vue'
  import confirmPopup from '@/components/popupComponents/confirmPopup.vue'
  import messagePopup from '@/components/popupComponents/messagePopup.vue'

  const router = useRouter()

  const pageNo = ref(1)
  const totalCnt = ref()
  const userMail = ref(window.$cookies.get("loginUserMail"));
  const sortDiv = ref(20)
  const chkAll = ref(false)
  const regProjList = ref([])
  const topInfo = ref({
      compNm: "",
      userNm: "",
      sprtProjCnt: 0,
      prgsProjCnt: 0,
      cpltProjCnt: 0
  })
  const alertMsg = ref("")
  const RegPrjtSort = ref("")
  const $RegPrjtSort = ref()


  onMounted(() => {
    loadData();
  })

  function getRegPrjtSort(data){
    RegPrjtSort.value = data;
  }

  function documentClick(div,eventTarget){
    if(eventTarget == 'dropDown'){

      if(div != 'RegPrjtSort'){
        $RegPrjtSort.value.noShowItem();
      }
      // if(div != 'SelEngrSort'){
      //   $SelEngrSort.value.noShowItem();
      // }
      
    }
  }

  const filteredChkList = computed( () => {
      let filter = true
      return regProjList.value.filter( item => 
          item.chkVal == filter
      )
  })

  //확인창
  const modalShow = ref(null)
  const show = () => {
    if(filteredChkList.value.length == 0){
      return
    }else{
      modalShow.value.open() 
    }             
  }
  //취소버튼
  const cancel = function (){
      modalShow.value.close()
      
  }
  //확인버튼
  const confirm = function (){
      modalShow.value.close()
      finish()
  }

  // Alert창 제어
  const alertShow = ref(null)
  const showAlert = () => {
    if(filteredChkList.value.length > 0){
      return
    }else{
      alertShow.value.open() 
    }           
  }

  function openPopup(){  
    show();
  }

  function openAlert(msg){  
    alertMsg.value = msg
    showAlert();
  }


  async function loadData(selPage){
    
    console.log(selPage)
    if(selPage != null){
      pageNo.value = selPage;
    }

    var api = "/v1/my/reg-project-list";
    var getParams = {userMail: userMail.value, pageNo:pageNo.value, sortDiv:sortDiv.value};
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );
    
    if(rtn.rtnCd == "00"){
      console.log(rtn);
      let res = rtn.rtnData
      console.log(res);

      regProjList.value = res.regProjList
      topInfo.value = res.topInfo
      // TODO 총건수 필요..
      totalCnt.value = res.projTotlCnt
      // totalCnt.value = 0
  
    }else{
      //TODO 공통Alert으로 변경 예정
      alert(rtn.rtnMsg);
    }
    
  }


  function chkItem(idx){

    if(regProjList.value[idx].chkVal == true){
      regProjList.value[idx].chkVal = false  
      chkAll.value = false 
    }else{
      regProjList.value[idx].chkVal = true
    }

  }


  function chkItemAll(){
    if(chkAll.value == true){
      chkAll.value = false  
      regProjList.value.forEach(el=> el.chkVal = false)
    }else{
      chkAll.value = true
      regProjList.value.forEach(el=> el.chkVal = true)

    }
  }


  function showEngrDetail(idx){
    console.log(idx)
    
    router.push({name: "SelEngineerList"
                ,state : {
                  //dataObj : { a:1, b:'string', c:true },
                  dataObj : JSON.stringify(regProjList.value[idx].projId),
                }
              })
  }

  // function showPrjDetl(idx){
  //   router.push({name: "SelEngineerList"
  //               ,state : {
  //                 //dataObj : { a:1, b:'string', c:true },
  //                 dataObj : JSON.stringify(regProjList.value[idx].projId),
  //               }
  //             })
  // }
  


  async function finish(){
    console.log(filteredChkList);

    var api = "/v1/my/update/project-recruitment-terminate";
    var postParams = {projIdList : filteredChkList};
    var queryParams = { userMail: userMail.value , sortDiv:sortDiv.value};
    let rtn = await gfnUtils.axiosPost(
      api,
      postParams,
      queryParams
    );
    
    if(rtn.rtnCd == "00"){
      console.log(rtn);
      openAlert("엔지니어 모집이 종료되었습니다.")
    }else{
      //TODO 공통Alert으로 변경 예정
      //alert(rtn.rtnMsg);
      openAlert(rtn.rtnMsg)
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