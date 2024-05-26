<template>
    <Modal ref="baseModal" :width="35">
        <div>
            <div class="w-[1060px] h-[917px] px-5 relative overflow-hidden bg-white">
                <div class="flex flex-col justify-start gap-1.5">
                    <div class="flex justify-between mt-[20px] items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]">
                            엔지니어 선택 및 추가
                        </p>
                        <svg  @click="cancel()"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-6 h-6 relative" preserveAspectRatio="none">
                            <path d="M19 5L5 19" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M5 5L19 19" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                        </svg>
                    </div>
                    <div class="w-[1020px] mx-auto self-stretch  flex-grow-0 flex-shrink-0 h-px bg-[#ddd]"></div>
                </div>
                <div class="flex justify-start mt-[30px]">
                    <div class="w-[300px]" style="position: relative; text-align: right">
                        <input type="text" class="flex w-[300px] px-2.5 py-2 rounded bg-white border border-[#ddd] text-sm text-left text-[#191919]" placeholder="이름을 입력해주세요">
                        <img style="cursor: pointer; position:absolute; right:10px; top:10px;" class="w-[18px] h-[18px]" src="@/assets/ic_magnifier.png" alt="search" >
                    </div>
                    <div class="w-[300px] ml-[220px]" style="position: relative; text-align: right">
                        <input type="text" class="flex w-[300px] px-2.5 py-2 rounded bg-white border border-[#ddd] text-sm text-left text-[#191919]" placeholder="이름을 입력해주세요">
                        <img style="cursor: pointer; position:absolute; right:10px; top:10px;" class="w-[18px] h-[18px]" src="@/assets/ic_magnifier.png" alt="search" >
                    </div>
                </div>
                <div
                    class="w-[500px] h-[634px] overflow-hidden rounded-[10px] bg-white border border-[#ddd]"
                >
                    <div class="flex flex-col justify-start items-start w-[460px] absolute gap-3">
                    <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
                        <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
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
                            stroke="#DBDBDB"
                            stroke-width="1.5"
                            ></rect>
                            <path
                            d="M9 16L14 21L22 13L23 12"
                            stroke="#191919"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ></path>
                        </svg>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">김큐밋</p>
                        </div>
                        <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-4">
                        <div
                            class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
                        >
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#777]">
                            거주지: 서울 강남구
                            </p>
                            <svg
                            width="2"
                            height="14"
                            viewBox="0 0 2 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="none"
                            >
                            <path d="M1 1V13" stroke="#DBDBDB" stroke-linecap="round"></path>
                            </svg>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-right text-[#777]">경력 : 1년7개월</p>
                        </div>
                        <div
                            class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]"
                        >
                            <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
                            초급 엔지니어
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="flex flex-col justify-start items-start absolute left-5 top-5 gap-2.5">
                    <div
                        class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]">
                        선정 엔지니어
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
                        미선정으로 이동
                        </p>
                    </div>
                    <div class="flex-grow-0 flex-shrink-0 w-[460px] h-px bg-[#ddd]"></div>
                    </div>
                    <div class="flex justify-center items-center absolute left-[292px] top-[518px] gap-3">
                    <div class="flex-grow-0 flex-shrink-0"></div>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left">투입가능인원: 8명</p>
                    <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-right text-[#191919]">
                        총 10명
                    </p>
                    </div>
                    <div class="flex justify-center items-center absolute left-[123px] top-[577px] gap-2.5">
                    <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                        preserveAspectRatio="none"
                    >
                        <path
                        d="M10 3.5L6 8.5L10 13.5"
                        stroke="#191919"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ></path>
                    </svg>
                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">1</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">2</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">3</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">4</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">5</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">6</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">7</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">8</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">9</p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#999]">10</p>
                    </div>
                    <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                        preserveAspectRatio="none"
                    >
                        <path
                        d="M6 13.5L10 8.5L6 3.5"
                        stroke="#191919"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ></path>
                    </svg>
                    </div>
                </div>
                <div >
                    <button @click="close()"
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded border border-[#dbdbdb] text-base font-medium text-left text-[#555]">
                        엔지니어 추가                    
                    </button>
                    <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
                    >
                    <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">선택완료</p>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
</template>
<script setup>
import { ref, defineExpose} from "vue";
import Modal   from '@/components/baseComponents/Modal.vue'

const baseModal = ref(null);

const show = () => {
    baseModal.value.open();
}
const cancel = () => {
    baseModal.value.close();
}
defineExpose({show}) 
</script>

