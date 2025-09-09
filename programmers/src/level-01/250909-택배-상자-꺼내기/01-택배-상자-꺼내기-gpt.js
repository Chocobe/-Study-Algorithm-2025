/**
 * 문제: _택배 상자 꺼내기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/389478
 * 
 * @param { number } n
 * @param { number } w
 * @param { number } num
 * @returns { number }
 */
export function solution(n, w, num) {
  // 1. num 좌표 구하기
  const index = num - 1;
  const y = Math.floor(index / w);

  const naiveX = index % w;
  const x = y % 2 === 0 ? naiveX : (w - naiveX - 1);

  // 2. 최상단 y 와 최상단의 상자 개수 구하기
  const fullRows = Math.floor(n / w);
  const remainingCount = n % w;
  const isRemaining = remainingCount > 0;
  const topY = isRemaining ? fullRows : fullRows - 1;

  let count = 0;

  for (let row = y; row <= topY; row++) {
    if (row < topY) {
      count++;
    } else {
      if (isRemaining) {
        const isExist = row % 2 === 0
          ? x < remainingCount
          : x >= w - (remainingCount)

        if (isExist) {
          count++;
        }
      } else {
        count++;
      }
    }
  }

  return count;
};
