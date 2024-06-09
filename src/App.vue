<template>
  <div id="app">

    <!-- 헤더 -->
    <template
      v-if="
        $route.path.indexOf('/login') >= 0 ||
        $route.path.indexOf('/signUp') >= 0 ||
        $route.path.indexOf('/signUpApply') >= 0 
      "
    >
    </template>
    <template v-else >
      <Header/>
    </template>
    <div style=" height:calc(100vh - 80px); overflow-y: auto;">
      <router-view ></router-view>
    </div>
    <modal ref="loadingBar" :width="340">
      <img  src="@/assets/ic_small_arrow_001.png" alt="">
    </modal>
  </div>
</template>

<script setup>
  import Header from '@/components/layoutComponents/Header.vue'
  import Modal from '@/components/baseComponents/Modal.vue'
  import { ref } from 'vue'

  //프로필 팝업 창
  const loadingBar = ref(null)
  // const showLoading = () => {
  //   loadingBar.value.open()            
  // }
  // //취소버튼
  // const unshowLoading = function (){
  //   loadingBar.value.close()      
  // }
 



</script>
<style>
body{
  overflow-y:none;
  overflow: hidden !important; 
  font-family: 'Pretendard-Regular', sans-serif !important;
}

</style>

