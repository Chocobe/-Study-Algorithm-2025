/**
 * 문제: _푸드 파이트 대회_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * 
 * @param { number[] } food
 * @returns { string }
 */
export function solution(food) {
  let result = '';

  for (let i = 1; i < food.length; i++) {
    const halfValue = Math.floor(food[i] / 2);
    result = result.padEnd(result.length + halfValue, i);
  }

  let reverse = '';
  for (const char of result) {
    reverse = char + reverse;
  }

  return result + '0' + reverse;
};
