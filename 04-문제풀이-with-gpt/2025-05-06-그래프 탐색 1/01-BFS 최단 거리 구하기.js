/**
 * 그래프 탐색 1 - BFS 최단거리 구하기
 * 🧩 문제: 미로에서 최소 거리 구하기
 * 설명:
 * 1은 이동 가능한 길이고, 0은 벽이야.
 * (0,0) → (N-1,M-1)까지 갈 수 있는 최소 칸 수를 구하자!
 * (출발지 포함, 도착지 포함해서 몇 칸을 지나야 하는지)
 * 
 * @param { number[][] } maze
 */
function bfsSolution(maze) {
  const mazeInfo = maze.map(row => {
    return row.map(col => ({
      isInvalid: col === 0,
      isVisited: false,
      distance: 0,
    }));
  });

  const MAX_Y = mazeInfo.length - 1;
  const MAX_X = mazeInfo[0].length - 1;

  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const startInfo = mazeInfo[0][0];
  startInfo.isVisited = true;
  startInfo.distance = 1;

  const queue = [
    { x: 0, y: 0 },
  ];

  while (queue.length) {
    const {
      x,
      y,
    } = queue.shift();

    const currentInfo = mazeInfo[y][x];

    if (x === MAX_X && y === MAX_Y) {
      return currentInfo.distance;
    }

    for (let direction of directions) {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
        continue;
      }

      const nextInfo = mazeInfo[nextY][nextX];

      if (nextInfo.isVisited || nextInfo.isInvalid) {
        continue;
      }

      nextInfo.distance = currentInfo.distance + 1;
      nextInfo.isVisited = true;

      queue.push({
        x: nextX,
        y: nextY,
      });
    }
  }

  return -1;
}

const questions = [
  {
    maze: [
      [1, 0, 1, 1],
      [1, 1, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 0, 1],
    ],
    answer: 7,
  },
];

questions.forEach(question => {
  const {
    maze,
    answer,
  } = question;

  const result = bfsSolution(maze);

  console.group('미로에서 최소 거리 구하기');
  console.log('maze: ', maze);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('path: ', result === answer);
  console.groupEnd();
});
