/**
 * 문제: _약수의 개수와 덧셈_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/77884
 * 
 * @param { number } left
 * @param { number } right
 * @returns { number }
 */
export function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const numOfDivisors = getNumOfDivisors(i);

    if(numOfDivisors % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }

  function getNumOfDivisors(value) {
    const divisorSet = new Set();

    for (let i = 1; i <= Math.floor(Math.sqrt(value)); i++) {
      if (value % i !== 0) continue;

      divisorSet.add(i);
      divisorSet.add(value / i);
    }

    return divisorSet.size;
  }

  return result;
};
