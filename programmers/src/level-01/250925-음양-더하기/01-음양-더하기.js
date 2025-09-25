/**
 * 문제: _음양 더하기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/76501
 * 
 * @param { number[] } absolutes
 * @param { boolean[] } signs
 * @returns { number }
 */
export function solution(absolutes, signs) {
  return absolutes.reduce((total, value, i) => {
    const sign = signs[i] ? 1 : -1;
    return total + (value * sign);
  }, 0);
};
