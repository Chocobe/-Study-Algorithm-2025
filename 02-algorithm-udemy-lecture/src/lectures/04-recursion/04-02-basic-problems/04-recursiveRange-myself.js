/**
 * 문제4: 숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는
 * => recursiveRange라는 함수를 작성하시오.
 * 
 * @example
 * recursiveRange(6) === 21
 * recursiveRange(10) === 55 
 */

/**
 * @param { number } max
 * @returns { number }
 */
export function recursiveRange(max) {
  // (Base Case) max 가 0 이라면, 0 반환하기
  if (max === 0) {
    return 0;
  }

  // max + recursiveRange(max - 1) 연산 결과 반환하기
  return max + recursiveRange(max - 1);
};
