import { defineStore } from 'pinia'

export const commonStore = defineStore('common', {
    // 다른 옵션...
})

export const userStore = defineStore('user', {
    // 다른 옵션...
})

export const alertStore = defineStore('alert', {
    state: () => ({
        alertDialog: false,
        alertTitle: "",
        alertMsg: "",
        alertDetail: "",
    }),
    getters: {
        alertDialog: (state) => state.alertDialog,
        alertTitle: (state) => state.alertTitle,
        alertMsg: (state) => state.alertMsg,
        alertDetail: (state) => state.alertDetail,
    },
    actions: {
        setAlertDialog(val) {
            this.alertDialog = val;
        },
        setAlertTitle(val) {
            this.alertTitle = val;
        },
        setAlertDialog(val) {
            this.alertDialog = val;
        },
        setAlertMsg(val) {
            this.alertMsg = val;
        },
        setAlertDetail(val) {
            this.alertDetail = val;
        },
    }
})
