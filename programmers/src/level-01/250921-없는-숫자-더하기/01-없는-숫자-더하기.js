/**
 * 문제: _없는 숫자 더하기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/86051
 * 
 * @param { number[] } numbers
 * @returns { number }
 */
export function solution(numbers) {
  const state = Array(10).fill(false);

  numbers.forEach(num => {
    state[num] = true;
  });

  return state.reduce((sum, checked, i) => {
    return checked ? sum : sum + i;
  }, 0);
};
