  <template>
  <div>
    <FontAwesomeIcon icon="less-than" />
    <font-awesome-icon icon="left-long" />
    <font-awesome-icon icon="less-than" />

    <h1>POP-UP 샘플...</h1>
    <!-- popup 샘플-->
    <button
      style="
        background-color: pink;
        padding: 5px 10px;
        border-radius: 10px;
        color: white;
      "
      @click="openPopup()"
    >
      open..!!!!
    </button>
    <modal ref="modalShow" :width="340">
      <confirmPopup
        message="테스트"
        btnOk="OK"
        btnCancel="Close"
        @cancel="cancel"
        @confirm="confirm"
      />
    </modal>

    <br /><br /><br /><br />
    <table border="1" width="250">
      <tr>
        <td colspan="2">
          <pre>
          var api = "/v1/common/code";
          var postParams = {codeGrpList:['EDCT_DIV_CD','SRVD_STAT_CD']};
          </pre>
        </td>
      </tr>
      <tr>
        <td>API</td>
        <td>
          <input type="text" v-model="apiUrl" />
        </td>
      </tr>
      <tr>
        <td>파라메터</td>
        <td>
          <input type="text" v-model="apiParam" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button
            style="
              background-color: pink;
              padding: 5px 10px;
              border-radius: 10px;
              color: white;
            "
            @click="Test()"
          >
            Click me
          </button>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <textarea v-model="apiResult"></textarea>
        </td>
      </tr>
    </table>
    <br />
    <br />
    <table>
      <tr>
        <td>ID</td>
        <td><input type="text" v-model="testId" /></td>
      </tr>
      <tr>
        <td>PASSWORD</td>
        <td><input type="text" v-model="testPw" /></td>
      </tr>
      <tr>
        <button
          style="
            background-color: pink;
            padding: 5px 10px;
            border-radius: 10px;
            color: white;
          "
          @click="Login()"
        >
          Login
        </button>
      </tr>
    </table>
    <br />

    <br />
    <table>
      <tr>
        <td>store Sample test ID</td>
        <td><input type="text" v-model="testValue" /></td>
      </tr>
      <tr>
        <button
          style="
            background-color: pink;
            padding: 5px 10px;
            border-radius: 10px;
            color: white;
          "
          @click="test1()"
        >
          코드 조회테스트
        </button>
      </tr>
      <tr>
        <button
          style="
            background-color: pink;
            padding: 5px 10px;
            border-radius: 10px;
            color: white;
          "
          @click="filtered()"
        >
          필터테스트
        </button>
      </tr>
    </table>
    <br />
    <br />
    <pre>
      option     Composition 
      beforeCreate  -  Composition API에서는 대체 함수가 없습니다.
      created  setup 함수 내의 로직  컴포넌트의 인스턴스가 생성되고 초기화된 직후 실행됩니다.
      beforeMount  onBeforeMount  컴포넌트가 DOM에 마운트되기 직전에 실행됩니다.
      mounted  onMounted  컴포넌트가 DOM에 마운트된 직후 실행됩니다.
      beforeUpdate  onBeforeUpdate  컴포넌트가 업데이트되기 직전에 실행됩니다.
      updated  onUpdated  컴포넌트가 업데이트된 직후 실행됩니다.
      beforeUnmount  onBeforeUnmount  컴포넌트가 언마운트되기 직전에 실행됩니다.
      unmounted  onUnmounted  컴포넌트가 언마운트된 직후 실행됩니다.
      errorCaptured  onErrorCaptured  컴포넌트 또는 자식 컴포넌트에서 발생한 에러를 처리합니다.
      renderTracked  onRenderTracked  렌더링이 추적될 때 실행됩니다.
      renderTriggered  onRenderTriggered  렌더링이 트리거될 때 실행됩니다.
      activated  onActivated 컴포넌트가 활성화될 때 실행됩니다.
      deactivated  onDeactivated   컴포넌트가 비활성화될 때 실행됩니다.
    </pre>
    <button
      style="
        background-color: pink;
        padding: 5px 10px;
        border-radius: 10px;
        color: white;
      "
      @click="savefile()"
    >
      savefile
    </button>
    <br />
    <br />
    <br />
    <br />
    <button
      style="
        background-color: pink;
        padding: 5px 10px;
        border-radius: 10px;
        color: white;
      "
      @click="showCode()"
    >
      ShowCode
    </button>

    <testComp ref="xx" />

    <br /><br /><br /><br /><br /><br />

    <table>
      <colgroup>
        <col style="width: 20%" />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th>우편번호</th>
          <td>
            <input type="hidden" id="confmKey" name="confmKey" value="" />
            <input
              type="text"
              id="zipNo"
              name="zipNo"
              readonly
              style="width: 100px"
            />
            <input type="button" value="주소검색" @click="goPopup()" />
          </td>
        </tr>
        <tr>
          <th>도로명주소</th>
          <td><input type="text" id="roadAddrPart1" style="width: 85%" /></td>
        </tr>
        <tr>
          <th>상세주소</th>
          <td>
            <input type="text" id="addrDetail" style="width: 40%" value="" />
            <input type="text" id="roadAddrPart2" style="width: 40%" value="" />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <modal ref="srchAddrShow" :width="340">
      <SrchAddressPopup @closeAddrPop="closeAddrPop"/>
    </modal> -->
    <br>
    <br>
    <br>
    <modal ref="srchAddrShow" :width="1060">
      <SrchAddrApiPopup @closeAddrPop="closeAddrPop" @selAddr="closeAddrPop" />
    </modal>
    <button type="button" @click="showAddrPop">모달 주소검색 팝업 띄우기</button>
    <br>
    <br>
    <br>
    <!--윈도우 팝업-->
    <WindowPopup ref="winPopup"  @onClose="val=>evtCloseWinPopup(val)"  @onRecvEvtFromWinPop="val=>onRecvWinPop(val)" >
    </WindowPopup>
    <button type="button" @click="openWinPop">윈 팝업 띄우기</button>

  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import * as gfnUtils from "@/utils/gfnUtils.js";
  import { commonStore } from "@/stores";
  import testComp from "@/views/Test/testComponent.vue";
  import Modal from "@/components/baseComponents/Modal.vue";
  import confirmPopup from "@/components/popupComponents/confirmPopup.vue";
  import SrchAddrApiPopup from "@/components/popupComponents/SrchAddrApiPopup.vue";
  import WindowPopup from "@/components/popupComponents/WindowPopup.vue";
  
  // import SrchAddressPopup from '@/components/popupComponents/SrchAddressPopup.vue'

  const xx = ref();
  const store = commonStore();

  //모달 테스트
  const modalShow = ref(null);
  const show = () => {
    modalShow.value.open();
  };
  //취소버튼
  const cancel = function () {
    modalShow.value.close();
    alert("Cancel");
  };
  //확인버튼
  const confirm = function () {
    modalShow.value.close();
    alert("OK");
  };

  // const srchAddrApiShow = ref(null);
  const srchAddrShow = ref(null)
  const showAddrPop = () => {
    srchAddrShow.value.open()
  }
  //닫기
  const closeAddrPop = function (){
    srchAddrShow.value.close()
  }

  const apiUrl = ref("/v1/common/code");
  const apiResult = ref("");
  const testId = ref("");
  const testPw = ref("");
  const apiParam = ref(
    JSON.stringify({ codeGrpList: ["EDCT_DIV_CD", "SRVD_STAT_CD"] })
  );

  const testValue = ref("");
  const codelist = ref();
  const filteredNm = computed(() => {
    //문자열 비교
    let filter = testValue.value;
    console.log(filter);
    console.log(filter.toLowerCase());
    if (!filter.length) return codelist.value;

    return codelist.value.filter((item) =>
      item.cdNm.toLowerCase().includes(filter.toLowerCase())
    );
  });
  const filteredCd = computed(() => {
    let filter = true;
    return codelist.value.filter((item) => item.checked == filter);
  });

  function openPopup() {
    show();
  }

  async function showCode() {
    // if(store.getCodeList == undefined || store.getCodeList.length == 0  ){
    //   await this.gfnUtils.loadCommCode()
    // }
    await this.gfnUtils.loadCommCode();
    console.log(store.getCodeList);
  }

  // store 사용 예시
  async function test1() {
    console.log("Stores-------------------------------------");
    store.setLoginCompId("xxxx");
    console.log("bf:" + store.getLoginCompId.value);
    console.log("vl:" + testValue.value);
    store.setLoginCompId(testValue.value);
    console.log("af:" + store.getLoginCompId.value);

    console.log("Cookies-------------------------------------");
    console.log(window.$cookies.get("loginUserId"));
    window.$cookies.config("1d");
    window.$cookies.set("loginUserId", "test");
    console.log(window.$cookies.get("loginUserId"));
    console.log("Utils...-------------------------------------");

    codelist.value = await gfnUtils.getCommCode("ENGN_RTNG_DIV_CD");

    codelist.value[0].checked = true;
    console.log(codelist.value);
  }

  function filtered() {
    console.log(filteredNm.value);
    console.log(filteredCd.value);
  }
  async function Test() {
    console.log("XXXXXXXXXXXXXXXX");

    var api = this.apiUrl;
    var postParams = JSON.parse(apiParam);
    //var postParams = this.apiParam;
    console.log("val ::" + postParams);

    //var loading = "";
    //var isErr = "";
    let res = await gfnUtils.axiosPost(api, postParams);
    console.log(res);
    this.apiResult = JSON.stringify(res);
  }
  async function Login() {
    var api = this.apiUrl;
    var postParams = { id: this.testId, pw: this.testPw };
    let res = await gfnUtils.axiosPost(api, postParams);
    console.log(res);
    this.apiResult = JSON.stringify(res);
  }

  async function savefile() {
    xx.value.test();

    var params = this.popitem;

    let formData = new FormData();
    // 파일이 다건인 경우
    for (var idx in this.attchfiles) {
      console.log(this.attchfiles[idx].type);
      console.log(this.attchfiles[idx].name);
      formData.append("attchFiles", this.attchfiles[idx]);
    }
    formData.append("banner", this.physFile);
    formData.append(
      "params",
      new Blob([JSON.stringify(params)], { type: "application/json" })
    );

    // 파일이 단건인 경우
    // formData.append("file", this.physFile);
    // formData.append(
    // "params",
    // new Blob([JSON.stringify(params)], { type: "application/json" })
    // );

    console.log(formData);

    let res = await this.gfn_utils.axiosPost("/admin/app/regiEvent", formData);
    console.log(res);
  }

  function goPopup() {
    //showAddrPop()

    var pop = window.open(
      "#/addressPopup",
      "pop",
      "width=570,height=420, scrollbars=yes, resizable=yes"
    );
    console.log(pop);
  }

  // function jusoCallBack(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn
  //     , detBdNmList, bdNm, bdKdcd, siNm, sggNm, emdNm, liNm, rn, udrtYn, buldMnnm, buldSlno, mtYn, lnbrMnnm, lnbrSlno, emdNo){
  //   // 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
  //   // document.form.roadAddrPart1.value = roadAddrPart1;
  //   // document.form.roadAddrPart2.value = roadAddrPart2;
  //   // document.form.addrDetail.value = addrDetail;
  //   // document.form.zipNo.value = zipNo;
  //   console.log(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn
  //     , detBdNmList, bdNm, bdKdcd, siNm, sggNm, emdNm, liNm, rn, udrtYn, buldMnnm, buldSlno, mtYn, lnbrMnnm, lnbrSlno, emdNo)
  // }

  //팝업 테스트

  const winPopup = ref(null);

  function evtCloseWinPopup() {
    console.log("evtCloseWinPopup () ========  ");
  }

  function openWinPop() {
    // vue의 라우터에 등록한 팝업창 주소를 uri로 설정하도록 한다
    let uri = "#/addressPopup";
    winPopup.value.openWinPop(uri, 1560, 700);
  }

  function onRecvWinPop(recvObj) {
    console.log("onRecvWinPop  ---------");

    if (recvObj.evt != null) {
      // 저장이 정상적으로 완료된 경우

      switch (recvObj.evt) {
        case "message":
          console.log("윈 팝업으로 부터 수신 메세지 : " + recvObj.message);
          break;
      }
    }
  }
</script>
<style scoped>
input {
  border: 1px solid #000;
}
</style>
