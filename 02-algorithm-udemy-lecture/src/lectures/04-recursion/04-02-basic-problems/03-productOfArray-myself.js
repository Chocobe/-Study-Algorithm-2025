/**
 * 문제3: 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.
 * 
 * @example
 * productOfArray([1, 2, 3]) === 6
 * productOfArray([1, 2, 3, 10]) === 60
 */

/**
 * @param { number[] } arr
 * @returns { number }
 */
export function productOfArray(arr) {
  // (Base Case) arr.length 가 없다면 null 반환하기
  if (arr.length === 0) {
    return null;
  }

  // (Base Case) arr.length 가 1이라면, arr[0] 반환하기
  if (arr.length === 1) {
    return arr[0];
  }

  // arr[0] * productOfArray[productOfArray.slice(1)] 반환하기
  return arr[0] * productOfArray(arr.slice(1));
};
