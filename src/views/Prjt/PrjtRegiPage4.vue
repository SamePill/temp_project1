<template>
  <div>
    <div style="display: flex; justify-content: center;" class="pt-10 pb-[100px] bg-[#fefefe]">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] relative relative ">
      <div class="flex justify-between w-[520px] mb-[10px]">
        <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
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
        {{ '페이지1' }}
      </div>
      <div class="w-[520px] mt-[60px] flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <button @click="nextPage('pre')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#1ba494] text-[#1ba494]">
          이전 단계로 이동              
        </button>
        <button @click="nextPage('next')" class="flex w-[180px] justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] text-white">
          등록완료
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default { 
  data: function() {
		return {
      projFourStep:{
        rprsNm:''
        ,rprsHp:''
        ,rprsMail:''
        ,useTrmsYn: "Y"
        ,privTrmsYn: "Y"
      }
      ,pageNo:4
      ,totPageNo:4 
    }
  }
  ,methods:{
    nextPage(div){
      if(div == 'next'){  
        console.log('등록완료')
      }else{
        this.$router.push({ 
          name: "PrjtRegiPage3"
          ,state: {
            dataObj : this.params,
          },
        });
      }
    }
  }
}
</script>