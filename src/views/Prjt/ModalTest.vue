
<template>
    <Modal ref="baseModal" :width="340">
        <div class="flex flex-col justify-start items-center  gap-[50px] px-[12px] pt-[60px] pb-5 rounded-[10px]">
            <p class="font-medium text-left text-[#191919]">
                프로젝트 등록을 완료하시겠습니까?
            </p>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                <button @click="cancel" class="w-[145px] relative overflow-hidden gap-2.5 py-2.5 rounded-[1000px] bg-white border border-[#1ba494] text-sm text-[#191919]">
                    돌아가기
                </button>
                <button @click="cancel" class="w-[145px] relative overflow-hidden gap-2.5 py-2.5 rounded-[1000px] bg-[#1ba494] border border-[#1ba494] text-sm text-white">
                    완료
                </button>
            </div>
        </div>
    </Modal>
</template>
<script>
import Modal from '@/components/baseComponents/Modal.vue'
import { ref } from 'vue'; 

export default {
    components: {
        Modal
    },
    props:{
    },
    setup() {        
        const baseModal = ref(null)
        const show = () => {
            baseModal.value.open()            
        }
        //취소버튼
        const cancel = () => {
            baseModal.value.close()
        }
        return {
            baseModal
           ,show
           ,cancel
        }
    },
    data() {
        return {
        }
    },
    methods: {
        init(){
        }
        ,openPopup(){  
            this.show();
        }
    }
   ,mounted(){
        this.init();
   }
}
</script>