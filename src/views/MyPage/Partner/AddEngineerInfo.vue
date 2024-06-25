<template>
  <div style="display: flex; justify-content: center;" class="py-[40px]">
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[700px] pt-10 pb-[100px] bg-[#fefefe]"
    >
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative gap-2.5"
          >
            <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919] font-medium">
                엔지니어 추가
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-left">
                <span class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]"
                  >1 </span
                ><span class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#777]">/</span
                ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]">2</span>
              </p>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[519px] h-px bg-[#191919]"></div>
          </div>
          <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">프로필 사진</p>
            </div>
            <div class="mt-[20px] w-[150px] h-[200px] flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative border border-[#ddd] rounded overflow-hidden " >
              <img id="preview" v-show="showImg"/>
              <svg
                width="150"
                height="200"
                viewBox="0 0 150 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-[150px] h-[200px] relative"
                preserveAspectRatio="xMidYMid meet"
                v-show="!showImg"
              >
                <rect x="0.5" y="0.5" width="149" height="199" fill="#DDDDDD"></rect>
                <rect x="0.5" y="0.5" width="149" height="199" stroke="#DDDDDD"></rect>
                <circle cx="75" cy="80" r="35" fill="white"></circle>
                <path
                  d="M75 125C33.5786 125 0 158.579 0 200H150C150 158.579 116.421 125 75 125Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <input type="file"  accept=".jpg, .png" id="upload-photo" hidden @change="readURL($event)"/>
            <label for="upload-photo">
              <div style="cursor: pointer;" class="flex mt-[10px] justify-center items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-0.5 py-2.5 rounded bg-[#ededed] border border-[#ddd] text-left text-[#555]">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="none">
                      <path
                        d="M8.63398 3.16667C8.63398 2.79848 8.34297 2.5 7.98398 2.5C7.625 2.5 7.33398 2.79848 7.33398 3.16667V13.8333C7.33398 14.2015 7.625 14.5 7.98398 14.5C8.34297 14.5 8.63398 14.2015 8.63398 13.8333V3.16667Z"
                        fill="#555555"></path>
                      <path
                        d="M13.3333 9.13301C13.7015 9.13301 14 8.84199 14 8.48301C14 8.12402 13.7015 7.83301 13.3333 7.83301L2.66667 7.83301C2.29848 7.83301 2 8.12402 2 8.48301C2 8.84199 2.29848 9.13301 2.66667 9.13301H13.3333Z"
                        fill="#555555"></path>
                  </svg>
                  사진추가
                </div>
            </label>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-5">
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">이름 및 상태 </span>
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <input type="text" class="flex h-[51px] w-[340px] p-4 rounded border border-[#ddd] text-left text-[#191919]" 
              placeholder="이름을 입력해주세요."
              v-model="engrStep1.engrNm"
            />
            <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-40 h-[51px] relative overflow-hidden p-4 rounded bg-[#ddd]">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">재직</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">생년월일 </span
            ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex h-[51px] justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]">
              <input type="number" placeholder="YYYY" min="1" max="31" style="border:none"/>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">년</p>
            </div>
            <div
              class="flex h-[51px] justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <input type="number" placeholder="MM" min="1" max="12" style="border:none"/>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">월</p>
            </div>
            <div class="flex h-[51px] justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]">
              <input type="number" placeholder="DD" min="1" max="31" style="border:none"/>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">일</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">주소 </span>
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
          </p>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
            <input type="text" placeholder="주소를 입력해주세요." class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]" v-model="engrStep1.baseAddr">
            <input type="text" placeholder="상세주소를 입력해주세요.." class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]" v-model="engrStep1.dtlAddr">
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">최종학력 </span
            ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div
              class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-40 h-[51px] relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">대학교</p>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 9.5L12 15.5L19 9.5"
                  stroke="#191919"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <input type="text" placeholder="학교명을 입력해주세요." class="h-[51px] w-[340px] p-4 rounded bg-white border border-[#ddd]" v-model="engrStep1.schlNm">
          </div>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">학과</p>
            <input type="text" placeholder="전공학과를 입력해주세요." class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]">
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div
            class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-5"
          >
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">경력 </span
              ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] gap-5">
            <div
              class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]">
                초급 엔지니어
              </p>
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
                  d="M3 6.5L8 10.5L13 6.5"
                  stroke="#191919"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div
              class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">0</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">년</p>
            </div>
            <div
              class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden p-4 rounded bg-white border border-[#ddd]"
            >
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">0</p>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">개월</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[520px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-xl text-left">
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">업무스킬 </span>
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
            <button @click="popup('$SkillTip')"  class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494] flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-[3px] rounded-[100px] bg-white border border-[#1ba494]">
              작성 TIP</button>
              <SkillTip ref="$SkillTip" ></SkillTip>
          </div>
          <input type="text" placeholder="예) 지라, 레드마인, 포토샵, 일러스트" class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]" v-model="engrStep1.taskSkil">
        </div>
        <div v-for="el, idx in engrStep1.crtfList" :key="el">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[520px] relative">
              <p v-show="idx == 0" class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">자격증</p>
              <p v-show="idx > 0"  class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">자격증 {{ idx }}</p>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <div class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"></div>
                <p v-show="idx == 0" class="flex-grow-0 flex-shrink-0 text-sm text-left" @click="addCert">추가하기</p>
                <p v-show="idx > 0" class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]" @click="removeCert(idx)">삭제하기</p>
              </div>
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">자격증 명</p>
                <input type="text" placeholder="자격증 명을 입력해주세요." class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]" v-model="el.crtfNm">
              </div>
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                <div
                  class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">취득일자</p>
                  <input type="date" class="h-[51px] w-[520px] p-4 rounded bg-white border border-[#ddd]" v-model="el.acqsDt">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[60px]">
          <!-- <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative">
              <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">자격증 1</p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">삭제하기</p>
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <div
                class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
              >
                <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">자격증 명</p>
                <div
                  class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                >
                  <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                    자격증 명을 입력해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div> -->
          <button
            class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white flex justify-center items-center flex-grow-0 flex-shrink-0 w-[520px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
            @click="nextStep()"
          >           
           다음 단계로 넘어가기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { ref, onMounted } from "vue";
  import SkillTip from "@/components/popupComponents/SkillTip.vue";
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import * as gfnRules from "@/utils/gfnRules.js";

  const { dataObj } = history.state; 
  const engrInfo = ref({});
  const userMail = ref(window.$cookies.get("loginUserMail"));
  const router = useRouter()
  const showImg = ref(false)
  const $SkillTip = ref();
  const engrPhoto = ref({})
  const editMode = ref(false)
  const engrStep1 = ref(
    {
      crtdUserMail: "",
      engrNm: "",
      bith: "",
      baseAddr: "",
      dtlAddr: "",
      edctDivCd: "",
      edctDivCdNm: "",
      schlNm: "",
      dprt: "",
      engrRtngDivCd: "",
      taskSkil: "",
      crtfList: [
        {
          crtfNm: "",
          acqsDt: ""
        }
      ]
    }
  )
  
  onMounted(() => {

    console.log(dataObj)
    if( dataObj != undefined ){
      console.log("수정모드...")
      engrInfo.value = JSON.parse(dataObj)

      if(!gfnRules.isNull(engrInfo.value.engrId)){
        editMode.value = true
        loadData();
      } 

    }
    
       
  })

  async function loadData(){
    
    var api = "/v1/my/engineer/step1";
    var getParams = {userMail: userMail.value, engrId:engrInfo.value.engrId};
    let rtn = await gfnUtils.axiosGet(
      api,
      getParams
    );

    if(rtn.rtnCd == "00"){
      console.log(rtn.rtnData)
      engrStep1.value = rtn.rtnData   
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
  }

  function popup(div){
  
    if(div == '$SkillTip'){
      $SkillTip.value.show();
    }
    return false

  }

  async function nextStep(){

    let formData = new FormData();
    let api = "";
    console.log(engrStep1.value)
    console.log(editMode.value)
    if(editMode.value){
      //수정
      api = "/v1/my/modify/engineer/step1";
      formData.append("userMail", userMail.value);
      formData.append("modifyEngrOneStepInputJson ", new Blob([JSON.stringify(engrStep1.value)])  ); // , { type: "application/json" }
    }else{
      //등록
      api = "/v1/my/submit/engineer/step1";
      formData.append("userMail", userMail.value);
      formData.append("inputJson", new Blob([JSON.stringify(engrStep1.value)])  ); //, { type: "application/json" }
    }
    
    if(!gfnRules.isNull(engrPhoto)){
      formData.append("engrPhotMultiFile",engrPhoto)
    }
    console.log(formData)

    let rtn = await gfnUtils.axiosPost(
      api,
      formData
    );
    if(rtn.rtnCd == "00"){
      let res = rtn.rtnData
      console.log(res)
      res.editMode = editMode.value
      router.push({
         name: "AddEngineerCareerList"
        ,state: {dataObj : JSON.stringify(res)}     
      })
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }

    
  }

  function readURL(input) {

    if (input.target.files && input.target.files[0]) {
      console.log("파일있음")
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
      };
      reader.readAsDataURL(input.target.files[0]);
      engrPhoto.value = input.target.files[0]
      showImg.value = true;
    } else {
      console.log("파일없음")
      document.getElementById('preview').src = "";
      engrPhoto.value = {}
    }
  }

  function addCert(){
    engrStep1.value.crtfList.push({
      crtfNm: "",
      acqsDt: ""
    })
  }

  function removeCert(idx){
    console.log(idx)
    engrStep1.value.crtfList.splice(idx, 1);
  }
</script>