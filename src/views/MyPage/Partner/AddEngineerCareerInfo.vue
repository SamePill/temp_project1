<template>
    <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[700px] pt-10 pb-[100px] bg-[#fefefe]"
    >
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-10">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative gap-2.5"
          >
            <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
                엔지니어 추가
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-left">
                <span class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]"
                  >2 </span
                ><span class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#777]">/</span
                ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]">2</span>
              </p>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[519px] h-px bg-[#191919]"></div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#1ba494]">
              등록한 프로젝트 2개
            </p>
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
                d="M5 9L12 15L19 9"
                stroke="#191919"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg> -->
          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[520px] h-px bg-[#ddd]"></div>
        <div
          class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5"
        >
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div
                  class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                    <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                      >프로젝트 명 </span
                    ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#ff5252]">*</span>
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left">
                    <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">1</span
                    ><span class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#191919]">
                    </span
                    ><span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">/50</span>
                  </p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                  <input
                    type="text"
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                    placeholder="프로젝트명을 입력해주세요."
                    v-model="engrStep2Detl.projTitl"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div
                  class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                    <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                      >클라이언트 명 </span
                    ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#ff5252]">*</span>
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left">
                    <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">1</span
                    ><span class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#191919]">
                    </span
                    ><span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">/30</span>
                  </p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                  <input
                    type="text"
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                    placeholder="클라이언트명을 입력해주세요."
                    v-model="engrStep2Detl.clntNm"
                  >
                </div>
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                  <div
                    class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                      <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                        >수행 시작월 </span
                      ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#ff5252]"
                        >*</span
                      >
                    </p>
                    <input
                      type="text"
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                      placeholder="YYYY.MM"
                      v-model="engrStep2Detl.strtYm"
                    >
                  </div>
                  <div
                    class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                      <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                        >수행 종료월 </span
                      ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#ff5252]"
                        >*</span
                      >
                    </p>
                    <input
                      v-if="engrStep2Detl.crntProjPrgsYn == 'Y'"
                      type="text"
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-[#ddd] border border-[#ddd]"
                      placeholder="현재 프로젝트 진행중"
                      readonly
                    />
                    <input
                      v-else
                      type="text"
                      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                      placeholder="YYYY.MM"
                      v-model="engrStep2Detl.endYm"
                    />                    
                  </div>
                </div>
                <div
                  class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[519px] relative"
                >
                  <div
                    class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="none"
                      @click="prjtIng()"
                    >
                      <rect width="24" height="24" fill="white"></rect>
                      <rect x="4.5" y="4.5" width="15" height="15" stroke="#DBDBDB"></rect>
                      <path
                        d="M8 12.2222L10.8571 15L15.4286 10.5556L16 10"
                        stroke="#191919"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        v-show="engrStep2Detl.crntProjPrgsYn == 'Y'"
                      ></path>
                    </svg>
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                      현재 프로젝트 진행중
                    </p>
                  </div>
                  <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">
                    프로젝트 {{ 0 }}개월 수행
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[519px] relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                  <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">직군 </span
                  ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#ff5252]">*</span>
                </p>
                <!-- 직군 chips -->
                <Chipset ref="$jobChipset"  :cdList="engrStep2Detl.jobDivCdList" :listDivCd="'JOB_DIV_CD'" class="mt-[10px]"/>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                  <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                    >업무 영역 </span
                  ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#ff5252]">*</span
                  ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"> </span>
                </p>
                <!-- 업무영역 chips -->
                <Chipset ref="$taskChipset" :cdList="engrStep2Detl.taskDivCdList" :listDivCd="'TASK_DIV_CD'" class="mt-[10px]"/>
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div
                  class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                    <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]"
                      >프로젝트 설명 및 주요 담당 업무 </span
                    ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#ff5252]">*</span>
                  </p>
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-[3px] rounded-[100px] bg-white border border-[#1ba494]"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">작성 TIP</p>
                  </div>
                </div>
                <textarea
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                  placeholder="업무내용을 입력해주세요."
                  v-model="engrStep2Detl.projCtntTask"
                >
                </textarea>
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div
                  class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">업무스킬</p>
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-[3px] rounded-[100px] bg-white border border-[#1ba494]"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">작성 TIP</p>
                  </div>
                </div>
                <textarea
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                  placeholder="업무스킬을 입력해주세요."
                  v-model="engrStep2Detl.projCtntTask"
                >
                </textarea>
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
                <div
                  class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">활용 Tool</p>
                  <div
                    class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[69px] relative overflow-hidden px-2.5 py-[3px] rounded-[100px] bg-white border border-[#1ba494]"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">작성 TIP</p>
                  </div>
                </div>
                <input 
                  type="text"
                  class="flex-grow-0 flex-shrink-0 w-[161px] text-base text-left text-[#999] flex justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                  placeholder="활용Tool을 입력해주세요."
                  v-model="engrStep2Detl.projUseTool"
                />
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[60px]"
          >
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
              <div
                class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative gap-2"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">기타사항</p>
              </div>
              <textarea
                class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                placeholder="기타사항을 입력해주세요."
                v-model="engrStep2Detl.projEtcInfo"
              >
              </textarea>
            </div>
            <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <button
                class="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
                @click="back()"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]">
                  취소 하기
                </p>
              </button>
              <button
                class="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
                @click="saveData()"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                  추가 하기
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import Chipset       from '@/components/uiComponents/Chipset.vue'
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import { ref } from "vue";

  const $jobChipset = ref(null);
  const $taskChipset = ref(null);
  const router = useRouter()
  const engrStep2Detl = ref({
    engrId: "",
    projTitl: "",
    clntNm: "",
    strtYm: "",
    endYm: "",
    crntProjPrgsYn: "",
    projCtntTask: "",
    projDmndSkil: "",
    projUseTool: "",
    projEtcInfo: "",
    jobDivCdList: [
      {
        jobDivCd: "",
        jobDivCdNm: ""
      }
    ],
    taskDivCdList: [
      {
        taskDivCd: "",
        taskDivCdNm: ""
      }
    ]
  })

  function prjtIng(){
    //console.log(engrStep2Detl.value.crntProjPrgsYn)
    if(engrStep2Detl.value.crntProjPrgsYn == "Y"){
      engrStep2Detl.value.crntProjPrgsYn = "N"
    }else{
      engrStep2Detl.value.crntProjPrgsYn = "Y"
    }
  }

  function back(){
    router.back()
  }


  async function saveData(){
    
    //TODO 커리어 등록
    var api = "/v1/my/engineer/???";
    var getParams = {};
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );
    if(rtn.rtnCd == "00"){
      let res = rtn.rtnData
      console.log(res.rtnCd)
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
  }      

  
</script>