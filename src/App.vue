<template>
  <div id="app">

    <!-- 헤더 -->
    <template
      v-if="
        this.$route.path.indexOf('/login') >= 0
        // this.$route.path.indexOf('/resetPassword') >= 0 ||
        // this.$route.path.indexOf('/regiUser') >= 0 
      "
    >

    </template>
    <template v-else>
      <Header />
    </template>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from '@/components/layoutComponents/Header.vue'

</script>

