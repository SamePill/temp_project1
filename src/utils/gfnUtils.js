import axios from "axios";
import moment from "moment";
// import { store } from "@/store";
//import router from "@/routes";
import { useRouter } from 'vue-router'
const router = useRouter()

import { commonStore } from '@/stores'


//const baseUrl = process.env.NODE_ENV === "production" ? "http://drs.pe.kr:28080" : "";
const baseUrl = "http://dev.l-walk.com:29080" ;

export const getToday = () => {
  var today = new Date();
  return today.getFullYear() + '-' + ((today.getMonth() + 1).toString().padStart(2,'0')) + '-' + today.getDate()
}


export const chkLogin = () => {
  var chk = "N"
  if ( window.$cookies.get("loginYn") == 'Y' ) {
    chk = "Y"
  } else{
    chk = "N"
  }
  return chk;
}

export const routerPush = (uri) => {
  router.push(uri)
}

export const routerReplace = (uri) => {
  router.replace(uri)
}

/**
 *
 * @param {*} api //restapi 호출주소
 * @param {*} getParams //파라메터
 */
export const axiosGet = (api, getParams) => {
  // store.commit("setLoading", true);
  // var apiUrl = baseUrl + api+ ".sys";
  var apiUrl = baseUrl + api;
  // console.log("api post url::::" + apiUrl);
  // console.log("-------param-------");
  // console.log(getParams);

  axios.defaults.headers.common["Content-Type"] = "application/json"
  if (window.$cookies.get("loginAccToken") != null) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + window.$cookies.get("loginAccToken") || "";
  }
  
  return new Promise(function(resolve, reject, isErr) {
    if (typeof isErr == "undefined") {
      isErr = true;
    }
    
    axios
      .get(apiUrl, { params: getParams })
      .then(res => {
        if (res.status === 200) {
          var resData = res.data;
          // console.log("-------result-------");
          // console.log(resData.data);

          if (resData.rtnCd == "00") {
            // store.commit("setLoading", false);
            // resolve(resData.rtnData);
            resolve(resData);
          } else {
            // openAlertDiaolog("ERROR", resData.rtnMsg);
            // store.commit("setLoading", false);
            reject(resData);
            // console.log("오류");
          }
        }
      })
      .catch(err => {
        // if (loading) {
        //   // store.commit("setLoading", false);
        // }
        console.log(err.response.data);
        if (isErr) {
          // console.log("Error -----------------------")
          // console.log(err.response.data)
          // console.log(err.response.status)
          //alert(err.response.status);     
          // console.log("오류");
          // console.log(err.response.data.rtnMsg)
          // console.log(err.response.data.rtnData)
          if (err.response.status == "404") {
            // goto 404 page
            //응답코드별 처리...
            // openAlertDiaolog(
            //   "ERROR",
            //   "오류가 발생하였습니다. (" + err.response.status + ")"
            // );
          } else if (err.response.status == "403") {
            // if ("Landing" != router.currentRoute.name) {
            //   // openAlertDiaolog("ERROR", "로그인 되어있지 않습니다.");
            // }

            router.replace({ name: "Login" });
          } else if (err.response.status == "400") {
            // if ("Landing" != router.currentRoute.name) {
            //   // openAlertDiaolog("ERROR", "로그인 되어있지 않습니다.");
            // }
            resolve(err.response.data);
          } else {
            // openAlertDiaolog(
            //   "ERROR",
            //   "오류가 발생하였습니다. (" + err.response + ")"
            // );
            //reject(err.response.data);     
            resolve(err.response.data);            
          }
        }
      });
  });
};

/**
 *
 * @param {*} api  //restapi 호출주소
 * @param {*} postParams //파라메터
 * @param {*} loading //로딩바(프로그레스바) 표시 여부
 */
