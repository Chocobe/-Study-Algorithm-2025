/**
 * NOTE: Recurive Fnction (재귀 함수)
 * => 함수 내부에서 자기 자신을 호출하는 형태의 함수를 재귀 함수라고 한다.
 * 
 * NOTE: 재귀 함수의 주요 사항
 * => 1. 조건부 Base Case (중단점) 이 있어야 한다
 * => 2. 조건부 자기 자신을 호출한다.
 */

/**
 * 예시1: 재귀 함수로 Factorial 연산 함수 구현하기
 */

/**
 * @param { number } num
 * @returns { number }
 */
export function factorial(num) {
  // num 이 1이라면, 1 반환하기
  if (num < 2) {
    return num;
  }

  // num 에 factorial(num - 1) 을 연산하고, 반환한다
  return num * factorial(num - 1);
};

/**
 * @param { number } num
 * @returns { number }
 */
export function factorial_loop(num) {
  if (num < 2) {
    return num;
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};
