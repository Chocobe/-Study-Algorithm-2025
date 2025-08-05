/**
 * 🧯🔥 “불이 번지는 미로” 문제야!
 * 📘 문제 설명:
 * 2차원 미로가 있어.
 * 
 * #: 벽, .: 빈 공간, F: 불, J: 주인공(지훈이)
 * 
 * 불은 매 초마다 상하좌우로 번져.
 * 
 * 지훈이는 매 초마다 한 칸 이동할 수 있어.
 * 
 * 불보다 먼저 도착해야 함.
 * 
 * 지훈이가 미로 바깥으로 탈출할 수 있는 최소 시간을 구하라.
 * 
 * 만약 불이 퍼지기 전에 탈출할 수 없다면 IMPOSSIBLE을 출력해.
 * 
 * 🎯 목표:
 * 불은 여러 위치에서 동시에 번지며 BFS로 처리해야 해.
 * 
 * 지훈이는 불보다 먼저 도착해야 하므로 불이 언제 도달하는지를 먼저 계산해야 해!
 * 
 * 그리고 지훈이가 이동할 수 있는 경로 중 불보다 먼저 도착하는 경로가 있는지 판단해야 해.
 * 
 * ✅ 출력 예시:
 * 최소 탈출 시간 (예: 5)
 * 
 * 혹은 탈출 불가능 시 "IMPOSSIBLE"
 */

const FIRE = 'F';
const WALL = '#';
const EMPTY = '.';
const PERSON = 'J';

/**
 * @param { number[][] } maze
 */
function solution(maze) {
  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const MAX_X = maze[0].length - 1;
  const MAX_Y = maze.length - 1;

  const fireQueue = [];
  const personQueue = [];

  const fireInfos = maze.map((row, y) => {
    return row.map((col, x) => {
      if (col === FIRE) {
        fireQueue.push({
          x,
          y,
        });
      }

      if (col === PERSON) {
        personQueue.push({
          x,
          y,
          elapsedTime: 0,
        });
      }

      return {
        isWall: col === WALL,
        isVisited: col === PERSON,
        isExit: y === 0 
          || y === MAX_Y
          || x === 0
          || x === MAX_X,
        fireTime: col === FIRE
          ? 0
          : -1,
      };
    });
  });

  while (fireQueue.length) {
    const {
      x,
      y,
    } = fireQueue.shift();

    const currentInfo = fireInfos[y][x];

    directions.forEach(direction => {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
        return;
      }

      const nextInfo = fireInfos[nextY][nextX];

      if (nextInfo.isWall || nextInfo.fireTime >= 0) {
        return;
      }

      nextInfo.fireTime = currentInfo.fireTime + 1;

      fireQueue.push({
        x: nextX,
        y: nextY,
      });
    });
  }

  while (personQueue.length) {
    const {
      x,
      y,
      elapsedTime,
    } = personQueue.shift();

    const currentFireInfo = fireInfos[y][x];

    if (currentFireInfo.isExit) {
      return elapsedTime;
    }

    directions.forEach(direction => {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
        return;
      }

      const nextFireInfo = fireInfos[nextY][nextX];
      const nextElapsedTime = elapsedTime + 1;

      if (nextFireInfo.isWall || nextFireInfo.isVisited || nextFireInfo.fireTime <= nextElapsedTime) {
        return;
      }

      personQueue.push({
        x: nextX,
        y: nextY,
        elapsedTime: nextElapsedTime,
      });
    });
  }

  return 'IMPOSSIBLE';
}

const questions = [
  {
    maze: [
      ['#', '#', '#', '#', '#'],
      ['#', 'J', '.', '.', '#'],
      ['#', '.', '#', '.', '#'],
      ['#', '.', '.', 'F', '.'],
      ['#', '#', '#', '#', '#'],
    ],
    answer: 'IMPOSSIBLE',
  },
  {
    maze: [
      ['#', '#', '#', '#', '#'],
      ['.', '.', '.', 'J', '#'],
      ['.', '.', '#', '.', '#'],
      ['F', '.', '#', '.', '#'],
      ['.', '.', '.', '.', '.'],
      ['#', '#', '#', '#', '#'],
    ],
    answer: 4,
  },
];

questions.forEach(question => {
  const {
    maze,
    answer,
  } = question;

  const result = solution(maze);

  console.group('불이 번지는 미로');
  console.log('maze: ', maze);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
