/**
 * 문제: _크레인 인형뽑기 게임_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/64061
 *
 * @param { number[][] } board
 * @param { number[] } moves
 * @returns { number }
 */
export function solution(board, moves) {
  const stack = [];
  let count = 0;

  moves.forEach(col => {
    const colIndex = col - 1;

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const newItem = board[rowIndex][colIndex];

      if (!newItem) continue;

      board[rowIndex][colIndex] = 0;

      if (stack.length && newItem === stack[stack.length - 1]) {
        stack.pop();
        count += 2;
      } else {
        stack.push(newItem);
      }

      break;
    }
  });

  return count;
};
