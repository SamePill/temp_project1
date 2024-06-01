<template>
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[519px]">
        <div>
            <button v-for="(el,i) in cdList" :key="el.cd" @click="chipClick(el,i)"
            class="gap-10 px-4 py-1 rounded-[100px] bg-white border" :class="el.chkVal== true ? 'border-border-0' :  'border-[#DDDDDD]' "  
            style="display:inline-block !important; margin-top:10px; margin-right:10px !important;">
                <p :class="el.chkVal== true ? 'text-main-0' :  'text-text-2 border-[#DDDDDD]' ">{{el.cdNm}}</p>
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineProps,defineExpose }    from 'vue'
import { onMounted , ref, computed, onUnmounted} from 'vue'
import * as gfnUtils      from "@/utils/gfnUtils.js";
defineExpose({loadData}) 

onMounted(() => {
  loadData();
})

onUnmounted(()=>{
})

const props = defineProps({
  listDivCd : String
})

const cdList = ref({});
const filteredCdList = computed( () => {
    let filter = true
    return cdList.value.filter( item => 
        item.chkVal == filter
    )
})

async function loadData(){
  cdList.value = await gfnUtils.getCommCode(props.listDivCd)
  if(cdList.value != undefined){
    cdList.value[0].chkVal = true;
  }
}

function chipClick(el){
  if(el['chkVal'] == true && filteredCdList.value.length > 1){
    el.chkVal = false
  }else{
    el['chkVal'] = true
  }
}

</script>

<style scoped>
button{
  margin-right: 5px !important;
}
</style>