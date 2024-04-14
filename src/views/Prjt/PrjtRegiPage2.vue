<template>
  <div>
    <div class="mt-[30px]">
      <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
        <p class="mb-[20px] flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">프로젝트 설명 및 주요 담당 업무
          <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
        </p>
        <button class="px-2.5 height-[23px] width-[69px] rounded-[100px] border border-[#1ba494]  text-[#1ba494]">작성 TIP</button>
      </div>
      <div>
        <textarea v-model="params.val1" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="프로젝트 설명을 입력해주세요."/>
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
        <textarea v-model="params.val2" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="요구스킬을 입력해주세요."/>
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
        <textarea v-model="params.val3" style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="활용 Tool 스킬을 입력해주세요."/>
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
        <textarea style="resize: none;" type="text" class="flex justify-start items-start h-[230px] w-[520px] px-4 pt-4 pb-6 rounded border border-[#ddd]" placeholder="기타 전달사항 및 우대사항을 입력해주세요."/>
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
</template>
<script>
export default {
  components:{
  } 
 ,props: {
    // info : {}
  }
  ,data(){
    return {
      params:{
         val1: 'OOO 시스템 고도화'
        ,val2: 'RestAPI 개발능력, Vue.js, RDBMS, Git'
        ,val3: 'Erwin, STS, IntelliJ'
      }
    }
  }
  ,methods:{
    getInfo(){
      return this.params;
    }
  }
  ,mounted(){
  }
}
</script>