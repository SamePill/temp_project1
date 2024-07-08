<template>
  <Modal ref="baseModal" :width="35">
    <div>
      <div class="w-[1060px] h-[917px] px-5 relative overflow-hidden bg-white">
        <div class="flex flex-col justify-start gap-1.5">
          <div
            class="flex justify-between mt-[20px] items-center self-stretch flex-grow-0 flex-shrink-0 relative"
          >
            <p
              class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
            >
              엔지니어 선택 및 추가
            </p>
            <svg
              style="cursor: pointer"
              @click="cancel()"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M19 5L5 19"
                stroke="#191919"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M5 5L19 19"
                stroke="#191919"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div
            class="w-[1020px] mx-auto self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#ddd]"
          ></div>
        </div>
        <div class="flex justify-start mt-[40px]">
          <div class="w-[300px]" style="position: relative; text-align: right">
            <input
              type="text"
              class="flex w-[300px] px-2.5 py-2 rounded bg-white border border-[#ddd] text-sm text-left text-[#191919]"
              placeholder="이름을 입력해주세요"
              v-model="srchEngr"
            />
            <img
              style="
                cursor: pointer;
                position: absolute;
                right: 10px;
                top: 10px;
              "
              class="w-[18px] h-[18px]"
              src="@/assets/ic_magnifier.png"
              alt="search"
              @click="srchEngrNm()"
            />
          </div>
          <div
            class="w-[300px] ml-[220px]"
            style="position: relative; text-align: right"
          >
            <input
              type="text"
              class="flex w-[300px] px-2.5 py-2 rounded bg-white border border-[#ddd] text-sm text-left text-[#191919]"
              placeholder="이름을 입력해주세요"
              v-model="srchSprt"
            />
            <img
              style="
                cursor: pointer;
                position: absolute;
                right: 10px;
                top: 10px;
              "
              class="w-[18px] h-[18px]"
              src="@/assets/ic_magnifier.png"
              alt="search"
            />
          </div>
        </div>

        <div class="mt-[20px] flex justify-between">
          <div
            class="w-[500px] h-[634px] relative overflow-hidden rounded-[10px] p-5 bg-white border border-[#ddd]"
          >
            <div class="flex flex-col justify-start items-start gap-2.5">
              <div
                class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]"
                >
                  미선정 엔지니어
                </p>
                <button
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#999]"
                  @click="addEngr()"
                >
                  지원하기
                </button>
              </div>
              <div
                class="flex-grow-0 flex-shrink-0 w-[460px] h-px bg-[#ddd]"
              ></div>
            </div>

            <div
              class="flex flex-col justify-start items-start mt-[20px] w-[460px] h-[500px] gap-3"
              style="overflow-y: auto"
            >
              <div
                v-for="el,idx in filteredEngrList" :key="el"
                class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0"
              >
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="xMidYMid meet"
                    @click="chkAdd(idx)"
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
                      d="M9 16L14 21L22 13L23 12"
                      stroke="#191919"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      v-show="el.chkVal == true"
                    ></path>
                  </svg>
                  <p
                    class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
                  >
                    {{ el.engrNm }}
                  </p>
                </div>
                <div
                  class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-4"
                >
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]"
                    >
                      거주지 : {{ el.baseAddr }}
                    </p>
                    <span class="text-sm text-[#DBDBDB] px-2">|</span>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]"
                    >
                      경력 : {{ el.crrYear }}년 {{ el.crrMon }} 개월
                    </p>
                  </div>
                  <div v-show="el.engrRtngDivCd == 10"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]"
                    >
                      {{ el.engrRtngDivCdNm }}
                    </p>
                  </div>
                  <div v-show="el.engrRtngDivCd == 20"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]"
                    >
                      {{ el.engrRtngDivCdNm }}
                    </p>
                  </div>
                  <div v-show="el.engrRtngDivCd == 30"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]"
                    >
                      {{ el.engrRtngDivCdNm }}
                    </p>
                  </div>
                  <div v-show="el.engrRtngDivCd == 40"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#faf1db]"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc630b]"
                    >
                      {{ el.engrRtngDivCdNm }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[460px] mt-[20px]">
              <p class="text-base font-bold text-right text-[#191919]">
                총 {{ engrList.length }}명
              </p>
            </div>
          </div>

          <div
            class="w-[500px] h-[634px] relative overflow-hidden rounded-[10px] p-5 bg-white border border-[#ddd]"
          >
            <div class="flex flex-col justify-start items-start gap-2.5">
              <div
                class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
              >
                <p
                  class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]"
                >
                  선정 엔지니어
                </p>
                <button
                  class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]"
                  @click="removeEngr()"
                >
                  지원 취소하기
                </button>
              </div>
              <div
                class="flex-grow-0 flex-shrink-0 w-[460px] h-px bg-[#ddd]"
              ></div>
            </div>

            <div
              class="flex flex-col justify-start items-start mt-[20px] w-[460px] h-[500px] gap-3"
              style="overflow-y: auto"
            >
              <div
                v-for="el,idx  in filteredEngrSprtList"
                :key="el"
                class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0"
              >
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="xMidYMid meet"
                    @click="chkRemove(idx)"
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
                      d="M9 16L14 21L22 13L23 12"
                      stroke="#191919"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      v-show="el.chkVal == true"
                    ></path>
                  </svg>
                  <p
                    class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]"
                  >
                    {{ el.engrNm }}
                  </p>
                </div>
                <div
                  class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-4"
                >
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]"
                    >
                      거주지 : {{ el.baseAddr }}
                    </p>
                    <span class="text-sm text-[#DBDBDB] px-2">|</span>
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]"
                    >
                      경력 : {{ el.crrYear }}년 {{ el.crrMon }}개월
                    </p>
                  </div>
                  <div  v-show="el.engrRtngDivCd == 10"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]"
                    >
                      {{ el.engrRtngDivCdNm }}
                    </p>
                  </div>
                  <div  v-show="el.engrRtngDivCd == 20"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]"
                    >
                      {{ el.engrRtngDivCdNm }}
                    </p>
                  </div>
                  <div  v-show="el.engrRtngDivCd == 30"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]"
                    >
                      {{ el.engrRtngDivCdNm }}
                    </p>
                  </div>
                  <div  v-show="el.engrRtngDivCd == 40"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#faf1db]"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc630b]"
                    >
                      {{ el.engrRtngDivCdNm }}
                    </p>
                  </div>
              
                </div>
              </div>
            </div>
            <div class="w-[460px] mt-[20px]">
              <p class="text-base font-bold text-right text-[#191919]">
                총 {{ engrSprtList.length }}명
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center gap-5 mt-[30px]">
          <button
            @click="goEngrMng()"
            class="w-40 gap-2.5 px-2.5 py-4 rounded border border-[#dbdbdb] text-base font-medium text-[#555]"
          >
            엔지니어 추가
          </button>
          <button
            @click="saveData()"
            class="w-40 gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-base font-medium text-white"
          >
            완료하기
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script setup>
import { ref, defineExpose, defineProps, defineEmits, computed } from "vue";
import Modal from "@/components/baseComponents/Modal.vue";
import * as gfnUtils from "@/utils/gfnUtils.js";
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits([
  'selEngrs'
]);

