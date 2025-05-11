/**
 * 그래프 탐색 3 - BFS 최단거리 좌표 추적
 * 
 * 🧩 문제 설명: 섬의 개수
 * 2차원 배열이 주어져.
 * 
 * 1은 육지, 0은 바다를 의미해.
 * 
 * 상하좌우로 연결된 육지는 하나의 섬이야.
 * 
 * 섬이 몇 개인지 구해줘!
 */

/**
 * @param { number[][] } grid
 */
function bfsSolution(grid) {
  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const gridInfo = grid.map(row => {
    return row.map(col => ({
      id: null,
      isInvalid: col === 0,
      isVisited: false,
    }));
  });

  const MAX_Y = gridInfo.length - 1;
  const MAX_X = gridInfo[0].length - 1;

  let count = 0;

  grid.forEach((row, y) => {
    row.forEach((_, x) => {
      const currentInfo = gridInfo[y][x];

      if (!currentInfo.isInvalid && !currentInfo.isVisited) {
        count++;
        bfs(y, x);
      }
    });
  });

  function bfs(y, x) {
    const startInfo = gridInfo[y][x];
    startInfo.id = count;
    startInfo.isVisited = true;

    const queue = [
      [y, x],
    ];

    while (queue.length) {
      const [y, x] = queue.shift();
      const currentInfo = gridInfo[y][x];

      for (const direction of directions) {
        const nextY = y + direction.y;
        const nextX = x + direction.x;

        if (nextY < 0 || nextY > MAX_Y || nextX < 0 || nextX > MAX_X) {
          continue;
        }

        const nextInfo = gridInfo[nextY][nextX];

        if (nextInfo.isInvalid || nextInfo.isVisited) {
          continue;
        }

        nextInfo.id = currentInfo.id;
        nextInfo.isVisited = true;

        queue.push([nextY, nextX]);
      }
    }
  }

  return count;
}

/**
 * @param { number[][] } grid
 */
function dfsSolution(grid) {
  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const gridInfo = grid.map(row => {
    return row.map(col => ({
      id: null,
      isVisited: false,
      isInvalid: col === 0,
    }));
  });

  const MAX_Y = gridInfo.length - 1;
  const MAX_X = gridInfo[0].length - 1;

  let count = 0;

  gridInfo.forEach((row, y) => {
    row.forEach((startInfo, x) => {
      if (!startInfo.isInvalid && !startInfo.isVisited) {
        count++;
        startInfo.id = count;

        dfs(y, x);
      }
    });
  });

  function dfs(y, x) {
    const currentInfo = gridInfo[y][x];

    for (const direction of directions) {
      const nextY = y + direction.y;
      const nextX = x + direction.x;

      if (nextY < 0 || nextY > MAX_Y || nextX < 0 || nextX > MAX_X) {
        continue;
      }

      const nextInfo = gridInfo[nextY][nextX];

      if (nextInfo.isVisited || nextInfo.isInvalid) {
        continue;
      }

      nextInfo.id = currentInfo.id;
      nextInfo.isVisited = true;

      dfs(nextY, nextX);
    }
  }

  return count;
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

  const bfsResult = bfsSolution(grid);
  const dfsResult = dfsSolution(grid);

  console.group('섬의 개수');
  console.log('grid: ', grid);
  console.log('answer: ', answer);
  console.log('result: ', bfsResult);
  console.log('--- --- --- --- --- --- --- --- --- ---')
  console.log('bfs: ', bfsResult === answer);
  console.log('dfs: ', dfsResult === answer);
  console.log('--- --- --- --- --- --- --- --- --- ---')
  console.groupEnd();
});
