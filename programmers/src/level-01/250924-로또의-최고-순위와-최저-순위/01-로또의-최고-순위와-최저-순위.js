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
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  let numOfZero = 0;
  let count = 0;
  let i = 0;

  for (const lotto of lottos) {
    if (lotto === 0) {
      numOfZero++;
      continue;
    }

    while (i < win_nums.length) {
      if (lotto === win_nums[i]) {
        count++;
        i++;
      } else if (lotto > win_nums[i]) {
        i++;
      } else {
        break;
      }
    }
  }

  const max = 6 - (count + numOfZero) + 1;
  const min = 6 - count + 1;

  return [
    Math.min(max, 6),
    Math.min(min, 6),
  ];
};
