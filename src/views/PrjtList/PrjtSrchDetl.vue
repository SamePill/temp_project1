<template>
  <div class="w-[1060px] mx-auto">
    <!-- QA프로젝트 정보 -->
    <div class="flex justify-between mx-auto mt-10 font-basic">
      <div class="mx-auto">
        <div v-if="workDivCd != null" class="flex justify-between">
          <div class="w-[700px]">
            <QaProjectInfo :prj="projInfo" />
          </div>
          <div class="w-[340px] ml-5">
            <QaProjectInfoSide :prj="projInfo" />
          </div>
        </div>
        <div v-else>
          <p class="mt-[250px] text-lg font-bold text-center text-[#555]">
            찾으시는 프로젝트를 찾지 못했습니다.
          </p>
          <p class="text-sm font-medium text-center text-[#777] mt-[10px]">
            <span class="text-sm font-medium text-center text-[#777]"
              >찾으시는 프로젝트를 찾지 못했습니다.</span
            ><br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
    import { ref, onMounted } from "vue";
    // import * as gfnRules from "@/utils/gfnRules.js";
    import * as gfnUtils from "@/utils/gfnUtils.js";
    import QaProjectInfo from "@/components/baseComponents/QaProjectInfo.vue";
    import QaProjectInfoSide from "@/components/baseComponents/QaProjectInfoSide.vue";
    const { dataObj } = history.state;

    const userMail = ref(window.$cookies.get("loginUserMail"));
    const workDivCd = ref();
    const projInfo = ref({});

    loadData();

    onMounted(() => {
    //   if(gfnRules.isNotNull(userMail.value)){
      loadData();
    //   }
    });

    async function loadData() {
      console.log(dataObj)
      var getParams = { projId: dataObj.projId, userMail: userMail.value };
      var rtn = await gfnUtils.axiosGet("/v1/project/detail", getParams)
      if (rtn.rtnCd == "00") {
        console.log(rtn.rtnData)
        projInfo.value = rtn.rtnData;
        workDivCd.value = rtn.rtnData["workDivCd"];
      }else{
        gfnUtils.openAlert(rtn.rtnMsg,"", 2000)
      }
      
    }
</script>