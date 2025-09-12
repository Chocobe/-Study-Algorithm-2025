/**
 * @param { number[][] } info
 * @param { number } n
 * @param { number } m
 * @returns { number }
 */
export function solution(info, n, m) {
  // A 선택지의 최대값 구하기
  const totalA = info.reduce((totalA, [a]) => {
    return totalA + a;
  }, 0);
  // A 의 유효한 최대값 구하기
  const MAX_A = Math.min(totalA, Math.max(0, n - 1));

  // A 가 가질 수 있는 최대값이 index 인 DP 배열 선언하기
  let dp = Array(MAX_A + 1).fill(Infinity);
  // DP 초기화
  dp[0] = 0;

  // 선택지 목록을 순회하며, 각 순회 단계별 청사진 만들고, DP 갱신하기
  for (const [infoA, infoB] of info) {
    // 이번 선택지 단계의 청사진 DP 선언하기
    const nextDP = Array(MAX_A + 1).fill(Infinity);

    // A 의 유효값을 순회하며, nextDP 완성시키기
    // a 는 DP 의 index 이다. (nextDP 도 동일하지만, 의미상 `dp.length` 로 작성함)
    for (let a = 0; a < dp.length; a++) {
      // a 는 DP 의 index 이므로, b 는 dp[a] 이다.
      const b = dp[a];

      // 현재 a 값에 대응하는 B 가 무한대라면, 불가능한 경우다.
      if (b === Infinity) continue;

      // A 를 선택한 경우를 nextDP 에 반영하기
      const nextA = a + infoA;
      if (nextA <= MAX_A) {
        // 동일한 A 에 대응하는 B 가 여러개 있다면, 이 중 최선의 값으로 기록한다.
        nextDP[nextA] = Math.min(nextDP[nextA], b);
      }

      // B 를 선택한 경우를 nextDP 에 반영하기
      const nextB = b + infoB;
      if (nextB < m) {
        // 동일한 A 에 대응하는 B 가 여러개 있다면, 이 중 최선의 값으로 기록한다.
        nextDP[a] = Math.min(nextDP[a], nextB);
      }
    }

    // 완성된 nextDP 가 새로운 DP, 즉 최신 청사진이 된다.
    dp = nextDP;
  }

  // 유효한 A 중, 최선의 A 찾기
  for (let a = 0; a <= MAX_A; a++) {
    if (dp[a] < m) return a;
  }

  return -1;
};
