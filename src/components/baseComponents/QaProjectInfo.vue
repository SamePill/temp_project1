<template>
    <div>
        <div class="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[700px] gap-5 pb-20 bg-[#fefefe]">
            <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-10 p-5 rounded-[10px] bg-white border border-[#ddd]">
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                <p class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#191919]">
                    <span class="flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#191919]">{{props.prj.projTitl}}</span>
                </p>
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                    <div v-if="props.prj.workDivCd =='10'" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dd6431]" >
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">상주</p>
                    </div>
                    <div v-if="props.prj.workDivCd =='20'" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dd6431]" >
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">비상주</p>
                    </div> 
                    <div v-show="props.prj.engrRtngInfo['bgnrEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#ddf2ef]" >
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#1ba494]">
                        초급 엔지니어
                    </p>
                    </div>
                    <div v-show="props.prj.engrRtngInfo['intrEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#dbe9fa]">
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#0b6bdc]">
                        중급 엔지니어
                    </p>
                    </div>
                    <div v-show="props.prj.engrRtngInfo['advnEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#fadbe6]" >
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc0b56]">
                        고급 엔지니어
                    </p>
                    </div>
                    <div v-show="props.prj.engrRtngInfo['spclEngrCnt'] > 0" class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2 py-1.5 rounded bg-[#faf1db]">
                        <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#dc630b]">
                        특급 엔지니어
                    </p>
                    </div>
                </div>
            </div>
            <div :style="gfnRules.isNull(userMail) ? 'filter:blur(5px)' : ''">
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[660px] relative gap-5">
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                        프로젝트 기간
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">{{props.prj.pirdVal}}개월</p>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                        <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">직군</p>
                        <div v-for="el in props.prj.jobDivCdNmList" :key ="el">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">{{el.jobDivCdNm}}</p>
                        </div>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                        <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                            업무 영역
                        </p>
                        <div v-for="el in props.prj.taskDivCdNmList" :key ="el">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">{{el.taskDivCdNm}}</p>
                        </div>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                        <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                            희망 시작일
                        </p>
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">{{ gfnUtils.formatDate(props.prj.strtDay,'년월일') }}</p>
                    </div>
                </div>
                <div class="flex-grow-0 flex-shrink-0 w-[660px] h-px bg-[#ededed]"></div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                        필요 인원
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">{{requEngCnt}}명</p>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                        필요 등급
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                        {{requRtng}}
                    </p>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                        <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                            예상 금액
                        </p>
                        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                            <p style="line-height: 180%;" v-html="sumPrice" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]"></p>
                        </div>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                        근무 방식
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">{{props.prj.workDivCdNm}}</p>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                        근무 위치
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                        {{props.prj.workAddr}}
                    </p>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                        근무 시간
                    </p>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                        {{workTime}}
                    </p>
                    </div>
                    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">
                        추가 사항
                    </p>
                    <div
                        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                        <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                            {{props.prj.pirdVal}}
                        </p>
                    </div>
                    </div>
                    <div v-if="props.prj['fileList'] != ''" class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                        <p class="flex-grow-0 flex-shrink-0 w-[90px] text-base text-left text-[#777]">관련자료</p>
                        <div
                            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1585d7]">
                            프로젝트 관련자료.docc
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1585d7]">
                            프로젝트 관련자료.docc
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1585d7]">
                            프로젝트 관련자료.docc
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="mt-[40px] flex-grow-0 flex-shrink-0 w-[660px] h-px bg-[#ddd]"></div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
                    <p class="flex-grow-0 flex-shrink-0 text-xl mt-[40px] font-bold text-left text-[#191919]">
                    프로젝트 설명
                    </p>
                    <div class="w-[650px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3"                    >
                        <p class="flex-grow-0 flex-shrink-0 text-lg text-left text-[#555]">
                            프로젝트 설명 및 주요 담당 업무
                        </p>
                        <p v-html="projCtntTask" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                        </p>
                    </div>
                </div>
                <div class="w-[650px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p class="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#555]">요구스킬</p>
                    <p v-html="projDmndSkil" class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                    </p>
                </div>
                <div class="w-[650px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p class="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#555]">활용 Tool</p>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">{{ props.prj.projUseTool }} </p>
                </div>
                <div class="w-[650px] flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p class="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#555]">기타 사항</p>
                    <p class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]">
                    <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#555]" >{{ props.prj.projEtcInfo }}</span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import {  ref, defineProps, onMounted, computed } from "vue";
