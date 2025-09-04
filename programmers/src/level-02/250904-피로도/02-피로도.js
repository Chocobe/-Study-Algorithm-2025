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
  // DFS + BackTracking 으로 풀 수 있다.
  let maxCount = 0;
  const visited = Array(dongeons.length).fill(false);

  function dfs(remaining, count) {
    for (let i = 0; i < dongeons.length; i++) {
      const [required, cost] = dongeons[i];

      if (remaining >= required && !visited[i]) {
        const currentCount = count + 1;
        maxCount = Math.max(maxCount, currentCount);

        visited[i] = true;
        dfs(remaining - cost, currentCount);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);

  return maxCount;
};
