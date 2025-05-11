/**
 * 🧩 3-2. 문제: 미로 탈출 가능 여부 판단
 * 아래와 같은 2차원 미로가 주어진다.
 * 
 * 1은 이동할 수 있는 길
 * 
 * 0은 벽
 * 
 * 시작점은 (0, 0)
 * 
 * 도착점은 (n-1, m-1)
 * 
 * 출발지에서 도착지까지 도달 가능한지 여부를 true 또는 false로 반환하라.
 * 
 * @param { number[][] } maze
 */
function solution(maze) {
  const DIRECTIONS = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0},
    { x: 1, y: 0 },
  ];

  const MAX_Y = maze.length - 1;
  const MAX_X = maze[0].length - 1;

  const mazeInfo = maze.map(row => {
    return row.map(col => {
      return {
        isInvalid: col === 0,
        isVisited: false,
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

    DIRECTIONS.forEach(direction => {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
        return;
      }

      const nextInfo = mazeInfo[nextY][nextX];

      if (nextInfo.isInvalid || nextInfo.isVisited) {
        return;
      }

      nextInfo.isVisited = true;
      queue.push({
        x: nextX,
        y: nextY,
      });
    });
  }

  return mazeInfo[MAX_Y][MAX_X].isVisited;
}

const questions = [
  {
    maze: [
      [1, 1, 0, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
      [1, 0, 0, 1],
    ],
    answer: false,
  },
  {
    maze: [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    answer: true,
  },
];

questions.forEach(question => {
  const {
    maze,
    answer,
  } = question;

  const result = solution(maze);

  console.group('3-2. 문제: 미로 탈출 가능 여부 판단');
  console.log('maze: ', maze);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
