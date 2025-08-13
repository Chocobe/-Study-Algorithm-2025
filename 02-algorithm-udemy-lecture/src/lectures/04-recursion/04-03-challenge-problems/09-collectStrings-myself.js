/**
 * 객체를 받아들이고 문자열에 해당하는 모든 값의 배열을 반환하는
 * => collectStrings라는 함수를 작성합니다.
 */

/**
 * 
 * @param { object} obj 
 * @returns { string[] }
 */
export function collectStrings(obj) {
  // 결과 배열 만들기
  let result = [];

  // Object.value 추출하기
  const values = Object.values(obj);

  // values 를 순회하면서,
  for (const value of values) {
    // Record 도는 Array 라면, 
    if (isRecordOrArray(value)) {
      // 재귀 호출하기
      const subArr = collectStrings(value);
      // 재귀 결과를 결과 배열에 추가하기
      result = result.concat(subArr);
    }
    // String 이라면,
    else if (isString(value)) {
      // 결과 배열에 추가하기
      result.push(value);
    }
  }

  // 결과 배열 반환하기
  return result;
}

function isRecordOrArray(value) {
  if (value !== Object(value)) {
    return false;
  }

  if (value === null) {
    return false;
  }

  return true;
}

function isString(value) {
  return value === String(value);
}
