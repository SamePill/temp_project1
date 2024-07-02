<template>
    <div>
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
        <table>
            <tr>
                <td>ID</td>
                <td><input type="text" v-model="testId" /></td>
            </tr>
            <tr>
                <button style="background-color: pink; padding:5px 10px; border-radius:10px; color:white;" @click="test1()">Login</button>
            </tr>
        </table>
    </div>
</template>
<script>
import baseMixin from "@/utils/baseMixin.js";
import { commonStore } from "@/stores";
//import { storeToRefs } from "pinia";

export default {
    mixins: [baseMixin],
    data(){
        return{
            apiUrl:"/v1/common/code",
            apiParam: JSON.stringify({codeGrpList:['EDCT_DIV_CD','SRVD_STAT_CD']}),
            apiResult:"",
            testId:"",
            testPw:"",
            store: commonStore().common
        }        
    },
    methods: {
        goToPage(path){
            this.$router.push(path)
        },
        test1(){
            //this.store.setId("xxxx");
            //console.log( this.store.getId());
        },
        async Test(){
            var api = this.apiUrl;
            var postParams = JSON.parse(this.apiParam);
            //var postParams = this.apiParam;

            //var loading = "";
            //var isErr = "";
            let res = await this.gfn_utils.axiosPost(
            api,
            postParams
            );
            
            this.apiResult = JSON.stringify(res);
        },
        async Login(){
            var api = this.apiUrl;
            var postParams = {id: this.testId, pw: this.testPw};
            let res = await this.gfn_utils.axiosPost(
                                                        api,
                                                        postParams
                                                        );
            
            this.apiResult = JSON.stringify(res);
        }
    }
}
</script>
<style scoped>
input {
    border: 1px solid #000
}
</style>
