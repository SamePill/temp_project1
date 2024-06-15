<template>
    <div v-if="isShow" style="position:absolute; top:0px; right:-330px; z-index:999; background-color: #fff;" class="w-[320px] rounded-[10px] ">
        <div class="flex flex-col justify-start items-start relative overflow-hidden p-5 rounded-[10px] bg-white border border-[#1ba494]">
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]">                  
                <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p class="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-bold text-left text-[#191919]">
                        {{tip[tipDiv].title}}
                        <span class="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-bold text-left text-[#1ba494]">Tip</span>
                    </p>
                    <svg  style="cursor: pointer;" @click="cancel()"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="flex flex-grow-0 flex-shrink-0 w-6 h-6 relative" preserveAspectRatio="none">
                        <path d="M19 5L5 19" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M5 5L19 19" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </div>
                <div class="flex-grow-0 flex-shrink-0 w-[280px] h-px bg-[#191919]"></div>
            </div>
            <p class="mt-[20px] flex-grow-0 flex-shrink-0 w-[280px] text-base font-medium text-left text-[#191919]" style="line-height:1.2;">
                <span v-html="tip[tipDiv].contents1"></span>
            </p>
            <div class="flex justify-between pl-[10px] mt-[20px]" v-for="(el,i) in tip[tipDiv].contents2" :key="el">
                <li style="width:15px;"></li>
                <p :style="(tipDiv == 1 || tipDiv == 2 ) && i !=0 ? 'width:calc( 100% - 15px )' : ''" class="text-[14px] text-[#333333]"><span v-html="el.val"></span></p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineExpose, onMounted} from "vue";

onMounted(() => {
})

let tipDiv = 0;

const isShow = ref(false)

function show(){
    isShow.value = !isShow.value;
}

function cancel(){
    isShow.value = false;
}

const tip = ref([{title:'요구 스킬 작성'
                ,contents1:`작성이 어려우신가요?<br/>투입 될 엔지니어에게 요구하는 스킬을 작성해보세요`
                ,contents2:[{val:'예시)'}
                            ,{val:'TestCase 설계'}
                            ,{val:'리딩 능력'}
                            ,{val:'API 테스트 가능'}
                            ,{val:'유사서비스 경험<br/>(이커머스, 금융, 결제시스템 등)'}
                            ,{val:'자동화 테스트 구축 경험'}
                ]}
])

defineExpose({
    cancel,show
  });
</script>
