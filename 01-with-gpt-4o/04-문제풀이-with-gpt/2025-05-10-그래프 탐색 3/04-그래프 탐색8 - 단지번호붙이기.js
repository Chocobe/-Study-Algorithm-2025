/**
 * 🧩 최종 문제: 단지번호붙이기
 * 복습 겸 핵심 로직만 다시 요약해 줄게!
 * 
 * ✅ 문제 설명
 * 1은 집, 0은 빈 땅
 * 
 * 상하좌우로 연결된 1은 같은 단지
 * 
 * 총 단지 수 출력
 * 
 * 각 단지에 있는 집의 수를 오름차순 정렬해서 출력
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

  const gridInfos = grid.map(row => {
    return row.map(col => ({
      isHouse: col === 1,
      isVisited: false,
    }));
  });

  const MAX_X = gridInfos[0].length - 1;
  const MAX_Y = gridInfos.length - 1;

  let currentId = -1;
  const houseCounts = [];

  for (let y = 0; y < gridInfos.length; y++) {
    for (let x = 0; x < gridInfos[y].length; x++) {
      const {
        isHouse,
        isVisited,
      } = gridInfos[y][x];

      const queue = [];

      if (isHouse && !isVisited) {
        currentId++;
        houseCounts[currentId] = 1;
        gridInfos[y][x].isVisited = true;

        queue.push({
          x,
          y,
          id: currentId,
        });

        while (queue.length) {
          const {
            x,
            y,
            id,
          } = queue.shift();

          for (const direction of directions) {
            const nextX = x + direction.x;
            const nextY = y + direction.y;

            if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
              continue;
            }

            const nextInfo = gridInfos[nextY][nextX];

            if (!nextInfo.isHouse || nextInfo.isVisited) {
              continue;
            }

            nextInfo.isVisited = true;
            houseCounts[id]++;

            queue.push({
              x: nextX,
              y: nextY,
              id,
            });
          }
        }
      }
    }
  }

  return [
    houseCounts.length,
    houseCounts.sort((a, b) => a - b),
  ];
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

  const gridInfos = grid.map(row => {
    return row.map(col => ({
      isHouse: col === 1,
      isVisited: false,
    }));
  });

  const MAX_X = gridInfos[0].length - 1;
  const MAX_Y = gridInfos.length - 1;

  const houseCounts = [];
  let currentId = -1;

  for (let y = 0; y < gridInfos.length; y++) {
    for (let x = 0; x < gridInfos[y].length; x++) {
      const {
        isHouse,
        isVisited,
      } = gridInfos[y][x];

      if (isHouse && !isVisited) {
        currentId++;
        houseCounts[currentId] = 1;
        gridInfos[y][x].isVisited = true;

        dfs(y, x, currentId);
      }
    }
  }

  return [
    houseCounts.length,
    houseCounts.sort((a, b) => a - b),
  ];

  function dfs(y, x, id) {
    for (const direction of directions) {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
        continue;
      }

      const nextInfo = gridInfos[nextY][nextX];

      if (!nextInfo.isHouse || nextInfo.isVisited) {
        continue;
      }

      nextInfo.isVisited = true;
      houseCounts[id]++;

      dfs(nextY, nextX, id);
    }
  }
}

const questions = [
  {
    grid: [
      [1, 1, 0, 0],
      [1, 1, 0, 1],
      [0, 0, 0, 1],
      [1, 0, 0, 1],
    ],
    answer: [
      3,
      [1, 3, 4],
    ],
  },
];

questions.forEach(question => {
  const {
    grid,
    answer,
  } = question;

  const bfsResult = bfsSolution(grid);
  const dfsResult = dfsSolution(grid);

  console.group('🧩 최종 문제: 단지번호붙이기');
  console.log('grid: ', grid);
  console.log('answer: ', answer);
  console.log('--- --- --- --- ---');
  console.log('bfsResult: ', bfsResult);
  console.log('bfs pass: ', JSON.stringify(bfsResult) === JSON.stringify(answer));
  console.log('--- --- --- --- ---');
  console.log('dfsResult: ', dfsResult);
  console.log('dfs pass: ', JSON.stringify(dfsResult) === JSON.stringify(answer));
  console.groupEnd();
});
