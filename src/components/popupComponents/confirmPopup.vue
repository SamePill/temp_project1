<template>
  <div
    class="flex flex-col justify-start items-center w-[340px] relative overflow-hidden gap-[50px] px-[72px] pt-[60px] pb-5 rounded-[10px] bg-white"
  >
    <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]">
      {{props.message}}
    </p>
    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
      <button
        class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919] flex justify-center items-center flex-grow-0 flex-shrink-0 w-[145px] relative overflow-hidden gap-2.5 px-[45px] py-2.5 rounded-[1000px] bg-white border border-[#1ba494]"
        @click="$emit('cancel')"
        >
        {{props.btnCancel}}
      </button>
      <button
        class="flex-grow-0 flex-shrink-0 text-sm text-left text-white flex justify-center items-center flex-grow-0 flex-shrink-0 w-[145px] relative overflow-hidden gap-2.5 px-[45px] py-2.5 rounded-[1000px] bg-[#1ba494] border border-[#1ba494]"
        @click="$emit('confirm')"
      >
        {{props.btnOk}}
      </button>     
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    message: {
      default: "",
    }
    ,btnOk: {
      default: "확인",
    }
    ,btnCancel: {
      default: "취소",
    }
  })

  // 공통처리 필요??
  // import { systemStore } from '@/stores'
  // import { compute } from 'vue'

  // //Store
  // const sysStore = systemStore();
  // //const alertTitle = computed(() => sysStore.getAlertTitle);
  // const alertMsg = computed(() => sysStore.getAlertMsg);

</script>
