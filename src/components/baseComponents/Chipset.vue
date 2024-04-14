<template>
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[519px]">
        <div>
            <button v-for="el in info.valList" :key="el.cdVal" @click="el.chkVal = !el.chkVal "
            class="gap-10 px-4 py-2 rounded-[100px] bg-white border" :class="el.chkVal== true ? 'border-border-0' :  'border-[#ddd]' "  
            style="display:inline-block !important; margin-bottom:10px;">
                <p :class="el.chkVal== true ? 'text-main-0' :  'border-[#777777]' ">{{el.cdNm}}</p>
            </button>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    info : {}
  }
  ,data(){
    return {
    }
  }
  ,methods:{
  }
  ,mounted(){
  }
}
</script>
<style scoped>
button{
  margin-right: 5px !important;
}
</style>