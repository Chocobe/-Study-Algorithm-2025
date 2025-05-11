function solution(maze) {
  const MAX_Y = maze.length - 1;
  const MAX_X = maze[0].length - 1;

  const DIRECTIONS = [
    { x: 0, y: -1 }, // 위
    { x: 0, y: 1 },  // 아래
    { x: -1, y: 0 }, // 왼쪽
    { x: 1, y: 0 },  // 오른쪽
  ];

  const mazeInfo = maze.map(row =>
    row.map(col => ({
      isInvalid: col === 0,
      isVisited: false,
    }))
  );

  const queue = [{ x: 0, y: 0 }];
  mazeInfo[0][0].isVisited = true;

  while (queue.length) {
    const { x, y } = queue.shift();
    console.log(`방문: (${x}, ${y})`);

    if (x === MAX_X && y === MAX_Y) {
      return true;
    }

    for (let { x: dx, y: dy } of DIRECTIONS) {
      const nextX = x + dx;
      const nextY = y + dy;

      if (
        nextX < 0 || nextX > MAX_X ||
        nextY < 0 || nextY > MAX_Y
      ) continue;

      const nextInfo = mazeInfo[nextY][nextX];

      if (nextInfo.isInvalid || nextInfo.isVisited) continue;

      nextInfo.isVisited = true;
      queue.push({ x: nextX, y: nextY });
    }
  }

  return false;
}

const maze = [
  [1, 1, 0],
  [1, 0, 0],
  [1, 1, 1],
];

solution(maze);
