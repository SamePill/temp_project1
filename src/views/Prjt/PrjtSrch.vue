<template>
  <!-- 헤더 -->
  <Header headerType="1"/>

  <div class="w-[1060px] h-10 my-10 mx-auto font-basic ">

    <!-- 상단 검색 -->
    <div class="flex items-center justify-between w-full">
      <div>
        <DropDown class="mr-5"/>
        <DropDown class="mr-5"/>
        <DropDown />
      </div>

      <!--검색 -->
      <div class="w-[300px] py-[10px] px-[10px] border border-line-1 rounded box-border flex justify-between items-center hover:border-main-0 " >
        <input class="outline-none placeholder:text-sm placeholder:text-text-3" type="text" placeholder="키워드를 입력해 주세요">
        <img class="w-[18px] h-[18px]" src="@/assets/ic_magnifier.png" alt="">
      </div>
    </div>
  </div>

  <!-- 프로젝트 리스트 -->
  <div class="w-[1060px] flex-col mx-auto">        
    <QaProject :qaProjectViewInfo="{size:'big'}"/>
    <QaProject :qaProjectViewInfo="{size:'big'}"/>
    <QaProject :qaProjectViewInfo="{size:'big'}"/>

  </div>
</template>
<script>
import Header from '@/components/layoutComponents/Header.vue'
import DropDown from '@/components/uIComponents/DrowDown.vue'
import QaProject from '@/components/baseComponents/QaProject.vue'

export default {
  components: {
    Header, DropDown, QaProject
  },
  data() {
    return {      
    };
  }
}
</script>