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
  const words = ['aya', 'ye', 'woo', 'ma'];

  // 'aya(?!aya)|ye(?!ye)|woo(?!woo)|ma(?!ma)'
  const strRegExp = words.map(word => {
    return `${word}(?!${word})`;
  }).join('|');

  // '^(aya(?!aya)|ye(?!ye)|woo(?!woo)|ma(?!ma))+$'
  const regExp = new RegExp(`^(${strRegExp})+$`);

  return babbling.reduce((count, str) => {
    return count + (regExp.test(str) ? 1 : 0);
  }, 0);
};
