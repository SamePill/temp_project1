<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div class="flex flex-col justify-start items-center w-[1060px] gap-5 bg-white">
      <SubHeader :topInfo="topInfo"/>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <SideMenu/>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-5">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[790px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
                엔지니어 관리
              </p>
              <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">
                엔지니어 추가하기
              </button>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">총 인원 : 180명</p>
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
                초급 엔지니어 : 100명
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
                중급 엔지니어 : 60명
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
                고급 엔지니어 : 15명
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
                특급 엔지니어 : 5명
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div
              class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 w-[790px] gap-5"
            >
              <div
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
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                <div
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
                </div>
                <div
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
                </div>
                <div
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
                </div>
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
              <EngineerItem/>
            </div>
          </div>

                      
          <!-- 조회 내용이 없을 때 -->
          <MyPageNodata v-show="totalCnt == 0" :showDiv="3"/>

          <div v-show="totalCnt > 0"
            class="paginationDiv flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] relative gap-5"
          >
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
  </div>
</template>
<script setup>
import SubHeader from '@/components/layoutComponents/SubHeader.vue'
import SideMenu from '@/components/layoutComponents/SideMenu.vue'
import EngineerItem from '@/components/baseComponents/EngineerItem.vue'
import MyPageNodata from '@/components/baseComponents/MyPageNodata.vue'
import { ref, onMounted } from 'vue'
import * as gfnUtils from "@/utils/gfnUtils.js";

const pageNo = ref(1)
const totalCnt = ref(100)
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

onMounted(() => {
  loadData();
})

async function loadData(selPage){
  
  console.log(selPage)
  if(selPage != null){
    pageNo.value = selPage;
  }

  var api = "/v1/my/engineer/management";
  var postParams = {userMail: userMail.value, pageNo:pageNo.value, engrNm:"", srvdStatCd:"", engrRtngDivCd:"", engrSortDiv:"", };
  let rtn = await gfnUtils.axiosGet(
    api,
    postParams
  );
  
  if(rtn.rtnCd == "00"){
    console.log(rtn);
    let res = rtn.rtnData
    console.log(res);

    engineerList.value = res.engineerList
    topInfo.value = res.topInfo
    totalCnt.value = res.totalCnt
    totalCnt.value = 0
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