const props = defineProps({ prj: {} 
                           ,slctEngrList:[]});
const prjEngrInfo = ref([]);

// onMounted(() => {
//   //로그인 후 - 지원 전(projectSprtInfo유무),지원 중
//   //로그인 후 - 지원 후(projectSprtInfo유무)
// });

const userMail = ref(window.$cookies.get("loginUserMail"));
const baseModal = ref(null);

const srchEngr = ref("")
const engrList = ref([])
const srchSprt = ref("")
const engrSprtList = ref([])
// 등급별 건수
const engr10Cnt = computed( () => {
  return engrSprtList.value.filter( item => 
      item.engrRtngDivCd == 10
  ).length
})
const engr20Cnt = computed( () => {
  return engrSprtList.value.filter( item => 
      item.engrRtngDivCd == 20
  ).length
})
const engr30Cnt = computed( () => {
  return engrSprtList.value.filter( item => 
      item.engrRtngDivCd == 30
  ).length
})
const engr40Cnt = computed( () => {
  return engrSprtList.value.filter( item => 
      item.engrRtngDivCd == 40
  ).length
})

const filteredEngrList = computed( () => {
  if(srchEngr.value == ""){
    return engrList.value
  }
  return engrList.value.filter( item => 
      item.engrNm.indexOf(srchEngr.value) >= 0
  )
})

