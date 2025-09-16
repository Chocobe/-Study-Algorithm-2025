/**
 * 문제: _옹알이 (2)_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/133499
 * 
 * @param { string[] } babbling
 * @returns { number }
 */
export function solution(babbling) {
  const wordMap = {
    a: 'aya',
    y: 'ye',
    w: 'woo',
    m: 'ma',
  };

  let count = 0;

  babbling.forEach(str => {
    let currentStr = str;
    let prevWord = '';

    while (currentStr.length) {
      const firstChar = currentStr[0];
      const word = wordMap[firstChar];

      if (currentStr.startsWith(word) && word !== prevWord) {
        currentStr = currentStr.replace(word, '');
        prevWord = word;
      } else {
        break;
      }
    }

    count += currentStr.length === 0 ? 1 : 0;
  });

  return count;
};