export const axiosPost = (api, postParams, loading, isErr) => {
  if (typeof loading == "undefined") {
    loading = true;
  }
  if (loading) {
    // store.commit("setLoading", true);
  }

  if (typeof isErr == "undefined") {
    isErr = true;
  }

  //var apiUrl = baseUrl + api + ".app";
  var apiUrl = baseUrl + api;

  //var apiUrl = "http://localhost:28080" + api;//dev
  //var apiUrl = "http://dev.l-walk.com:29080" + api;//dev
  //var apiUrl = "https://geteyes.l-walk.com:29080" + api;//live

  // console.log("gogo");
  // console.log(api);
  // console.log("api post url::::" + apiUrl);
  // console.log("-------param-------");
  // console.log(postParams);
  // console.log(window.$cookies.get("loginAccToken"));

  axios.defaults.headers.common["Content-Type"] = "application/json"
  if (window.$cookies.get("loginAccToken") != null) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + window.$cookies.get("loginAccToken") || "";
  }
  
  return new Promise(function(resolve, reject) {
    axios
      .post(apiUrl, postParams)
      .then(res => {
        var resData = res.data;
        // console.log("-------result-------");
        // console.log(resData);

        if (resData.rtnCd == "00") {
          //store.commit("setLoading", false);
          if(api == "/v1/auth/login"){
            setCookiesLoginUserInfo(resData.rtnData)
            // console.log("login success")
            // console.log(window.$cookies.get("loginAccToken"))
            // console.log(window.$cookies.get("loginYn"))
            // console.log(window.$cookies)
          } 
          //resolve(resData.rtnData);
          resolve(resData);
        } else {
          //store.commit("setLoading", false);
          // console.log("오류");
          //store.commit("setAlertDialog", true);
          //openAlertDiaolog("ERROR", resData.rtnMsg);
          reject(resData);
        }
      })
      .catch(err => {
        if (loading) {
          // store.commit("setLoading", false);
        }
        console.log(err.response.data);
        if (isErr) {
          // console.log("Error -----------------------")
          // console.log(err.response.data)
          // console.log(err.response.status)
          //alert(err.response.status);     
          // console.log("오류");
          // console.log(err.response.data.rtnMsg)
          // console.log(err.response.data.rtnData)
          if (err.response.status == "404") {
            // goto 404 page
            //응답코드별 처리...
            // openAlertDiaolog(
            //   "ERROR",
            //   "오류가 발생하였습니다. (" + err.response.status + ")"
            // );
          } else if (err.response.status == "403") {
            // if ("Landing" != router.currentRoute.name) {
            //   // openAlertDiaolog("ERROR", "로그인 되어있지 않습니다.");
            // }

            router.replace({ name: "Login" });
          } else if (err.response.status == "400") {
            // if ("Landing" != router.currentRoute.name) {
            //   // openAlertDiaolog("ERROR", "로그인 되어있지 않습니다.");
            // }
            resolve(err.response.data);
          } else {
            // openAlertDiaolog(
            //   "ERROR",
            //   "오류가 발생하였습니다. (" + err.response + ")"
            // );
            //reject(err.response.data);     
            resolve(err.response.data);            
          }
        }

        // 스낵바 예제
        // openSnackbar(err.response.status, "error");
        // 상세alert 예제
        // openAlertDiaologWithDetail("ERROR","오류가 발생하였습니다. (" + err.response.status + ")", err.response.data.path);
        //console.log(err);
        //reject(err);
        //alert(err)
      });
  });
};


