/**
 * 문제: _체육복_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 
 * @param { number } n 학생수
 * @param { number[] } lost 체육복 분실 학생 번호
 * @param { number[] } reserve 체육복 2벌 학생 번호
 * @returns { number }
 */
export function solution(n, lost, reserve) {
  // 1. 정규화(Normalization) 하기
  const state = Array(n + 1).fill(1);

  reserve.sort((a, b) => a - b).forEach(i => {
    state[i]++;
  });

  lost.sort((a, b) => a - b).forEach(i => {
    state[i]--;
  });

  lost.forEach(i => {
    if (state[i] !== 0) {
      return;
    }

    if (state[i - 1] === 2) {
      state[i - 1]--;
      state[i]++;
    } else if (state[i + 1] === 2) {
      state[i + 1]--;
      state[i]++;
    }
  });

  // 3. 체육복이 있는 학생 수 반환하기
  return state.slice(1).filter(i => i).length;
};
