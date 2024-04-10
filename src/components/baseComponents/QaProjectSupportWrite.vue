<template>
    <div class="w-[340px] px-5 py-5 border rounded-[10px] border-line-1 font-basic">
        <div class="flex items-center justify-between">
            <span class="text-2xl font-medium leading-7 text-text-0">지원서 작성</span>
            <span class="text-base leading-[19.2px] text-text-2">뒤로가기</span>
        </div>

        <div class="my-5 border border-solid mt-border border-line-2"></div>

        <div class="mb-5 text-xl leading-6 text-text-0">회사 이력서</div>

        <div class="flex items-center mb-4 hover:cursor-pointer">
            <img class="w-8 h-8 mr-1" src="@/assets/ic_check_disable.png" alt="">
            <p class="text-text-0">리드워크 회사소개서 - 버전 1.0</p>
        </div>
        <div class="flex items-center mb-4 hover:cursor-pointer">
            <img class="w-8 h-8 mr-1" src="@/assets/ic_check_disable.png" alt="">
            <p class="text-text-0">리드워크 회사소개서 - 버전 1.0</p>
        </div>
        <div class="flex items-center mb-4 hover:cursor-pointer">
            <img class="w-8 h-8 mr-1" src="@/assets/ic_check_disable.png" alt="">
            <p class="text-text-0">리드워크 회사소개서 - 버전 1.0</p>
        </div>

        <div class="mt-1 mb-5 text-xl leading-6 text-text-0">인원 선정하기</div>

        <button class="w-full py-4 border rounded-[4px] border-line-1">인원 추가하기</button>

        <div class="my-5 text-xl leading-6 text-text-0">프로젝트 시작 날짜</div>
        <div
            class="py-3 px-[10px]  flex items-center justify-between w-full border rounded-[4px] border-line-1 hover:cursor-pointer">
            <span class="text-sm text-text-3">시작 날짜를 선택해주세요.</span>
            <img class="w-6 h-6" src="@/assets/ic_calander.png" alt="">
        </div>

        <div class="my-5 text-xl leading-6 text-text-0">근무 방식</div>
        <div
            class="py-3 px-[10px]  flex items-center justify-between w-full border rounded-[4px] border-line-1 hover:cursor-pointer">
            <span class="text-sm text-text-3">근무 방식을 선택해주세요.</span>
            <img class="w-6 h-6" src="@/assets/ic_small_arrow_001.png" alt="">
        </div>

        <div class="my-5 text-xl leading-6 text-text-0">투입 전 인터뷰</div>
        <div
            class="py-3 px-[10px]  flex items-center justify-between w-full border rounded-[4px] border-line-1 hover:cursor-pointer">
            <span class="text-sm text-text-3">미팅 방식을 설정해주세요.</span>
            <img class="w-6 h-6" src="@/assets/ic_small_arrow_001.png" alt="">
        </div>

        <div class="flex items-center mt-10 hover:cursor-pointer">
            <img class="w-8 h-8 mr-1" src="@/assets/ic_check_disable.png" alt="">
            <div class="text-text-0">(필수) 큐밋 이용약관에 동의합니다.</div>            
        </div>
        <p class="ml-10 mt-0 text-text-2 text-xs font-normal hover:cursor-pointer">상세보기</p>

        <div class="flex items-center mt-4 hover:cursor-pointer">
            <img class="w-8 h-8 mr-1" src="@/assets/ic_check_disable.png" alt="">
            <div class="text-text-0">(필수) 큐밋 이용약관에 동의합니다.</div>
        </div>
        <p class="ml-10 mt-0 text-text-2 text-xs font-normal hover:cursor-pointer">상세보기</p>

        <div class="py-4 mt-[40px] font-medium text-center border border-solid bg-text-3 border-text-3 rounded text-white hover:cursor-pointer leading-[19.2px]">
            제출하기
        </div>


    </div>
</template>
<script>
export default {

}
</script>
