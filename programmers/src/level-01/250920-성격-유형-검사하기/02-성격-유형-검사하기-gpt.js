/**
 * 문제: _성격 유형 검사기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * 
 * @param { string[] } survey
 * @param { number[] } choices
 * @returns { string }
 */
export function solution(survey, choices) {
  const typePairs = ['RT', 'CF', 'JM', 'AN'];
  const scoreMap = typePairs.reduce((map, pair) => {
    map[pair[0]] = 0;
    map[pair[1]] = 0;
    return map;
  }, {});

  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i];
    const score = choices[i] - 4;
    const key = score > 0 ? agree : disagree;

    scoreMap[key] += Math.abs(score);
  }

  return typePairs
    .map(([a, b]) => {
      return scoreMap[a] >= scoreMap[b] ? a : b;
    })
    .join('');
};

/**
[ { R: 0, T: 3 }, { C: 1, F: 0 }, { J: 0, M: 2 }, { A: 1, N: 1 } ]
'TCMA'

[ { R: 6, T: 1 }, { C: 0, F: 0 }, { J: 0, M: 0 }, { A: 0, N: 0 } ]
'RCJA'
 */
