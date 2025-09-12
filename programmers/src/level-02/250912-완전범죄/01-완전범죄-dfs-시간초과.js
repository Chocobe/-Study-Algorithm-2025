/**
 * NOTE: 시간 초과로 실패
 * NOTE => DFS 로 풀어서 시간초과가 됨
 * NOTE => Dynamic Programming (DP) 로 풀어야 통과함
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
  let minEvidenceA = Infinity;

  /**
   * 
   * @param { number } i info 인덱스
   * @param { number } evidenceA A 흔적수
   * @param { number } evidenceB B 흔적수
   * @param { number[] } a
   * @returns 
   */
  function dfs(i = 0, evidenceA = 0, evidenceB = 0) {
    if (evidenceA >= n || evidenceB >= m || evidenceA >= minEvidenceA) {
      return;
    }

    if (i >= info.length) {
      minEvidenceA = Math.min(minEvidenceA, evidenceA);
      return;
    }

    dfs(i + 1, evidenceA + info[i][0], evidenceB);
    dfs(i + 1, evidenceA, evidenceB + info[i][1]);
  }

  dfs();
  return minEvidenceA === Infinity ? -1 : minEvidenceA;
};
