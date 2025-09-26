/**
 * 문제: _내적_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/70128
 * 
 * @param { number[] } a
 * @param { number[] } b
 * @returns { number }
 */
export function solution(a, b) {
  return a.reduce((sum, valueA, i) => {
    return sum + (valueA * b[i]);
  }, 0);
};
