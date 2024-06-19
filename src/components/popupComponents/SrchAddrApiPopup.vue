<template>
  <div class="flex flex-col justify-start items-center w-[700px] relative overflow-hidden mx-auto pt-[30px] pb-5 rounded-[10px] bg-white min-h-[580px] px-[10px]">
    <p class="text-xl font-medium text-[#191919] absolute left-[20px] top-[20px]">주소검색</p>
    <svg  style="cursor: pointer;" @click="$emit('closeAddrPop')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="grow-0 flex-shrink-0 w-6 h-6 absolute right-[20px] top-[20px]" preserveAspectRatio="none">
        <path d="M19 5L5 19" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
        <path d="M5 5L19 19" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
    </svg>
    
    <div class="w-[660px] mt-[25px] h-px bg-[#ddd]"></div>

     <div class="relative mt-[12px]">
        <input class="w-[660px] px-2 pr-[30px] py-[10px] border rounded box-border text-text-0"  type="text" placeholder="서울특별시 강남구 테헤란로13길" v-model="keyword" @keyup.enter="getAddr()">
        <img style="cursor: pointer; position:absolute; right:15px; top:14px;" class="w-[18px] h-[18px]" src="@/assets/ic_magnifier.png" alt="" @click="getAddr()">
      </div>

    <!--반복부-->
    <div class="mt-[20px]">
      <div class="w-[660px] mx-auto">
        <div class="w-[660px] h-[370px] overflow-hidden rounded-[10px] p-4 bg-white border border-[#ddd] mx-auto">
          <p class="mb-[3px] flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]">
            검색 결과
          </p>
          <div class=" mt-[10px] h-px bg-[#ddd]"></div>
          <div>
            <div class="mt-[35px]" v-if="addressList.length == 0 && isSrch > 0">
                <p class="text-lg font-bold text-center text-[#555]">찾으시는 주소를 찾지 못했습니다.</p>
                <p class="text-sm font-medium text-center text-[#777] mt-[10px]">
                <span class="text-sm font-medium text-center text-[#777]">찾으시는 주소를 찾지 못했습니다.</span>
                <br /><span class="text-sm font-medium text-center text-[#777]">찾으시는 주소가 맞는지 다시 한번 확인해주세요.</span>
              </p>
            </div>
            <div v-if="addressList.length  > 0" class="table-row-group">
              <div class="table-row text-[15px] text-[#555]" @click="$emit('selAddr')"  v-for="(el,i) in addressList" :key="el" style="cursor: pointer;" :style="(i+10)%2 != 0?'background-color: #F5F5F5':''" >
                <div class="table-cell w-[50px] h-[30px] text-center text-sm text-text-2" style="line-height:60px">{{ i+1 }}</div>
                <div class="table-cell w-[450px] h-[30px] text-left text-sm text-text-2" >{{ el.roadAddr }}</div>
                <div class="table-cell w-[130px] h-[30px] text-center text-sm text-text-2">{{ el.zipNo }}</div>
              </div>
            </div>
          </div>
        </div>
        <!--페이지네이션-->
        <div v-if="addressList.length  > 0" class="mt-[10px] w-[420px] paginationDiv  font-basic">
          <vue-awesome-paginate
            :total-items=totalCnt
            v-model="currentPage"
            :items-per-page=countPerPage
            :max-pages-shown="5"
            :on-click="getAddr"
          >
            <template #prev-button>
              <span>
                <font-awesome-icon icon="chevron-right" color="black" />
              </span>
            </template>
            <template #next-button>
              <span>
                <font-awesome-icon icon="chevron-right" color="black" />
              </span>
            </template>
          </vue-awesome-paginate>
        </div> 
      </div>
    </div>
    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5"></div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import * as gfnUtils from "@/utils/gfnUtils.js";
  //import axios from "axios";

  // const FormData = require('form-data');
  const totalCnt = ref()
  const currentPage = ref(1)
  const countPerPage = ref(5)
  const isSrch = ref(0)
  // const resultType =ref("json")
  // const confmKey = ref('devU01TX0FVVEgyMDI0MDYxMjEwMjY1MDExNDgzNjI=') //for DEV
  const keyword = ref("")
  const addressList = ref([])

  async function getAddr(){
    console.log("주소 검색")
    // 적용예 (api 호출 전에 검색어 체크)   
    if (!checkSearchedWord(keyword)) {
      return ;
    }
    console.log("주소 검색 pass")
    //var api = "https://business.juso.go.kr/addrlink/addrLinkApi.do";
    var api = "/addrlink/addrLinkApi.do" 
            // + "?confmKey=" + confmKey.value
            // + "&currentPage=" + currentPage.value
            // + "&countPerPage=" + countPerPage.value
            // + "&keyword=" + keyword.value
            // + "&resultType=json";

    var params = {currentPage: currentPage.value, countPerPage:countPerPage.value, confmKey:"", keyword:keyword.value, resultType:"json" };
    let rtn = await gfnUtils.axiosGetEx(
      api
      ,params
      ,"addr"
    );

    console.log(rtn)
    if(rtn.data.results.common.errorCode == 0){
      addressList.value = rtn.data.results.juso
      totalCnt.value = rtn.data.results.common.totalCount
    }else{
      //TODO 에러처리
    }
    isSrch.value = isSrch.value+1;

  }

  

  // function enterSearch(event) {
  //   var evt_code = (window.netscape) ? ev.which : event.keyCode;
  //   if (evt_code == 13) {    
  //     event.keyCode = 0;  
  //     getAddr(); //jsonp사용시 enter검색 
  //   } 
  // }
  function checkSearchedWord(obj){

    console.log("체크...")

    if(obj.value.length >0){
      //특수문자 제거
      var expText = /[%=><]/ ;
      if(expText.test(obj.value) == true){
        alert("특수문자를 입력 할수 없습니다.") ;
        obj.value = obj.value.split(expText).join(""); 
        return false;
      }
      
      //특정문자열(sql예약어의 앞뒤공백포함) 제거
      var sqlArray = new Array(
        //sql 예약어
        "OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC",
                  "UNION",  "FETCH", "DECLARE", "TRUNCATE" 
      );
      
      var regex;
      for(var i=0; i<sqlArray.length; i++){
        regex = new RegExp( sqlArray[i] ,"gi") ;
        
        if (regex.test(obj.value) ) {
            alert("\"" + sqlArray[i]+"\"와(과) 같은 특정문자로 검색할 수 없습니다.");
          obj.value =obj.value.replace(regex, "");
          return false;
        }
      }
    }
    return true ;
  }







  
  // function init(){
  //   var url = location.href;
  //   var confmKey = "devU01TX0FVVEgyMDI0MDYwNDE4NDI0NzExNDgyMjg=";//승인키
  //   // resultType항목 추가(2016.10.06)
  //   var resultType = "4"; // 도로명주소 검색결과 화면 출력유형, 1 : 도로명, 2 : 도로명+지번, 3 : 도로명+상세건물명, 4 : 도로명+지번+상세건물명
  //   var inputYn= "<%=inputYn%>";
  //   if(inputYn != "Y"){
  //     document.form.confmKey.value = confmKey;
  //     document.form.returnUrl.value = url;
  //     document.form.resultType.value = resultType; // resultType항목 추가(2016.10.06)
  //     document.form.action="https://business.juso.go.kr/addrlink/addrLinkUrl.do"; // 인터넷망
  //     //document.form.action="https://business.juso.go.kr/addrlink/addrMobileLinkUrl.do"; //모바일 웹인 경우, 인터넷망
  //     document.form.submit();
  //   }else{
  //     /** API 서비스 제공항목 확대 (2017.02) **/
  //     opener.jusoCallBack("<%=roadFullAddr%>","<%=roadAddrPart1%>","<%=addrDetail%>", "<%=roadAddrPart2%>","<%=engAddr%>"
  //       , "<%=jibunAddr%>","<%=zipNo%>", "<%=admCd%>", "<%=rnMgtSn%>", "<%=bdMgtSn%>", "<%=detBdNmList%>"
  //       , "<%=bdNm%>", "<%=bdKdcd%>", "<%=siNm%>", "<%=sggNm%>", "<%=emdNm%>", "<%=liNm%>", "<%=rn%>", "<%=udrtYn%>"
  //       , "<%=buldMnnm%>", "<%=buldSlno%>", "<%=mtYn%>", "<%=lnbrMnnm%>", "<%=lnbrSlno%>", "<%=emdNo%>");
  //     window.close();
  //   }
  // }


</script>

<style>
.paginationDiv .pagination-container {
  column-gap: 10px;
  align-items: center;
}
.paginationDiv .paginate-buttons {
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  color: black;
}

.paginationDiv .back-button,
.paginationDiv .next-button {
  background-color: white;
  color: white;
  border-radius: 8px;
  height: 45px;
  width: 45px;
}
.paginationDiv .active-page {
  background-color: #e5e5e5;
}
.paginationDiv .paginate-buttons:hover {
  background-color: #f5f5f5;
}
.paginationDiv .active-page:hover {
  background-color: #e5e5e5;
}

.paginationDiv .back-button svg {
  transform: rotate(180deg) translateY(-2px);
}
.paginationDiv .next-button svg {
  transform: translateY(2px);
}

/* .paginationDiv .back-button:hover,
.paginationDiv .next-button:hover {
  background-color: rgb(45, 45, 45);
} */

.paginationDiv .back-button:active,
.paginationDiv .next-button:active {
  background-color: rgb(85, 85, 85);
}
</style>