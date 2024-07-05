<template>
  <div id="app">

    <!-- 헤더 -->
    <template
      v-if="
        $route.path.indexOf('/login') >= 0 ||
        $route.path.indexOf('/signUp') >= 0 ||
        $route.path.indexOf('/signUpApply') >= 0 ||
        $route.path.indexOf('Popup') >= 0  ||
        $route.path.indexOf('/findId') >= 0 ||
        $route.path.indexOf('/resetPassword') >= 0 
      "
    >
    </template>
    <template v-else >
      <Header/>
    </template>

    <div  class="content"  style=" height:calc(100vh - 80px); overflow-y: auto;">
      <router-view ></router-view>
      <template
        v-if="
          $route.path.indexOf('/login') >= 0 ||
          $route.path.indexOf('/signUp') >= 0 ||
          $route.path.indexOf('/signUpApply') >= 0 ||
          $route.path.indexOf('Popup') >= 0 ||
          $route.path.indexOf('/findId') >= 0 ||
          $route.path.indexOf('/resetPassword') >= 0  
        "
      >
      </template>
      <template v-else >
        <Footer></Footer>
      </template>      
    </div>
    
    <TPModal ref="loadingBar" :width="150" v-show="showProgress" >
      <img  src="@/assets/progress.gif" alt=""  style="background-color: rgba(0, 0, 0, 0);">
    </TPModal>

    <Modal ref="showAlert"  :width="340" v-show="blAlert">
      <msgAlert></msgAlert>
    </Modal>
    <!-- <Modal ref="showConfirm"  v-show="blConfirm">

    </Modal> -->
  </div>
</template>

<script setup>
  import Header from '@/components/layoutComponents/Header.vue'
  import Footer from '@/components/layoutComponents/Footer.vue'
  import TPModal from '@/components/baseComponents/Transparent.vue'
  import Modal from '@/components/baseComponents/Modal.vue'
  import msgAlert from '@/components/popupComponents/messagePopup.vue'
  import { systemStore } from '@/stores'
  import { ref, computed } from 'vue'

  //Store
  const sysStore = systemStore();
  
  //팝업 창
  const loadingBar = ref(null)
  const showProgress = computed(() => sysStore.getProgress);

  const showAlert = ref(null)
  const blAlert = computed(() => sysStore.getAlert);
  // const showConfirm = ref(null)
  // const blConfirm = computed(() => sysStore.getConfirm);


</script>
<style>
body{
  /* height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto; */
  overflow-y:none;
  overflow: hidden !important; 
  font-family: 'Pretendard-Regular', sans-serif !important;
}

</style>

