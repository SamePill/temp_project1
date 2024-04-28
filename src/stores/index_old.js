import { defineStore } from 'pinia'

export const commonStore = defineStore('common', {
    state: () => ({
        userNm: false,
        companyNm: "",
        id: "",
    }),
    getters: {
        userNm: (state) => state.userNm,
        companyNm: (state) => state.companyNm,
        id: (state) => state.id,
    },
    actions: {
        setUserNm(val) {
            this.userNm = val;
        },
        setCompanyNm(val) {
            this.companyNm = val;
        },
        setId(val) {
            this.id = val;
        },
    }

})

// export const alertStore = defineStore('alert', {
//     state: () => ({
//         alertDialog: false,
//         alertTitle: "",
//         alertMsg: "",
//         alertDetail: "",
//     }),
//     getters: {
//         alertDialog: (state) => state.alertDialog,
//         alertTitle: (state) => state.alertTitle,
//         alertMsg: (state) => state.alertMsg,
//         alertDetail: (state) => state.alertDetail,
//     },
//     actions: {
//         setAlertDialog(val) {
//             this.alertDialog = val;
//         },
//         setAlertTitle(val) {
//             this.alertTitle = val;
//         },
//         setAlertDialog(val) {
//             this.alertDialog = val;
//         },
//         setAlertMsg(val) {
//             this.alertMsg = val;
//         },
//         setAlertDetail(val) {
//             this.alertDetail = val;
//         },
//     }
// })
