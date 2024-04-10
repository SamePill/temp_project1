<template>
  <div
    :class="['py-[10px] px-[10px] border-solid border border-line-1 rounded text-base inline-flex items-center hover:cursor-pointer hover:border-main-0', $attrs.class]">
    <div class="text-text-0 text-sm mr-[10px]">근무형태</div>
    <div class="mr-1 text-sm text-main-0">전체</div>
    <img class="w-4 h-4" src="@/assets/ic_small_arrow.png" alt="">
  </div>

  <div class="pl-4 mt-2 w-[144px] border-solid border border-line-1 rounded text-base flex-col hidden">
    <div class="my-3 text-main-0 text-sm mr-[10px] hover:cursor-pointer">근무형태</div>
    <div class="my-3 text-text-0 text-sm mr-[10px] hover:cursor-pointer">근무형태</div>
    <div class="my-3 text-text-0 text-sm mr-[10px] hover:cursor-pointer">근무형태</div>
  </div>
</template>
<script>
export default {

}
</script>