<template>
  <div class="w-[1060px] my-10 mx-auto font-basic">
    <div
      class="mt-[80px] flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1060px]"
    >
      <div
        class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative"
      >
        <p
          class="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-[#191919]"
        >
          자주하는 질문
        </p>
      </div>
      <div
        class="mt-[30px] mb-[20px] flex justify-start items-start flex-grow-0 flex-shrink-0 relative"
      >
        <button
          @click="clickTapItem('10')"
          class="pb-[10px] w-[170px] text-center text-xl text-left text-[#191919] border-b-[3px]"
          :class="
            faqDivCd == '10'
              ? ' text-[#191919] border-[#1ba494] border-b-[3px]  pb-[10px] font-bold'
              : 'text-[#777777] border-[#dddddd] border-b-[1px] pb-[12px] font-medium '
          "
        >
          클라이언트 FAQ
        </button>
        <button
          @click="clickTapItem('20')"
          class="w-[170px] text-center text-xl text-left text-[#191919]"
          :class="
            faqDivCd == '20'
              ? ' text-[#191919] border-[#1ba494] border-b-[3px] pb-[10px] font-bold'
              : 'text-[#777777] border-[#dddddd] border-b-[1px] pb-[12px] font-medium '
          "
        >
          QA파트너스 FAQ
        </button>
      </div>

      <div
        v-for="(el, i) in faqList"
        :key="i"
        class="mt-[20px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative"
      >
        <div v-if="i < showIdx" class="flex w-[1060px] relative pl-px pr-2.5">
          <div class="flex w-[1025px] relative">
            <p class="flex w-[150px] font-bold text-left text-[#191919]">
              {{ el.faqSubDivCdNm }}
            </p>
            <button
              @click="showFaqRepyTxt(i)"
              class="flex-grow-0 flex-shrink-0 w-[875px] text-base text-left text-[#333]"
            >
              {{ el.faqTitl }}
            </button>
          </div>
          <button @click="showFaqRepyTxt(i)">
            <img class="w-[25px]" src="@/assets/ic_small_arrow_001.png" />
          </button>
        </div>
        <div
          v-show="i < showIdx && showFaqRepyTxtIdx == i"
          class="w-[1060px] mt-[20px] gap-2.5 px-[34px] py-[30px] bg-[#ededed]"
        >
          <p class="self-stretch w-[992px] text-base text-left text-black">
            {{ el.faqRepyTxt }}
          </p>
        </div>
        <div
          v-if="i < showIdx - 1"
          class="mt-[20px] flex-grow-0 flex-shrink-0 w-[1060px] h-px bg-[#ddd]"
        ></div>
      </div>
      <div class="flex justify-center items-center">
        <div
          v-show="faqList.length > 0"
          class="mt-[60px] paginationDiv w-[1060px] h-10 mx-auto font-basic"
          style="text-align: center"
        >
          <vue-awesome-paginate
            :total-items="totalCnt"
            v-model="pageNo"
            :items-per-page="10"
            :max-pages-shown="10"
            :on-click="pagenation"
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
</template>
<script setup>
import * as gfnUtils from "@/utils/gfnUtils.js";
import { onMounted, onUnmounted, ref } from "vue";
// import { useRouter } from 'vue-router';

// const router = useRouter()
const pageNo = ref(1);
const faqDivCd = ref("");
const faqList = ref([]);
const totalCnt = ref(0);
const showFaqRepyTxtIdx = ref(null);
const showIdx = ref(10);
const { dataObj } = history.state;

onMounted(() => {
  loadData();
});

onUnmounted(() => {});

function loadData() {
  if (dataObj != undefined) {
    console.log(dataObj);
    faqDivCd.value = dataObj.div;
  }

  srchFaqList();
}

//상단아이템 선택
// function goToPage(path){
//   //company news
//   //ApplyPtnSrve
//   //Questions,inquire
//   router.push({name :path})
// }

//리스트조회
async function srchFaqList() {
  if (faqDivCd.value == "") {
    faqDivCd.value = "10";
  }
  let getParams = { faqDivCd: faqDivCd.value, pageNo: pageNo.value };
  console.log(getParams)
  let res = await gfnUtils.axiosGet("/v1/common/faq", getParams);
  if (res.rtnCd == "00") {
    faqList.value = res.rtnData.faqList;
    totalCnt.value = res.rtnData.faqTotCnt;
  } else {
    gfnUtils.openAlert(res.rtnMsg);
  }
}

//답변보기
function showFaqRepyTxt(idx) {
  if (showFaqRepyTxtIdx.value === idx) {
    showFaqRepyTxtIdx.value = null;
  } else {
    showFaqRepyTxtIdx.value = idx;
  }
}

//탭선택
function clickTapItem(faqDivCdVal) {
  faqDivCd.value = faqDivCdVal;
  showFaqRepyTxtIdx.value = null;
  pageNo.value = 1;
  srchFaqList();
}

//페이지네이션
function pagenation() {
  showFaqRepyTxtIdx.value = null;
  srchFaqList();
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