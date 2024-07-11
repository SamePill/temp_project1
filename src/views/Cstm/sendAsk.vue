<template>
    <div class="w-[1076px] mx-auto overflow-hidden pt-10 pb-[100px] ">
        <div class="flex justify-between w-[1076px] bg-[#fefefe]">
                <div class="flex flex-col  gap-10 py-[100px]">
                    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                        <p class="flex-grow-0 flex-shrink-0 text-4xl text-left">
                            <span class="flex-grow-0 flex-shrink-0 text-4xl font-bold text-left text-[#1ba494]">문의하기 </span><br />
                            <span class="flex-grow-0 flex-shrink-0 text-4xl text-left text-[#191919]">지금 바로 문의해 주세요.</span>
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#555]">
                            사업에 유용한 정보와 컨설팅을 제공해 드립니다.
                        </p>
                    </div>
                    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <img src="@/assets/cstm_dot.png"/>
                        <p class="flex-grow-0 flex-shrink-0 w-[236px] text-base font-medium text-left text-[#333]">
                            문의하실 플랫폼을 선택해 주세요.
                        </p>
                    </div>

                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#333]">
                        필요시 세부정보를 이메일로 보내드립니다. (서비스 제공, 솔루션 문의 등)
                        </p>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-5 h-5"
                        preserveAspectRatio="none"
                        >
                        <circle cx="10" cy="10" r="3" fill="#333333"></circle>
                        </svg>
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#333]"
                            >전화 상담을 원하신다면 </span
                        ><span class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#1ba494]"
                            >02-2085-0606</span
                        ><span class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#333]"
                            >으로 연락 부탁드립니다.</span
                        >
                        </p>
                    </div>
                    </div>
                </div>
                <div class="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-10">
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                    <div
                        class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                            >회사 이름 </span
                        ><span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]"
                            >*</span
                        >
                        </p>
                        <div
                        class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                        >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                            회사이름을 입력해주세요.
                        </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                            >이름 </span
                        ><span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]"
                            >*</span
                        >
                        </p>
                        <div
                        class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[250px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                        >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                            이름을 입력해주세요.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                        >이메일</span
                        ><span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">
                        *</span
                        >
                    </p>
                    <div
                        class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                        이메일을 입력해주세요.
                        </p>
                    </div>
                    </div>
                    <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                        >문의제목</span
                        ><span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">
                        *</span
                        >
                    </p>
                    <div
                        class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                        문의제목을 입력해주세요.
                        </p>
                    </div>
                    </div>
                    <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                        >문의내용</span
                        ><span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">
                        *</span
                        >
                    </p>
                    <div
                        class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[520px] h-[236px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                        문의내용을 입력해주세요.
                        </p>
                    </div>
                    </div>
                    <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left">
                        <span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#191919]"
                        >휴대전화</span
                        ><span class="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#ff5252]">
                        *</span
                        >
                    </p>
                    <div
                        class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] h-[51px] relative overflow-hidden gap-12 p-4 rounded bg-white border border-[#ddd]"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#999]">
                        휴대폰 번호를 입력해주세요.
                        </p>
                    </div>
                    </div>
                    <div class="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 gap-0.5">
                    <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                        <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                        preserveAspectRatio="xMidYMid meet"
                        >
                        <rect
                            x="4.75"
                            y="4.75"
                            width="22.5"
                            height="22.5"
                            stroke="#DDDDDD"
                            stroke-width="1.5"
                        ></rect>
                        <path
                            d="M9 16L14 21L22 13L23 12"
                            stroke="#191919"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        </svg>
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919]">
                        (필수) 개인정보 제 3자 제공에 동의합니다.
                        </p>
                    </div>
                    <div class="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-10">
                        <p class="flex-grow-0 flex-shrink-0 text-xs text-right text-[#777]">상세보기</p>
                    </div>
                    </div>
                    <div class="flex justify-end items-start flex-grow-0 flex-shrink-0 gap-5">
                    <div
                        class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 px-2.5 py-4 rounded bg-[#1ba494]"
                    >
                        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">문의하기</p>
                    </div>
                    </div>
                </div>
                </div>
    </div>
</template>
<script setup>
</script>