export const loadCommCode = async (cdName) => {
  // EDCT_DIV_CD / 학력구분코드
  // ENGN_RTNG_DIV_CD / 엔지니어등급구분코드
  // ENGR_INPT_STAT_CD / 엔지니어투입상태코드
  // ENGR_SPRT_STAT_CD / 엔지니어지원상태코드
  // JOB_DIV_CD / 직군구분코드
  // PIRD_DIV_CD / 기간구분코드
  // PROJ_STAT_CD / 프로젝트상태코드
  // SMS_DIV_CD / SMS구분코드
  // SRVD_STAT_CD / 재직상태코드
  // TASK_DIV_CD / 업무구분코드
  // WORK_DIV_CD / 근무구분코드
  // WORK_PIRD_DIV_CD / 업무기간구분코드
  const cmmnStore = commonStore()

  if(cmmnStore.getCodeList.value == undefined || cmmnStore.getCodeList.length == 0  ){
    var api = "/v1/common/code";
    var postParams = {codeGrpList:['EDCT_DIV_CD','ENGN_RTNG_DIV_CD','ENGR_INPT_STAT_CD','ENGR_SPRT_STAT_CD'
                                  ,'JOB_DIV_CD','PIRD_DIV_CD','PROJ_STAT_CD','SMS_DIV_CD','SRVD_STAT_CD'
                                  ,'TASK_DIV_CD','WORK_DIV_CD','WORK_PIRD_DIV_CD']};
    //var loading = "";
    //var isErr = "";
    let rtn = await axiosPost(
      api,
      postParams
    );
    // console.log(rtn)
    // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&' + rtn.rtnCd)
    // console.log(cmmnStore.getCodeList.value)
    if(rtn.rtnCd == "00"){
      cmmnStore.setCodeList(rtn.rtnData.codeList)
      return cmmnStore.getCodeList.value[cdName]
    }else{
      console.log("err")    
    }
  }
};


export const getCommCode = async (cdName) => {
  const cmmnStore = commonStore()
  
  if(cmmnStore.getCodeList.value == undefined || cmmnStore.getCodeList.length == 0  ){
    return loadCommCode(cdName)
  }else{
    return cmmnStore.getCodeList.value[cdName]
  }
  
};

// export const setCommCode = (codes) => {
//   console.log("logout")
//   console.log( window.$cookies.get("loginYn"))
//   cmmnStore.setCodeList = codes
// };







/**
 *
 * @param {*} api  //restapi 호출주소
 * @param {*} postParams //파라메터
 * @param {*} loading //로딩바(프로그레스바) 표시 여부
 */
// export const axiosPostWithFile = (
//   api,
//   postParams,
//   formdata,
//   loading,
//   isErr
// ) => {
//   if (typeof loading == "undefined") {
//     loading = true;
//   }
//   if (loading) {
//     store.commit("setLoading", true);
//   }

//   if (typeof isErr == "undefined") {
//     isErr = true;
//   }

//   //var apiUrl = baseUrl + api + ".app";
//   var apiUrl = baseUrl + api;

//   console.log(api);

//   console.log("api post url::::" + apiUrl);
//   console.log("-------param-------");
//   console.log(postParams);
//   console.log(window.$cookies.get("loginAccToken"));
//   axios.defaults.headers.common["Authorization"] =
//     "Bearer " + window.$cookies.get("loginAccToken") || "";

//   return new Promise(function(resolve, reject) {
//     //axiosHttp.post(apiUrl, {body: postParams}).then(
//     // axios.post(apiUrl,  JSON.stringify(postParams) ).then(
//     axios
//       .post(apiUrl, formdata, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       })
//       .then(res => {
//         var resData = res.data;
//         console.log("-------result-------");
//         console.log(resData);

//         if (resData.rtnCd == "00") {
//           // store.commit("setLoading", false);
//           resolve(resData);
//         } else {
//           // store.commit("setLoading", false);
//           console.log("오류");
//           // store.commit("setAlertDialog", true);
//           // openAlertDiaolog("ERROR", resData.rtnMsg);
//           reject(resData);
//         }
//       })
//       .catch(err => {
//         if (loading) {
//           // store.commit("setLoading", false);
//         }
//         console.log(err.response.data);
//         if (isErr) {
//           console.log("Error -----------------------")
//           console.log(err.response.data)
//           console.log(err.response.status)
//           //alert(err.response.status);     
//           console.log("오류");
//           console.log(err.response.data.rtnMsg)
//           console.log(err.response.data.rtnData)
//           if (err.response.status == "404") {
//             // goto 404 page
//             //응답코드별 처리...
//             // openAlertDiaolog(
//             //   "ERROR",
//             //   "오류가 발생하였습니다. (" + err.response.status + ")"
//             // );
//           } else if (err.response.status == "403") {
//             // if ("Landing" != router.currentRoute.name) {
//             //   // openAlertDiaolog("ERROR", "로그인 되어있지 않습니다.");
//             // }

