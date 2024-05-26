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
      <div style=" height:calc(100vh - 80px); overflow-y: scroll;">
        <router-view ></router-view>
      </div>
  </div>
</template>

<script setup>
import Header from '@/components/layoutComponents/Header.vue'

</script>
<style>
body{
  overflow-y:none;
  overflow: hidden; 
}
</style>

