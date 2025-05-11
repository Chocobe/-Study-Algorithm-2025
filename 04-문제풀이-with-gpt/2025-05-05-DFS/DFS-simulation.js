function solution(maze) {
  const MAX_Y = maze.length - 1;
  const MAX_X = maze[0].length - 1;

  const DIRECTIONS = [
    { x: 0, y: -1 }, // 위
    { x: 0, y: 1 },  // 아래
    { x: -1, y: 0 }, // 왼쪽
    { x: 1, y: 0 },  // 오른쪽
  ];

  const mazeInfo = maze.map(row => {
    return row.map(col => ({
      isInvalid: col === 0,
      isVisited: false,
    }));
  });

  function dfs(x, y) {
    if (x < 0 || x > MAX_X || y < 0 || y > MAX_Y) return false;

    const currentInfo = mazeInfo[y][x];
    if (currentInfo.isInvalid || currentInfo.isVisited) return false;

    console.log(`방문: (${x}, ${y})`);
    currentInfo.isVisited = true;

    if (x === MAX_X && y === MAX_Y) return true;

    for (let direction of DIRECTIONS) {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (dfs(nextX, nextY)) return true;
    }

    return false;
  }

  return dfs(0, 0);
}

const maze = [
  [1, 1, 0],
  [1, 0, 0],
  [1, 1, 1],
];

solution(maze);