//             router.replace({ name: "Login" });
//           } else if (err.response.status == "400") {
//             // if ("Landing" != router.currentRoute.name) {
//             //   // openAlertDiaolog("ERROR", "로그인 되어있지 않습니다.");
//             // }
//             resolve(err.response.data);
//           } else {
//             // openAlertDiaolog(
//             //   "ERROR",
//             //   "오류가 발생하였습니다. (" + err.response + ")"
//             // );
//             //reject(err.response.data);     
//             resolve(err.response.data);            
//           }
//         }

//         // 스낵바 예제
//         // openSnackbar(err.response.status, "error");
//         // 상세alert 예제
//         // openAlertDiaologWithDetail("ERROR","오류가 발생하였습니다. (" + err.response.status + ")", err.response.data.path);
//         //console.log(err);
//         //reject(err);
//         //alert(err)
//       });
//   });
// };

// export const fileDownloadAxios = (url, fileNm) => {
//   axios({
//     method: "get",
//     url: url,
//     responseType: "arraybuffer"
//   })
//     .then(response => {
//       this.forceFileDownload(response, fileNm);
//     })
//     .catch(() => {
//       openAlertDiaolog("ERROR", "파일 다운로드 중 오류가 발생하였습니다.");
//     });
// };

// export const forceFileDownload = (response, fileNm) => {
//   const url = window.URL.createObjectURL(new Blob([response.data]));
//   const link = document.createElement("a");
//   link.href = url;
//   link.setAttribute("download", fileNm); //or any other extension
//   document.body.appendChild(link);
//   link.click();
// };

/**
 * 쿠기에 로그인 정보 저장
 * @param {*} msg //내용
 * @param {*} bgcolor //바탕색 (생략시 primary)
 */
export const setCookiesLoginUserInfo = item => {
  window.$cookies.config("1d");
  window.$cookies.set("loginYn", "Y");
  window.$cookies.set("loginCompId", item.compId);
  window.$cookies.set("loginUserNm", item.userNm);
  window.$cookies.set("loginUserMail", item.userMail);
  window.$cookies.set("loginHp", item.hp);
  window.$cookies.set("loginCompNm", item.compNm);
  window.$cookies.set("loginAccToken", item.tokn);
};

// export const storeLoginUserInfo = () => {
//   store.commit("setLoginUserId", window.$cookies.get("loginUserId"));
//   store.commit("setLoginUserNm", window.$cookies.get("loginUserNm"));
//   store.commit("setLoginNick", window.$cookies.get("loginNick"));
//   store.commit("setLoginHp", window.$cookies.get("loginHp"));
//   store.commit("setLoginEmal", window.$cookies.get("loginEmal"));
//   store.commit("setLoginAccToken", window.$cookies.get("loginAccToken"));
//   store.commit("setClientId", window.$cookies.get("clientId"));
// };

export const clearCookiesLoginUserInfo = () => {
  window.$cookies.remove("loginYn");
  window.$cookies.remove("loginCompId");
  window.$cookies.remove("loginUserNm");
  window.$cookies.remove("loginUserMail");
  window.$cookies.remove("loginHp");
  window.$cookies.remove("loginEmal");
  window.$cookies.remove("loginCompNm");
  window.$cookies.remove('loginAccToken');
  console.log("logout")
  console.log( window.$cookies.get("loginYn"))
  // store.commit("setLoginUserId", "");
  // store.commit("setLoginUserNm", "");
  // store.commit("setLoginNick", "");
  // store.commit("setLoginHp", "");
  // store.commit("setLoginEmal", "");
  // store.commit("setLoginAccToken", "");
  // store.commit("setClientId", "");
};

