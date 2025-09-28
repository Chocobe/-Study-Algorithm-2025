/**
 * 문제: _가장 많이 받은 선물_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/258712
 * 
 * @param { string[] } friends
 * @param { string[] } gifts
 * @returns { number }
 */
export function solution(friends, gifts) {
  const infoMap = friends.reduce((infoMap, name) => {
    infoMap[name] = {
      priority: 0,
      giveCountMap: {},
    };

    return infoMap;
  }, {});

  gifts.forEach(gift => {
    const [from, to] = gift.split(' ');

    infoMap[from].giveCountMap[to] = ++infoMap[from].giveCountMap[to] || 1;
    infoMap[from].priority++;
    infoMap[to].priority--;
  });

  let maxCount = 0;

  friends.forEach(name => {
    const { priority, giveCountMap } = infoMap[name];
    let totalCount = 0;

    friends.forEach(targetName => {
      if (name === targetName) return;

      const diff = (giveCountMap[targetName] ?? 0) - (infoMap[targetName].giveCountMap[name] ?? 0);

      if (diff > 0) {
        totalCount++;
      } else if (diff === 0 && priority > infoMap[targetName].priority) {
        totalCount++;
      }
    });

    maxCount = Math.max(maxCount, totalCount);
  });

  return maxCount;
};
