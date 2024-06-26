import axios from "axios";
import moment from "moment";
// import { store } from "@/store";
//import router from "@/routes";
import { useRouter } from 'vue-router'
const router = useRouter()
import { commonStore, systemStore} from '@/stores'

const addrApiKey = "devU01TX0FVVEgyMDI0MDYxMjEwMjY1MDExNDgzNjI="  //devKey

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
  router.push({name :uri})
}

export const routerReplace = (uri) => {
  router.replace({name :uri})
}

/**
 *
 * @param {*} api //restapi 호출주소
 * @param {*} getParams //파라메터
 */
export const axiosGet = (api, getParams, loading ) => {
  const sysStore = systemStore();

  if (typeof loading == "undefined") {
    loading = true;
  }
  if (loading) {
    sysStore.setProgress(true);    
  }

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
        sysStore.setProgress(false);
        if (res.status === 200) {
          var resData = res.data;
          // console.log("-------result-------");
          // console.log(resData.data);

          if (resData.rtnCd == "00") {
            // store.commit("setLoading", false);
            // resolve(resData.rtnData);
            resolve(resData);
          } else {
            console.log("에러!!!!!!!!!!!!!!!!");
            // openAlertDiaolog("ERROR", resData.rtnMsg);
            // store.commit("setLoading", false);
            // reject(resData);
            resolve(resData);
          }
        }
      })
      .catch(err => {
        if (loading) {
          sysStore.setProgress(false);
        }
        console.log("err catch 에러!!!!!!!!!!!!!!!!" + isErr);
        console.log(err.response.data);
        if (isErr) {
          // console.log("Error -----------------------")
          // console.log(err.response.data)
          // console.log(err.response.status)
          //alert(err.response.status);     
          // console.log("오류");
          console.log(err.response.data.rtnMsg)
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
        }else{
          resolve(err.response.data);            
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
export const axiosPost = (api, postParams, queryParam, loading, isErr, withFile) => {
  const sysStore = systemStore();

  if (typeof loading == "undefined") {
    loading = true;
  }
  if (loading) {
    sysStore.setProgress(true);    
  }

  if (typeof isErr == "undefined") {
    isErr = true;
  }
  if (typeof queryParam == "undefined") {
    queryParam = "";
  }
  if (typeof withFile == "undefined") {
    withFile = false;
  }

  //var apiUrl = baseUrl + api + ".app";
  var apiUrl = baseUrl + api;

  //var apiUrl = "http://localhost:28080" + api;//dev
  //var apiUrl = "http://dev.l-walk.com:29080" + api;//dev
  //var apiUrl = "https://geteyes.l-walk.com:29080" + api;//live

  // console.log("gogo");
  // console.log(api);
  console.log("api post url::::" + apiUrl);
  // console.log("-------param-------");
  // console.log(postParams);
  // console.log(window.$cookies.get("loginAccToken"));

  if(withFile){
    axios.defaults.headers.common["Content-Type"] = "multipart/form-data"
  }else{
    axios.defaults.headers.common["Content-Type"] = "application/json"
  }
  
  
  
  if (window.$cookies.get("loginAccToken") != null) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + window.$cookies.get("loginAccToken") || "";
  }
  
  return new Promise(function(resolve, reject) {
    axios
      .post(apiUrl, postParams , { params: queryParam })
      .then(res => {
        var resData = res.data;
        // console.log("-------result-------");
        // console.log(resData);
        sysStore.setProgress(false);

        if (resData.rtnCd == "00") {          
          if(api == "/v1/auth/login"){
            setCookiesLoginUserInfo(resData.rtnData)
          } 
          //resolve(resData.rtnData);
          resolve(resData);
        } else {
          //store.commit("setLoading", false);
          // console.log("오류");
          //store.commit("setAlertDialog", true);
          //openAlertDiaolog("ERROR", resData.rtnMsg);
          reject(resData);
          // resolve(resData);
        }
      })
      .catch(err => {

        if (loading) {
          sysStore.setProgress(false);
        }
        console.log(err.response);
        if (isErr) {
          console.log("Error -----------------------")
          console.log(err.response.data)
          console.log(err.response.status)
          //alert(err.response.status);     
          // console.log("오류");
          console.log(err.response.data.rtnMsg)
          console.log(err.response.data.rtnData)
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


/**
 *
 * @param {*} api //restapi 호출주소
 * @param {*} getParams //파라메터
 */
export const axiosGetEx = (api, getParams, div, loading) => {
  const sysStore = systemStore();
  if (typeof loading == "undefined") {
    loading = true;
  }
  if (loading) {
    sysStore.setProgress(true);    
  }

  if(div == "addr"){
    getParams.confmKey = addrApiKey
  }
  console.log(getParams)

  var apiUrl =  api;
  axios.defaults.headers.common["Content-Type"] = "application/json"
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  return new Promise(function(resolve, reject, isErr) {
    if (typeof isErr == "undefined") {
      isErr = true;
    }
    
    axios
      .get(apiUrl, {"params": getParams}, 
          {headers: { // remove headers
            }}
        )
      .then(res => {
        sysStore.setProgress(false);
        if (res.status === 200) {
          var resData = res;
          // console.log("-------result-------");
          console.log(resData);

          resolve(resData);
          
        }
      })
      .catch(err => {
        if (loading) {
          sysStore.setProgress(false);
        }
        console.log("err catch 에러!!!!!!!!!!!!!!!!" + isErr);
        console.log(err.response);
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
        }else{
          resolve(err.response.data);            
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
export const axiosPostEx = (api, postParams, loading, isErr) => {
  const sysStore = systemStore();
  
  if (typeof loading == "undefined") {
    loading = true;
  }
  if (loading) {
    sysStore.setProgress(true);    
  }

  if (typeof isErr == "undefined") {
    isErr = true;
  }

  var apiUrl = api;
  console.log("-=--------------------------------------=-")
  console.log(apiUrl)
  console.log(postParams)
  axios.defaults.headers.common["Content-Type"] = "multipart/form-data"
  
  return new Promise(function(resolve, reject) {
    axios
      .post(apiUrl,  { "data" : postParams} ,{dataType: "json"} , {crossDomain: true})
      .then(res => {
        sysStore.setProgress(false);
        var resData = res.data;
        console.log("-------result-------");
        console.log(resData);

        if (resData.rtnCd == "00") {
          //resolve(resData.rtnData);
          resolve(resData);
        } else {
          //store.commit("setLoading", false);
          // console.log("오류");
          //store.commit("setAlertDialog", true);
          //openAlertDiaolog("ERROR", resData.rtnMsg);
          reject(resData);
          // resolve(resData);
        }
      })
      .catch(err => {
        if (loading) {
          sysStore.setProgress(false);
        }
        console.log(err);
        console.log(err.response);
        if (isErr) {
          console.log("Error -----------------------")
          //console.log(err.response.data)
          //console.log(err.response.status)
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




export const loadCommCode = async () => {
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

  console.log("#### 코드 정보 조회")

  if(cmmnStore.getCodeList == undefined || cmmnStore.getCodeList.length == 0  ){
    var api = "/v1/common/code";
    var postParams = {codeGrpList:['EDCT_DIV_CD','ENGR_RTNG_DIV_CD','ENGR_INPT_STAT_CD','ENGR_SPRT_STAT_CD'
                                  ,'JOB_DIV_CD','PIRD_DIV_CD','PROJ_STAT_CD','SMS_DIV_CD','SRVD_STAT_CD'
                                  ,'TASK_DIV_CD','WORK_DIV_CD','WORK_PIRD_DIV_CD','PROJ_CHCK_DIV_CD']};
    //var loading = "";
    //var isErr = "";
    let rtn = await axiosPost(
      api,
      postParams
    );
    console.log(rtn)
    // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&' + rtn.rtnCd)
    
    if(rtn.rtnCd == "00"){

      let codeList = rtn.rtnData.codeList

      let sort0 =  [{cd: '20', cdNm: '등록순'} ,{cd: '30', cdNm: '진행순'} ,{cd: '30', cdNm: '완료순'}]
      let sort1 =  [{cd: '10', cdNm: '지원순'} ,{cd: '20', cdNm: '경력높은순'} ,{cd: '30', cdNm: '경력낮은순'}]
      let sort2 =  [{cd: '40', cdNm: '등록순'} ,{cd: '20', cdNm: '경력높은순'} ,{cd: '30', cdNm: '경력낮은순'}]
      let sort3 =  [{cd: '10', cdNm: '지원순'} ,{cd: '20', cdNm: '등록순'} ,{cd: '30', cdNm: '진행순'} ,{cd: '40', cdNm: '완료순'}]
      
      codeList.REG_PRJT_SORT = sort0
      codeList.SEL_ENGR_SORT = sort1
      codeList.MNG_ENGR_SORT = sort2
      codeList.APL_PRJT_SORT = sort3

      console.log(codeList)
      cmmnStore.setCodeList(rtn.rtnData.codeList)
      //return cmmnStore.getCodeList
    }else{
      console.log("err")    
    }
  }
};


export const getCommCode = async (cdName) => {
  console.log("--------------"+cdName)
  const cmmnStore = commonStore()

  if(cmmnStore.getCodeList == undefined || cmmnStore.getCodeList.length == 0  ){
    await loadCommCode(cdName)
  }

  let vl =""
  if(cmmnStore.getCodeList[cdName] == undefined){
    console.log("!!!!!!!!!!!!! 코드 없음..... :: " + cdName)
  }else{
    vl = JSON.stringify(cmmnStore.getCodeList[cdName])
    vl = JSON.parse(vl)
  }
  
  return vl
  
};


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
 * 공통 Alert 표시
 * @param {*} msg //내용
 * @param {*} bgcolor //바탕색 (생략시 primary)
 */
export const openAlert = ( msg, title, timeout) => {
  const sysStore = systemStore();
  
  if (typeof title == "undefined") {
    title = "";
  }
  if (typeof timeout == "undefined") {
    timeout = 0;
  }

  sysStore.setAlert(true)
  sysStore.setAlertMsg(msg)
  
  if(timeout > 0){
    setTimeout(function(){
      sysStore.setAlert(false)
    }, timeout);
  }
 
};




/**
 * 날짜 포멧 변환
 * @param {*} date //날짜
 * @param {*} formatString //날짜포멧 스트링
 */
export const formatDate = (date, formatString) => {
  //var apiUrl = baseUrl + api + ".app";
  if(date != null){
    if(formatString == '년월일'){
      return date.slice(0, 4)+'년 ' + date.slice(4, 6)+ '월 ' + date.slice(6, 8)+ '일'
    }else{
      return moment(date).format(formatString);
    }
  }
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
    openAlert("날짜 형식이 잘못 되었습니다. [" + date + "]", "error", 3000);
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
 * 숫자 천단위 , 표시
 */
export const formattedNumber = (value) => {
  return new Intl.NumberFormat().format(value);
}

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

