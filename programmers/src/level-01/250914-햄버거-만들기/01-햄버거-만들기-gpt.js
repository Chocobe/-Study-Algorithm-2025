/**
 * 문제: _햄버거 만들기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/133502
 * 
 * @param { number[] } ingredient
 * @returns { number }
 */
export function solution(ingredient) {
  let result = 0;
  const stack = [];

  for (const item of ingredient) {
    stack.push(item);
    const length = stack.length;

    if (
      length >= 4 &&
      stack[length - 1] === 1 &&
      stack[length - 2] === 3 &&
      stack[length - 3] === 2 &&
      stack[length - 4] === 1
    ) {
      result++;
      stack.splice(length - 4);
    }
  }

  return result;
};
