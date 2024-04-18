<template>
    <div>
        <table>
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
                    파라메터 1
                </td>
                <td>
                    <input type="text" v-model="apiKey1" />
                </td>
                <td>
                    <input type="text" v-model="apiVl1" />
                </td>
            </tr>
            <tr>
                <td>
                    파라메터 2
                </td>
                <td>
                    <input type="text" v-model="apiKey2"/>
                </td>
                <td>
                    <input type="text" v-model="apiVl2"/>
                </td>
            </tr>
            <tr>
                <td>
                    파라메터 3
                </td>
                <td>
                    <input type="text" v-model="apiKey3"/>
                </td>
                <td>
                    <input type="text" v-model="apiVl3"/>
                </td>
            </tr>
            <tr>
                <td>
                    파라메터 4
                </td>
                <td>
                    <input type="text" v-model="apiKey4"/>
                </td>
                <td>
                    <input type="text" v-model="apiVl4"/>
                </td>
            </tr>
            <tr>
                <td>
                    <button style="background-color: pink; padding:5px 10px; border-radius:10px; color:white;" @click="Test()">Click me</button>
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
            apiUrl:"",
            apiKey1:"",
            apiKey2:"",
            apiKey3:"",
            apiKey4:"",
            apiVl1:"",
            apiVl2:"",
            apiVl3:"",
            apiVl4:"",
        }        
    },
    methods: {
        goToPage(path){
            this.$router.push(path)
        },
        async Test(){
            var api = this.apiUrl;
            
            // let val = this.apiKey1==null?'':{[this.apiKey1]:this.apiVl1};
            // let val2 = this.apiKey2==null?'':{[this.apiKey1]:this.apiVl1};
            // let val3 = this.apiKey3==null?'':{[this.apiKey1]:this.apiVl1};
            // let val4 = this.apiKey4==null?'':{[this.apiKey1]:this.apiVl1};

            var postParams = {
            
            };

            //var loading = "";
            //var isErr = "";
            let res = await this.gfn_utils.axiosPost(
            api,
            postParams
            );
            console.log(res);

        }
    }
}
</script>
<style scoped>
input {
    border: 1px solid #000
}
</style>
