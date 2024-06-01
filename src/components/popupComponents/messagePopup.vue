<template>
  <div
  class="flex flex-col justify-start items-center w-[340px] relative overflow-hidden gap-[50px] px-[72px] py-[60px] rounded-[10px] bg-white"
  >
    <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]">
      {{props.message}}
    </p>
  </div>

</template>


<script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    message:{}
  })
  
  </script>