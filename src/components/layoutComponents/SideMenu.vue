<template>
  <div
    class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 pb-1 rounded-[10px] bg-white border border-[#ddd]"
  >
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 pt-5 pb-2"
    >
      <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#555]">클라이언트</p>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 py-4"
    >
      <p v-if="this.$route.path.indexOf('/registeredProjectList') >= 0" class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#1ba494]">등록한 프로젝트</p>
      <button v-else @click="goToPage('RegisteredProjectList')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">등록한 프로젝트</button>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 pt-5 pb-2"
    >
      <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#555]">QA 파트너스</p>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 py-4"
    >
      <p v-if="this.$route.path.indexOf('/appliedProjectList') >= 0" class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#1ba494]">지원한 프로젝트</p>
      <button v-else @click="goToPage('AppliedProjectList')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">지원한 프로젝트</button>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 py-4"
    >
      <p v-if="this.$route.path.indexOf('/manageEngineer') >= 0" class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#1ba494]">엔지니어 관리</p>
      <button v-else @click="goToPage('ManageEngineer')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">엔지니어 관리</button>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 pt-5 pb-2"
    >
      <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#555]">계정관리</p>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 py-4"
    >
      <p v-if="this.$route.path.indexOf('/myInformation') >= 0" class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#1ba494]">내 정보</p>
      <button v-else @click="goToPage('MyInformation')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">내 정보</button>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 pt-5 pb-2"
    >
      <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#555]">약관</p>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 py-4"
    >
      <p v-if="this.$route.path.indexOf('/xx') >= 0" class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#1ba494]">이용약관</p>
      <button v-else @click="goToPage('')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">이용약관</button>
    </div>
    <div
      class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[250px] relative overflow-hidden gap-2.5 px-5 py-4"
    >
      <p v-if="this.$route.path.indexOf('/xx') >= 0" class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#1ba494]">개인정보 처리방침</p>
      <button v-else @click="goToPage('')" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#777]">개인정보 처리방침</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPage(url){
  // if(loginYn.value != "Y"){
  //   if(url == '/project-regi' ){
  //     url = "/login";
  //   }
  // }else{

  // }

  router.push({name :url})
}

</script>
