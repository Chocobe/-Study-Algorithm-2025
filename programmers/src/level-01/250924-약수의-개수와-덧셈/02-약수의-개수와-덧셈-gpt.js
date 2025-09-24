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
    const isPerfectSquare = Math.floor(Math.sqrt(i)) ** 2 === i;

    if (isPerfectSquare) {
      result -= i;
    } else {
      result += i;
    }
  }

  return result;
};
