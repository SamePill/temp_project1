<template>
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[519px]">
        <div>
            <button v-for="(el,i) in props.cdList" :key="el.cd" @click="chipClick(el,i)"
            class="gap-10 px-4 py-1 rounded-[100px] bg-white border" :class="el.chkVal== true ? 'border-border-0' :  'border-[#ddd]' "  
            style="display:inline-block !important; margin-top:10px;" >
                <p :class="el.chkVal== true ? 'text-main-0' :  'border-[#777777]' ">{{el.cdNm}}</p>
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineProps }    from 'vue'
import { onMounted ,  computed, onUnmounted} from 'vue'

onMounted(() => {
  // loadData();
})

onUnmounted(()=>{
})

const props = defineProps({
  cdList : [{}]
})


const filteredCdList = computed( () => {
    let filter = true
    return props.cdList.value.filter( item => 
        item.chkVal == filter
    )
})

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