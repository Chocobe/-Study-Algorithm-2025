/**
 * 문제: _광물 캐기_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/172927
 *
 * @param { number[] } picks 
 * @param { Array<'diamond' | 'iron' | 'stone'> } minerals
 * @returns { number }
 */
export function solution(picks, minerals) {
  const pickCostList = Array.from({ length: Math.ceil(minerals.length / 5) }, () => ({
    diamond: 0,
    iron: 0,
    stone: 0,
  }));

  minerals.forEach((mineral, index) => {
    const pickCost = pickCostList[Math.floor(index / 5)];
    pickCost.diamond += getPickCost('diamond', mineral);
    pickCost.iron += getPickCost('iron', mineral);
    pickCost.stone += getPickCost('stone', mineral);
  });

  const usedInfo = {
    diamond: picks[0],
    iron: picks[1],
    stone: picks[2],
  };

  const MAX_DEPTH = Math.min(
    picks.reduce((total, pick) => total + pick, 0),
    pickCostList.length
  );
  let minCost = Infinity;

  (function dfs(cost = 0, depth = 0) {
    if (depth >= MAX_DEPTH) {
      minCost = Math.min(minCost, cost);
      return;
    }

    const costEntries = Object.entries(pickCostList[depth]);

    for (const [pick, newCost] of costEntries) {
      if (!usedInfo[pick]) continue;

      usedInfo[pick]--;
      dfs(cost + newCost, depth + 1);
      usedInfo[pick]++;
    }
  }());

  return minCost;
};

function getPickCost(pick, mineral) {
  const pickExponentialMap = {
    diamond: 0,
    iron: 1,
    stone: 2,
  };

  const exponential = Math.max(
    pickExponentialMap[pick] - pickExponentialMap[mineral],
    0
  );

  return 5 ** exponential;
}
