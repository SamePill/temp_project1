<template>
  <div style="display: inline-block; position:relative" class="z-20"  ref="dropDown">
    <div @click="showItem()"
      :class="['inline-flex py-[10px] px-[10px] border-solid border border-line-1 rounded text-base items-center hover:cursor-pointer hover:border-main-0', $attrs.class]">
      <div v-if="!gfnRules.isNull(title)" class="text-text-0 text-sm ">{{title}}</div>
      <div class="inline-flex" style="text-align: right;">
        <div class="px-1 text-sm text-main-0" style="text-align: right;">{{ cdNm }}</div>
      </div>
      <div class=" float-right mt-[5px]">
        <img v-if="isShow" class="h-4" src="@/assets/ic_small_arrow.png" style="float:right; top:-2px" alt="">
        <img v-if="!isShow" style="transform: scaleY(-1);float:right;" class="w-4 h-4" src="@/assets/ic_small_arrow.png" alt="">
      </div>
    </div>

    <div v-if="isShow" style="position: absolute" @mouseleave="noShowItem()" class="pl-4 mt-2 w-[140px] border-solid border border-line-1 rounded text-base flex-col bg-[#fff]">
      <div v-if="props.div !='N'" class="my-3 text-sm mr-[10px] hover:cursor-pointer" :class="cdVal =='' ? 'text-main-0' : ''" @click="selectVal({cd:'',cdNm:'전체'})" >{{'전체'}}</div>
      <div v-for="(el) in cdList" :key="el.cd" :value="el.cd" :class="cdVal == el.cd ? 'text-main-0' : ''" class="my-3 text-sm mr-[10px] hover:cursor-pointer" @click="selectVal(el)">{{ el.cdNm }}</div>
    </div>
</div>
</template>
<script setup>

import { ref, defineProps, onMounted, onBeforeUnmount, defineEmits, defineExpose }  from 'vue'
import * as gfnUtils from "@/utils/gfnUtils.js";
import * as gfnRules from "@/utils/gfnRules.js";
defineExpose({noShowItem, selectDefaultVal, loadData}) 
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  loadData();
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
})
const props = defineProps({
  title : String
  ,listDivCd : String
  ,div: String
  ,selCd: String
})
const emit = defineEmits([
  'setData'
]);

const title =ref(props.title)
const cdList = ref({});
const cdVal = ref('');
const cdNm = ref('');
const isShow = ref(false);
const dropDown = ref(null);

function handleClickOutside(event) {
  if (dropDown.value && !dropDown.value.contains(event.target)) {
    noShowItem()
  }

}

async function loadData(){
  cdList.value = await gfnUtils.getCommCode(props.listDivCd);
  if(props.div =='N'){
    // cdVal.value = cdList.value[0].cdVal;
    // cdNm.value = cdList.value[0].cdNm;
    cdVal.value = cdList.value[0].cd;
    cdNm.value = cdList.value[0].cdNm;
  }else {
    cdVal.value = '';
    cdNm.value = '전체';
  }

  if(!gfnRules.isNull(props.selCd)){
    for(var i = 0; i < cdList.value.length; i++ ){
      // console.log(cdList.value[i].cd + " :: "  + props.selCd)
      if(cdList.value[i].cd == props.selCd){
        selectDefaultVal(cdList.value[i])
      }      
    }    
    cdVal.value = props.selCd;
  }
}

function selectDefaultVal(el){
  cdVal.value = el.cd;
  cdNm.value = el.cdNm;
  emit('setData',el.cd);
}

function selectVal(el){
  cdVal.value = el.cd;
  cdNm.value = el.cdNm;
  isShow.value = !isShow.value
  emit('setData',el.cd);
}

function showItem(){

  isShow.value = !isShow.value
}

function noShowItem(){
  isShow.value = false;
}


</script>
