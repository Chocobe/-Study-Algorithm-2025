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
  const scoreList = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  const scoreMap = {
    RT: scoreList[0],
    TR: scoreList[0],

    CF: scoreList[1],
    FC: scoreList[1],

    JM: scoreList[2],
    MJ: scoreList[2],

    AN: scoreList[3],
    NA: scoreList[3],
  };

  for (let i = 0; i < survey.length; i++) {
    const surveyItem = survey[i];
    const choice = choices[i];
    const score = choice - 4;

    if (score < 0) {
      scoreMap[surveyItem][surveyItem[0]] += Math.abs(score);
    } else if (score > 0) {
      scoreMap[surveyItem][surveyItem[1]] += score;
    }
  }

  return scoreList.reduce((result, surveyData) => {
    const resultItem = Object.entries(surveyData).sort((a, b) => {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    })[0];

    return result + resultItem[0];
  }, '');
};

/**
[ { R: 0, T: 3 }, { C: 1, F: 0 }, { J: 0, M: 2 }, { A: 1, N: 1 } ]
'TCMA'

[ { R: 6, T: 1 }, { C: 0, F: 0 }, { J: 0, M: 0 }, { A: 0, N: 0 } ]
'RCJA'
 */
