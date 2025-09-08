/**
 * 문제: _K번째수_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 * 
 * @param { number[] } array
 * @param { number[][] } commands
 * @returns { number[] }
 */
export function solution(array, commands) {
  const results = [];

  for (const [i, j, k] of commands) {
    const subArray = array.slice(i - 1, j).sort((a, b) => a - b);
    results.push(subArray[k - 1]);
  }

  return results;
};
