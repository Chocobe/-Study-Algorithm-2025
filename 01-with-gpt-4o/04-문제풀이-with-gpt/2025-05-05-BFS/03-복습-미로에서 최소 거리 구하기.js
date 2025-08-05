/**
 * ✅ 복습 문제: 미로에서 최소 거리 구하기 (기본 BFS)
 * 📘 문제 설명
 * 0과 1로 이루어진 2차원 배열이 주어져.
 * 
 * 1은 이동 가능한 길
 * 
 * 0은 벽
 * 
 * 시작점: (0, 0)
 * 
 * 도착점: (N-1, M-1)
 * 
 * (0,0) → (N-1,M-1) 로 도착할 수 있는 최소 칸 수를 구해줘.
 * 이때 출발점과 도착점도 포함된 칸 수야!
 */

/**
 * @param { number[][] } maze
 */
function solution(maze) {
  const directions = [
    { y: -1, x: 0 },
    { y: 1, x: 0 },
    { y: 0, x: -1 },
    { y: 0, x: 1 },
  ];

  const mazeInfos = maze.map(row => {
    return row.map(col => ({
      isWall: col === 0,
      isVisited: false,
    }));
  });

  const MAX_Y = mazeInfos.length - 1;
  const MAX_X = mazeInfos[0].length - 1;

  const queue = [
    {
      y: 0,
      x: 0,
      distance: 1,
    },
  ];

  while (queue.length) {
    const {
      y,
      x,
      distance,
    } = queue.shift();

    if (y === MAX_Y && x === MAX_X) {
      return distance;
    }

    for (const direction of directions) {
      const nextY = y + direction.y;
      const nextX = x + direction.x;

      if (nextY < 0 || nextY > MAX_Y || nextX < 0 || nextX > MAX_X) {
        continue;
      }

      const nextInfo = mazeInfos[nextY][nextX];
      const nextDistance = distance + 1;

      if (nextInfo.isWall || nextInfo.isVisited) {
        continue;
      }

      nextInfo.isVisited = true;

      queue.push({
        y: nextY,
        x: nextX,
        distance: nextDistance,
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

  const result = solution(maze);

  console.group('복습 문제: 미로에서 최소 거리 구하기 (기본 BFS)');
  console.log('maze: ', maze);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
