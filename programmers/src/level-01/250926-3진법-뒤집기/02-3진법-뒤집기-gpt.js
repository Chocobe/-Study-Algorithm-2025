/**
 * 문제: _3진법 뒤집기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * 
 * @param { number } a
 * @returns { number }
 */
export function solution(a) {
  return Number.parseInt(a.toString(3).split('').reverse().join(''), 3);
};
