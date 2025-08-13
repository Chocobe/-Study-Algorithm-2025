/**
 * 문제2: 문자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.
 * => 팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.
 * => 예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 24입니다. 팩토리얼 0(0!)은 항상 1입니다.
 * 
 * @example
 * factorial(1) === 1
 * factorial(2) === 2
 * factorial(4) === 24
 * factorial(7) === 5040
 */

/**
 * @param { number } num
 * @returns { number }
 */
export function factorial(num) {
  // (Base Case) num 이 1 보다 작다면, 1 반환하기
  if (num < 1) {
    return 1;
  }

  // num * factorial(num - 1) 값 반환하기
  return num * factorial(num - 1);
};
