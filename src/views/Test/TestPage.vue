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
    </div>
</template>
<script>
import baseMixin from "@/utils/baseMixin.js";

export default {
    mixins: [baseMixin],
    data(){
        return{
            apiUrl:"/v1/common/code",
            apiParam: JSON.stringify({codeGrpList:['EDCT_DIV_CD','SRVD_STAT_CD']}),
            apiResult:"",
        }        
    },
    methods: {
        goToPage(path){
            this.$router.push(path)
        },
        async Test(){
            var api = this.apiUrl;
            var postParams = JSON.parse(this.apiParam);
            //var postParams = this.apiParam;
            console.log("val ::"+postParams);

            //var loading = "";
            //var isErr = "";
            let res = await this.gfn_utils.axiosPost(
            api,
            postParams
            );
            console.log(res);
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
