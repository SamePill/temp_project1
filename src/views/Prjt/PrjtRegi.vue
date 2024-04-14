<template>
<div>
  <!-- 헤더 -->
  <Header headerType="1"/>
  <div  class="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[700px] pt-10 pb-[100px] bg-[#fefefe]">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
        <div
          class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative gap-2.5"
        >
          <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
              프로젝트 등록하기
            </p>
            <p class="flex-grow-0 flex-shrink-0 text-left">
              <span class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]">{{2}}</span>
              <span class="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#777]">/</span
              ><span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]">{{4}}</span>
            </p>
          </div>
          <div class="flex-grow-0 flex-shrink-0 w-[519px] h-px bg-[#191919]"></div>
        </div>
      </div>
      <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">직군 
        <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
      </p>
      <Chipset :info="params.occuInfo"/>
      <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">업무영역 
        <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
      </p>
      <Chipset :info="params.jobInfo"/>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[520px] relative">
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">프로젝트명 
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#ff5252]">*</span>
          </p>
          <p class="flex-grow-0 flex-shrink-0 text-sm text-left">
            <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1ba494]">1</span
            ><span class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#191919]">
            </span
            ><span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">/100</span>
          </p>
        </div>
        <input tye="text" class="w-[520px] h-[51px] flex-grow-0 flex-shrink-0 text-base text-left text-[#999] p-4 rounded bg-white border border-[#ddd]" placeholder="프로젝트명을 입력주세요."/>
      </div>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
        <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">희망 시작일 <span class="text-[#ff5252]">*</span></p>
        <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-2">
          <input type="date" class="w-[520px] h-[51px] flex-grow-0 flex-shrink-0 text-base text-left text-[#999] p-4 rounded bg-white border border-[#ddd]" placeholder="프로젝트 시작 희망일을 선택해 주세요."/>
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
            <input type="checkbox" class="w-[15px] h-[15px]"/>
            <p class="flex-grow-0 flex-shrink-0 text-base px-1 text-left text-[#777]">협의가능</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
        <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">예상기간
          <span class="text-[#ff5252]">*</span>
        </p>
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-40 h-[51px] relative overflow-hidden p-4 rounded bg-white border border-[#ddd]">
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">월 단위</p>
          </div>
          <input type="text" class="w-[340px] h-[51px] flex-grow-0 flex-shrink-0 text-base text-left text-[#999] p-4 rounded bg-white border border-[#ddd]" placeholder="예상 근무기간을 입력해주세요."/>
        </div>
      </div>
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[60px]">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">근무방식
            <span class="text-[#ff5252]">*</span>
          </p>
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="none"
              >
                <circle cx="16" cy="16" r="12" fill="#1BA494"></circle>
                <path
                  d="M11 15.2L14.5924 19.7983C14.6725 19.9008 14.8275 19.9008 14.9076 19.7983L21 12"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">비상주</p>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="none"
              >
                <circle cx="16" cy="16" r="11.25" stroke="#DDDDDD" stroke-width="1.5"></circle>
                <path
                  d="M11 15.2L14.5924 19.7983C14.6725 19.9008 14.8275 19.9008 14.9076 19.7983L21 12"
                  stroke="#DDDDDD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">상주</p>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">근무지</p>
            <input type="text" class="w-[520px] h-[51px] flex-grow-0 flex-shrink-0 text-base text-left text-[#999] p-4 rounded bg-white border border-[#ddd]" placeholder="예시) 서울특별시 강남구 테헤란로 000-0"/>
            <input type="text" class="w-[520px] h-[51px] flex-grow-0 flex-shrink-0 text-base text-left text-[#999] p-4 rounded bg-white border border-[#ddd]" placeholder="예시) 큐밋빌딩 1층"/>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">출근시간</p>
              <input type="text" class="w-[250px] h-[51px] flex-grow-0 flex-shrink-0 text-base text-left text-[#999] p-4 rounded bg-white border border-[#ddd]" placeholder="예시) 09:00"/>
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">퇴근시간</p>
              <input type="text" class="w-[250px] h-[51px] flex-grow-0 flex-shrink-0 text-base text-left text-[#999] p-4 rounded bg-white border border-[#ddd]" placeholder="예시) 18:00"/>
            </div>
          </div>
        </div>
        <button class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[520px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-base font-medium text-left text-white">
          다음 단계로 넘어가기
        </button>
      </div>
    </div>
  </div>
</div>


</template>
<script>
import Header    from '@/components/layoutComponents/Header.vue'
import Chipset from '@/components/baseComponents/Chipset.vue'

export default {
  components: {
    Header
   ,Chipset
  },
  data() {
    return {      
        params:{
            occuInfo : {valList:[ {cdVal:'a',cdNm:'#제조',chkVal:true}
                                ,{cdVal:'b',cdNm:'#IT'  ,chkVal:false}
                                ,{cdVal:'c',cdNm:'#금융',chkVal:true}
                                ,{cdVal:'d',cdNm:'#미디어/디자인',chkVal:false}
                                ,{cdVal:'e',cdNm:'#교육',chkVal:true}
                                ,{cdVal:'f',cdNm:'#의료',chkVal:true}
                                ,{cdVal:'g',cdNm:'#판매/유통',chkVal:false}
                                ,{cdVal:'h',cdNm:'#건설',chkVal:false}
                                ,{cdVal:'i',cdNm:'#기관/협회',chkVal:false}
                                ,{cdVal:'j',cdNm:'#기타',chkVal:true}
                      ]}
           ,jobInfo : {valList:[ {cdVal:'a',cdNm:'#Web',chkVal:true}
                                ,{cdVal:'b',cdNm:'#App',chkVal:true}
                                ,{cdVal:'c',cdNm:'#IOT',chkVal:true}
                                ,{cdVal:'d',cdNm:'#증강현실',chkVal:true}
                                ,{cdVal:'e',cdNm:'#금융',chkVal:true}
                                ,{cdVal:'f',cdNm:'#AI',chkVal:true}
                                ,{cdVal:'g',cdNm:'#블록체인',chkVal:true}
                                ,{cdVal:'h',cdNm:'#자동차',chkVal:true}
                                ,{cdVal:'i',cdNm:'#하드웨어',chkVal:true}
                                ,{cdVal:'j',cdNm:'#임베디드',chkVal:true}
                                ,{cdVal:'j',cdNm:'#메타버스',chkVal:true}
                                ,{cdVal:'j',cdNm:'#플랫폼',chkVal:true}
                                ,{cdVal:'j',cdNm:'#기타',chkVal:true}
                      ]}
        }
    };
  }
    ,methods:{
   
    }
}
</script>