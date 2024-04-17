import axios from "axios";
import moment from "moment";
// import { store } from "@/store";
import router from "@/routes";

//const baseUrl = process.env.NODE_ENV === "production" ? "http://drs.pe.kr:28080" : "";
const baseUrl = "";

/**
 *
 * @param {*} api //restapi 호출주소
 * @param {*} getParams //파라메터
 */
export const axiosGet = (api, getParams) => {
  // store.commit("setLoading", true);
  // var apiUrl = baseUrl + api+ ".sys";
  var apiUrl = baseUrl + api;
  console.log("api post url::::" + apiUrl);
  console.log("-------param-------");
  console.log(getParams);
  return new Promise(function(resolve, reject) {
    axios
      .get(apiUrl, { params: getParams })
      .then(res => {
        if (res.status === 200) {
          var resData = res.data;
          console.log("-------result-------");
          console.log(resData.data);

          if (resData.rtnCd == "00") {
            // store.commit("setLoading", false);
            resolve(resData.rtnData);
          } else {
            // openAlertDiaolog("ERROR", resData.rtnMsg);
            // store.commit("setLoading", false);
            reject();
            console.log("오류");
          }
        }
      })
      .catch(err => {
        // store.commit("setLoading", false);
        console.log("오류");
        console.log(err);
        // openAlertDiaolog(
        //   "ERROR",
        //   "오류가 발생하였습니다. (" + err.response.status + ")"
        // );
        //alert(err);
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
  //var apiUrl = baseUrl + api;

  //var apiUrl = "http://localhost:28080" + api;//dev
  var apiUrl = "http://dev.l-walk.com:29080" + api;//dev
  //var apiUrl = "https://geteyes.l-walk.com:29080" + api;//live

  console.log("gogo");
  console.log(api);
  console.log("api post url::::" + apiUrl);
  console.log("-------param-------");
  console.log(postParams);
  console.log(window.$cookies.get("loginAccToken"));
  if (window.$cookies.get("loginAccToken") != null) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + window.$cookies.get("loginAccToken") || "";
  }

  return new Promise(function(resolve, reject) {
    //axiosHttp.post(apiUrl, {body: postParams}).then(
    // axios.post(apiUrl,  JSON.stringify(postParams) ).then(
    axios
      .post(apiUrl, postParams)
      .then(res => {
        var resData = res.data;
        console.log("-------result-------");
        console.log(resData);

        // if (resData.rtnCd == "00") {
        //   store.commit("setLoading", false);
        //   resolve(resData.rtnData);
        // } else {
        //   store.commit("setLoading", false);
        //   console.log("오류");
        //   store.commit("setAlertDialog", true);
        //   openAlertDiaolog("ERROR", resData.rtnMsg);
        //   reject(res);
        // }
      })
      .catch(err => {
        if (loading) {
          // store.commit("setLoading", false);
        }

        if (isErr) {
          // console.log(err.response.data);
          // console.log(err.response.status);
          // console.log(err.response.headers);
          if (err.response.status == "404") {
            //응답코드별 처리...
            // openAlertDiaolog(
            //   "ERROR",
            //   "오류가 발생하였습니다. (" + err.response.status + ")"
            // );
          } else if (err.response.status == "403") {
            if ("Landing" != router.currentRoute.name) {
              // openAlertDiaolog("ERROR", "로그인 되어있지 않습니다.");
            }

            router.replace({ name: "Login" });
          } else {
            // openAlertDiaolog(
            //   "ERROR",
            //   "오류가 발생하였습니다. (" + err.response + ")"
            // );
          }
        }

        // 스낵바 예제
        // openSnackbar(err.response.status, "error");
        // 상세alert 예제
        // openAlertDiaologWithDetail("ERROR","오류가 발생하였습니다. (" + err.response.status + ")", err.response.data.path);
        //console.log(err);
        reject(err);
        //alert(err)
      });
  });
};

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
//           store.commit("setLoading", false);
//           resolve(resData.rtnData);
//         } else {
//           store.commit("setLoading", false);
//           console.log("오류");
//           store.commit("setAlertDialog", true);
//           openAlertDiaolog("ERROR", resData.rtnMsg);
//           reject(res);
//         }
//       })
//       .catch(err => {
//         if (loading) {
//           store.commit("setLoading", false);
//         }

//         if (isErr) {
//           // console.log(err.response.data);
//           // console.log(err.response.status);
//           // console.log(err.response.headers);
//           if (err.response.status == "404") {
//             //응답코드별 처리...
//             openAlertDiaolog(
//               "ERROR",
//               "오류가 발생하였습니다. (" + err.response.status + ")"
//             );
//           } else if (err.response.status == "403") {
//             if ("Landing" != router.currentRoute.name) {
//               openAlertDiaolog("ERROR", "로그인 되어있지 않습니다.");
//             }

//             router.replace({ name: "Login" });
//           } else {
//             openAlertDiaolog(
//               "ERROR",
//               "오류가 발생하였습니다. (" + err.response + ")"
//             );
//           }
//         }

//         // 스낵바 예제
//         // openSnackbar(err.response.status, "error");
//         // 상세alert 예제
//         // openAlertDiaologWithDetail("ERROR","오류가 발생하였습니다. (" + err.response.status + ")", err.response.data.path);
//         //console.log(err);
//         reject(err);
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
  window.$cookies.config("7d");
  window.$cookies.set("loginUserId", item.adminId);
  window.$cookies.set("loginUserNm", item.userNm);
  window.$cookies.set("loginNick", item.nick);
  window.$cookies.set("loginHp", item.hp);
  window.$cookies.set("loginEmal", item.emal);
  //파라메터의 소문자확인
  window.$cookies.set("loginAccToken", item.acctoken);
  window.$cookies.set("clientId", item.clientid);
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
  window.$cookies.remove("loginUserId");
  window.$cookies.remove("loginUserNm");
  window.$cookies.remove("loginNick");
  window.$cookies.remove("loginHp");
  window.$cookies.remove("loginEmal");
  window.$cookies.remove("loginAccToken");
  window.$cookies.remove('clientId');

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
