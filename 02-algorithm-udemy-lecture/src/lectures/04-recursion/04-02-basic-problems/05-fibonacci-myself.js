/**
 * 문제5: 숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하시오. 
 * => 피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며,
 * => 모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.
 * 
 * @example
 * fibonacci(4) === 3
 * fibonacci(10) === 55
 * fibonacci(28) === 317811
 * fibonacci(35) === 9227465
 */

/**
 * @param { number } order
 * @return { number }
 */
export function fibonacci(order) {
  // (Base Case) order 가 3 보다 작다면,
  if (order < 3) {
    // 1 반환하기
    return 1;
  }

  // 이전값 + 그 이전값 반환하기
  return fibonacci(order - 1) + fibonacci(order - 2);
};
