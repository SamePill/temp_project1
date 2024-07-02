<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[1080px] overflow-hidden gap-2.5 px-[700px] pt-10 pb-[100px] bg-[#fefefe]"
    >
      <div
        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-10"
      >
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]"
        >
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative gap-2.5"
          >
            <div
              class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]"
              >
                엔지니어 추가
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-left">
                <span
                  class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]"
                  >2 </span
                ><span
                  class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#777]"
                  >/</span
                ><span
                  class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]"
                  >2</span
                >
              </p>
            </div>
            <div
              class="flex-grow-0 flex-shrink-0 w-[519px] h-px bg-[#191919]"
            ></div>
          </div>
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5"
          >
            <div
              class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#1ba494]"
              >
                등록한 프로젝트 {{projSmryHstrList.length}}개
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
                  d="M19 15L12 9L5 15"
                  stroke="#191919"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div v-for="el, idx in projSmryHstrList" :key="el">
              <div
                class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[520px] overflow-hidden gap-4 p-5 rounded-[10px] bg-neutral-50 border border-[#ddd]"
              >
                <div
                  class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[480px] relative"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#191919]"
                  >
                    {{ el.projTitl }}
                  </p>
                  <button class="flex-grow-0 flex-shrink-0 text-sm text-left" @click="editCareer(idx)">
                    수정하기
                  </button>
                </div>
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3"
                >
                  <!-- 반복부 # -->
                  <div  v-for="el in jobDivCdList" :key="el">
                    <div
                      class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-4 py-2 rounded-[100px] bg-[#f2f4f7]"
                    >
                      <p
                        class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"
                      >
                        {{ el.jobDivCdNm }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3"
                >
                  <p
                    class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]"
                  >
                    {{ gfnUtils.formatYYYYMM(el.strtYm) }} ~ {{ gfnUtils.formatYYYYMM(el.endYm) }}
                  </p>
                  <p
                    class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#555]"
                  >
                    프로젝트 {{el.crrYear}}년 {{el.crrMon}}개월 수행
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[520px] h-px bg-[#ddd]"></div>
        <div
          class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[60px]"
        >
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5"
          >
            <button
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[520px] h-[51px] relative overflow-hidden gap-1 px-2.5 py-4 rounded bg-white border border-[#ddd]"
              @click="addCareer()"
              >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M13.5 4.5C13.5 3.94772 13.0523 3.5 12.5 3.5C11.9477 3.5 11.5 3.94772 11.5 4.5V20.5C11.5 21.0523 11.9477 21.5 12.5 21.5C13.0523 21.5 13.5 21.0523 13.5 20.5V4.5Z"
                  fill="#191919"
                ></path>
                <path
                  d="M20.5 13.5C21.0523 13.5 21.5 13.0523 21.5 12.5C21.5 11.9477 21.0523 11.5 20.5 11.5L4.5 11.5C3.94772 11.5 3.5 11.9477 3.5 12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H20.5Z"
                  fill="#191919"
                ></path>
              </svg>
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]"
              >
                이력 추가하기
              </p>
            </button>
          </div>
          <div
            class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5"
          >
            <button
              class="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494]"
              @click="back()"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1ba494]"
              >
                이전 단계
              </p>
            </button>
            <button
              class="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white"
              >
                등록 완료
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { onMounted, ref } from "vue";
  import * as gfnUtils from "@/utils/gfnUtils.js";

  // 목록 조회 :  /v1/my/engineer/projet-summary-list (userMail , engrId )
  // 상세 조회 :  /v1/my/engineer/step2  (userMail , engrProjHstrSeq , engrId )
  onMounted(() => {
    loadData();
  })
  
  const { dataObj } = history.state; 
  const engrInfo = ref(JSON.parse(dataObj))

  const router = useRouter()

  const userMail = ref(window.$cookies.get("loginUserMail"));
  const projSmryHstrList = ref(
    [
    //   {
    //     engrProjHstrSeq: "",
    //     engrId: "",
    //     projTitl: "",
    //     strtYm: "",
    //     endYm: "",
    //     crntProjPrgsYn: "",
    //     crrYear: "",
    //     crrMon: "",
    //     jobDivCdList: [
    //       {
    //         jobDivCd: "",
    //         jobDivCdNm: ""
    //       }
    //     ],
    //     taskDivCdList: [
    //       {
    //         taskDivCd: "",
    //         taskDivCdNm: ""
    //       }
    //     ]
    //   }
    ]
  )


  async function loadData(){
    
    var api = "/v1/my/engineer/projet-summary-list";
    var getParams = {userMail : userMail.value ,  engrId:engrInfo.value.engrId };
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );
    if(rtn.rtnCd == "00"){
      let res = rtn.rtnData
      projSmryHstrList.value = res.projSmryHstrList
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }

    // if(engrInfo.value.editMode == true){
    //   console.log("수정모드")
    // }else{
    //   console.log("등록모드")
    // }
  }      

  function editCareer(idx){
    projSmryHstrList.value[idx].editMode = true
    router.push({
      name: "AddEngineerCareerInfo",
      state : { dataObj : JSON.stringify(projSmryHstrList.value[idx]) }
    })
  }

  function addCareer(){
    var param = {editMode : false, engrId:engrInfo.value.engrId }
    router.push({name: "AddEngineerCareerInfo"
      ,state : { dataObj : JSON.stringify(param) }
    })
  }

  function back(){
    router.back()
  }


</script>