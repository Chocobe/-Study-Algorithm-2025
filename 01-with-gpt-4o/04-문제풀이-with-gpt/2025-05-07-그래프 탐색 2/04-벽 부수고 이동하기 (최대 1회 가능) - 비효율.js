/**
 * 📦 "벽 부수고 이동하기 (최대 1회 가능)"
 * 🧩 문제 설명 (요약):
 * 0: 빈 칸
 * 
 * 1: 벽
 * 
 * (0, 0)에서 출발해서 (n-1, m-1)로 이동해야 해
 * 
 * 이동은 상하좌우
 * 
 * 단! 벽을 최대 한 번까지 부술 수 있어
 * 
 * ✅ 출력:
 * 최단 거리(칸 수)
 * 
 * 이동이 불가능하면 -1
 * 
 * 🔥 포인트:
 * 한 좌표에서도 벽을 부순 상태 / 부수지 않은 상태를 나눠서 방문 처리해야 함!
 * 
 * 따라서 visited[y][x][0 or 1] 형태의 3차원 visited 배열을 사용해야 해
 */

/**
 * @param { number[][] } grid
 */
function solution(grid) {
  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const plannedGridInfos = [
    grid.map(row => {
      return row.map(col => ({
        isVisited: false,
        isWall: col === 1,
      }));
    }),
  ];

  grid.forEach((row, y) => {
    row.forEach((col, x) => {
      if (col === 1) {
        const plannedGridInfo = grid.map(row => {
          return row.map(col => ({
            isWall: col === 1,
            isVisited: false,
          }));
        });

        plannedGridInfo[y][x].isWall = false;
        plannedGridInfos.push(plannedGridInfo);
      }
    });
  });

  const MAX_X = grid[0].length - 1;
  const MAX_Y = grid.length - 1;

  let minElapsedTime = null;

  for (const gridInfo of plannedGridInfos) {
    const queue = [
      {
        x: 0,
        y: 0,
        elapsedTime: 1,
      },
    ];

    while (queue.length) {
      const {
        x,
        y,
        elapsedTime,
      } = queue.shift();

      if (x === MAX_X && y === MAX_Y) {
        minElapsedTime = minElapsedTime === null
          ? elapsedTime
          : Math.min(elapsedTime, minElapsedTime);

        continue;
      }

      for (const direction of directions) {
        const nextX = x + direction.x;
        const nextY = y + direction.y;

        if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
          continue;
        }

        const nextInfo = gridInfo[nextY][nextX];

        if (nextInfo.isWall || nextInfo.isVisited) {
          continue;
        }

        nextInfo.isVisited = true;

        queue.push({
          x: nextX,
          y: nextY,
          elapsedTime: elapsedTime + 1,
        });
      }
    }
  }

  return minElapsedTime === null
    ? -1
    : minElapsedTime;
}

const questions = [
  {
    grid: [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
    ],
    answer: 9,
  },
];

questions.forEach(question => {
  const {
    grid,
    answer,
  } = question;

  const result = solution(grid);

  console.group('벽 부수고 이동하기 (최대 1회 가능)');
  console.log('grid: ', grid);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
