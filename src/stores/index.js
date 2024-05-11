import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const commonStore = defineStore('common', () => {
   
    const loginCompId = ref('')
    const loginUserMail = ref('')
    const loginUserNm = ref('')
    const loginHp = ref('')
    const loginMrktMailRcptYn = ref('')
    const loginMrktSmsRcptYn = ref('')
    const loginCompNm = ref('')
    const loginTokn = ref('')

    //getters ==> computed
    const getLoginCompId = computed(() => {
        return loginCompId;
    });
    const getLoginUserMail = computed(() => {
        return loginUserMail;
    });
    const getLoginUserNm = computed(() => {
        return loginUserNm;
    });
    const getLoginHp = computed(() => {
        return loginHp;
    });
    const getLoginMrktMailRcptYn = computed(() => {
        return loginMrktMailRcptYn;
    });
    const getLoginMrktSmsRcptYn = computed(() => {
        return loginMrktSmsRcptYn;
    });
    const getLoginCompNm = computed(() => {
        return loginCompNm;
    });
    const getLoginTokn = computed(() => {
        return loginTokn;
    });
 
    //actions ==> function
    function setLoginCompId(val) {
        this.loginCompId = val;
    }
    function setLoginUserMail(val) {
        this.loginUserMail = val;
    }
    function setLoginUserNm(val) {
        this.loginUserNm = val;
    }
    function setLoginHp(val) {
        this.loginHp = val;
    }
    function setLoginMrktMailRcptYn(val) {
        this.loginMrktMailRcptYn = val;
    }
    function setLoginMrktSmsRcptYn(val) {
        this.loginMrktSmsRcptYn = val;
    }
    function setLoginCompNm(val) {
        this.loginCompNm = val;
    }
    function setLoginTokn(val) {
        this.loginTokn = val;
    }

    return { loginCompId, loginUserMail, loginUserNm, loginHp, loginMrktMailRcptYn, loginMrktSmsRcptYn, loginCompNm, loginTokn,
        getLoginCompId, getLoginUserMail, getLoginUserNm, getLoginHp, getLoginMrktMailRcptYn, getLoginMrktSmsRcptYn, getLoginCompNm, getLoginTokn,
        setLoginCompId, setLoginUserMail, setLoginUserNm, setLoginHp, setLoginMrktMailRcptYn, setLoginMrktSmsRcptYn, setLoginCompNm, setLoginTokn
    }
    
})
