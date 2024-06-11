<template>
  <div
    class="flex flex-col justify-start items-center w-[800px] relative overflow-hidden gap-[50px] px-[72px] pt-[30px] pb-5 rounded-[10px] bg-white"
  >
    <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#191919]">
      우편번호 검색
    </p>
    <input type="text" class="w-[300px] py-[10px]  px-[10px] justify-between border-line-1 border rounded box-border placeholder:text-sm placeholder:text-text-3" v-model="keyword" placeholder="주소를 입력해 주세요" />
    <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
      <button
        class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#191919] flex justify-center items-center flex-grow-0 flex-shrink-0 w-[145px] relative overflow-hidden gap-2.5 px-[45px] py-2.5 rounded-[1000px] bg-white border border-[#1ba494]"
        @click="getAddr()"
        >
        주소검색
      </button>
 
      <div>

      </div>

    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import * as gfnUtils from "@/utils/gfnUtils.js";
  //import axios from "axios";

  // const FormData = require('form-data');
  const currentPage = ref(1)
  const countPerPage = ref(10)
  // const resultType =ref("json")
  const confmKey = ref('devU01TX0FVVEgyMDI0MDYwNDE4NDI0NzExNDgyMjg=')
  const keyword = ref("")

  async function getAddr(){
    console.log("주소 검색")
    // 적용예 (api 호출 전에 검색어 체크)   
    if (!checkSearchedWord(keyword)) {
      return ;
    }
    console.log("주소 검색 pass")
    //var api = "https://business.juso.go.kr/addrlink/addrLinkApiJsonp.do";
    var api = "https://business.juso.go.kr/addrlink/addrLinkApi.do";
    //var api = "/addrlink/addrLinkApi.do" 
            // + "?confmKey=" + confmKey.value
            // + "&currentPage=" + currentPage.value
            // + "&countPerPage=" + countPerPage.value
            // + "&keyword=" + keyword.value
            // + "&resultType=json";

    var params = {currentPage: currentPage.value, countPerPage:countPerPage.value, confmKey:confmKey.value, keyword:keyword.value, resultType:"json" };
    let rtn = await gfnUtils.axiosGetEx(
      api
      ,params
    );

    console.log(rtn)
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
