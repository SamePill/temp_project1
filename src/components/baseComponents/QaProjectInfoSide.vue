<template>
  <div>
    <!-- 모집중,지원전,지원상태 -->
    <!-- 지원후 -->
    <!-- 모집완료 -->
    <!-- 지원중 -->

    <!-- 로그아웃 -->

    <div v-if="gfnRules.isNull(loginUserNm)" class="w-[340px]">
      <div
        class="flex flex-col justify-between items-start flex-grow-0 flex-shrink-0 h-[266px] w-[340px] relative overflow-hidden p-5 rounded-[10px] bg-white border border-[#ddd]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">
          지원하기
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-[300px] text-xl text-center text-[#777]"
        >
          <span
            class="flex-grow-0 flex-shrink-0 w-[300px] text-xl text-center text-[#777]"
            >로그인 후 해당 공고를 </span
          ><br /><span
            class="flex-grow-0 flex-shrink-0 w-[300px] text-xl text-center text-[#777]"
            >확인할 수 있습니다.
          </span>
        </p>
        <button
          @click="goToPage('Login')"
          class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-base font-bold text-left text-white"
        >
          로그인 / 회원가입
        </button>
      </div>
    </div>
    <!-- 로그인 -->
    <div v-if="!gfnRules.isNull(loginUserNm) && !isShowDetl" class="w-[340px]">
      <div
        class="flex flex-col justify-between flex-grow-0 flex-shrink-0 p-5 rounded-[10px] bg-white border border-[#ddd]"
      >
        <p
          v-if="workDivCd == '90' || prj.projectSprtInfo == null"
          class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919] mb-5"
        >
          <span
            class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
            >김큐밋님 </span
          ><br />
          <span
            class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
            >안녕하세요.</span
          >
        </p>
        <button
          v-if="workDivCd == '90'"
          class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#999999] text-base font-medium text-left text-white"
        >
          모집이 종료되었습니다
        </button>
        <div v-else>
          <div v-if="prj.crtdUserMail == userMail">
            <!-- 프로젝트 등록자 -->
            <button
              class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
              @click="editProject()"
            >
              프로젝트 수정하기
            </button>
          </div>
          <div v-else>
            <div v-if="prj.projectSprtInfo == null">
              <!-- 프로젝트 지원자 (지원전) -->
              <button
                @click="clickSideMenuBtn()"
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-base font-medium text-left text-white"
              >
                프로젝트 지원하기
              </button>
            </div>
            <div v-else>
              <!-- 프로젝트 지원자 (지원후) -->
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]"
                >
                  지원한 엔지니어 현황
                </p>
                <div
                  class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3"
                >
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4"
                  >
                    <div
                      class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]"
                    >
                      <p
                        class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]"
                      >
                        초급 엔지니어
                      </p>
                    </div>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                    >
                      {{ engr10Cnt }} 명 지원
                    </p>
                  </div>
                  <div
                    class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4"
                  >
                    <div
                      class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]"
                    >
                      <p
                        class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]"
                      >
                        중급 엔지니어
                      </p>
                    </div>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                    >
                      {{ engr20Cnt }} 명 지원
                    </p>
                  </div>
                  <div
                    class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4"
                  >
                    <div
                      class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]"
                    >
                      <p
                        class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]"
                      >
                        고급 엔지니어
                      </p>
                    </div>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                    >
                      {{ engr30Cnt }} 명 지원
                    </p>
                  </div>
                  <div
                    class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4"
                  >
                    <div
                      class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#faf1db]"
                    >
                      <p
                        class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc630b]"
                      >
                        특급 엔지니어
                      </p>
                    </div>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                    >
                      {{ engr40Cnt }} 명 지원
                    </p>
                  </div>
                </div>
              </div>
              <!-- 지원한 프로젝트 지원내용 수정 -->
              <button
                @click="clickSideMenuBtn()"
                class="mt-[20px] flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] overflow-hidden px-2.5 py-4 rounded bg-[#1ba494] text-base font-medium text-left text-white"
              >
                수정하기
              </button>
              <!-- 지원한 프로젝트 지원내용 취소 -->
              <button
                @click="clickSideMenuBtn('cancel')"
                class="mt-[10px] flex justify-center w-[300px] px-1.5 py-4 rounded border border-[#1ba494] text-base font-medium text-left text-[#1ba494]"
              >
                지원 취소하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isShowDetl"
      class="flex flex-col justify-center items-start overflow-hidden gap-10 p-5 rounded-[10px] bg-white border border-[#ddd]"
    >
      <div
        class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5"
      >
        <div
          class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
        >
          <p
            class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]"
          >
            지원서 작성
          </p>
          <p
            class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#777]"
            style="cursor: pointer"
            @click="isShowDetl = false"
          >
            뒤로가기
          </p>
        </div>
        <div
          class="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#ddd]"
        ></div>
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
        >
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">
            엔지니어 선택
          </p>
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3"
          >
            <div
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4"
            >
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]"
                >
                  초급 엔지니어
                </p>
              </div>
              <p
                class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
              >
                {{ engr10Cnt }} 명 지원
              </p>
            </div>
            <div
              class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4"
            >
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]"
                >
                  중급 엔지니어
                </p>
              </div>
              <p
                class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
              >
                {{ engr20Cnt }} 명 지원
              </p>
            </div>
            <div
              class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4"
            >
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]"
                >
                  고급 엔지니어
                </p>
              </div>
              <p
                class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
              >
                {{ engr30Cnt }} 명 지원
              </p>
            </div>
            <div
              class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4"
            >
              <div
                class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#faf1db]"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc630b]"
                >
                  특급 엔지니어
                </p>
              </div>
              <p
                class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
              >
                {{ engr40Cnt }} 명 지원
              </p>
            </div>
          </div>
          <button
            @click="popup()"
            class="flex justify-center w-[300px] gap-2.5 px-2.5 py-4 rounded border border-[#ddd] text-base font-medium text-left text-[#555]"
          >
            엔지니어 선택하기
          </button>
        </div>
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
        >
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">
            프로젝트 희망 시작일
          </p>
          <input
            type="date"
            v-model="hopeStrtDay"
            :min="today"
            class="w-[300px] text-[#999] h-10 relative overflow-hidden px-2.5 py-2 rounded bg-white border border-[#ddd]"
            placeholder="프로젝트 시작 희망일을 선택해 주세요."
          />
          <!-- TO_DO input type date css수정필요 -->
        </div>
      </div>
      <div
        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5"
      >
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
        >
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
            style="cursor: pointer"
            @click="checkTrmsYn('use')"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect
                x="4.75"
                y="4.75"
                width="22.5"
                height="22.5"
                stroke="#DDDDDD"
                stroke-width="1.5"
              ></rect>
              <path
                v-if="useTrmsYn"
                d="M9 16L14 21L22 13L23 12"
                stroke="#191919"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p
              class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
            >
              (필수) 큐밋 이용약관에 동의합니다.
            </p>
          </div>
          <button
            class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10 text-xs text-right text-[#777]"
            @click="useTrmsYnIsShow = !useTrmsYnIsShow"
          >
            상세보기
            <!-- TO_DO 상세보기 구현 필요 -->
          </button>
          <div class="pl-10 text-sm" v-if="useTrmsYnIsShow">
            큐밋 이용약관 동의설명
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5"
        >
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"
            style="cursor: pointer"
            @click="checkTrmsYn('priv')"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect
                x="4.75"
                y="4.75"
                width="22.5"
                height="22.5"
                stroke="#DDDDDD"
                stroke-width="1.5"
              ></rect>
              <path
                v-if="privTrmsYn"
                d="M9 16L14 21L22 13L23 12"
                stroke="#191919"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p
              class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
            >
              (필수) 개인정보 제 3자 제공에 동의합니다.
            </p>
          </div>
          <button
            class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10 text-xs text-right text-[#777]"
            @click="privTrmsYnIsShow = !privTrmsYnIsShow"
          >
            상세보기
            <!-- TO_DO 상세보기 구현 필요 -->
          </button>
          <div class="pl-10 text-sm" v-if="privTrmsYnIsShow">
            개인정보 제 3자 제공 동의설명
          </div>
        </div>
      </div>
      <button
        class="flex justify-center text-base font-medium text-left text-white w-[300px] px-2.5 py-4 rounded bg-[#1ba494]"
        @click="apply"
      >
        지원하기
      </button>
    </div>
    <EngineerApplyPopup
      :prj="JSON.parse(JSON.stringify(props.prj))"
      ref="$EngineerPopup"
      @selectEngr="selectEngr"
    ></EngineerApplyPopup>
    <Modal ref="modalConfirm" :width="340">
      <confirmPopup
        message="정말로 프로젝트 지원을 취소 하시겠습니까?"
        btnOk="확인"
        btnCancel="닫기"
        @cancel="cancel"
        @confirm="confirm"
      />
    </Modal>    
  </div>
</template>
<script setup>
import { ref, defineProps, onMounted } from "vue";
import * as gfnRules from "@/utils/gfnRules.js";
import * as gfnUtils from "@/utils/gfnUtils.js";
import EngineerApplyPopup from "@/components/popupComponents/EngineerApplyPopup.vue";
import Modal from "@/components/baseComponents/Modal.vue";
import confirmPopup from "@/components/popupComponents/confirmPopup.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const $EngineerPopup = ref();

const today = gfnUtils.getToday();
const props = defineProps({ prj: {} });

const loginUserNm = ref(window.$cookies.get("loginUserNm"));
const userMail = ref(window.$cookies.get("loginUserMail"));
// const projId = ref(props.value.prj.projId);
// const sprtUserMail= ref(window.$cookies.get("loginUserMail"));
const hopeStrtDay = ref("");
const useTrmsYn = ref(false);
const privTrmsYn = ref(false);

const useTrmsYnIsShow = ref(false);
const privTrmsYnIsShow = ref(false);

const isShowDetl = ref(false);

const engr10Cnt = ref(0);
const engr20Cnt = ref(0);
const engr30Cnt = ref(0);
const engr40Cnt = ref(0);
const engrList = ref([]);

//모달 테스트
const modalConfirm = ref(null);
const showConfirm = () => {
  modalConfirm.value.open();
};
//취소버튼
const cancel = function () {
  modalConfirm.value.close();
};
//확인버튼
const confirm = function () {
  modalConfirm.value.close();
  cancelApply();
};

onMounted(() => {
  //로그인 후 - 지원 전(projectSprtInfo유무),지원 중
  //로그인 후 - 지원 후(projectSprtInfo유무)
  //hopeStrtDay.value = today;
  if (gfnRules.isNull(props.prj.projectSprtInfo)) {
    hopeStrtDay.value = "";
  } else {
    hopeStrtDay.value = props.prj.projectSprtInfo.hopeStrtDay.replace(
      /(\d{4})(\d{2})(\d{2})/,
      "$1-$2-$3"
    );
    engr10Cnt.value = props.prj.projectSprtInfo.engrRtngCntInfo.bgnrCnt;
    engr20Cnt.value = props.prj.projectSprtInfo.engrRtngCntInfo.intrCnt;
    engr30Cnt.value = props.prj.projectSprtInfo.engrRtngCntInfo.advnCnt;
    engr40Cnt.value = props.prj.projectSprtInfo.engrRtngCntInfo.spclCnt;

    useTrmsYn.value = props.prj.projectSprtInfo.useTrmsYn == "Y" ? true : false;
    privTrmsYn.value =
      props.prj.projectSprtInfo.useTrmsYn == "Y" ? true : false;
  }
});

function goToPage(div) {
  router.push({ name: div });
}
function popup() {
  $EngineerPopup.value.loadData();
  $EngineerPopup.value.show();
}

function checkTrmsYn(div) {
  if (div == "use") {
    useTrmsYn.value = !useTrmsYn.value;
  }
  if (div == "priv") {
    privTrmsYn.value = !privTrmsYn.value;
  }
}

function clickSideMenuBtn(div) {
  if (div == "cancel") {
    console.log(props.prj);
    showConfirm();
    //컨펌띄우기
  } else {
    isShowDetl.value = true;
    console.log(props.prj);
    // if (props.prj.projectSprtInfo != null) {
    // }
  }
}

async function editProject() {
  //TODO 프로젝트 수정전 프로젝트 정보 조회하여 넘김 (칩 체크리스트 오류...).

  var getParams = { projId: props.prj.projId, userMail: userMail.value };
  await gfnUtils
    .axiosGet("/v1/project/step-all", getParams)
    .then(function (rtn) {
      if (rtn.rtnCd == "00") {
        console.log(rtn);

        let projStep = rtn.rtnData;

        for (let key in projStep.projOneStep.jobDivCdList) {
          projStep.projOneStep.jobDivCdList[key].chkVal = true;
        }

        for (let key in projStep.projOneStep.taskDivCdList) {
          projStep.projOneStep.taskDivCdList[key].chkVal = true;
        }

        console.log(projStep);
        router.push({
          name: "PrjtRegiPage1",
          state: {
            dataObj: JSON.stringify(projStep),
          },
        });
      } else {
        console.log(rtn);
      }
    });
}

async function apply() {
  //프로젝트 지원하기 및 수정지원
  // 지원 /v1/project/support
  // 수정 /v1/project/modify/support -> //projSprtSeq

  if (!useTrmsYn.value || !privTrmsYn.value) {
    gfnUtils.openAlert("동의하지 않은 약관이 있습니다.", "", 2000);
    return false;
  }
  if (gfnRules.isNull(hopeStrtDay.value)) {
    gfnUtils.openAlert("희망 투입일자를 입력해 주세요.", "", 2000);
    return false;
  }

  var api = "";
  var getParams = { userMail: userMail.value };
  var postParams = {
    projId: props.prj.projId,
    sprtUserMail: userMail.value,
    hopeStrtDay: hopeStrtDay.value.replaceAll("-", ""),
    useTrmsYn: "Y",
    privTrmsYn: "Y",
    engrList: [],
  };

  if (engrList.value.length > 0) {
    console.log("엔지니어 추가");
    for (let i = 0; i < engrList.value.length; i++) {
      postParams.engrList.push({ engrId: engrList.value[i].engrId });
    }
  } else {
    console.log("엔지니어 선택확인 필요..");
    //TODO 수정인경우 엔지니어 목록 처리 방법 확인필요
    gfnUtils.openAlert("엔지니어 목록을 확인해주세요.", "", 2000);
    return;
  }

  if (gfnRules.isNull(props.prj.projectSprtInfo)) {
    api = "/v1/project/support";
  } else {
    postParams.projSprtSeq = props.prj.projectSprtInfo.projSprtSeq;
    api = "/v1/project/modify/support";
  }

  console.log(postParams);

  var rtn = await gfnUtils.axiosPost(api, postParams, getParams);
  if (rtn.rtnCd == "00") {
    gfnUtils.openAlert("정상적으로 처리되었습니다.", "", 2000);
  } else {
    gfnUtils.openAlert(rtn.rtnMsg, "", 2000);
  }
}

async function cancelApply() {
  //TODO 지원 취소 API 확인 필요
  console.log("지원 취소 API 확인 필요!!!!!!!!!!!");
  
  // let api = "";
  // let postParams = {};
  // let getParams = {};

  // var rtn = await gfnUtils.axiosPost(api, postParams, getParams);
  // if (rtn.rtnCd == "00") {
  //   gfnUtils.openAlert("정상적으로 처리되었습니다.","", 2000)
  // } else {
  //   gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
  // }
}

function selectEngr(applEngrList, sel10Cnt, sel20Cnt, sel30Cnt, sel40Cnt) {
  //선택한 엔지니어 정도
  engrList.value = applEngrList;
  engr10Cnt.value = sel10Cnt;
  engr20Cnt.value = sel20Cnt;
  engr30Cnt.value = sel30Cnt;
  engr40Cnt.value = sel40Cnt;
  console.log("지원 엔지니어 정보");
}

/*
  prop.prj
  { "projId": "C00001P00016"
  , "workDivCd": "10"
  , "workDivCdNm": "상주"
  , "projTitl": "리드워크 웹서비스 검증_수정_001"
  , "engrCnt": "10"
  , "pirdVal": "12"
  , "strtDay": "20240801"
  , "expcPric": 41000000
  , "workAddr": "서울시 강남구 홍제동"
  , "projStatCd": "10"
  , "projStatCdNm": "모집중"
  , "regDttm": "20240415142852"
  , "engrRtngInfo": { "bgnrEngrCnt": 2, "bgnrEngrUnitPric": 2000000, "intrEngrCnt": 4, "intrEngrUnitPric": 4000000, "advnEngrCnt": 3, "advnEngrUnitPric": 5000000, "spclEngrCnt": 1, "spclEngrUnitPric": 6000000 }
  , "projSprtSeq": null
  , "jobDivCdNmList": [ { "jobDivCdNm": "#금융", "jobDivCd": "30" } ]
  , "taskDivCdNmList": [ { "taskDivCdNm": "#IOT", "taskDivCd": "30" } ]
  , "atndTime": "1000"
  , "lvwkTime": "1800"
  , "projCtntTask": "웹 서비스 검증을 수정합니다."
  , "projDmndSkil": "TC, 리딩, 관리"
  , "projUseTool": "지라, 슬랙, 메일"
  , "projEtcInfo": "기타입니다."
  , "crtdUserMail": "klyhja@l-walk.com"
  , "strtDayCnslYn": "N"
  , "projectSprtInfo": { 
        "projSprtSeq": "7"
      , "projId": "C00001P00016"
      , "hopeStrtDay": "20240801"
      , "useTrmsYn": "Y"
      , "privTrmsYn": "Y"
      , "engrRtngCntInfo": { 
                "bgnrCnt": 3
              , "intrCnt": 0
              , "advnCnt": 0
              , "spclCnt": 0 } }
  , "fileList": [ { "fileUrl": "https://d2o04aboxunrcy.cloudfront.net/projFile/202404/FindEat.pdf", "fileNm": "FindEat.pdf", "projFileSeq": "28" }, { "fileUrl": "https://d2o04aboxunrcy.cloudfront.net/projFile/202404/%EB%A6%AC%EB%93%9C%EC%9B%8C%ED%81%AC+%ED%99%88%ED%99%94%EB%A9%B4.png", "fileNm": "리드워크 홈화면.png", "projFileSeq": "29" } ]
  , "projChckDivCdList": [ { "projChckDivCd": "10", "projChckDivCdNm": "프로젝트 수행 시 연장 및 휴일 근무가 필요합니다." }, { "projChckDivCd": "20", "projChckDivCdNm": "연장 / 휴일 근무 발생 시 대체휴무 제공합니다." } ] }
  */
</script>

