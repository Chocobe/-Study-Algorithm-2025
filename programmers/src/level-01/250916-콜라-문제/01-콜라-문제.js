/**
 * 문제: _콜라 문제_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/132267
 * 
 * @param { number } a
 * @param { number } b
 * @param { number } n
 * @returns { number }
 */
export function solution(a, b, n) {
  let count = 0;
  let remaining = n;

  while (remaining >= a) {
    const nextRemaining = remaining % a;
    const newCount = Math.floor(remaining / a) * b;
    count += newCount;

    remaining = nextRemaining + newCount;
  }

  return count;
};

/**
// 예시 1:
a === 2
b === 1
n === 20

최적 반납 빈병 수: Math.floor(n / a)
최적 반납 후 남은 빈병 수: n % a
새로 받는 콜라 수: Math.floor(n / a) * b
 */
