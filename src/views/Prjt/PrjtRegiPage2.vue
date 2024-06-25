<template>
  <div>
    <div style="display: flex; justify-content: center;" class="pt-10 pb-[100px] bg-[#fefefe]">
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative relative ">
        <div id="top" class="flex justify-between w-[520px] mb-[10px]">
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
        <!-- 프로젝트영역 -->
        <div>
          <div class="mt-[30px]">
            <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">프로젝트 설명 및 주요 담당 업무
                <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
              </p>
              <button @click="popup('$TaskTip')" class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
                <TaskTip ref="$TaskTip" ></TaskTip>
            </div>
            <div>
              <textarea v-model="projStep.projTwoStep.projCtntTask" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="프로젝트 설명을 입력해주세요."/>
            </div>
          </div>
          <div class="mt-[40px]">
            <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">요구스킬
                <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
              </p>
              <button @click="popup('$SkillTip')"  class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
                <SkillTip ref="$SkillTip" ></SkillTip>
            </div>
            <div>
              <textarea v-model="projStep.projTwoStep.projDmndSkil" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="요구스킬을 입력해주세요."/>
            </div>
          </div>
          <div class="mt-[40px]">
            <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">활용 Tool
                <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
              </p>
              <button @click="popup('$ToolTip')" class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
                <ToolTip ref="$ToolTip" ></ToolTip>
            </div>
            <div>
              <textarea v-model="projStep.projTwoStep.projUseTool" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="활용 Tool 스킬을 입력해주세요."/>
            </div>
          </div>
          <div class="mt-[40px]">
            <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">기타 전달사항 및 우대사항
                <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
              </p>
            </div>
            <div>
              <textarea v-model="projStep.projTwoStep.projEtcInfo" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="기타 전달사항 및 우대사항을 입력해주세요."/>
            </div>
          </div>


          <div class="mt-[40px] w-[520px]">

            <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">파일 자료
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">최대 50MB 까지</p>
            </div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
              <input
                type="text"
                class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]  w-[340px] p-4 rounded bg-white border border-[#ddd]"
                placeholder="파일을 추가해주세요."
                readonly
              />
              <input type="file" id="file" hidden  accept="image/*, .pdf"  @change="showFileName()"/>
              
              <label for="file">
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 overflow-hidden  p-4 rounded bg-[#ededed] border border-[#ddd]" style="cursor: pointer">
                  <p class="text-[#555]">파일추가</p>
                </div>
              </label>
            </div>
            <div>
              <div class="mt-[20px]">
                <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                  <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                    문구 변경: 필요한 내용을 정리한 문서를 추가해 주세요.(최대 3갸)</span><br />
                  <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                    프로젝트 예산 및 일정 산정에 활용되며, 문서 및 이미지 파일만 추가 가능합니다.
                  </span>
                </p>
              </div>
            </div>
            <div v-for="(el,i) in fileList" :key="i" class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[540px] gap-3">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-2">
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1585d7]">
                  {{el.name}}
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
                  @click="delFile(i)"
                  v-show="el !='' && el != null"
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
        <div class="w-[520px] mt-[60px] flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
          <button @click="nextPage('pre')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494] text-[#1ba494]">
            이전 단계로 이동              
          </button>
          <button @click="nextPage('next')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-white">
            다음 단계로 이동 
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {  ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import TaskTip from "@/components/popupComponents/TaskTip.vue";
import SkillTip from "@/components/popupComponents/SkillTip.vue";
import ToolTip from "@/components/popupComponents/ToolTip.vue";



const router = useRouter()
// const projTwoStep =ref({
//   projCtntTask:''  //프로젝트 설명 및 주요 담당 업무
//   ,projDmndSkil:'' //프로젝트 요구 스킬
//   ,projUseTool:''  //프로젝트 사용 툴
//   ,projEtcInfo:''  //프로젝트 기타 사항
//   ,fileList:[]     //프로젝트 파일자료 리스트
// })
const pageNo = ref(2)
const totPageNo = ref(4) 
const { dataObj } = history.state; 
const projStep = ref(JSON.parse(dataObj));
const $TaskTip = ref();
const $SkillTip = ref();
const $ToolTip = ref();
const fileList = ref([]);

onMounted(() => {
  loadData();
});

async function loadData(){
  if(dataObj != undefined){
    projStep.value = JSON.parse(dataObj);
  }
}

function popup(div){
  if(div == '$TaskTip'){
    $TaskTip.value.show();
  }
  if(div == '$SkillTip'){
    $SkillTip.value.show();
  }
  if(div == '$ToolTip'){
    $ToolTip.value.show();
  }
  return false

}

function nextPage(div){

  if(div == 'next'){  
    router.push({ 
      name: "PrjtRegiPage3"
      ,state: {
        dataObj : JSON.stringify(projStep.value),
      },
    });
  }else{
    router.push({ 
      name: "PrjtRegiPage1"
      ,state: {
        dataObj : JSON.stringify(projStep.value),
      },
    });
  }
}
// function scrollToTop(){
//   var location = document.querySelector("#top").offsetTop;
//   window.scrollTo({location, behavior: 'smooth' });
// }

function showFileName(){
  if(fileList.value.length < 3){
    let input = document.getElementById('file');
    fileList.value.push(input.files[0])
    // console.log(fileList.value)
  }
}

function delFile(idx){
  fileList.value.splice(idx,1);
}

</script>