/**
 * 문제: _로또의 최고 순위와 최저 순위_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/77484
 *
 * @param { number[] } lottos 
 * @param { number[] } win_nums
 * @returns { number[] }
 */
export function solution(lottos, win_nums) {
  const correctSet = new Set(win_nums);
  let count = 0;
  let numOfZero = 0;

  for (const lotto of lottos) {
    if (lotto === 0) {
      numOfZero++;
    } else if (correctSet.has(lotto)) {
      count++;
    }
  }

  function getRank(count) {
    return Math.min(7 - count, 6);
  }

  return [
    getRank(count + numOfZero),
    getRank(count),
  ];
};
