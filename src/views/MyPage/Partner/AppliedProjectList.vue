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
            지원한 프로젝트
          </p>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
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
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-black">전체선택</p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">

                <DropDown @click="documentClick('AplPrjtSort','dropDown')" id="AplPrjtSort" ref="$AplPrjtSort" @setData="getAplPrjtSort" :title="'정렬'" :listDivCd="'APL_PRJT_SORT'"/>
                <!-- <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
                >
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">지원순</p>
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
                <button
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
                  @click="cancelAppl()"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919] flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                  
                  >
                    지원취소
                  </p>
                </button>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[790px] h-px bg-[#ededed]">
            </div>
            <!-- 프로젝트 리스트 반복부 -->
            <div v-show="totalCnt > 0" v-for="el,idx in projList" :key="el">
              <RegisteredPrjtItem :projItem="el" @chkItem="chkItem(idx)" @showEngrDetail="showEngrDetail(idx)" mode="APPL"/>
            </div>
            <!-- 반복부 끝 -->

            <!-- 조회 내용이 없을 때 -->
            <MyPageNodata v-show="totalCnt == 0" :showDiv="1"/>

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
      <!-- <div
        class="flex flex-col justify-start items-start absolute left-[1285px] top-[283px] overflow-hidden rounded bg-white border border-[#ddd]"
        v-show="boolSort"
      >
        <div
          class="flex justify-start items-end flex-grow-0 flex-shrink-0 w-[124px] relative overflow-hidden gap-2.5 px-4 py-3 bg-white"
        >
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]">지원순</p>
        </div>
        <div
          class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[124px] relative overflow-hidden gap-2.5 px-4 py-3 bg-white"
        >
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">등록순</p>
        </div>
        <div
          class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[124px] relative overflow-hidden gap-2.5 px-4 py-3 bg-white"
        >
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">진행순</p>
        </div>
        <div
          class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[124px] relative overflow-hidden gap-2.5 px-4 py-3 bg-white"
        >
          <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">완료순</p>
        </div>
      </div> -->
    </div>
  </div>
</template>
  
<script setup>
  import DropDown from '@/components/uiComponents/DropDown.vue'
  import SubHeader from '@/components/layoutComponents/SubHeader.vue'
  import SideMenu from '@/components/layoutComponents/SideMenu.vue'
  import MyPageNodata from '@/components/baseComponents/MyPageNodata.vue'
  import RegisteredPrjtItem from '@/components/baseComponents/RegisteredPrjtItem.vue'
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import { onMounted, ref } from 'vue'


  onMounted(() => {
    loadData();
  })


  const pageNo = ref(1)
  const totalCnt = ref(0)
  // const boolSort = ref(false)
  const userMail = ref(window.$cookies.get("loginUserMail"))
  const sortDiv = ref()
  const projList = ref()
  const topInfo = ref({
      compNm: "",
      userNm: "",
      sprtProjCnt: 0,
      prgsProjCnt: 0,
      cpltProjCnt: 0
  })
  const chkAll = ref(false)
  const AplPrjtSort = ref("")
  const $AplPrjtSort = ref()  


  function getAplPrjtSort(data){
    AplPrjtSort.value = data;
  }

  async function cancelAppl(){
    console.log("지원취소")
  }

  
  function chkItem(idx){

    if(projList.value[idx].chkVal == true){
      projList.value[idx].chkVal = false  
      chkAll.value = false 
    }else{
      projList.value[idx].chkVal = true
    }

  }

  function chkItemAll(){
    if(chkAll.value == true){
      chkAll.value = false  
      projList.value.forEach(el=> el.chkVal = false)
    }else{
      chkAll.value = true
      projList.value.forEach(el=> el.chkVal = true)

    }
  }

  function showEngrDetail(idx){
    console.log(idx)
    
    // router.push({name: "SelEngineerList"
    //             ,state : {
    //               //dataObj : { a:1, b:'string', c:true },
    //               dataObj : JSON.stringify(regProjList.value[idx].projId),
    //             }
    //           })
  }

  function documentClick(div,eventTarget){
    if(eventTarget == 'dropDown'){

      if(div != 'AplPrjtSort'){
        $AplPrjtSort.value.noShowItem();
      }
      // if(div != 'SelEngrSort'){
      //   $SelEngrSort.value.noShowItem();
      // }
      
    }
  }


  async function loadData(selPage){
    console.log(selPage)
    if(selPage != null){
      pageNo.value = selPage;
    }
    var api = "/v1/my/support-project-list";
    var getParams = {userMail:userMail.value, sortDiv:sortDiv.value, pageNo: pageNo.value};
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    )

    if(rtn.rtnCd == "00"){
      console.log(rtn);
      projList.value = rtn.rtnData.projList
      topInfo.value = rtn.rtnData.topInfo
      totalCnt.value = rtn.rtnData.projTotlCnt

    }else{
      //TODO 공통Alert으로 변경 예정
      alert(rtn.rtnMsg);
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