/**
 * 공통 스낵바 표시
 * @param {*} msg //내용
 * @param {*} bgcolor //바탕색 (생략시 primary)
 */
export const openSnackbar = (msg, bgcolor) => {
  console.log("공통 스낵바 열기");
  // store.commit("setSnackbarOpen", true);
  // store.commit("setSnackbarMsg", msg);
  // console.log(store.getters.snackbarOpen);
  if (typeof bgcolor != "undefined" && bgcolor.length > 0) {
    // store.commit("setSnackbarColor", bgcolor);
  }
};

/**
 * 공통 alert표시 (상세내용 없음)
 * @param {*} title //제목
 * @param {*} msg //메세지
 */
// export const openAlertDiaolog = (title, msg) => {
//   console.log("공통 알림 열기");
//   store.commit("setAlertTitle", title);
//   store.commit("setAlertMsg", msg);
//   store.commit("setAlertDetail", "");
//   store.commit("setAlertDialog", true);
// };

/**
 * 공통 alert표시 (상세내용 포함)
 * @param {*} title //제목
 * @param {*} msg //메세지
 * @param {*} detail //상세메세지
 */
// export const openAlertDiaologWithDetail = (title, msg, detail) => {
//   store.commit("setAlertDialog", true);
//   store.commit("setAlertTitle", title);
//   store.commit("setAlertMsg", msg);
//   store.commit("setAlertDetail", detail);
// };

/**
 * 날짜 포멧 변환
 * @param {*} date //날짜
 * @param {*} formatString //날짜포멧 스트링
 */
export const formatDate = (date, formatString) => {
  //var apiUrl = baseUrl + api + ".app";
  return moment(date).format(formatString);
};

/**
 * 날짜 계산
 * @param {*} date //날짜
 * @param {*} formatString //날짜포멧 스트링
 */
export const calDate = (date, div, num) => {
  //var apiUrl = baseUrl + api + ".app";
  var rtnDt = "";
  if (!moment(date, "YYYY-MM-DD").isValid()) {
    openSnackbar("날짜 형식이 잘못 되었습니다. [" + date + "]", "error");
    return;
  } else {
    if ("Y" == div || "y" == div) {
      rtnDt = moment(date).add(num, "y");
    } else if ("M" == div || "m" == div) {
      rtnDt = moment(date).add(num, "M");
    } else if (("D" == div) | ("d" == div)) {
      rtnDt = moment(date).add(num, "d");
    }

    return moment(rtnDt).format("YYYY-MM-DD");
  }
};

/**
 * 페이지 표시 제목 설정
 * @param {*} pageTitle //페이지 제목
 */
// export const setPageTitle = pageTitle => {
//   //var apiUrl = baseUrl + api + ".app";
//   store.commit("setPageName", pageTitle);
//   //alert(store.getters.appCurrentPage);
// };

/**
 *  라우터를 이용한 페이지 제목 설정
 */
// export const setPageTitleRoute = () => {
//   //var apiUrl = baseUrl + api + ".app";
//   var pageName = this.$router.currentRoute.name;
//   console.log(pageName);
//   store.commit("setPageName", "");
//   //alert(store.getters.appCurrentPage);
// };
// export const setPageTitleRoute = () => {
//   //var apiUrl = baseUrl + api + ".app";
//   var pageName = router.currentRoute.name;
//   var pageTitle = "";
//   //console.log(store.getters.menuList);
//   if(!store.getters.menuList) return "";
//   store.getters.menuList.filter(item =>  item.children.filter(child => (child.menuCd == pageName ? pageTitle = child.menuNm : "") ) )
//   store.commit("setPageName", pageTitle);
//   //alert(store.getters.appCurrentPage);
// }



/**
 * 
 */
// export const getMenuList = async (ignoreExistYn) => {

//   try {
//     if ( ignoreExistYn == false && store.getters.menuList.length > 0) {
//       console.log("menuList exist");
//     } else {
//       console.log("!!!!!!!!!!!!!!!  loading menu !!!!!!!!!!!!!!!!!!!");
    
