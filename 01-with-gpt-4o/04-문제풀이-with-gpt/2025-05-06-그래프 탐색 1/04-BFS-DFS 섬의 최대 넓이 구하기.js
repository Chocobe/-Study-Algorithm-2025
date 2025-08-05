/**
 * 그래프 탐색 4 - BFS 최단거리 좌표 추적
 * 📘 문제: 섬의 최대 넓이(Max Area of Island) 구하기
 * 설명:
 * 2차원 배열 grid가 주어져.
 * 
 * 1은 육지
 * 
 * 0은 바다
 * 
 * 상하좌우로 연결된 육지는 하나의 섬이야.
 * 가장 넓은 섬의 넓이(=1의 개수) 를 구해줘.
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
      isInvalid: col === 0,
      isVisited: false,
    }));
  });

  const MAX_Y = gridInfo.length - 1;
  const MAX_X = gridInfo[0].length - 1;

  let maxSize = 0;

  gridInfo.forEach((row, y) => {
    row.forEach((startInfo, x) => {
      if (!startInfo.isInvalid && !startInfo.isVisited) {
        bfs(y, x);
      }
    });
  });

  function bfs(y, x) {
    const startInfo = gridInfo[y][x];
    startInfo.isVisited = true;

    const queue = [
      [y, x],
    ];

    let currentSize = 1;

    while (queue.length) {
      const [y, x] = queue.shift();

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

        currentSize++;
        nextInfo.isVisited = true;

        queue.push(
          [nextY, nextX],
        );
      }
    }

    maxSize = Math.max(maxSize, currentSize);
  }

  return maxSize;
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
      isInvalid: col === 0,
      isVisited: false,
    }));
  });

  const MAX_Y = gridInfo.length - 1;
  const MAX_X = gridInfo[0].length - 1;

  let maxSize = 0;

  gridInfo.forEach((row, y) => {
    row.forEach((startInfo, x) => {
      if (!startInfo.isInvalid && !startInfo.isVisited) {
        dfs(y, x);
      }
    });
  });

  function dfs(y, x) {
    const startInfo = gridInfo[y][x];
    startInfo.isVisited = true;

    let currentSize = 1;

    const stack = [
      [y, x],
    ];

    while (stack.length) {
      const [y, x] = stack.pop();

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

        nextInfo.isVisited = true;
        currentSize++;

        stack.push(
          [nextY, nextX],
        );
      }
    }

    maxSize = Math.max(maxSize, currentSize);
  }

  return maxSize;
}

const questions = [
  {
    grid: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 0, 0, 0],
    ],
    answer: 5,
  },
];

questions.forEach(question => {
  const {
    grid,
    answer,
  } = question;

  const bfsResult = bfsSolution(grid);
  const dfsResult = dfsSolution(grid);

  console.group('섬의 최대 넓이(Max Area of Island) 구하기');
  console.log('grid: ', grid);
  console.log('answer: ', answer);
  console.log('--- --- --- --- --- --- --- --- --- ---');
  console.log('bfsResult: ', bfsResult);
  console.log('bfs: ', bfsResult === answer);
  console.log('--- --- --- --- --- --- --- --- --- ---');
  console.log('dfsResult: ', dfsResult);
  console.log('bfs: ', dfsResult === answer);
  console.groupEnd();
});
