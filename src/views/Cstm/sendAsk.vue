<template>
    <div class="w-[1076px] mx-auto overflow-hidden pt-10 pb-[100px] ">
        <div class="flex justify-between w-[1076px] bg-[#fefefe]">
            <div class="flex flex-col  gap-10 py-[100px]">
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                    <p class="flex-grow-0 flex-shrink-0 text-4xl text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-[#1ba494]">문의하기 </span><br />
                        <span class="flex-grow-0 flex-shrink-0 text-4xl text-left text-[#191919]">지금 바로 문의해 주세요.</span>
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                        사업에 유용한 정보와 컨설팅을 제공해 드립니다.
                    </p>
                </div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
                    <div v-for="el in textList" :key="el" class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <img src="@/assets/cstm_dot.png"/>
                        <div v-html="el.text" class="flex-grow-0 flex-shrink-0 w-[476px] text-base font-medium text-left text-[#333]">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-10">
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                    <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-3">
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">회사 이름 </span>
                            <span class="text-[#ff5252]">*</span>
                        </p>
                        <input @blur="ruleChk('qnaCompNm')" type="text" v-model="qnaInfo.qnaCompNm" class="flex w-[250px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]" placeholder="회사이름을 입력해주세요.">
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="isNullQnaCompNm">
                        회사 이름을 입력해주세요.
                        </p>
                    </div>
                    <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-3">
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">이름 </span>
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">*</span>
                        </p>
                        <input @blur="ruleChk('qnaUserNm')" type="text" v-model="qnaInfo.qnaUserNm" class="flex w-[250px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]" placeholder="이름을 입력해주세요.">
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="isNullQnaUserNm">
                        이름을 입력해주세요.
                        </p>
                    </div>
                    </div>
                        <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-3">
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">이메일</span>
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">*</span>
                        </p>
                        <input @blur="ruleChk('qnaUserMail')" type="text" v-model="qnaInfo.qnaUserMail" class="flex w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]" placeholder="이메일을 입력해주세요.">
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="chkQnaUserMail">
                        이메일이 올바르지 않습니다. 다시 한번 확인해주세요.
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="isNullQnaUserMail">
                        이메일을 입력해주세요.
                        </p>
                    </div>
                        <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3">
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">문의제목</span>
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">*</span>
                        </p>
                        <input @blur="ruleChk('qnaTitl')" type="text" v-model="qnaInfo.qnaTitl" class="flex w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]" placeholder="문의제목을 입력해주세요.">
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="isNullQnaTitl">
                        문의제목을 입력해주세요.
                        </p>
                    </div>
                    <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3">
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">문의내용</span>
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">*</span>
                        </p>
                        <textarea @blur="ruleChk('qnaTxt')" v-model="qnaInfo.qnaTxt" class="flex w-[520px] h-[236px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]" placeholder="문의내용을 입력해주세요."/>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="isNullQnaTxt">
                        문의내용을 입력해주세요.
                        </p>
                    </div>
                    <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3">
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">휴대전화</span>
                            <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">*</span>
                        </p>
                        <input @blur="ruleChk('qnaHp')"  type="text" v-model="qnaInfo.qnaHp" class="flex w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]" placeholder="휴대폰 번호를 입력해주세요.">
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="chkQnaHp">
                        휴대폰 번호가 올바르지 않습니다. 다시 한번 확인해주세요.
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="isNullQnaHp">
                        휴대폰 번호를 입력해주세요.
                        </p>
                    </div>
                <div class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 gap-0.5">
                    <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <svg @click="chckQnaPrivTrmsYn()"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-8 h-8 relative cursor-pointer"
                        preserveAspectRatio="xMidYMid meet">
                            <rect
                                x="4.75"
                                y="4.75"
                                width="22.5"
                                height="22.5"
                                stroke="#DDDDDD"
                                stroke-width="1.5">
                            </rect>
                            <path v-if="qnaInfo.qnaPrivTrmsYn == 'Y'"
                                d="M9 16L14 21L22 13L23 12"
                                stroke="#191919"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                        (필수) 개인정보 제 3자 제공에 동의합니다.
                        </p>
                    </div>
                    <button class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10 text-xs text-right text-[#777]">
                        상세보기
                    </button>
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#ff5252]" v-show="chkQnaPrivTrmsYn">
                    필수 항목에 체크해주세요
                    </p>
                </div>
                <div class="flex justify-end gap-5">
                    <button @click="sendQna()" class="text-center w-40 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494] font-medium text-left text-white">
                        문의하기
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as gfnUtils from "@/utils/gfnUtils.js";
import * as gfnRules from "@/utils/gfnRules.js";
import { useRouter } from 'vue-router';

const router = useRouter()
const textList = ref([{text:'평일 2일 내, 답변드립니다.'}
                      ,{text:'문의하실 플랫폼을 선택해 주세요.'}
                      ,{text:'필요시 세부정보를 이메일로 보내드립니다. (서비스 제공, 솔루션 문의 등)'}
                      ,{text:`전화 상담을 원하신다면 </span><span class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#1ba494]">02-2085-0606</span><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#333]">으로 연락 부탁드립니다.</span>`}
])

const qnaInfo = ref({  qnaCompNm:   ''
                    ,qnaUserNm:   ''
                    ,qnaUserMail: ''
                    ,qnaTitl:     ''
                    ,qnaTxt:      ''
                    ,qnaHp:       ''
                    ,qnaPrivTrmsYn: 'N'
})

const isNullQnaCompNm   = ref(false);
const isNullQnaUserNm   = ref(false);
const isNullQnaUserMail = ref(false);
const chkQnaUserMail    = ref(false);
const isNullQnaTitl     = ref(false);
const isNullQnaTxt      = ref(false);
const isNullQnaHp       = ref(false);
const chkQnaHp          = ref(false);
const chkQnaPrivTrmsYn  = ref(false);

onMounted(() => {
  
});

onUnmounted(()=>{
});

function chckQnaPrivTrmsYn(){
    qnaInfo.value.qnaPrivTrmsYn = qnaInfo.value.qnaPrivTrmsYn == 'Y' ? 'N' : 'Y';
}

async function sendQna(){
    ruleChk();
    if(isNullQnaCompNm.value 
       && isNullQnaUserNm.value 
       && isNullQnaUserMail.value 
       && chkQnaUserMail.value 
       && isNullQnaTitl.value 
       && isNullQnaTxt.value 
       && isNullQnaHp.value 
       && chkQnaHp.value 
       && chkQnaPrivTrmsYn .value ){
        var api = "/v1/common/submit/qna";
        var params = qnaInfo.value;
        let rtn = await gfnUtils.axiosPost(
        api,
        params
        );
        if(rtn.rtnCd == "00"){
        gfnUtils.openAlert("문의사항이 등록되었습니다.","", 4000)
        router.go();
        }else{
        gfnUtils.openAlert(rtn.rtnMsg,"", 4000)
        }
    }
}

function ruleChk(div){
    if(div  == 'qnaCompNm' || gfnRules.isNull(div)){
        isNullQnaCompNm.value = gfnRules.isNull(qnaInfo.value.qnaCompNm);
    }
    
    if(div  == 'qnaUserNm' || gfnRules.isNull(div)){
        isNullQnaUserNm.value = gfnRules.isNull(qnaInfo.value.qnaUserNm);
    }
    
    if(div  == 'qnaUserMail' || gfnRules.isNull(div)){
        isNullQnaUserMail.value = gfnRules.isNull(qnaInfo.value.qnaUserMail);
        if(!gfnRules.isNull(qnaInfo.value.qnaUserMail)){
            chkQnaUserMail.value = !gfnRules.validEmail(qnaInfo.value.qnaUserMail);
        }
    }
    
    if(div  == 'qnaTitl' || gfnRules.isNull(div)){
        isNullQnaTitl.value = gfnRules.isNull(qnaInfo.value.qnaTitl);
    }
    
    if(div  == 'qnaTxt' || gfnRules.isNull(div)){
        isNullQnaTxt.value = gfnRules.isNull(qnaInfo.value.qnaTxt);
    }
    
    if(div  == 'qnaHp' || gfnRules.isNull(div)){
        isNullQnaHp.value = gfnRules.isNull(qnaInfo.value.qnaHp);
        if(!gfnRules.isNull(qnaInfo.value.qnaHp)){
            chkQnaHp.value = !gfnRules.validHp(qnaInfo.value.qnaHp);
        }
    }
    
    if(div  == 'qnaPrivTrmsYn' || gfnRules.isNull(div)){
        chkQnaPrivTrmsYn.value = qnaInfo.value.qnaPrivTrmsYn =='N'? true : false;
    }
}
</script>