/**
 * 🍅 **"토마토 문제 (Tomato BFS)"**야!
 * 📘 문제 요약:
 * 창고에 토마토들이 상자에 담겨 있어.
 * 
 * 익은 토마토(1)는 하루가 지나면 주변의 익지 않은 토마토(0)를 익게 만들어.
 * 벽(-1)을 사이에 두고 있다면, 익은 토마토(1)는 영향을 줄 수 없어.
 * 
 * 상하좌우 인접한 토마토만 영향을 받아.
 * 
 * 모든 토마토가 익기까지 걸리는 최소 날짜 수를 구해줘.
 * 
 * 만약 모두 익는 게 불가능하면 -1을 반환해!
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

  let totalCount = 0;
  let ripenedCount = 0;
  let elapsedTime = 0;

  const queue = [];

  const gridInfo = grid.map((row, y) => {
    return row.map((col, x) => {
      if (col === 1) {
        queue.push({
          x,
          y,
          days: 0,
        });
      }

      if (col > -1) {
        totalCount++;
      }

      return {
        isVisited: col === 1,
        isInvalid: col === -1,
      };
    });
  });

  const MAX_Y = gridInfo.length - 1;
  const MAX_X = gridInfo[0].length - 1;

  while (queue.length) {
    const {
      x,
      y,
      days,
    } = queue.shift();

    ripenedCount++;
    elapsedTime = Math.max(elapsedTime, days);

    directions.forEach(direction => {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (nextX < 0 || nextX > MAX_X || nextY < 0 || nextY > MAX_Y) {
        return;
      }

      const nextInfo = gridInfo[nextY][nextX];

      if (nextInfo.isVisited || nextInfo.isInvalid) {
        return;
      }

      nextInfo.isVisited = true;

      queue.push({
        x: nextX,
        y: nextY,
        days: days + 1,
      });
    });
  }

  return totalCount === ripenedCount
    ? elapsedTime
    : -1;
}

const questions = [
  {
    grid: [
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
    ],
    answer: 2,
  },
];

questions.forEach(question => {
  const {
    grid,
    answer,
  } = question;

  const result = solution(grid);

  console.group('토마토 문제 (Tomato BFS)');
  console.log('grid: ', grid);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
