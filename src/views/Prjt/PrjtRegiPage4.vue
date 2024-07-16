<template>
  <!-- TO_DO 상주비상주 cursor pointer ,근무지 api, 달력모양, chipset값 받기  -->
  <div>
    <div style="display: flex; justify-content: center;" class="pt-10 pb-[100px] bg-[#fefefe]">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative relative ">
      <div class="flex justify-between w-[520px] mb-[10px]">
        <p class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#191919]" style="font-weight:bolder !important">
          프로젝트 등록하기
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-left">
          <span class="text-2xl font-bold text-left text-[#191919]">{{pageNo}} </span>
          <span v-show="pageNo != '' && totPageNo != ''" class="text-2xl text-left text-[#777]">/</span>
          <span class="text-xl text-left text-[#777]">{{totPageNo}}</span>
        </p>
      </div>
      <div class="flex-grow-0 flex-shrink-0 w-[520px] h-px bg-[#191919]"></div>
      <div>

        <div class="mt-[30px]">
          <div class="flex justify-between items-center w-[520px] relative">
            <p class="text-xl text-left text-[#191919] mb-[20px;]">회사명</p>
          </div>
          <input tye="text" v-model="compNm" class="w-[520px] h-[51px] text-base text-left  text-[#191919] p-4 rounded bg-[#ddd] border border-[#ddd]" disabled="disabled"/>
        </div>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">담당자 이름
            <span class="text-[#ff5252]">*</span></p>
          <div class="flex flex-col justify-center items-start gap-2">
            <input type="text" v-model="projStep.projFourStep.rprsNm" 
              :class='(rprsNmChk1 && rprsNmChk2 ? "border-[#ddd]" : "border-[#ff5252]") + " w-[520px] h-[51px] text-base text-left  text-[#191919] p-4 rounded border "' 
              @blur="btnStatChng()"
              placeholder="담당자 이름을 입력해주세요."/>
          </div>
        </div>
        <p v-show="!rprsNmChk1"
           class="mt-[10px] flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" >
          담당자 이름을 입력해주세요.
        </p>
        <p  v-show="!rprsNmChk2" 
           class="mt-[10px] flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" >
          담당자 이름이 올바르지 않습니다. 다시 한번 확인해주세요
        </p>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">담당자 휴대폰 번호
            <span class="text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start gap-5">
            <input type="text" 
              v-model="projStep.projFourStep.rprsHp"  
              maxlength="11"
              :class='(rprsHpChk1 && rprsHpChk2 ? "border-[#ddd]" : "border-[#ff5252]") + "  w-[520px] h-[51px] text-base text-left  text-[#191919] p-4 rounded border "' 
              @blur="btnStatChng()"
              @input="validateHp"
              placeholder="담당자 휴대폰 번호를 입력해주세요."/>
          </div>
        </div>
        <p v-show="!rprsHpChk1"  class="mt-[10px] flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" >
          휴대폰 번호를 입력해주세요.
        </p>
        <p v-show="!rprsHpChk2"  class="mt-[10px] flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" >
          휴대폰 번호가 올바르지 않습니다. 다시 한번 확인해주세요
        </p>
        <div class="mt-[40px] flex flex-col justify-start items-start relative gap-5">
          <p class="text-xl text-left text-[#191919]">담당자 이메일
            <span class="text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-start gap-5">
            <input type="text" v-model="projStep.projFourStep.rprsMail" 
              :class='(rprsMailChk1 && rprsMailChk2 ? "border-[#ddd]" : "border-[#ff5252]") + "  w-[520px] h-[51px] text-base text-left  text-[#191919] p-4 rounded border "'
              @blur="btnStatChng()"
              @input="regexEmail()"
              placeholder="담당자 이메일을 입력해주세요."/>
          </div>
        </div>
        <p v-show="!rprsMailChk1" class="mt-[10px] flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" >
          이메일이 올바르지 않습니다. 다시 한번 확인해주세요
        </p>
        <p v-show="!rprsMailChk2" class="mt-[10px] flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" >
          담당자 이메일을 입력해주세요.
        </p>
        
        <div class="mt-[40px] flex flex-col justify-start items-start relative">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1" style="cursor:pointer" @click="trmsClick('useTrmsYn')">
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
                stroke="#DBDBDB"
                stroke-width="1.5"
              ></rect>
                <path v-if="projStep.projFourStep.useTrmsYn == 'Y'"
                  d="M9 16L14 21L22 13L23 12"
                  stroke="#191919"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
            </svg>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
              (필수) 큐밋 이용약관에 동의합니다.
            </p>
          </div>
          <button
            @click="showTerm1()" 
            class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777] flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10">
            상세보기
          </button>
          <div class="mt-[20px] flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1" style="cursor:pointer" @click="trmsClick('privTrmsYn')">
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
                stroke="#DBDBDB"
                stroke-width="1.5"
              ></rect>
                <path v-if="projStep.projFourStep.privTrmsYn == 'Y'"
                  d="M9 16L14 21L22 13L23 12"
                  stroke="#191919"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
            </svg>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
              (필수) 개인정보 제 3자 제공에 동의합니다.
            </p>
          </div>
          <button
            @click="showTerm2()"  
            class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777] flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10">
            상세보기
          </button>
        </div>
      </div>


        
      <div class="w-[520px] mt-[60px] flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <button @click="nextPage('pre')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494] text-[#1ba494]">
          이전 단계로 이동              
        </button>
        <button 
          @click="nextPage('next')" 
          :disabled="!btnIsActv"
          :class='(btnIsActv ? "bg-[#1BA494]" : "bg-[#999]") + " flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-white"'>
          등록완료
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import {  ref, onMounted, computed } from "vue";
import { useRouter } from 'vue-router';
import * as gfnUtils from "@/utils/gfnUtils.js";
import * as gfnRules from "@/utils/gfnRules.js";
import { prjtFileStore } from '@/stores'

const fileStore = prjtFileStore();
const router = useRouter()
// const projFourStep = ref({
//   rprsNm:''
//   ,rprsHp:''
//   ,rprsMail:''
//   ,useTrmsYn: "Y"
//   ,privTrmsYn: "Y"
// })

const pageNo = ref(4)
const totPageNo = ref(4) 
const { dataObj } = history.state; 
const projStep = ref(JSON.parse(dataObj));
const compNm = ref(window.$cookies.get("loginCompNm"));

const rprsNmChk1 = ref(true);
const rprsNmChk2 = ref(true);
const rprsHpChk1 = ref(true);
const rprsHpChk2 = ref(true);
const rprsMailChk1 = ref(true);
const rprsMailChk2 = ref(true);
//const btnIsActv =  ref(false)

function rprsNmRule(){
  rprsNmChk1.value = !gfnRules.isNull(projStep.value.projFourStep.rprsNm);
  rprsNmChk2.value = gfnRules.validName(projStep.value.projFourStep.rprsNm);
}

function rprsHpRule(){
  rprsHpChk1.value = !gfnRules.isNull(projStep.value.projFourStep.rprsHp);
  rprsHpChk2.value = gfnRules.validHp(projStep.value.projFourStep.rprsHp);
}

function rprsMailRule(){
  rprsMailChk1.value = !gfnRules.isNull(projStep.value.projFourStep.rprsMail);
  rprsMailChk2.value = gfnRules.validEmail(projStep.value.projFourStep.rprsMail);
}

function showTerm1(){
  router.push({name: 'UseTerms'})
}
function showTerm2(){
  router.push({name: 'PrivacyPolicy'})
}

onMounted(() => {
  loadData();
});

function validateHp(event){
  const value = event.target.value;
  if (!/^\d*$/.test(value)) {
    event.target.value = value.replace(/\D/g, '');
    projStep.value.projFourStep.rprsHp = event.target.value;
  }
}


const btnIsActv = computed( () => {

  let chk1 = !gfnRules.isNull(projStep.value.projFourStep.rprsNm); //담당자 이름
  let chk2 = !gfnRules.isNull(projStep.value.projFourStep.rprsHp) //담당자 휴대폰 번호
  let chk3 = !gfnRules.isNull(projStep.value.projFourStep.rprsMail) //예상근무기간
  let chk4 = projStep.value.projFourStep.useTrmsYn == 'Y'
  let chk5 = projStep.value.projFourStep.privTrmsYn == 'Y'

  if(chk1 && chk2 && chk3 && chk4 && chk5){
    return true
  }else{
    return false
  }

})

function btnStatChng(){
  
  projStep.value.projFourStep.rprsMail = projStep.value.projFourStep.rprsMail.replace(/[^a-zA-Z0-9@.]/g, '');

  if(projStep.value.projFourStep.rprsHp.length == 11){
    projStep.value.projFourStep.rprsHp = gfnUtils.formattedHpNo(projStep.value.projFourStep.rprsHp)
  }
  
}



async function loadData(){
  if(dataObj != undefined){
    projStep.value = JSON.parse(dataObj);
  }
}

async function nextPage(div){
  if(div == 'next'){  

    rprsNmRule()
    rprsHpRule()
    rprsMailRule()

    if(!rprsNmChk1.value || !rprsNmChk2.value || !rprsHpChk1.value || !rprsHpChk2.value || !rprsMailChk1.value || !rprsMailChk2.value){
      return false
    }

    if(projStep.value.projFourStep.useTrmsYn != 'Y' || projStep.value.projFourStep.privTrmsYn != 'Y'){
      gfnUtils.openAlert("필수 약관에 동의해야 합니다.","", 2000)
      return false
    }

    for(var i=0; i<projStep.value.projOneStep.jobDivCdList.length; i++){
      projStep.value.projOneStep.jobDivCdList[i].jobDivCd = projStep.value.projOneStep.jobDivCdList[i].cd
    }
    for(var j=0; j<projStep.value.projOneStep.taskDivCdList.length; j++){
      projStep.value.projOneStep.taskDivCdList[j].taskDivCd = projStep.value.projOneStep.taskDivCdList[j].cd;
    } 
    let fileList = fileStore.getAttachFiles
    const userMail = ref(window.$cookies.get("loginUserMail"));
    console.log(JSON.stringify(projStep.value))
    var api = "";
    let formData = new FormData();
    //formData.append("submitProjectInputJson ", new Blob([JSON.stringify(projStep.value)], { type: "application/json" })) 
    for(let x = 0 ; x < fileList.length; x++){
      console.log(fileList[x])
      formData.append("fileList",fileList[x]) //file  
    }
    formData.append("userMail ",userMail.value) //usermail
    projStep.value.projOneStep.strtDay = projStep.value.projOneStep.strtDay.replaceAll("-","")
    projStep.value.projOneStep.atndTime = projStep.value.projOneStep.atndTime.replaceAll(":","")
    projStep.value.projOneStep.lvwkTime = projStep.value.projOneStep.lvwkTime.replaceAll(":","")
    projStep.value.projFourStep.rprsHp = projStep.value.projFourStep.rprsHp.replaceAll("-","")
    if(projStep.value.editMode){
      //프로젝트 수정
      console.log("수정!!!!")
      formData.append("projId ", projStep.value.projId) 
      formData.append("modifyProjInputJson", JSON.stringify(projStep.value) ) 
      api = "/v1/project/modify";
    }else{
      //신규 등록
      console.log("신규 등록!!!!")
      formData.append("submitProjectInputJson", JSON.stringify(projStep.value) ) 
      api = "/v1/project/submit"; 
    }

    
    let rtn = await gfnUtils.axiosPost(
      api,
      formData,
      null, true, true, true
    );

    if(rtn.rtnCd == "00"){
      gfnUtils.openAlert("프로젝트 등록이 완료 되었습니다.","", 2000)
      //router.replace({name : 'PrjtSrch'})
      router.push({ 
        name: "PrjtSrchDetl"
        ,state : {
                    dataObj : {projId: rtn.rtnData.projId}
                  }
      });
    }else{
      gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
    }
    
  }else{
    router.push({ 
      name: "PrjtRegiPage3"
      ,state: {
        dataObj : JSON.stringify(projStep.value),
      },
    });
  }
}
function trmsClick(div){
  btnStatChng()
  if(projStep.value.projFourStep[div] == 'Y'){
    projStep.value.projFourStep[div] = 'N'
  }else{
    projStep.value.projFourStep[div] = 'Y'
  }
}
</script>