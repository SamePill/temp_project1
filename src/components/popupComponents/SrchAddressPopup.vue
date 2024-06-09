<template>
  <div>
    <form id="form" name="form" method="post" @submit.prevent="init()">
      <input type="hidden" id="confmKey" name="confmKey" value=""/>
      <input type="hidden" id="returnUrl" name="returnUrl" value=""/>
      <input type="hidden" id="resultType" name="resultType" value=""/> 
    </form>
  </div>
</template>
<script setup>
  
  // import * as gfnUtils from "@/utils/gfnUtils.js";
  import { onMounted } from 'vue'

  onMounted(() => {
    init();
    initAxios();
  })

  function init(){
    console.log("Xxx");

    var url = location.href;
    var confmKey = "devU01TX0FVVEgyMDI0MDYwNDE4NDI0NzExNDgyMjg=";//승인키
    // resultType항목 추가(2016.10.06)
    var resultType = "4"; // 도로명주소 검색결과 화면 출력유형, 1 : 도로명, 2 : 도로명+지번, 3 : 도로명+상세건물명, 4 : 도로명+지번+상세건물명
    var inputYn= "<%=inputYn%>";
    if(inputYn != "Y"){
      document.form.confmKey.value = confmKey;
      document.form.returnUrl.value = url;
      document.form.resultType.value = resultType; // resultType항목 추가(2016.10.06)
      document.form.action="https://business.juso.go.kr/addrlink/addrLinkUrl.do"; // 인터넷망
      //document.form.action="https://business.juso.go.kr/addrlink/addrMobileLinkUrl.do"; //모바일 웹인 경우, 인터넷망
      document.form.submit();
    }else{

    //   console.log("ddddd");
    //   //sendMsgToParent()
      
    //   /** API 서비스 제공항목 확대 (2017.02) **/
    //   // opener.jusoCallBack("<%=roadFullAddr%>","<%=roadAddrPart1%>","<%=addrDetail%>", "<%=roadAddrPart2%>","<%=engAddr%>"
    //   //   , "<%=jibunAddr%>","<%=zipNo%>", "<%=admCd%>", "<%=rnMgtSn%>", "<%=bdMgtSn%>", "<%=detBdNmList%>"
    //   //   , "<%=bdNm%>", "<%=bdKdcd%>", "<%=siNm%>", "<%=sggNm%>", "<%=emdNm%>", "<%=liNm%>", "<%=rn%>", "<%=udrtYn%>"
    //   //   , "<%=buldMnnm%>", "<%=buldSlno%>", "<%=mtYn%>", "<%=lnbrMnnm%>", "<%=lnbrSlno%>", "<%=emdNo%>");
        
    //   window.close();
    }
  }
  // function submitForm() {
  //   console.log("ddddd-------------------------------------");
  // }


  async function initAxios(){
    console.log("axios....");
    
    // let confmKey = "devU01TX0FVVEgyMDI0MDYwNDE4NDI0NzExNDgyMjg="
    // let url = location.href
    // let resultType = "4"

    // var api = "/addrlink/addrMobileLinkUrl.do"
    // var params = {confmKey:confmKey, returnUrl:url, resultType:resultType};
    // let rtn = await gfnUtils.axiosPostEx(
    //   api
    //   ,params
    // );

    // console.log(rtn)
  }

  function sendMsgToParent(){  // eslint-disable-line no-unused-vars
    this.sendToOpener(
    {
        evt: 'message' ,
        message : 'hello'
    });
  }

 function sendToOpener( sendObj ){ // eslint-disable-line no-unused-vars

    if( opener == null ) {
      return;
    }

    let sendStr = JSON.stringify( sendObj );

    // 부모 창에 Message를 보냄
    window.opener.postMessage( sendStr, '*' );
  }


</script>