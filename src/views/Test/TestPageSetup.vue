    <template>
    <div>
        <FontAwesomeIcon icon="less-than" />
        <font-awesome-icon icon="left-long" />
        <font-awesome-icon icon="less-than" />
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
                <td>
                    API
                </td>
                <td>
                    <input type="text" v-model="apiUrl" />
                </td>
            </tr>
            <tr>
                <td>
                    파라메터
                </td>
                <td>
                    <input type="text" v-model="apiParam" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button style="background-color: pink; padding:5px 10px; border-radius:10px; color:white;" @click="Test()">Click me</button>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <textarea v-model="apiResult"></textarea>
                </td>
            </tr>
        </table>
        <br>
        <br>
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
                <button style="background-color: pink; padding:5px 10px; border-radius:10px; color:white;" @click="Login()">Login</button>
            </tr>
        </table>
        <br>



        <br>
        <table>
            <tr>
                <td>store Sample test ID</td>
                <td><input type="text" v-model="testValue" /></td>
            </tr>
            <tr>
                <button style="background-color: pink; padding:5px 10px; border-radius:10px; color:white;" @click="test1()">코드 조회테스트</button>
            </tr>
            <tr>
                <button style="background-color: pink; padding:5px 10px; border-radius:10px; color:white;" @click="filtered()">필터테스트</button>
            </tr>
        </table>
        <br>
        <br>
        <pre>
            option       Composition 
            beforeCreate	-	Composition API에서는 대체 함수가 없습니다.
            created	setup 함수 내의 로직	컴포넌트의 인스턴스가 생성되고 초기화된 직후 실행됩니다.
            beforeMount	onBeforeMount	컴포넌트가 DOM에 마운트되기 직전에 실행됩니다.
            mounted	onMounted	컴포넌트가 DOM에 마운트된 직후 실행됩니다.
            beforeUpdate	onBeforeUpdate	컴포넌트가 업데이트되기 직전에 실행됩니다.
            updated	onUpdated	컴포넌트가 업데이트된 직후 실행됩니다.
            beforeUnmount	onBeforeUnmount	컴포넌트가 언마운트되기 직전에 실행됩니다.
            unmounted	onUnmounted	컴포넌트가 언마운트된 직후 실행됩니다.
            errorCaptured	onErrorCaptured	컴포넌트 또는 자식 컴포넌트에서 발생한 에러를 처리합니다.
            renderTracked	onRenderTracked	렌더링이 추적될 때 실행됩니다.
            renderTriggered	onRenderTriggered	렌더링이 트리거될 때 실행됩니다.
            activated	onActivated 컴포넌트가 활성화될 때 실행됩니다.
            deactivated	onDeactivated   컴포넌트가 비활성화될 때 실행됩니다.
        </pre>
        <button style="background-color: pink; padding:5px 10px; border-radius:10px; color:white;" @click="savefile()">savefile</button>

        <testComp ref="xx"/>
    </div>
    </template>
    <script setup>
   
    import {  ref, computed } from "vue";
    import * as gfnUtils from "@/utils/gfnUtils.js";
    import { commonStore } from '@/stores'
    import testComp from '@/views/Test/testComponent.vue'

    const xx = ref()
    const store = commonStore()

    const apiUrl = ref("/v1/common/code");
    const apiResult = ref("");
    const testId = ref("");
    const testPw = ref("");
    const apiParam =  ref(JSON.stringify({codeGrpList:['EDCT_DIV_CD','SRVD_STAT_CD']}));

    const testValue = ref("");
    const codelist = ref();
    const filteredNm = computed( () => {
            //문자열 비교
            let filter = testValue.value
            console.log(filter)
            console.log(filter.toLowerCase())
            if (!filter.length) return codelist.value;

            return codelist.value.filter( item => 
                item.cdNm.toLowerCase().includes(filter.toLowerCase())
            )
        })
    const filteredCd = computed( () => {
            let filter = true
            return codelist.value.filter( item => 
                item.checked == filter
            )
        })

    // store 사용 예시
    async function test1(){
        
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

    function filtered (){
        console.log(filteredNm.value);
        console.log(filteredCd.value);
    }
    async function Test(){
        
        console.log("XXXXXXXXXXXXXXXX");

        var api = this.apiUrl;
        var postParams = JSON.parse(apiParam);
        //var postParams = this.apiParam;
        console.log("val ::"+postParams);

        //var loading = "";
        //var isErr = "";
        let res = await gfnUtils.axiosPost(
        api,
        postParams
        );
        console.log(res);
        this.apiResult = JSON.stringify(res);
    }
    async function Login(){
        var api = this.apiUrl;          
        var postParams = {id: this.testId, pw: this.testPw};
        let res = await gfnUtils.axiosPost(
                                                    api,
                                                    postParams
                                                    );
        console.log(res);
        this.apiResult = JSON.stringify(res);
    }

    async function savefile(){
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

        let res = await this.gfn_utils.axiosPost(
            "/admin/app/regiEvent",
            formData
        );         
        console.log(res);
        
    }


    </script>
    <style scoped>
    input {
    border: 1px solid #000
    }
    </style>
