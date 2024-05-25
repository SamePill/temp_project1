<template>
  <div style="display: inline-block; position:relative">
    <div @click="showItem()"
      :class="['py-[10px] px-[10px] w-[172px] border-solid border border-line-1 rounded text-base inline-flex items-center hover:cursor-pointer hover:border-main-0', $attrs.class]">
      <div class="text-text-0 text-sm w-[50px]">{{title}}</div>
      <div class="w-[100px] inline-flex" style="text-align: right;">
        <div class="w-[100px] px-1 text-sm text-main-0" style="text-align: right;">{{ cdNm }}</div>
        <img v-if="isShow" class="w-4 h-4" src="@/assets/ic_small_arrow.png" style=" position:relative; top:-2px" alt="">
        <img v-if="!isShow" style="transform: scaleY(-1);" class="w-4 h-4" src="@/assets/ic_small_arrow.png" alt="">
      </div>
    </div>

    <div v-if="isShow" style="position: absolute" class="pl-4 mt-2 w-[172px] border-solid border border-line-1 rounded text-base flex-col bg-[#fff]">
      <div class="my-3 text-sm mr-[10px] hover:cursor-pointer" :class="cdVal =='' ? 'text-main-0' : ''" @click="selectVal({cd:'',cdNm:'전체'})" >{{'전체'}}</div>
      <div v-for="(el) in cdList" :key="el.cd" :value="el.cd" :class="cdVal == el.cd ? 'text-main-0' : ''" class="my-3 text-sm mr-[10px] hover:cursor-pointer" @click="selectVal(el)">{{ el.cdNm }}</div>
    </div>
</div>
</template>
<script setup>

import { ref, defineProps, onMounted}  from 'vue'
import * as gfnUtils              from "@/utils/gfnUtils.js";
onMounted(() => {
  loadData();
})
const props = defineProps({
  title : String
  ,listDivCd : String
})

const title =ref(props.title)
const cdList = ref({});
const cdVal = ref('');
const cdNm = ref('전체');

async function loadData(){
  cdList.value = await gfnUtils.getCommCode(props.listDivCd);
}

function selectVal(el){
  cdVal.value = el.cd;
  cdNm.value = el.cdNm;
  isShow.value = !isShow.value
}
const isShow = ref(false);

function showItem(){
  isShow.value = !isShow.value
}



</script>
