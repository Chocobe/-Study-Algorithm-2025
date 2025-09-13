/**
 * 문제: _요격 시스템_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/181188
 * 
 * @param { number[][] } targets
 * @returns { number }
 */
export function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);

  let lastEnd = -Infinity;
  let count = 0;

  for (let i = 0; i < targets.length; i++) {
    const current = targets[i];

    if (current[0] >= lastEnd) {
      count++;
      lastEnd = current[1];
    }
  }

  return count;
};
