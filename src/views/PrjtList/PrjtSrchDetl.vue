<template>
    <div class="w-[1060px] mx-auto">
        <!-- QA프로젝트 정보 -->
        <div class="flex justify-between mx-auto mt-10 font-basic">
            <div class="mx-auto">
                <div v-if="viewState" class="w-[700px]">
                    <QaProjectInfo :prj = projInfo />
                </div>
                <div v-else>
                    <p class="mt-[250px] text-lg font-bold text-center text-[#555]">찾으시는 프로젝트를 찾지 못했습니다.</p>
                    <p class="text-sm font-medium text-center text-[#777] mt-[10px]">
                    <span class="text-sm font-medium text-center text-[#777]"
                        >찾으시는 프로젝트를 찾지 못했습니다.</span><br />
                    </p>
                </div>
            </div>

            <!-- 모집중,로그인 Y,프로젝트찾기에서 넘어온 경우 -->
            <div v-if="!dataObj.pageDiv != 'projSrch' && !gfnRules.isNull(userMail)"  class="w-[340px]">
                <QaProjectInfoSide :prj = projInfo />
            </div>
        </div>
    </div>
</template>
<script setup>
import {  ref, onMounted } from "vue";
import * as gfnRules from "@/utils/gfnRules.js";
import * as gfnUtils from "@/utils/gfnUtils.js";
import QaProjectInfo from '@/components/baseComponents/QaProjectInfo.vue'
import QaProjectInfoSide from '@/components/baseComponents/QaProjectInfoSide.vue'
const { dataObj } = history.state; // 이렇게 받는다.


//로그인 전
//로그인 후 - 지원 전(projectSprtInfo유무),지원 중
//로그인 후 - 지원 후(projectSprtInfo유무)

onMounted(() => {
//   if(gfnRules.isNotNull(userMail.value)){
    loadData();
//   }
  isLogin();
})
const userMail = ref(window.$cookies.get("loginUserMail"));
const viewState = ref(false);
const projInfo = ref({});




function isLogin(){
}

async function loadData(){
    srchProjInfo();
}


async function srchProjInfo(){
  var getParams = {projId :dataObj.projId, userMail:userMail.value};
  await gfnUtils.axiosGet("/v1/project/detail",getParams).then(function(rtn){
    if(rtn.rtnCd == '00'){
        projInfo.value = rtn.rtnData;
        if(!gfnRules.isNull(rtn.rtnData.pirdVal)){
            viewState.value = true;
        }
    }else{
        viewState.value = false;
    }
  });
}
</script>