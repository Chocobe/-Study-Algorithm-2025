/**
 * 문제8: 객체를 받아 숫자인 모든 값을 찾아 문자열로 변환하는 StringifyNumbers라는 함수를 작성하시오.
 * => 재귀(Recursion) 함수는 이 문제를 해결하는 좋은 방법이 될 것입니다!
 */

/**
 * @param { object } obj
 * @returns { object }
 */
export function stringifyNumbers(obj) {
  // Object.entries 로 [key, value] 추출하기
  const entries = Object.entries(obj);

  // entries 를 순회하며,
  for (const [key, value] of entries) {
    // value 가 number 라면,
    if (isNumber(value)) {
      // obj[key] = String(value) 적용하기
      obj[key] = String(value);
    }
    else if (Array.isArray(value)) {
      obj[key] = value.map(v => String(v));
    }
    // value 가 object 라면,
    else if (isRecord(value)) {
      // obj[key] 에 재귀 호출하고, obj[key] 에 적용하기
      obj[key] = stringifyNumbers(value);
    }
  }

  // obj 반환하기
  return obj;
};

function isNumber(value) {
  return !Array.isArray(value) 
    && !!String(value).match(/^[0-9]+$/);
}

function isRecord(value) {
  if (value !== Object(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    return false;
  }

  if (value === null) {
    return false;
  }

  return true;
}
