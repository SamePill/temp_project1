import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const commonStore = defineStore('common', () => {
    //state ==> ref or  reactive
    const userNm = ref(false)
    const companyNm = ref("")
    const id = ref("") 
    
    //getters ==> computed
    const getUserNm = computed(() => {
        return userNm;
    });
    const getCompanyNm = computed(() => {
        return companyNm;
    });
    const getId = computed(() => {
        return id;
    });
 
    //actions ==> function
    function setUserNm(val) {
        this.userNm = val;
    }
    function setCompanyNm(val) {
        this.companyNm = val;
    }
    function setId(val) {
        this.id = val;
    }

    return { userNm, companyNm, id, getUserNm, getCompanyNm, getId, setUserNm, setCompanyNm, setId }
    
})
