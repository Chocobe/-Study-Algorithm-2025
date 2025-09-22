/**
 * 문제: _숫자 문자열과 영단어_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/81301
 * 
 * @param { string } s
 * @returns { number }
 */
export function solution(s) {
  const regExp = /zero|one|two|three|four|five|six|seven|eight|nine/g;
  const strValues = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return Number(s.replace(regExp, match => strValues[match]));
};
