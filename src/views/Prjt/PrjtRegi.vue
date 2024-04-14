<template>
<div>
  <!-- 헤더 -->
  <Header headerType="1"/>
  <div  class="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[700px] pt-10 pb-[100px] bg-[#fefefe]">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative gap-2.5">
        <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[520px] relative">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
            프로젝트 등록하기
          </p>
          <p class="flex-grow-0 flex-shrink-0 text-left">
            <span class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#191919]">{{pageNo}}</span>
            <span class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#777]">{{"/"}}{{totPageNo}}</span>
          </p>
        </div>
        <div class="mb-10 flex-grow-0 flex-shrink-0 w-[519px] h-px bg-[#191919]"></div>
        <PrjtRegiPage1 :info="PrjtRegiPage1Info"/>
        <button class="flex justify-center w-[520px] py-4 rounded bg-[#1ba494] text-white">
          다음 단계로 넘어가기
        </button>
      </div>
    </div>
  </div>
</div>


</template>
<script>
import Header    from '@/components/layoutComponents/Header.vue'
import PrjtRegiPage1 from '@/components/baseComponents/PrjtRegiPage1.vue'

export default {
  components: {
    Header
   ,PrjtRegiPage1
  },
  data() {
    return {    
      pageNo: '1'
     ,PrjtRegiPage1Info:{
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