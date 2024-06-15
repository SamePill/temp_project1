<template>
  <div
  class="flex flex-col justify-start items-center w-[340px] relative overflow-hidden gap-[30px] px-[72px] py-[20px] rounded-[10px] bg-white"
  >
    <div class="flex justify-between items-start flex-grow-0 flex-shrink-0 relative w-[280px]">
      <p class="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#191919]"></p>
      <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
          @click="close()"
        >
          <path
            d="M19 5L5 19"
            stroke="#191919"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          ></path>
          <path
            d="M5 5L19 19"
            stroke="#191919"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          ></path>
        </svg>
    </div>
    <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919] pb-[40px]">
      {{alertMsg}}
    </p>
  </div>

</template>


<script setup>
  import { computed } from 'vue'
  import { systemStore } from '@/stores'
 
  // const props = defineProps({
  //   message:{}
  // })
  
  //Store
  const sysStore = systemStore();
  const alertMsg = computed(() => sysStore.getAlertMsg);

  function close(){
    sysStore.setAlert(false)
  }
</script>