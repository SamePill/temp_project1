export const required = value => {
  return !!value ||  false//"필수입력입니다.";
};

export const maxLength = (value, ln) => {
  return ((value || "") + "").length <= ln || ln + "자 이내로 입력하세요.";
};

export const minLength = (value, ln) => {
  return (
    ((value || "") + "").length >= ln ||
    ((value || "") + "").length == 0 ||
    ln + "자 이상으로 입력하세요."
  );
};

export const validEmail = value => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return   (
    pattern.test(value) ||
    (value || "").length == 0 ||
    false //"잘못된 이메일 형식입니다." 
  );
};

export const validPwd = value => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
  return   (
    pattern.test(value) ||
    (value || "").length == 0 ||
    false //"잘못된 패스워드 형식입니다." 
  );
};

export const validName = value => {
  const pattern = /^[가-힣a-zA-Z]*$/
  return pattern.test(value) || (value || "").length == 0 || false //"영문과 한글만 입력가능 합니다.";
}

export const validHp = value => {
  const pattern = /^010[0-9]{7,8}$/
  return pattern.test(value) || (value || "").length == 0 || false //"휴대전화번호 규칙이 어긋납니다.";
}




export const number = value => {
  console.log("number  :::::::::" + value);
  if(value == null ){
    return ;
  }
  if(typeof value == "undefined" ){
    return ;
  }
  if(value.length == 0 ){
    return ;
  }
  const pattern = /[^0-9]/;
  return !pattern.test(value) || "숫자만 입력가능 합니다.";
};

export const num = value => {
  console.log("number  :::::::::" + value);
  if(value == null ){
    return ;
  }
  if(typeof value == "undefined" ){
    return ;
  }
  if(value.length == 0 ){
    return ;
  }
  const pattern = /[^0-9,]/g;
  return !pattern.test(value) || "숫자만 입력가능 합니다.";
};

export const eng = value => {
  const pattern = /[^a-zA-Z]/;
  return !pattern.test(value) || "영문자만 입력가능 합니다.";
};

export const engNum = value => {
  const pattern = /[^a-zA-Z0-9]/;
  return !pattern.test(value) || "영문과 숫자만 입력가능 합니다.";
};

export const korEng = value => {
  const pattern = /^[가-힣a-zA-Z]*$/
  return !pattern.test(value) || false //"영문과 한글만 입력가능 합니다.";
}

export const isNull = str => {
  var type = typeof str;

  if (type === undefined || str === null) {
    return true;
  }

  if (type === "string" && str.trim() == "") {
      return true;
  }

  return false;
};


export const isEmptyList = arr => {
  var type = typeof arr;

  if (!arr || type === "undefined" || arr === null) {
    return true;
  }

  if (type !== 'object') {
      return true;
  }

  if (arr.length > 0) {
      return false;
  }

  return false;
};