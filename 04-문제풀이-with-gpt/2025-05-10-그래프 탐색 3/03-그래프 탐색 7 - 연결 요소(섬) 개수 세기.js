/**
 * 🧩 그래프 탐색 7 - 연결 요소(섬) 개수 세기
 * 📘 문제 설명:
 * 0과 1로 이루어진 2차원 배열이 주어져.
 * 1은 땅, 0은 바다야.
 * 상하좌우로 연결된 1들은 하나의 "섬"으로 간주해.
 * 총 몇 개의 섬(덩어리)이 있는지 구해줘!
 */

/**
 * @param { number[][] } grid
 */
function solutionBFS(grid) {
  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const gridInfos = grid.map(row => {
    return row.map(col => ({
      isIsland: col === 1,
      isVisited: false,
    }));
  });

  const MAX_X = gridInfos[0].length - 1;
  const MAX_Y = gridInfos.length - 1;

  let count = 0;

  for (let y = 0; y < gridInfos.length; y++) {
    for (let x = 0; x < gridInfos[y].length; x++) {
      const {
        isIsland,
        isVisited,
      } = gridInfos[y][x];

      if (!isIsland || isVisited) {
        continue;
      }

      count++;

      const queue = [
        {
          x,
          y,
        },
      ];

      console.log('시작 queue: ', queue);

      while (queue.length) {
        const {
          x,
          y,
        } = queue.shift();

        for (const direction of directions) {
          const nextX = x + direction.x;
          const nextY = y + direction.y;

          if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
            continue;
          }

          const nextInfo = gridInfos[nextY][nextX];

          if (nextInfo.isVisited || !nextInfo.isIsland) {
            continue;
          }

          nextInfo.isVisited = true;

          queue.push({
            x: nextX,
            y: nextY,
          });
        }
      }
    }
  }

  return count;
}

/**
 * @param { number[][] } grid
 */
function solutionDFS(grid) {
  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const gridInfos = grid.map(row => {
    return row.map(col => ({
      isIsland: col === 1,
      isVisited: false,
    }));
  });

  const MAX_X = gridInfos[0].length - 1;
  const MAX_Y = gridInfos.length - 1;

  let count = 0;

  for (let y = 0; y < gridInfos.length; y++) {
    for (let x = 0; x < gridInfos[y].length; x++) {
      const {
        isIsland,
        isVisited,
      } = gridInfos[y][x];

      if (isIsland && !isVisited) {
        count++;
        dfs(x, y);
      }
    }
  }

  return count;

  function dfs(x, y) {
    for (const direction of directions) {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
        continue;
      }

      const nextInfo = gridInfos[nextY][nextX];

      if (!nextInfo.isIsland || nextInfo.isVisited) {
        continue;
      }

      nextInfo.isVisited = true;

      dfs(nextX, nextY);
    }
  }
}

const questions = [
  {
    grid: [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
    ],
    answer: 3,
  },
];

questions.forEach(question => {
  const {
    grid,
    answer,
  } = question;

  const bfsResult = solutionBFS(grid);
  const dfsResult = solutionDFS(grid);

  console.group('그래프 탐색 7 - 연결 요소(섬) 개수 세기 - BFS 버전');
  console.log('grid: ', grid);
  console.log('answer: ', answer);
  console.log('--- --- --- --- ---');
  console.log('bfsResult: ', bfsResult);
  console.log('pass: ', bfsResult === answer);
  console.log('--- --- --- --- ---');
  console.log('dfsResult: ', dfsResult);
  console.log('pass: ', dfsResult === answer);
  console.log('--- --- --- --- ---');
  console.groupEnd();
});
