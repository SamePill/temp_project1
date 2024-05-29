import { defineStore } from 'pinia'
// import {  ref, computed } from "vue";

export const commonStore = defineStore('common', {
    // 화살표 함수는 전체 유형 유추을 위해 권장됨. 
    state: () => ({
        // 이 모든 속성은 자동으로 유형이 유추됨.
        loginCompId : ''
        ,loginUserMail : ''
        ,loginUserNm : ''
        ,loginHp : ''
        ,loginMrktMailRcptYn : ''
        ,loginMrktSmsRcptYn : ''
        ,loginCompNm : ''
        ,loginTokn : ''
        ,codeList : []
    }),
    getters: {
        getLoginCompId(state){
            return state.loginCompId;
        },
        getLoginUserMail(state) {
            return state.loginUserMail;
        },
        getLoginUserNm(state) {
            return state.loginUserNm;
        },
        getLoginHp(state) {
            return state.loginHp;
        },
        getLoginMrktMailRcptYn(state) {
            return state.loginMrktMailRcptYn;
        },
        getLoginMrktSmsRcptYn(state)  {
            return state.loginMrktSmsRcptYn;
        },
        getLoginCompNm(state)  {
            return state.loginCompNm;
        },
        getLoginTokn(state)  {
            return state.loginTokn;
        },
        getCodeList(state) {
            return state.codeList;
        }
    },
    actions: {
        setLoginCompId(val) {
            this.loginCompId = val;
        },
        setLoginUserMail(val) {
            this.loginUserMail = val;
        },
        setLoginUserNm(val) {
            this.loginUserNm = val;
        },
        setLoginHp(val) {
            this.loginHp = val;
        },
        setLoginMrktMailRcptYn(val) {
            this.loginMrktMailRcptYn = val;
        },
        setLoginMrktSmsRcptYn(val) {
            this.loginMrktSmsRcptYn = val;
        },
        setLoginCompNm(val) {
            this.loginCompNm = val;
        },
        setLoginTokn(val) {
            this.loginTokn = val;
        },
        setCodeList(val) {
            this.codeList = val;
        }
    }
})

// export const commonStore = defineStore('common', () => { 
//     const loginCompId = ref('')
//     const loginUserMail = ref('')
//     const loginUserNm = ref('')
//     const loginHp = ref('')
//     const loginMrktMailRcptYn = ref('')
//     const loginMrktSmsRcptYn = ref('')
//     const loginCompNm = ref('')
//     const loginTokn = ref('')
//     const codeList = ref()
//     //getters ==> computed
//     const getLoginCompId = computed(() => {
//         return loginCompId;
//     });
//     const getLoginUserMail = computed(() => {
//         return loginUserMail;
//     });
//     const getLoginUserNm = computed(() => {
//         return loginUserNm;
//     });
//     const getLoginHp = computed(() => {
//         return loginHp;
//     });
//     const getLoginMrktMailRcptYn = computed(() => {
//         return loginMrktMailRcptYn;
//     });
//     const getLoginMrktSmsRcptYn = computed(() => {
//         return loginMrktSmsRcptYn;
//     });
//     const getLoginCompNm = computed(() => {
//         return loginCompNm;
//     });
//     const getLoginTokn = computed(() => {
//         return loginTokn;
//     });
//     const getCodeList = computed(() => {
//         return codeList;
//     });   
//     //actions ==> function
//     function setLoginCompId(val) {
//         this.loginCompId = val;
//     }
//     function setLoginUserMail(val) {
//         this.loginUserMail = val;
//     }
//     function setLoginUserNm(val) {
//         this.loginUserNm = val;
//     }
//     function setLoginHp(val) {
//         this.loginHp = val;
//     }
//     function setLoginMrktMailRcptYn(val) {
//         this.loginMrktMailRcptYn = val;
//     }
//     function setLoginMrktSmsRcptYn(val) {
//         this.loginMrktSmsRcptYn = val;
//     }
//     function setLoginCompNm(val) {
//         this.loginCompNm = val;
//     }
//     function setLoginTokn(val) {
//         this.loginTokn = val;
//     }
//     function setCodeList(val) {
//         this.codeList = val;
//     }
//     return { loginCompId, loginUserMail, loginUserNm, loginHp, loginMrktMailRcptYn, loginMrktSmsRcptYn, loginCompNm, loginTokn, codeList,
//         getLoginCompId, getLoginUserMail, getLoginUserNm, getLoginHp, getLoginMrktMailRcptYn, getLoginMrktSmsRcptYn, getLoginCompNm, getLoginTokn,
//         getCodeList,
//         setLoginCompId, setLoginUserMail, setLoginUserNm, setLoginHp, setLoginMrktMailRcptYn, setLoginMrktSmsRcptYn, setLoginCompNm, setLoginTokn,
//         setCodeList
//     }    
// })
