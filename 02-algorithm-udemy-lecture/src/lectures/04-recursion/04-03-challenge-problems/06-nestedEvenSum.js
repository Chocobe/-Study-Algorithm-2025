/**
 * 문제6: nestedEvenSum이라는 재귀 함수를 작성하시오.
 * => 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.
 */

/**
 * @example
 * nestedEvenSum(obj1) === 6
 * nestedEvenSum(obj2) === 10
 */

/**
 * @param { object } obj
 * @returns { number }
 */
export function nestedEvenSum(obj) {
  // 결과값 변수 만들기
  let result = 0;
  // Object.values 로 모든 value 추출하기
  const values = Object.values(obj);

  // 추출한 value 를 순회하며,
  for (const value of values) {
    // value 가 obj 라면,
    if (isRecord(value)) {
      // 재귀 호출하고, 결과값에 더하기
      result += nestedEvenSum(value);
    }
    // value 가 number && value 가 짝수라면,
    else if (value % 2 === 0) {
      // 결과값에 더하기
      result += value;
    }
  }

  // 결과값 반환하기
  return result;
};

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
