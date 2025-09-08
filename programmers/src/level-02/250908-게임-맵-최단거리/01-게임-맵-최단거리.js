/**
 * 문제: _게임 맵 최단거리_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/1844?language=javascript
 * 
 * @param { number[][] } maps
 * @returns { number }
 */
export function solution(maps) {
  const directions = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
  ];
  const MAX_Y = maps.length - 1;
  const MAX_X = maps[MAX_Y].length - 1;

  const queue = [];
  let head = 0;

  queue.push([0, 0]);
  maps[0][0] = 0;

  while (head < queue.length) {
    const [y, x] = queue[head++];

    if (y === MAX_Y && x === MAX_X) {
      return maps[y][x] + 1;
    }

    for (const direction of directions) {
      const nextY = y + direction.y;
      const nextX = x + direction.x;

      if (
        nextX < 0 ||
        nextY < 0 ||
        nextX > MAX_X ||
        nextY > MAX_Y ||
        maps[nextY][nextX] !== 1
      ) {
        continue;
      }

      queue.push([nextY, nextX]);
      maps[nextY][nextX] = maps[y][x] + 1;
    }
  }

  return -1;
};
