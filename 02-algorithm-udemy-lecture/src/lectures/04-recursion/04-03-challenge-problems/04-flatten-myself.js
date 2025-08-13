/**
 * 문제4: 배열의 배열을 받아들이고 모든 값이 평활화(flattened)된
 * => 새 배열을 반환하는 flatten이라는 재귀(recursive ) 함수를 작성합니다.
 * 
 * @example
 * flatten([1, 2, 3, [4, 5] ]) === [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, 4], [[5]]]]) === [1, 2, 3, 4, 5]
 * flatten([[1],[2],[3]]) === [1,2,3]
 * flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) === [1,2,3]
 */

/**
 * @param { Array<any> } nestedArr
 * @returns { number[] }
 */
export function flatten(nestedArr) {
  // nestedArr 가 배열이 아니면, [nestedArr] 반환하기
  if (!Array.isArray(nestedArr)) {
    return [nestedArr];
  }

  // 결과 배열 만들기
  let result = [];

  // nestedArr 를 순회하며,
  for (const value of nestedArr) {
    // 재귀 호출하고,
    const subArr = flatten(value);
    // 결과 배열에 concat 하기
    result = result.concat(subArr);
  }

  // 결과 배열 반환하기
  return result;
}
