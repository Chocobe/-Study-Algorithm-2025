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
  const remainings = [];
  let value = a;

  while (value > 0) {
    remainings.push(value % 3);
    value = Math.floor(value / 3);
  }

  return remainings.reduce((result, value, i) => {
    return result + Math.pow(3, remainings.length - i - 1) * value;
  }, 0);
};
