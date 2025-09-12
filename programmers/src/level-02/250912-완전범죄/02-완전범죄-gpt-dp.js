/**
 * NOTE: Dynamic Programming (DP) 풀이
 * 
 * NOTE => DP[A_흔적수] === B_흔적수
 * 
 * 문제: _완전범죄_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/389480
 * 
 * @param { number[][] } info
 * @param { number } n
 * @param { number } m
 * @returns { number }
 */
export function solution(info, n, m) {
  const totalA = info.reduce((totalA, [a]) => {
    return totalA + a;
  }, 0);

  const MAX_A = Math.min(totalA, Math.max(0, n - 1));
  let dp = Array(MAX_A + 1).fill(Infinity);
  dp[0] = 0;

  for (const [infoA, infoB] of info) {
    const nextDp = Array(MAX_A + 1).fill(Infinity);

    for (let a = 0; a < nextDp.length; a++) {
      const b = dp[a];

      if (b === Infinity) continue;

      // A를 선택한 경우,
      const nextA = a + infoA;

      if (nextA <= MAX_A) {
        nextDp[nextA] = Math.min(nextDp[nextA], b);
      }

      // B를 선택한 경우,
      const nextB = b + infoB;

      if (nextB < m) {
        nextDp[a] = Math.min(nextDp[a], nextB);
      }
    }

    dp = nextDp;
  }

  for (let a = 0; a < dp.length; a++) {
    if (dp[a] < m) return a;
  }

  return -1;
};
