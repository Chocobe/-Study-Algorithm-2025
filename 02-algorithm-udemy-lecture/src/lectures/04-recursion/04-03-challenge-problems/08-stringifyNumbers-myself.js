/**
 * 문제8: 객체를 받아 숫자인 모든 값을 찾아 문자열로 변환하는 StringifyNumbers라는 함수를 작성하시오.
 * => 재귀(Recursion) 함수는 이 문제를 해결하는 좋은 방법이 될 것입니다!
 */

// export function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

/**
 * @param { object } obj
 * @returns { object }
 */
export function stringifyNumbers(obj) {
  // NOTE: newObj 를 안만들고, obj 를 직접 수정한 결과,
  // NOTE => Udemy 테스트에서는 실패함
  // 반환 객체 만들기
  const newObj = {};

  // Object.entries 로 [key, value] 추출하기
  const entries = Object.entries(obj);

  // entries 를 순회하며,
  for (const [key, value] of entries) {
    // value 가 number 라면,
    if (typeof value === 'number') {
      // obj[key] = String(value) 적용하기
      newObj[key] = String(value);
    }
    // value 가 object 라면,
    else if (typeof value === 'object' && !Array.isArray(value)) {
      // obj[key] 에 재귀 호출하고, obj[key] 에 적용하기
      newObj[key] = stringifyNumbers(value);
    }
    // 그 외는,
    else {
      // 그대로 적용하기
      newObj[key] = value;
    }
  }

  // 반환 객체 반환하기
  return newObj;
};
