/**
 * 문제: _숫자 짝꿍_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/131128
 *
 * @param { string } x 
 * @param { string } y
 * @returns { string }
 */
export function solution(x, y) {
  const strX = String(x);
  const strY = String(y);

  const xMap = !x.length ? {} : strX.split('').reduce((map, xValue) => {
    map[xValue] = ++map[xValue] || 1;
    return map;
  }, {});

  const values = [];

  for (const yValue of strY) {
    if (xMap[yValue]) {
      xMap[yValue]--;
      values.push(yValue);
    }
  }

  if (!values.length) {
    return '-1';
  }

  const result = values.sort((a, b) => b.localeCompare(a)).join('');
  return /^0+$/.test(result) ? '0' : result;
};
