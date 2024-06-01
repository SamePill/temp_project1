<template>
    <Modal ref="baseModal" :width="32">
        <div>
            <div class="flex flex-col justify-start items-start relative overflow-hidden gap-5 p-5 rounded-[10px] bg-white border border-[#1ba494]">
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]">                  
                    <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
                        <p class="flex-grow-0 flex-shrink-0 w-[200px] text-lg font-bold text-left text-[#191919]">주요 담당 업무 작성
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
                <p class="flex-grow-0 flex-shrink-0 w-[280px] text-base font-medium text-left text-[#191919]" style="line-height:1.2;">
                    작성이 어려우신가요? <br />
                    서비스 설명 및 필요하신 검증 범위, 우선순위등의 내용을 작성해보세요.
                </p>
                <p>예시)</p>
                <p>서비스 설명</p>
            </div>
        </div>
    </Modal>
</template>
<script setup>
import { ref, defineExpose, onMounted} from "vue";
import Modal         from '@/components/baseComponents/Modal.vue'

onMounted(() => {
    //로그인 후 - 지원 전(projectSprtInfo유무),지원 중
    //로그인 후 - 지원 후(projectSprtInfo유무)
})

const baseModal = ref(null);

const show = () => {
    baseModal.value.open();
}
const cancel = () => {
    baseModal.value.close();
}
defineExpose({show}) 
</script>

