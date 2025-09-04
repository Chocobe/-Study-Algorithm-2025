/**
 * 문제: _피로도_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript
 * 
 * @param { number } k
 * @param { number[][] } dongeons
 * @returns { number }
 */
export function solution(k, dongeons) {
  // 완전탐색 (DFS) + BackTracking 으로 구현할 수 있다.

  const n = dongeons.length;
  const visited = Array(n).fill(false);
  let answer = 0;

  function dfs(stamina, count) {
    if (answer < count) {
      answer = count;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }

      const [required, cost] = dongeons[i];

      if (stamina >= required) {
        visited[i] = true;
        dfs(stamina - cost, count + 1);
        visited[i] = false;
      }
    }
  }

  // dfs() 탐색하기
  dfs(k, 0);
  // answer 반환하기
  return answer;
};
