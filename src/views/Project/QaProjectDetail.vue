<template>
    <!-- 헤더 -->
    <!-- <Header headerType="1" /> -->

    <!-- QA프로젝트 정보 -->
    <div class="w-[1060px] flex justify-between mx-auto mt-10 font-basic">
        <QaProjectInfo />
        <div>
            <!-- 현재 지원가능한 인원 -->
            <SupportAvailableEmployee class="hidden"/>
            
            <!-- 지원현황 -->
            <QaProjectSupportCurrentInfo class="hidden"/> 

            <!-- 지원서 작성 -->
            <QaProjectSupportWrite />

        </div>
    </div>
</template>
<script>

// import Header from '@/components/layoutComponents/Header.vue'
import QaProjectInfo from '@/components/baseComponents/QaProjectInfo.vue'
import SupportAvailableEmployee from '@/components/baseComponents/SupportAvailableEmployee.vue'
import QaProjectSupportCurrentInfo from '@/components/baseComponents/QaProjectSupportCurrentInfo.vue'
import QaProjectSupportWrite from '@/components/baseComponents/QaProjectSupportWrite.vue'

export default {
    components: {
        // Header, 
        QaProjectInfo, SupportAvailableEmployee
    ,   QaProjectSupportCurrentInfo, QaProjectSupportWrite
    }
}
</script>