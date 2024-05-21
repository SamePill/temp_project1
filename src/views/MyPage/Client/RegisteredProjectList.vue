<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div class="flex flex-col justify-start items-center w-[1060px] gap-5 bg-white">
      <SubHeader/>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <SideMenu/>
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-10 pt-5"
        >
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
            등록한 프로젝트
          </p>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <div class="flex justify-between items-end flex-grow-0 flex-shrink-0 w-[790px]">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <div class="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden">
                  <div
                    class="w-6 h-6 absolute left-[2.75px] top-[2.75px] border-[1.5px] border-[#ddd]"
                  ></div>
                </div>
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">전체선택</p>
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
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
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded bg-white border border-[#ddd]"
                >
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">모집종료</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[790px] h-px bg-[#ededed]"></div>

            <!-- 프로젝트 리스트 반복부 -->
            <div v-for="el in regProjList" :key="el">
              <RegisteredPrjtItem :regProjList="el" />
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
          <div
            class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] relative gap-5"
          >
            <!-- pagenation ???? here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SubHeader from '@/components/layoutComponents/SubHeader.vue'
import SideMenu from '@/components/layoutComponents/SideMenu.vue'
import RegisteredPrjtItem from '@/components/baseComponents/RegisteredPrjtItem.vue'
import { ref, onMounted } from 'vue'
import * as gfnUtils from "@/utils/gfnUtils.js";

const pageNo = ref(1)
const totalCnt = ref(100)
const userMail = ref(window.$cookies.get("loginUserMail"));
const sortDiv = ref(20)
const regProjList = ref([])

onMounted(() => {
  loadData();
})

async function loadData(selPage){
  
  console.log(selPage)
  if(selPage != null){
    pageNo.value = selPage;
  }

  var api = "/v1/my/reg-project-list";
  var postParams = {userMail: userMail.value, pageNo:pageNo.value, sortDiv:sortDiv.value};
  let rtn = await gfnUtils.axiosGet(
    api,
    postParams
  );
  
  console.log(rtn);
  let res = rtn.rtnData
  console.log(res);

  regProjList.value = res.regProjList
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