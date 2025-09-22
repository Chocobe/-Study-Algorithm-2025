/**
 * 문제: _부족한 금액 계산하기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/82612
 * 
 * @param { number } price
 * @param { number } money
 * @param { number } count
 * @returns { number }
 */
export function solution(price, money, count) {
  let total = 0;

  for (let i = 1; i <= count; i++) {
    total += i;
  }

  total *= price;
  return Math.max(total - money, 0);
};
