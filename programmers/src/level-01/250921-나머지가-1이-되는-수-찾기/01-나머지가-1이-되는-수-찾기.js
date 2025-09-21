/**
 * 문제: _나머지가 1이 되는 수 찾기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/87389
 *
 * @param { number } x 
 * @returns { number }
 */
export function solution(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 1) return i;
  }
};
