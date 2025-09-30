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
  const NUM_OF_CHUNKS = Math.min(
    picks.reduce((total, pick) => total + pick, 0),
    Math.ceil(minerals.length / 5)
  );

  const COST_MAP = {
    diamond: { diamond: 1, iron: 1, stone: 1 },
    iron: { diamond: 5, iron: 1, stone: 1 },
    stone: { diamond: 25, iron: 5, stone: 1 },
  };

  const chunks = Array.from({ length: NUM_OF_CHUNKS }, () => ({
    diamond: 0,
    iron: 0,
    stone: 0,
  }));

  for (let i = 0; i < NUM_OF_CHUNKS; i++) {
    const startIndex = i * 5;
    const endIndex = Math.min(startIndex + 5, minerals.length);

    for (let j = startIndex; j < endIndex; j++) {
      const mineral = minerals[j];
      chunks[i].diamond += COST_MAP.diamond[mineral];
      chunks[i].iron += COST_MAP.iron[mineral];
      chunks[i].stone += COST_MAP.stone[mineral];
    }
  }

  chunks.sort((a, b) => {
    return (
      b.stone - a.stone ||
      b.iron - a.iron ||
      b.diamond - a.diamond
    );
  });

  let result = 0;

  for (const chunk of chunks) {
    if (picks[0]) {
      picks[0]--;
      result += chunk.diamond;
    } else if (picks[1]) {
      picks[1]--;
      result += chunk.iron;
    } else if (picks[2]) {
      picks[2]--;
      result += chunk.stone;
    } else {
      break;
    }
  }

  return result;
};