const filteredEngrSprtList = computed( () => {
  if(srchSprt.value == ""){
    return engrSprtList.value  
  }
  return engrSprtList.value.filter( item => 
      item.engrNm.indexOf(srchSprt.value) >= 0
  )
})


const checkedEngrList = computed( () => {
    let filter = true;
    return engrList.value.filter( item => 
        item.chkVal == filter
    )
})

const checkedEngrSprtList = computed( () => {
    let filter = true;
    return engrSprtList.value.filter( item => 
        item.chkVal == filter
    )
})


// const saveParam = ref(
//   {
//     projId: "",
//     sprtUserMail: "",
//     hopeStrtDay: "",
//     useTrmsYn: "",
//     privTrmsYn: "",
//     engrList: [
//       {
//         engrId: ""
//       }
//     ],
//     projSprtSeq: ""
//   }
// )

const show = () => {
  baseModal.value.open();
};

const cancel = () => {
  srchEngr.value = ""
  srchSprt.value = ""
  baseModal.value.close();
}

function chkAdd(idx){

  if(engrList.value[idx].chkVal == true){
    engrList.value[idx].chkVal = false  
  }else{
    engrList.value[idx].chkVal = true
  }

}

function chkRemove(idx){
  
  if(engrSprtList.value[idx].chkVal == true){
    engrSprtList.value[idx].chkVal = false  
  }else{
    engrSprtList.value[idx].chkVal = true
  }

}


function addEngr(){
  //checkedEngrList(engrList) -> checkedEngrSprtList(engrSprtList)

  for(var i=0; i<checkedEngrList.value.length; i++){
    //console.log(checkedEngrList.value[i])
    engrSprtList.value.push(checkedEngrList.value[i]);    
  }

  engrList.value = engrList.value.filter(item => item.chkVal !== true);
  
}

function removeEngr(){
  //checkedEngrList(engrList) <- checkedEngrSprtList(engrSprtList)
  //engrSprtList에서 삭제

  for(var i=0; i<checkedEngrSprtList.value.length; i++){
    //console.log(checkedEngrSprtList.value[i])
    engrList.value.push(checkedEngrSprtList.value[i]);    
  }

  engrSprtList.value = engrSprtList.value.filter(item => item.chkVal !== true);
  
}


function srchEngrNm(){
  console.log(srchEngr)
}


async function loadData() {

  var getParams = { projId: props.prj.projId, userMail: userMail.value };
  await gfnUtils
    .axiosGet("/v1/project/engineers", getParams)
    .then(function (rtn) {
      if (rtn.rtnCd == "00") {
        console.log("엔지니어 조회..")
        prjEngrInfo.value = rtn.rtnData;
        engrList.value = rtn.rtnData.notSprtEngrList; //좌
        engrSprtList.value = rtn.rtnData.sprtEngrList;//우

        console.log(props.slctEngrList.length)
        //추가 선택 리스트가 있는경우
        if(props.slctEngrList.length > 0){
          engrSprtList.value = props.slctEngrList;

          console.log(engrList.value.length)
          if(engrList.value.length > 0){          
            console.log("미선택 엔지니어 정리...")

            let idsInEngrSprtList = new Set(engrSprtList.value.map(item => item.engrId));
            engrList.value = engrList.value.filter(engrEl => !idsInEngrSprtList.has(engrEl.engrId));

          } 
        }
      

      }else{
        gfnUtils.openAlert(rtn.rtnMsg,"", 2000);
      }
    });
}


async function saveData() {
  srchEngr.value = ""
  srchSprt.value = ""
  // console.log(engr10Cnt.value)
  // console.log(engr20Cnt.value)
  // console.log(engr30Cnt.value)
  // console.log(engr40Cnt.value)
  emit('selectEngr' ,engrSprtList.value, engr10Cnt.value, engr20Cnt.value, engr30Cnt.value, engr40Cnt.value);
  baseModal.value.close();

}

function goEngrMng(){
  router.push({name : "ManageEngineer"})
}

defineExpose({ show, loadData });
</script>

