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
  const stageInfos = Array.from({ length: N + 2 }, (_, stage) => ({
    stage,
    total: 0,
    remaining: 0,
  }));

  stages.forEach(remainingStage => {
    for (let stage = 1; stage < remainingStage; stage++) {
      stageInfos[stage].total++;
    }

    stageInfos[remainingStage].total++;
    stageInfos[remainingStage].remaining++;
  });

  return stageInfos
    .slice(1, N + 1)
    .map(stageInfo => {
      const { stage, total, remaining } = stageInfo;
      const failRate = remaining / total;

      return { stage, failRate };
    })
    .sort((a, b) => {
      if (a.failRate === b.failRate) return a.stage - b.stage;

      return b.failRate - a.failRate;
    })
    .map(({ stage }) => stage);
};
