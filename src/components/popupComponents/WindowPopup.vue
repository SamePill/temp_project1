
<template>
  <div>
  </div>
</template>

<script setup>
//https://blog.naver.com/karisma70kr/222829165426
  import { ref } from 'vue'

  const windowRef = ref(null) 

  function openWinPop( uri, width, height ) {

    if( windowRef != null ){
      closeWinPop();
    }

    let left = (screen.width) ? (screen.width - width) / 2 : 0;
    let top = (screen.height) ? (screen.height - height) / 2 : 0;

    let attr = 'top=' + top + ', left=' + left  + ', width=' + width + ', height=' + height + ', resizable=no,status=no';

    // 1. 윈도우 팝업 띄우기 
    windowRef = window.open(uri, "", attr);
    if( windowRef != null ) {
      windowRef.addEventListener('beforeunload', evtClose);
    }else{
      alert( "window.open fail!!!" );
    }

    // 2.  새로 띄운 윈도우 팝업창으로 부터 수신 메세지 이벤트 처리 
    window.addEventListener("message", recvEvtFromChild, false);
  }

  // 윈도우 팝업 닫기 
  function closeWinPop(){

    if(windowRef) {
      windowRef.close();
      windowRef = null;
    }
  }

  function evtClose() {
    if(windowRef) {
      windowRef.close();
      windowRef = null;
      $emit('onClose');
    }
  }

  // 3. 부모창에서 팝업창에 메세지 보내기 
  function sendEvtToChild( evt ){
    if( !common.isValidObj(windowRef)) {
      return;
    }
    if( g_winPopup == null ) {
      return;
    }

    // 4. 윈도팝업창(g_winPopup)에 함수 실행 
    //  g_winPopup 변수는 본 소스에서 선언하지 않고 아래 ChildWinPop.vue 소스인 윈도우 팝업창 측에서 선언하고 설정함
    g_winPopup.calledFromOpener(evt);
  }

  // 5. 팝업창으로 부터 수신된 이벤트 
  function recvEvtFromChild( evt ){
    console.log( "recvEvtFromChild......" );
    console.log( evt.data );

    if( evt.data == null  ){
      return;
    }
    let recvObj = JSON.parse( evt.data );
    
    // 5. 본 소스 WinPop.vue를 콤포넌트로 사용하는 부모 vue 측에 이벤트 전달
    $emit( 'onRecvEvtFromWinPop', recvObj );
  }


</script>

<style scoped>

</style>