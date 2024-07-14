export const required = value => {
  return !!value ||  false //"필수입력입니다.";
};

export const maxLength = (value, ln) => {
  return ((value || "") + "").length <= ln 
  || false //ln + "자 이내로 입력하세요.";
};

export const minLength = (value, ln) => {
  return (
    ((value || "") + "").length >= ln ||
    ((value || "") + "").length == 0 ||
    false //ln + "자 이상으로 입력하세요."
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


export const  validBizRegNo = businessNumber => {
  // 형식 검증
  /*
  const regex = /^\d{3}-\d{2}-\d{5}$/;  

  if (!regex.test(businessNumber)) {
    return false;
  }

  // 하이픈 제거
  const digits = businessNumber.replace(/-/g, '');

  // 가중치
  const weights = [1, 3, 7, 1, 3, 7, 1, 3, 5];

  // 가중치 합 계산
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i] * parseInt(digits[i], 10);
  }

  // 마지막 숫자는 나머지를 구한 뒤에 더함
  const checkSum = sum + Math.floor((weights[8] * parseInt(digits[8], 10)) / 10);

  // 유효성 검증
  const isValid = (10 - (checkSum % 10)) % 10 === parseInt(digits[9], 10);
  
  
  return isValid || (value || "").length == 0 || false;
  */
  // 임시 리턴
  const regex = /^\d+$/;
  return regex.test(businessNumber) || (businessNumber || "").length == 0 || false
}


export const number = value => {
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

  if (type === undefined || str === null || str === undefined) {
    return true;
  }

  if (type === "string" && str.trim() == "") {
      return true;
  }

  return false;
};

export const regexEmail = value => {
  return value.replace(/[^a-zA-Z0-9@.-_]/g, '');
}


export const regrexKoEnNo = value => {
  return value.replace(/[^가-힣a-zA-Z0-9]/g, '')
}


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