import * as gfnRules from "@/utils/gfnRules.js";
import * as gfnUtils from "@/utils/gfnUtils.js";

const props = defineProps({prj:{}});
const userMail = ref(window.$cookies.get("loginUserMail"));

onMounted(() => {
    console.log(props.prj)
});

//프로젝트 설명 및 주요담당업무
const projCtntTask = computed(() => {
  let val = ''
  if (!gfnRules.isNull(props.prj.projCtntTask)){
    if (props.prj.projCtntTask != '') {
        val =  props.prj.projCtntTask.replace("\n", "<br/>");
    } 
    }
  return val;
});

//프로젝트요구스킬
const projDmndSkil = computed(() => {
  let val = ''
  if (!gfnRules.isNull(props.prj.projDmndSkil)){
    if (props.prj.projDmndSkil != '') {
        val =  props.prj.projDmndSkil.replace("\n", "<br/>");
    } 
    } 
  return val;
});

//근무시간
const workTime = computed(() => {
  let val = ''
  if (!gfnRules.isNull(props.prj.atndTime) && !gfnRules.isNull(props.prj.lvwkTime)) {
    val =  props.prj.atndTime.slice(0,2)+ ':' +props.prj.atndTime.slice(2,4) + ' ~ ' + props.prj.lvwkTime.slice(0,2)+ ':' +props.prj.lvwkTime.slice(2,4) 
  } 
  return val;
});

//필요인원
const requEngCnt = computed(() => {
  let val = 0
  if (props.prj.engrRtngInfo != '') {
    for(let key in props.prj.engrRtngInfo){
        if(key.toLowerCase().indexOf('cnt') > -1){
            val = val+ props.prj.engrRtngInfo[key]
        }
    }
  } 
  return val;
});

//필요등급
const requRtng = computed(() => {
  let val = ''
  if (props.prj.engrRtngInfo != '') {
      for(let key in props.prj.engrRtngInfo){
        if('bgnrEngrCnt' == key){
            if(props.prj.engrRtngInfo[key] > 0){
                val = '초급 '+ props.prj.engrRtngInfo[key] +'명'
            }
        }
        if('intrEngrCnt' == key){
            if(props.prj.engrRtngInfo[key] > 0){
                val != '' ? val = val+', ' : '';
                val = val +  '중급 '+ props.prj.engrRtngInfo[key] +'명'
            }
        }
        if('advnEngrCnt' == key){
            if(props.prj.engrRtngInfo[key] > 0){
                val != '' ? val = val+', ' : '';
                val = val + '고급 '+ props.prj.engrRtngInfo[key] +'명'
            }
        }
        if('spclEngrCnt' == key){
            if(props.prj.engrRtngInfo[key] > 0){
                val != '' ? val = val+', ' : '';
                val = val +  '특급 '+ props.prj.engrRtngInfo[key] +'명'
            }
        }
    }
  } 
  return val;
});

//월 합산 금액
const sumPrice = computed(() => {

  let rtng = [{cd:'bgnr',nm:'초급'}
             ,{cd:'intr',nm:'중급'}
             ,{cd:'advn',nm:'고급'}
             ,{cd:'spcl',nm:'특급'}]

  let val = ''
  if (props.prj.engrRtngInfo != '') {
    let sumPrice = 0;
    for(let key in props.prj.engrRtngInfo){
      if(key.indexOf('EngrCnt') > -1){
        if(props.prj.engrRtngInfo[key] > 0){

            let rtngInfo = ''
            rtng.forEach(el=>{
                if(el.cd == key.substring(0,4)){
                    rtngInfo = el;
                }
            })
            val != '' ? val = val+'<br/>' : '';
            val = val + rtngInfo.nm + ' 엔지니어 - ' + (props.prj.engrRtngInfo[rtngInfo.cd+'EngrUnitPric'])/10000 + '만원'
            sumPrice = sumPrice + (props.prj.engrRtngInfo[key] * props.prj.engrRtngInfo[rtngInfo.cd+'EngrUnitPric']);
        }
      }
    }  
    val =  '월 ' + sumPrice/10000 + '만원' + '<br/>' + val 
  } 
  return val;
});


</script>
