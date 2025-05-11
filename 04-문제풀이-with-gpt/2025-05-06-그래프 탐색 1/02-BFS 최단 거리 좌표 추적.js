/**
 * 그래프 탐색 2 - BFS 최단거리 좌표 추적
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
      prevPosition: null,
    }));
  });

  const startInfo = mazeInfo[0][0];
  startInfo.isVisited = true;
  startInfo.distance = 1;

  const MAX_Y = mazeInfo.length - 1;
  const MAX_X = mazeInfo[0].length - 1;

  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const queue = [
    {
      x: 0,
      y: 0,
    },
  ];

  while (queue.length) {
    const {
      x,
      y,
    } = queue.shift();

    const currentInfo = mazeInfo[y][x];

    if (x === MAX_X && y === MAX_Y) {
      let prevPosition = currentInfo.prevPosition;
      const histories = [
        [y, x],
      ];

      while (prevPosition) {
        histories.unshift([
          prevPosition[0],
          prevPosition[1],
        ]);

        const prevInfo = mazeInfo[prevPosition[0]][prevPosition[1]];
        prevPosition = prevInfo.prevPosition;
      }

      console.log('histories: ', histories);

      return histories;
    }

    for (const direction of directions) {
      const nextY = y + direction.y;
      const nextX = x + direction.x;

      if (nextY < 0 || nextY > MAX_Y || nextX < 0 || nextX > MAX_X) {
        continue;
      }

      const nextInfo = mazeInfo[nextY][nextX];

      if (nextInfo.isVisited || nextInfo.isInvalid) {
        continue;
      }

      nextInfo.prevPosition = [y, x];
      nextInfo.isVisited = true;
      nextInfo.distance = currentInfo.distance + 1;

      queue.push({
        x: nextX,
        y: nextY,
      });
    }
  }

  return [];
}

const questions = [
  {
    maze: [
      [1, 0, 1, 1],
      [1, 1, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 0, 1],
    ],
    // answer: 7,
    answer: [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 3],
    ],
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
  console.log('path: ', JSON.stringify(result) === JSON.stringify(answer));
  console.groupEnd();
});
