<template>
    <div>
        <div
            class="flex flex-col justify-center items-start overflow-hidden gap-10 p-5 rounded-[10px] bg-white border border-[#ddd]"
            >
            <div
                class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5"
            >
                <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
                    지원서 작성
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#777]">뒤로가기</p>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#ddd]"></div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">엔지니어 선택</p>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
                    <div
                        class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
                        초급 엔지니어
                        </p>
                    </div>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">10명 지원</p>
                    </div>
                    <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                    <div
                        class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]">
                        중급 엔지니어
                        </p>
                    </div>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">4명</span
                        ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]"> </span
                        ><span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">지원</span>
                    </p>
                    </div>
                    <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                    <div
                        class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]">
                        고급 엔지니어
                        </p>
                    </div>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">2명 지원</p>
                    </div>
                </div>
                <button  @click="popup()" class="flex justify-center w-[300px] gap-2.5 px-2.5 py-4 rounded border border-[#ddd] text-base font-medium text-left text-[#555]">
                    엔지니어 추가하기
                </button>
                </div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">프로젝트 희망 시작일</p>
                <input type="date" v-model="hopeStrtDay" :min="today" class="w-[300px] text-[#999] h-10 relative overflow-hidden px-2.5 py-2 rounded bg-white border border-[#ddd]" placeholder="프로젝트 시작 희망일을 선택해 주세요."/>
                <!-- TO_DO input type date css수정필요 -->
                </div>
            </div>
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5">
                    <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1" style="cursor:pointer" @click="checkTrmsYn('use')">
                        <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                        preserveAspectRatio="xMidYMid meet">
                        <rect x="4.75"
                            y="4.75"
                            width="22.5"
                            height="22.5"
                            stroke="#DDDDDD"
                            stroke-width="1.5"></rect>
                        <path v-if="useTrmsYn"
                            d="M9 16L14 21L22 13L23 12" 
                            stroke="#191919"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        </svg>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                        (필수) 큐밋 이용약관에 동의합니다.
                        </p>
                    </div>
                    <button class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10 text-xs text-right text-[#777]" @click="useTrmsYnIsShow = !useTrmsYnIsShow">
                        상세보기
                        <!-- TO_DO 상세보기 구현 필요 -->
                    </button>
                    <div class="pl-10 text-sm" v-if="useTrmsYnIsShow">큐밋 이용약관 동의설명</div>
                </div>
                <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5">
                    <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1" style="cursor:pointer" @click="checkTrmsYn('priv')">
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
                            stroke="#DDDDDD"
                            stroke-width="1.5"
                        ></rect>
                        <path v-if="privTrmsYn"
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
                    <button class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10 text-xs text-right text-[#777]" @click="privTrmsYnIsShow = !privTrmsYnIsShow">
                        상세보기
                        <!-- TO_DO 상세보기 구현 필요 -->
                    </button>
                    <div class="pl-10 text-sm" v-if="privTrmsYnIsShow">개인정보 제 3자 제공 동의설명</div>
                </div>
            </div>
            <button class="flex justify-center text-base font-medium text-left text-white w-[300px] px-2.5 py-4 rounded bg-[#1ba494]">지원하기
            </button>
        <EngineerPopup ref="$EngineerPopup"></EngineerPopup>
    </div>
</div>
</template>
<script setup>
import { ref, defineProps, onMounted } from "vue";
// import * as gfnRules from "@/utils/gfnRules.js";
import * as gfnUtils from "@/utils/gfnUtils.js";
import EngineerPopup from "@/views/PrjtList/EngineerPopup.vue";
const $EngineerPopup = ref();

onMounted(() => {
    //로그인 후 - 지원 전(projectSprtInfo유무),지원 중
    //로그인 후 - 지원 후(projectSprtInfo유무)
    hopeStrtDay.value = today;
    console.log(props.prj)
})

const today = gfnUtils.getToday()
const props = defineProps({prj:{}});
// const projId = ref(props.value.prj.projId);
// const sprtUserMail= ref(window.$cookies.get("loginUserMail"));
const hopeStrtDay = ref('');
// const engrList = ref [{}];
const useTrmsYn  = ref(false);
const privTrmsYn = ref(false);

const useTrmsYnIsShow  = ref(false);
const privTrmsYnIsShow = ref(false);

function popup(){
    $EngineerPopup.value.show();
}
function checkTrmsYn(div){
    if(div == 'use'){
        useTrmsYn.value = !useTrmsYn.value
    }
    if(div == 'priv'){
        privTrmsYn.value = !privTrmsYn.value
    }
}

</script>
