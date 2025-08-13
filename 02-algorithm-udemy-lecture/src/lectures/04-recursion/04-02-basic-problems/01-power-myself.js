/**
 * 문제1: 밑과 지수를 받아들이는 power라는 함수를 작성합니다. 
 * => 이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 
 * => 이 함수는 Math.pow()의 기능을 모방해야 합니다. 
 * => 음의 밑과 지수에 대해서는 신경쓰지 마세요.
 * 
 * @example
 * power(1, 0) === 1
 * power(1, 10) === 1
 * power(2, 3) === 8
 * power(3, 4) === 81
 */

/**
 * @param { number } base
 * @param { number } exponent
 * @returns { number }
 */
export function power(base, exponent) {
  // (Base Case) exponent 가 1보다 작다면, 1 반환하기
  if (exponent < 1) {
    return 1;
  }

  // base * power(base, exponent - 1) 결과 반환하기
  return base * power(base, exponent - 1);
};
