/**
 * 문제: _두 원 사이의 정수 쌍_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/181187
 * 
 * @param { number } r1
 * @param { number } r2
 * @returns { number }
 */
export function solution(r1, r2) {
  let firstQuadrant = 0;

  for (let x = 1; x <= r2; x++) {
    // 마지막 y 좌표
    const endY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));

    // 시작 y 좌표
    const startY = x >= r1
      ? 0
      : Math.ceil(Math.sqrt(r1 ** 2 - x ** 2));

      // startY ~ endY 까지 점 개수이므로, `+1` 필요
      firstQuadrant += endY - startY + 1;
  }

  // 1사분명의 점 개수 * 4 === 전체에 대한 점 개수
  return firstQuadrant * 4;
};
