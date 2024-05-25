<template>
    <div>
        <!-- QA프로젝트 정보 -->
        <div class="w-[1060px] flex justify-between mx-auto mt-10 font-basic">
            <QaProjectInfo />
        </div>
    </div>
</template>
<script setup>
import {  ref, onMounted } from "vue";
import QaProjectInfo from '@/components/baseComponents/QaProjectInfo.vue'
//로그인 전
//로그인 후 - 지원 전(projectSprtInfo유무),지원 중
//로그인 후 - 지원 후(projectSprtInfo유무)
onMounted(() => {
    isLogin();
  })
const userMail = ref(window.$cookies.get("loginUserMail"))

function isLogin(){
    console.log(userMail.value)
}
</script>