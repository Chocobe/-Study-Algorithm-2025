/**
 * 문제: _[1차] 다트 게임_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/17682
 * 
 * @param { string } dartResult
 * @returns { number }
 */
export function solution(dartResult) {
  const dartInfos = dartResult.match(/(\d+)([SDT])([*#]?)/g);

  const bonusMap = {
    S: 1,
    D: 2,
    T: 3,
  };

  const scores = [];

  dartInfos.forEach(info => {
    const [_, strScore, bonus, option] = info.match(/^(\d+)([SDT])([*#]?)$/);
    let score = Number(strScore) ** bonusMap[bonus];

    if (option === '*') {
      score *= 2;

      if (scores.length) {
        scores[scores.length - 1] *= 2;
      }
    } else if (option === '#') {
      score *= -1;
    }

    scores.push(score);
  });

  return scores.reduce((total, score) => {
    return total + score;
  }, 0);
};
