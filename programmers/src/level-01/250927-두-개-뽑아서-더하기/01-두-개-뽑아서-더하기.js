/**
 * 문제: _두 개 뽑아서 더하기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/68644
 * 
 * @param { number[] } numbers
 * @returns { number[] }
 */
export function solution(numbers) {
  const resultSet = new Set();

  for (let start = 0; start < numbers.length - 1; start++) {
    const startValue = numbers[start];

    for (let i = start + 1; i < numbers.length; i++) {
      resultSet.add(startValue + numbers[i]);
    }
  }

  return Array.from(resultSet).sort((a, b) => a - b);
};
