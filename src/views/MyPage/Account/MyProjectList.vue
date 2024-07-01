
<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div
      class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[1000px] overflow-hidden gap-5 px-[430px] pt-10 pb-[100px] bg-[#fefefe]"
    >
      <SubHeader :topInfo="topInfo"/>
      <!-- <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
        <div class="flex justify-between items-end self-stretch flex-grow-0 flex-shrink-0 relative">
          <p class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black">
            <span class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black">김현성님</span
            ><br /><span class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-black"
              >안녕하세요</span
            >
          </p>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]"></div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"></div>
      </div> -->
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <SideMenu/>
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-10 pt-5"
        >
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
            프로젝트 현황
          </p>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
              <!-- 미선택 text-left text-[#191919]  bg-white border border-[#ddd] -->
              <!-- 선택 font-medium text-left text-white  bg-[#1ba494] -->
              <!-- flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px] -->
              <button
              
                :class='(projStatCd === "" ? "bg-[#1ba494] font-medium text-left text-white" : "bg-white border border-[#ddd] text-left text-[#191919]")  + " flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px]" '
                @click="srchList('')"
              >
                전체
              </button>
              <button
                :class='(projStatCd === "10" ? "bg-[#1ba494] font-medium text-left text-white" : "bg-white border border-[#ddd] text-left text-[#191919]")  + " flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px]" '
                @click="srchList('10')"
              >
                모집중
              </button>
              <button
                :class='(projStatCd === "20" ? "bg-[#1ba494] font-medium text-left text-white" : "bg-white border border-[#ddd] text-left text-[#191919]")  + " flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px]" '
                @click="srchList('20')"
              >
                미팅중
              </button>
              <button
                :class='(projStatCd === "30" ? "bg-[#1ba494] font-medium text-left text-white" : "bg-white border border-[#ddd] text-left text-[#191919]")  + " flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px]" '
                @click="srchList('30')"
              >
                진행확정
              </button>
              <button
                :class='(projStatCd === "40" ? "bg-[#1ba494] font-medium text-left text-white" : "bg-white border border-[#ddd] text-left text-[#191919]")  + " flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px]" '
                @click="srchList('40')"
                >
                계약중
              </button>
              <button
                :class='(projStatCd === "50" ? "bg-[#1ba494] font-medium text-left text-white" : "bg-white border border-[#ddd] text-left text-[#191919]")  + " flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px]" '
                @click="srchList('50')"
                >
                수행중
              </button>
              <button
                :class='(projStatCd === "60" ? "bg-[#1ba494] font-medium text-left text-white" : "bg-white border border-[#ddd] text-left text-[#191919]")  + " flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px]" '
                @click="srchList('60')"
                >
                종료
              </button>
              <button
                :class='(projStatCd === "70" ? "bg-[#1ba494] font-medium text-left text-white" : "bg-white border border-[#ddd] text-left text-[#191919]")  + " flex-grow-0 flex-shrink-0 text-sm flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-3 py-1.5 rounded-[100px]" '
                @click="srchList('70')"
                >
                취소/관리
              </button>
            </div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5 bg-white"
            >
              <div class="flex-grow-0 flex-shrink-0 w-[790px] h-px bg-[#ededed]"></div>
              <div
                class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[790px] h-8 relative gap-20"
              >
                <p class="flex-grow-0 flex-shrink-0 w-[60px] text-sm text-left text-[#555]">구분</p>
                <p class="flex-grow-0 flex-shrink-0 w-[60px] text-sm text-left text-[#555]">상태</p>
                <p class="flex-grow-0 flex-shrink-0 w-60 text-sm text-left text-[#555]">프로젝트 명</p>
                <p class="flex-grow-0 flex-shrink-0 w-[60px] text-sm text-left text-[#555]">기간</p>
                <p class="flex-grow-0 flex-shrink-0 w-[140px] text-sm text-left text-[#555]">
                  예상금액
                </p>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] gap-3"
                v-show="totalCnt > 0" v-for="el in projList" :key="el"
              >
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 h-8 relative gap-20"
                >
                  <p v-if="gfnRules.isNull(el.projSprtSeq)" class="flex-grow-0 flex-shrink-0 w-[60px] text-sm text-left text-[#191919]">
                    등록
                  </p>
                  <p v-else class="flex-grow-0 flex-shrink-0 w-[60px] text-sm text-left text-[#191919]">
                    지원
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 w-[60px] text-sm text-left text-[#191919]">
                    {{el.projStatCdNm}}
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 w-60 text-sm text-left text-[#191919]">
                    {{el.projTitl}}
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 w-[60px] text-sm text-left text-[#191919]">
                    {{el.pirdVal}}개월
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 w-[140px] text-sm text-left text-[#191919]">
                    {{gfnUtils.formattedNumber(el.expcPric/10000)}} 만원
                  </p>
                </div>
                <!--  반복부 끝 -->
              </div>
            </div>
          </div>

          <div
            class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] relative gap-5"
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
    </div>
  </div>    
</template>
<script setup>
import SubHeader from '@/components/layoutComponents/SubHeader.vue'
import SideMenu from '@/components/layoutComponents/SideMenu.vue'
import { ref, onMounted } from 'vue'
//import { useRouter } from 'vue-router'
import * as gfnRules from "@/utils/gfnRules.js";
import * as gfnUtils from "@/utils/gfnUtils.js";

onMounted(() => {
  loadData();
})


const pageNo = ref(1)
const totalCnt = ref(0)
const topInfo = ref({})
const projStatCd = ref('')
const userMail = ref(window.$cookies.get("loginUserMail"));
const projList = ref({})


function srchList(div){
  projStatCd.value = div
  loadData();
}

async function loadData(selPage){

  if(selPage != null){
    pageNo.value = selPage;
  }

  var api = "/v1/my/total-proj";
  var getParams = {userMail: userMail.value, pageNo:pageNo.value, projStatCd:projStatCd.value};
  let rtn = await gfnUtils.axiosGet(
    api,
    getParams
  );
  
  if(rtn.rtnCd == "00"){
    let res = rtn.rtnData
    console.log(res)
    projList.value = res.projList
    topInfo.value = res.topInfo
    totalCnt.value = res.projTotlCnt

  }else{
    gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
  }
}

</script>