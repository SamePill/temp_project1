<template>
    <div>
        <!-- 모집중,지원전,지원상태 -->
        <!-- 지원후 -->
        <!-- 모집완료 -->
        <!-- 지원중 -->
        
        <!-- 로그아웃 -->
        
        <div v-if="gfnRules.isNull(loginUserNm)"  class="w-[340px]">
            <div class="flex flex-col justify-between items-start flex-grow-0 flex-shrink-0 h-[266px] w-[340px] relative overflow-hidden p-5 rounded-[10px] bg-white border border-[#ddd]" >
                <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">지원하기</p>
                <p class="flex-grow-0 flex-shrink-0 w-[300px] text-xl text-center text-[#777]">
                    <span class="flex-grow-0 flex-shrink-0 w-[300px] text-xl text-center text-[#777]"
                    >로그인 후 해당 공고를 </span
                    ><br /><span class="flex-grow-0 flex-shrink-0 w-[300px] text-xl text-center text-[#777]"
                    >확인할 수 있습니다.
                    </span>
                </p>
                <button @click="goToPage('Login')" class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]  text-base font-bold text-left text-white">
                    로그인 / 회원가입
                </button>
            </div>
        </div>
        <!-- 로그인 -->
        <div v-if="!gfnRules.isNull(loginUserNm) && !isShowDetl"  class="w-[340px] ml-3">
            <div class="flex flex-col justify-between  flex-grow-0 flex-shrink-0  p-5 rounded-[10px] bg-white border border-[#ddd]" >
                <p v-if="workDivCd =='90' || prj.projectSprtInfo == null" class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919] mb-5">
                    <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">김큐밋님 </span><br />
                    <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">안녕하세요.</span>
                </p>
                <button v-if="workDivCd =='90'" class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#999999]  text-base font-medium text-left text-white">
                    모집이 종료되었습니다
                </button>
                <div v-else>
                    <div v-if="prj.projectSprtInfo == null">
                        <button @click="clickSideMenuBtn()" class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]  text-base font-medium text-left text-white">
                            프로젝트 지원하기
                        </button>
                    </div>
                    <div v-else>
                        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                            <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">지원한 엔지니어 현황</p>
                            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
                                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]">
                                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
                                        초급 엔지니어
                                        </p>
                                    </div>
                                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">10명 지원</p>
                                </div>
                                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]">
                                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]">
                                        중급 엔지니어
                                        </p>
                                    </div>
                                    <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                                        <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">4명</span>
                                        <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]"> </span>
                                        <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">지원</span>
                                    </p>
                                </div>
                                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]">
                                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]">
                                        고급 엔지니어
                                        </p>
                                    </div>
                                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">2명 지원</p>
                                </div>
                            </div>
                        </div>
                        <button @click="clickSideMenuBtn()" class="mt-[20px] flex justify-center items-center flex-grow-0 flex-shrink-0 w-[300px] overflow-hidden px-2.5 py-4 rounded bg-[#1ba494]  text-base font-medium text-left text-white">
                            수정하기
                        </button>
                        <button  @click="clickSideMenuBtn('cancel')" class="mt-[10px] flex justify-center w-[300px] px-1.5 py-4 rounded border border-[#1ba494] text-base font-medium text-left text-[#1ba494]">
                            지원 취소하기
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isShowDetl" class="flex flex-col justify-center items-start overflow-hidden gap-10 p-5 rounded-[10px] bg-white border border-[#ddd] ml-3">
            <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
                <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#191919]">
                        지원서 작성
                    </p>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#777]" @click="isShowDetl = false">뒤로가기</p>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#ddd]"></div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                    <p class="flex-grow-0 flex-shrink-0 text-xl text-left text-[#191919]">엔지니어 선택</p>
                    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
                            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]">
                                <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
                                초급 엔지니어
                                </p>
                            </div>
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">10명 지원</p>
                        </div>
                        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]">
                                <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]">
                                중급 엔지니어
                                </p>
                            </div>
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                                <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">4명</span>
                                <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1ba494]"> </span>
                                <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">지원</span>
                            </p>
                        </div>
                        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]">
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
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"  xmlns="http://www.w3.org/2000/svg" class="flex-grow-0 flex-shrink-0 w-8 h-8 relative" preserveAspectRatio="xMidYMid meet">
                            <rect  x="4.75"  y="4.75" width="22.5"  height="22.5" stroke="#DDDDDD"  stroke-width="1.5"></rect>
                            <path v-if="useTrmsYn" d="M9 16L14 21L22 13L23 12" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"  xmlns="http://www.w3.org/2000/svg" class="flex-grow-0 flex-shrink-0 w-8 h-8 relative" preserveAspectRatio="xMidYMid meet">
                            <rect  x="4.75"  y="4.75" width="22.5"  height="22.5" stroke="#DDDDDD"  stroke-width="1.5"></rect>
                            <path v-if="privTrmsYn" d="M9 16L14 21L22 13L23 12" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
            <button class="flex justify-center text-base font-medium text-left text-white w-[300px] px-2.5 py-4 rounded bg-[#1ba494]">지원하기</button>
            <EngineerPopup :prj="JSON.parse(JSON.stringify(props.prj))" ref="$EngineerPopup"></EngineerPopup>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps, onMounted } from "vue";
import * as gfnRules from "@/utils/gfnRules.js";
import * as gfnUtils from "@/utils/gfnUtils.js";
import EngineerPopup from "@/views/PrjtList/EngineerPopup.vue";
const $EngineerPopup = ref();
import { useRouter } from 'vue-router';
const router = useRouter()

const today = gfnUtils.getToday()
const props = defineProps({prj:{}});


const loginUserNm = ref(window.$cookies.get("loginUserNm"));
onMounted(() => {
    //로그인 후 - 지원 전(projectSprtInfo유무),지원 중
    //로그인 후 - 지원 후(projectSprtInfo유무)
    hopeStrtDay.value = today;
    // console.log(props.prj.projId);
    // console.log();
})

// const projId = ref(props.value.prj.projId);
// const sprtUserMail= ref(window.$cookies.get("loginUserMail"));
const hopeStrtDay = ref('');
// const engrList = ref [{}];
const useTrmsYn  = ref(false);
const privTrmsYn = ref(false);

const useTrmsYnIsShow  = ref(false);
const privTrmsYnIsShow = ref(false);

const isShowDetl = ref(false); 

function goToPage(div){
    router.push({ name: div });
}
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

function clickSideMenuBtn(div){
    if(div =='cancel'){
        //컨펌띄우기
    }else{
        isShowDetl.value = true;
        if(props.prj.projectSprtInfo != null){
            // TO_DO 기존 지원 내용있으면 집어넣기
        }
    }
}
</script>
