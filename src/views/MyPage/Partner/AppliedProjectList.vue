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
                  <div
                    class="w-6 h-6 absolute left-[2.75px] top-[2.75px] border-[1.5px] border-[#ddd]"
                  ></div>
                </div>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-black">전체선택</p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                <div
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
                </div>
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
                >
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                  >
                    <button class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">지원취소</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[790px] h-px bg-[#ededed]"></div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
              <div
                class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[790px] relative"
              >
                <div class="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden">
                  <div
                    class="w-6 h-6 absolute left-[2.75px] top-[2.75px] border-[1.5px] border-[#ddd]"
                  ></div>
                </div>
                <div
                  class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-[30px]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left">
                    <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
                      >프로젝트 상태 : </span
                    ><span class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#1ba494]"
                      >모집 중</span
                    >
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                    지원날짜 : 2023-11-28
                  </p>
                </div>
              </div>



              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                <div
                  class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] overflow-hidden gap-[30px] p-[30px] rounded-[10px] bg-white border border-[#ddd]"
                >
                  <div
                    class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4"
                  >
                    <div
                      class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
                    >
                      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                        <div
                          class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#0b6bdc]/[0.15]"
                        >
                          <p
                            class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#0b6bdc]"
                          >
                            비상주
                          </p>
                        </div>
                        <div
                          class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dc0b56]/[0.15]"
                        >
                          <p
                            class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]"
                          >
                            고급 엔지니어
                          </p>
                        </div>
                      </div>
                      <div class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                    </div>
                    <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">
                      [대기업] 농협은행 (내부 직원용) 인사관련 프로그램 QA
                    </p>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                      <div
                        class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                          # 웹사이트
                        </p>
                      </div>
                      <div
                        class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                          # 어플리케이션
                        </p>
                      </div>
                      <div
                        class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                          # 셋톱박스
                        </p>
                      </div>
                      <div
                        class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"># 초급</p>
                      </div>
                      <div
                        class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"># 중급</p>
                      </div>
                      <div
                        class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"># 고급</p>
                      </div>
                    </div>
                    <div
                      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3"
                    >
                      <div
                        class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
                      >
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                          예상금액 : 600만원~800만원
                        </p>
                        <div
                          class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-1 py-0.5 rounded-sm bg-white border border-[#ddd]"
                        >
                          <p class="flex-grow-0 flex-shrink-0 text-[10px] text-left text-[#555]">
                            월 단위
                          </p>
                        </div>
                      </div>
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
                        투입기간 : 4개월
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
                        필요인원 : 10명
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
                        서울특별시 강남구
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-[30px] rounded-[10px] bg-white border border-[#ddd]"
                >
                  <div
                    class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[730px] h-10"
                  >
                    <div
                      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[30px]"
                    >
                      <div
                        class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                      >
                        <p
                          class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                        >
                          10명
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">총 지원자</p>
                      </div>
                      <svg
                        width="2"
                        height="32"
                        viewBox="0 0 2 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <path d="M1 0V32" stroke="#DDDDDD"></path>
                      </svg>
                      <div
                        class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                      >
                        <p
                          class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                        >
                          2명
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                          선정 엔지니어
                        </p>
                      </div>
                      <svg
                        width="2"
                        height="32"
                        viewBox="0 0 2 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <path d="M1 0V32" stroke="#DDDDDD"></path>
                      </svg>
                      <div
                        class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                      >
                        <p
                          class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                        >
                          2명
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">미팅 예정</p>
                      </div>
                      <svg
                        width="2"
                        height="32"
                        viewBox="0 0 2 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <path d="M1 0V32" stroke="#DDDDDD"></path>
                      </svg>
                      <div
                        class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                      >
                        <p
                          class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                        >
                          1명
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                          대기 엔지니어
                        </p>
                      </div>
                      <svg
                        width="2"
                        height="32"
                        viewBox="0 0 2 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <path d="M1 0V32" stroke="#DDDDDD"></path>
                      </svg>
                      <div
                        class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                      >
                        <p
                          class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#555]"
                        >
                          7명
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                          불합격 엔지니어
                        </p>
                      </div>
                    </div>
                    <div
                      class="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-0.5"
                    >
                      <p class="flex-grow-0 flex-shrink-0 text-sm text-left">상세보기</p>
                      <div class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- pagenation -->
              <div class="paginationDiv h-10 my-10 mx-auto font-basic" style="text-align:center">
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
      </div>
      <div
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
      </div>
    </div>
  </div>
</template>
  
<script setup>
import SubHeader from '@/components/layoutComponents/SubHeader.vue'
import SideMenu from '@/components/layoutComponents/SideMenu.vue'
import * as gfnUtils from "@/utils/gfnUtils.js";
import { onMounted, ref } from 'vue'


onMounted(() => {
  loadData();
})


const pageNo = ref(1)
const totalCnt = ref(0)
const boolSort = ref(false)
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


async function loadData(selPage){
  console.log(selPage)
  if(selPage != null){
    pageNo.value = selPage;
  }
  var api = "/v1/my/support-project-list";
  var postParams = {userMail:userMail.value, sortDiv:sortDiv.value, pageNo: pageNo.value};
  let rtn = await gfnUtils.axiosGet(
    api,
    postParams
  )

  if(rtn.rtnCd == "00"){
    console.log(rtn);
    projList.value = rtn.rtnData.projList
    topInfo.value = rtn.rtnData.topInfo
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