/**
 * 📘 3-1. BFS 기본 흐름 요약 (2차원 배열 탐색 기준)
 * 초기화
 * 
 * queue에 시작 좌표 (0, 0)를 넣음
 * 
 * 방문 체크용 visited 배열 생성
 * 
 * 각 칸까지 도달하는 거리를 maze 자체에 덮어씌우거나 별도 배열 사용
 * 
 * 큐가 빌 때까지 반복
 * 
 * queue에서 현재 위치 (x, y) 꺼냄
 * 
 * 상하좌우 방향으로 한 칸씩 이동 시도
 * 
 * 범위를 벗어나거나, 이미 방문했거나, 0이면 스킵
 * 
 * 갈 수 있다면:
 * 
 * maze[nx][ny] = maze[x][y] + 1 (이전 거리 + 1)
 * 
 * visited[nx][ny] = true
 * 
 * 큐에 (nx, ny) 삽입
 * 
 * 목표에 도달하면 거리 반환
 * 
 * @param { number[][] } maze
 */
function solution(maze) {
  const MAX_Y = maze.length - 1;
  const MAX_X = maze[0].length - 1;

  const DIRECtiONS = [
    { x: 0, y: -1},
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const mazeInfo = maze.map(row => {
    return row.map(col => {
      return {
        distance: 0,
        isVisited: false,
        isInvalid: col === 0,
      };
    });
  });

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

    DIRECtiONS.forEach(direction => {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
        return;
      }

      const currentBlock = mazeInfo[y][x];
      const nextBlock = mazeInfo[nextY][nextX];

      if (nextBlock.isVisited || nextBlock.isInvalid) {
        return;
      }

      nextBlock.isVisited = true;
      nextBlock.distance = currentBlock.distance + 1;
      queue.push({
        x: nextX,
        y: nextY,
      });
    });
  }

  return mazeInfo[MAX_Y][MAX_X].distance;
}

const questions = [
  {
    maze: [
      [1, 1, 0, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 0, 1],
    ],
    answer: 6,
  },
];

questions.forEach(question => {
  const {
    maze,
    answer,
  } = question;

  const result = solution(maze);

  console.group('3-1. BFS 기본 흐름 요약 (2차원 배열 탐색 기준)');
  console.log('maze: ', maze);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
