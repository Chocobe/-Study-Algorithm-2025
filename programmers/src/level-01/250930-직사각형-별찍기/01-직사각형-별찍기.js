/**
 * 문제: _직사각형 별찍기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12969
 * 
 * @param { string } data
 * @returns { string }
 */
export function solution(data) {
  const [width, height] = data.split(' ');
  const line = '*'.repeat(width);

  return Array.from({ length: height }, () => line).join('\n');
};