//       var params = { "adminId": window.$cookies.get("loginUserId") };
      
//       let res = await axiosPost("/admin/auth/srchAuthMenuList",params);

//       console.log("$$$$$$$$$$$$$$$$$$$$get Menu$$$$$$$$$$$$$$$$$$$$    ");
//       console.log(res);

//       store.commit("setMenuList", res.menuList.children);  

//       store.commit("setHasMenuList", true);

//       setPageTitleRoute();
//     }
//   } catch (error) {
//     store.commit("setHasMenuList", false);
//     console.log(error);     
//   }
// }
/**
 *
 */
/*
export const getMenuList = async () => {

  console.log("!!!!!!!!!!!!!!!  loading menu !!!!!!!!!!!!!!!!!!!");
  try {

    var params = {};
    params = {"authCd" : "00"};
    
    let res = await axiosPost("/system/srchAuthMenuList.sys",params);

    // console.log(res);

    store.commit(types.SET_MENU_LIST, res.menuList.children);  

  } catch (error) {
    console.log(error);     
  }
}
*/

/**
 *
 */
// export const getCommCodeList = async () => {
//   try {
//     if (store.getters.commCode.length > 0 && store.hasCommCode == true) {
//       console.log("code exist");
//     } else {
//       console.log("!!!!!!!!!!!!!!!  loading code List !!!!!!!!!!!!!!!!!!!");

//       var params = {};
//       // params = { grupCd: grupCd };

//       let res = await axiosPost("/admin/common/srchUseCmonCdList", params);
      
//       console.log("!!!!!!!!!!!!!!!  loading code List Result !!!!!!!!!!!!!!!!!!!");
//       console.log(res.cmonCdList);
//       console.log("!!!!!!!!!!!!!!!  loading code List Result !!!!!!!!!!!!!!!!!!!");
//       store.commit("setCommCode", res.cmonCdList);
//       store.commit("setHasCommCode", true);
//       console.log(res.cmonCdList);
//     }
//   } catch (error) {
//     store.commit("setHasCommCode", false);
//     console.log(error);
//   }
// };

/**
 *
 */
//  export const getCatCodeList = async () => {
//   try {
//     if (store.getters.catCode.length > 0 && store.hasCatCode == true) {
//       console.log("Cat code exist");
//     } else {
//       console.log("!!!!!!!!!!!!!!!  loading Cat code List !!!!!!!!!!!!!!!!!!!");

//       var params = {};
//       // params = { grupCd: grupCd };

//       let res = await axiosPost("/admin/common/srchUseCatCdList", params);

//       console.log(res.catCdList);
//       store.commit("setCatCode", res.catCdList);
//       store.commit("setHasCatCode", true);
//       console.log(res.catCdList);
//     }
//   } catch (error) {
//     store.commit("setHasCatCode", false);
//     console.log(error);
//   }
// };

// export const getCatchildCodeList = async () => {
//   try {
//     if (store.getters.catChildCode.length > 0 && store.hasCatChildCode == true) {
//       console.log("Cat code exist");
//     } else {
//       console.log("!!!!!!!!!!!!!!!  loading Cat code List !!!!!!!!!!!!!!!!!!!");

//       var params = {};
//       // params = { grupCd: grupCd };

//       let res = await axiosPost("/admin/common/srchUseCatChildCdList", params);

//       console.log(res.catChildCdList);
//       store.commit("setCatChildCode", res.catChildCdList);
//       store.commit("setHasCatChildCode", true);
//       console.log(res.catChildCdList);
//     }
//   } catch (error) {
//     store.commit("setHasCatChildCode", false);
//     console.log(error);
//   }
// };

// export const numberComma = async (value) => {
//   const rtnValue = value;
//   return String(rtnValue).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// };

// export const numberOnly = async (value) => {
//   const rtnValue = value;
//   return String(rtnValue).replace(/[^\d]+/g, '');
// };
