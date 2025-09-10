/**
 * 문제: _완주하지 못한 선수_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 
 * @param { string[] } participants
 * @param { string[] } completion
 * @returns { string }
 */
export function solution(participants, completion) {
  const participantsMap = participants.reduce((map, person) => {
    if (map[person]) {
      map[person]++;
    } else {
      map[person] = 1;
    }

    return map;
  }, {});

  completion.forEach(person => {
    participantsMap[person]--;

    if (!participantsMap[person]) {
      delete participantsMap[person];
    }
  });

  return Object.keys(participantsMap)[0];
};
