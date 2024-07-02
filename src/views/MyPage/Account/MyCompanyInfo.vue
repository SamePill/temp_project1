<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <!-- <div
      class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-5 px-[430px] pt-10 pb-[100px] bg-[#fefefe]"
    > -->
    <div class="flex flex-col justify-start items-center w-[1060px] gap-5 bg-white">
      <SubHeader :topInfo="topInfo"/>
      <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <SideMenu/>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10 pt-5">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
              <button class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]" @click="myInfo()">기본 정보</button>
              <p class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919]">회사 정보</p>
            </div>
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[790px] overflow-hidden gap-10 px-5 py-10 rounded-[10px] bg-white border border-[#ddd]"
            >
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">회사명</p>
                <input
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                  v-model="companyInfo.compNm"
                />
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">회사주소</p>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                  <input
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                    v-model="companyInfo.compBaseAddr"
                  />
                  <input
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                    v-model="companyInfo.compDtlAddr"
                  />
                </div>
              </div>
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
              >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">사업자번호</p>
                <input
                  class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919] flex justify-start items-center flex-grow-0 flex-shrink-0 w-[360px] h-[51px] relative overflow-hidden gap-12 p-4 rounded border border-[#ddd]"
                  :value="bizNoFormatted"
                  @input="updateBizNo($event.target.value)"
                />
                <!-- v-model="companyInfo.bizRegNo" -->
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                <div
                  class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[540px] relative"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">사업자등록증</p>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">
                    최대 50MB 까지
                  </p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                  <input
                    type="text"
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-start flex-grow-0 flex-shrink-0 w-[360px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                    placeholder="png, jpg 만 첨부가능합니다."
                    readonly
                  />
                  <!-- v-model="bizRegFileNm" -->
                  <input type="file" id="bizRegFile" hidden  accept="image/*, .pdf"  @change="showFileName('bizReg')"/>
                  
                  <label for="bizRegFile">
                    <div
                      class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-0.5 p-4 rounded bg-[#ededed] border border-[#ddd]"
                      style="cursor: pointer"
                    >
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
                          d="M8.6335 3.16667C8.6335 2.79848 8.34248 2.5 7.9835 2.5C7.62451 2.5 7.3335 2.79848 7.3335 3.16667V13.8333C7.3335 14.2015 7.62451 14.5 7.9835 14.5C8.34248 14.5 8.6335 14.2015 8.6335 13.8333V3.16667Z"
                          fill="#555555"
                        ></path>
                        <path
                          d="M13.3333 9.13301C13.7015 9.13301 14 8.84199 14 8.48301C14 8.12402 13.7015 7.83301 13.3333 7.83301L2.66667 7.83301C2.29848 7.83301 2 8.12402 2 8.48301C2 8.84199 2.29848 9.13301 2.66667 9.13301H13.3333Z"
                          fill="#555555"
                        ></path>
                      </svg>
                      <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">파일추가</p>
                    </div>
                  </label>
                </div>
                <div
                  class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-3"
                >
                  <div
                    class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-2"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1585d7]">
                      {{companyInfo.bizRegFileNm}}
                    </p>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="none"
                      style="cursor: pointer"
                      @click="delFile('bizReg')"
                      v-show="companyInfo.bizRegFileNm !='' && companyInfo.bizRegFileNm != null"
                    >
                      <rect width="16" height="16" transform="translate(0 0.5)" fill="white"></rect>
                      <path
                        d="M4 4.5L12 12.5"
                        stroke="#999999"
                        stroke-width="1.3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M12 4.5L4 12.5"
                        stroke="#999999"
                        stroke-width="1.3"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                <div
                  class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[540px] relative"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">회사로고</p>
                  <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">
                    최대 50MB 까지
                  </p>
                </div>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                  <input
                    type="text"
                    class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999] flex justify-start items-start flex-grow-0 flex-shrink-0 w-[360px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                    placeholder="png, jpg 만 첨부가능합니다."
                    readonly
                  />
                  <!-- v-model="compLogoFileNm" -->
                  <input id ="compLogoFile" type="file" hidden  accept="image/*, .pdf"  @change="showFileName('compLogo')"/>
                  <label for="compLogoFile">
                    <div
                      class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-0.5 p-4 rounded bg-[#ededed] border border-[#ddd]"
                      style="cursor: pointer"
                    >
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
                          d="M8.6335 3.16667C8.6335 2.79848 8.34248 2.5 7.9835 2.5C7.62451 2.5 7.3335 2.79848 7.3335 3.16667V13.8333C7.3335 14.2015 7.62451 14.5 7.9835 14.5C8.34248 14.5 8.6335 14.2015 8.6335 13.8333V3.16667Z"
                          fill="#555555"
                        ></path>
                        <path
                          d="M13.3333 9.13301C13.7015 9.13301 14 8.84199 14 8.48301C14 8.12402 13.7015 7.83301 13.3333 7.83301L2.66667 7.83301C2.29848 7.83301 2 8.12402 2 8.48301C2 8.84199 2.29848 9.13301 2.66667 9.13301H13.3333Z"
                          fill="#555555"
                        ></path>
                      </svg>
                      <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">파일추가</p>
                    </div>
                  </label>
                </div>
                <div
                  class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-3"
                >
                  <div
                    class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-2"
                  >
                    <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1585d7]">
                      {{companyInfo.compLogoFileNm}}
                    </p>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="none"
                      @click="delFile('compLogo')"
                      style="cursor: pointer"
                      v-show="companyInfo.compLogoFileNm !='' && companyInfo.compLogoFileNm != null"
                    >
                      <rect width="16" height="16" transform="translate(0 0.5)" fill="white"></rect>
                      <path
                        d="M4 4.5L12 12.5"
                        stroke="#999999"
                        stroke-width="1.3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M12 4.5L4 12.5"
                        stroke="#999999"
                        stroke-width="1.3"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[790px] gap-5">
            <div
              class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
            >
              <button class="flex-grow-0 flex-shrink-0 text-base text-left text-white" @click="saveInfo()">수정하기</button>
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
import * as gfnUtils from "@/utils/gfnUtils.js";
import { useRouter } from 'vue-router'
import { onMounted, ref, computed } from 'vue'

onMounted(() => {
  loadData();
})

const router = useRouter()
const compId  = ref(window.$cookies.get("loginCompId"))
const userMail = ref(window.$cookies.get("loginUserMail"))
const topInfo = ref({
    compNm: "",
    userNm: "",
    sprtProjCnt: 0,
    prgsProjCnt: 0,
    cpltProjCnt: 0
  })
const companyInfo = ref({
  compId: "",
  compNm: "",
  compBaseAddr: "",
  compDtlAddr: "",
  bizRegNo: "",
  bizRegFileUrl: "",
  bizRegFileSeq: "",
  bizRegFileNm: "",
  compLogoFileSeq: "",
  compLogoFileUrl: "",
  compLogoFileNm: ""
})

const bizRegFile = ref(File | null)
const compLogoFile = ref(File | null)
const bizRegFileNm =ref('')
const compLogoFileNm = ref('')
const bizNoFormatted = computed( () => {
  return gfnUtils.formattedBizNo(companyInfo.value.bizRegNo);
})

function updateBizNo(value) {
  const cleanedValue = value.replace(/-/g, '');
  if (cleanedValue.length === 10) {
    companyInfo.value.bizRegNo = cleanedValue;
  }
}



function showFileName(div){
  if(div == "bizReg"){
    let input = document.getElementById('bizRegFile');
    let fileName = input.files[0].name;
    bizRegFileNm.value = fileName;
    bizRegFile.value = input.files[0]
    companyInfo.value.bizRegFileNm = fileName;
  }else if(div == "compLogo"){
    let input = document.getElementById('compLogoFile');
    let fileName = input.files[0].name;
    compLogoFileNm.value = fileName;
    compLogoFile.value = input.files[0]
    companyInfo.value.compLogoFileNm = fileName;
  }

}

function myInfo(){

  router.push({name :"MyInformation"})
}

async function loadData(){

  var api = "/v1/my/comp-info";
  var getParams = {userMail: userMail.value, compId: compId.value};
  let rtn = await gfnUtils.axiosGet(
    api,
    getParams
  );

  console.log(rtn);

  if(rtn.rtnCd == "00"){
    companyInfo.value = rtn.rtnData
    topInfo.value = rtn.rtnData.topInfo
  }else{
    gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
  }

}

async function saveInfo(){

  let formData = new FormData();
  // 파일이 다건인 경우
  // for (var idx in this.attchfiles) {
  //     console.log(this.attchfiles[idx].type);
  //     console.log(this.attchfiles[idx].name);
  //     formData.append("attchFiles", this.attchfiles[idx]);
  // }
  // formData.append("banner", this.physFile);
  // formData.append(
  //     "params",
  //     new Blob([JSON.stringify(params)], { type: "application/json" })
  // );

  // 파일이 단건인 경우

  if(bizRegFile.value != null ){
    formData.append("bizReqMultiFile", bizRegFile.value);
    companyInfo.value.bizRegFileUrl = ""
    companyInfo.value.bizRegFileSeq = ""
    companyInfo.value.bizRegFileNm = bizRegFileNm.value
    companyInfo.value.delBizRegFileSeq = companyInfo.value.bizRegFileSeq
  }
  if(compLogoFile.value != null  ){
    formData.append("compLogoMultiFile", compLogoFile.value);
    companyInfo.value.compLogoFileSeq = ""
    companyInfo.value.compLogoFileUrl = ""
    companyInfo.value.compLogoFileNm = compLogoFileNm.value
    companyInfo.value.delCompLogoFileSeq = companyInfo.value.compLogoFileSeq
  }
  formData.append("userMail", userMail.value )
  formData.append("modifyCompInfoInputJson ",  JSON.stringify(companyInfo.value) )

  let res = await gfnUtils.axiosPost(
      "/v1/my/modify/comp-info",
      formData,
      null, true, true, true
  );         

  if(res.rtnCd == "00"){
    companyInfo.value = res.rtnData

  }else{
    gfnUtils.openAlert(res.rtnMsg,"", 2000)
  }
  
}

function delFile(div){

  if(div == "bizReg"){
    bizRegFileNm.value = "";
    bizRegFile.value = null
    companyInfo.value.bizRegFileNm = "";
  }else if(div == "compLogo"){
    compLogoFileNm.value = "";
    compLogoFile.value = null
    companyInfo.value.compLogoFileNm = "";
  }

}

</script>
