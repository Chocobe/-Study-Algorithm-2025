/**
 * 문제: _실패율_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42889
 * 
 * @param { number } N
 * @param { number[] } stages
 * @returns {}
 */
export function solution(N, stages) {
  let players = stages.length;
  const counts = Array.from({ length: N + 2 }).fill(0);
  const failRates = [];

  stages.forEach(stage => {
    counts[stage]++;
  });

  for (let stage = 1; stage < N + 1; stage++) {
    if (!players) break;

    const failRate = counts[stage] / players;
    players -= counts[stage];

    failRates.push({ stage, failRate });
  }

  return failRates
    .sort((a, b) => {
      if (a.failRate === b.failRate) return a.stage - b.stage;

      return b.failRate - a.failRate;
    })
    .map(({ stage }) => stage);
};
