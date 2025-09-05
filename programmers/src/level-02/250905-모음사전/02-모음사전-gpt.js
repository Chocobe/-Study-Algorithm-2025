/**
 * 문제: _모음사전_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/84512?language=javascript
 * 
 * @param { string } word
 * @returns { number }
 */
export function solution(word) {
  const MAX_DEPTH = 4;
  const CHAR_LIST = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;

  dfs(0, '');
  return count;

  function dfs(depth, built) {
    if (depth > MAX_DEPTH) return false;

    for (let i = 0; i < CHAR_LIST.length; i++) {
      const next = built + CHAR_LIST[i];
      count++;

      if (next === word) return true;   // 찾은 즉시 true로 상향 전파

      if (dfs(depth + 1, next)) return true;
    }
    return false; // 이 레벨에선 못 찾음
  }
};
