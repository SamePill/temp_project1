<template>
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
      <!-- 프로젝트영역 -->
      <div>
        <div class="mt-[30px]">
          <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">프로젝트 설명 및 주요 담당 업무
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
            <button class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
          </div>
          <div>
            <textarea v-model="projTwoStep.projCtntTask" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="프로젝트 설명을 입력해주세요."/>
          </div>
        </div>
        <div class="mt-[40px]">
          <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">요구스킬
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
            <button class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
          </div>
          <div>
            <textarea v-model="projTwoStep.projDmndSkil" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="요구스킬을 입력해주세요."/>
          </div>
        </div>
        <div class="mt-[40px]">
          <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">활용 Tool
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
            <button class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
          </div>
          <div>
            <textarea v-model="projTwoStep.projUseTool" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="활용 Tool 스킬을 입력해주세요."/>
          </div>
        </div>
        <div class="mt-[40px]">
          <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">기타 전달사항 및 우대사항
              <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
            </p>
            <button class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
          </div>
          <div>
            <textarea v-model="projTwoStep.projEtcInfo" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="기타 전달사항 및 우대사항을 입력해주세요."/>
          </div>
        </div>
        <div class="mt-[40px]">
          <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">파일 자료
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">최대 50MB 까지</p>
          </div>
          <div>
            <div class="flex justify-start items-start gap-5">
              <input type="text" class="w-[340px] relative gap-12 p-4 rounded border border-[#ddd]" placeholder="파일을 추가해주세요."/>
              <div class="flex justify-center items-center w-40 relative overflow-hidden gap-0.5 p-4 rounded bg-[#ededed] border border-[#ddd]">
                <button class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">파일추가</button>
              </div>
            </div>
            <div class="mt-[20px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                  문구 변경: 필요한 내용을 정리한 문서를 추가해 주세요.(최대 3대)</span><br />
                <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                  프로젝트 예산 및 일정 산정에 활용되며, 문서 및 이미지 파일만 추가 가능합니다.
                </span>
              </p>
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

  const router = useRouter()
  const projTwoStep =ref({
    projCtntTask:''  //프로젝트 설명 및 주요 담당 업무
    ,projDmndSkil:'' //프로젝트 요구 스킬
    ,projUseTool:''  //프로젝트 사용 툴
    ,projEtcInfo:''  //프로젝트 기타 사항
    ,fileList:[]     //프로젝트 파일자료 리스트
  })
  const pageNo = ref(2)
  const totPageNo = ref(4) 
  onMounted(() => {
    scrollToTop();
})
  const { dataObj } = history.state; 
  console.log(JSON.parse(dataObj)); 
  
  function nextPage(div){
    if(div == 'next'){  
      router.push({ 
        name: "PrjtRegiPage3"
        ,state: {
          dataObj : JSON.stringify(projTwoStep.value),
        },
      });
    }else{
      router.push({ 
        name: "PrjtRegiPage1"
        ,state: {
          dataObj : dataObj,
        },
      });
    }
  }
  function scrollToTop(){
      window.scrollTo({
      top: 0,
      behavior: 'smooth' });
  }
</script>