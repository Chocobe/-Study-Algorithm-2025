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
  const strValues = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return Number(strValues.reduce((result, str, i) => {
    return result.replaceAll(str, i);
  }, s));
};
