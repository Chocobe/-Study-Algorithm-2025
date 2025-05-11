/**
 * 📘 DFS(깊이 우선 탐색) 개념 정리
 * 항목	설명
 * 💡 탐색 방식	한 방향으로 "끝까지" 탐색하고, 막히면 되돌아가 다른 경로 탐색
 * 🔁 구현 방식	재귀 함수 또는 스택 사용 가능
 * ⛓️ 구조	트리, 그래프, 2차원 배열 등 다양한 구조에서 사용
 * 🔍 특징	경로, 연결성, 백트래킹 문제에서 자주 사용됨
 * ⏱ 시간 복잡도	O(V + E) (V: 정점 수, E: 간선 수)
 * 🚫 주의사항	무한 루프 방지를 위해 방문 여부 체크가 반드시 필요함
 * 
 * 📌 DFS vs BFS 비교 요약
 * 항목	DFS	BFS
 * 탐색 순서	깊이 우선 (끝까지 파고듦)	너비 우선 (가까운 것부터 탐색)
 * 자료구조	재귀 or 스택	큐
 * 사용 예	미로 모든 경로, 백트래킹, 퍼즐, 사이클 탐지 등	최단 거리, 레벨 순회 등
 * 
 * @param { number[][] } maze
 */
function solution(maze) {
  const MAX_Y = maze.length - 1;
  const MAX_X = maze[0].length - 1;

  const DIRECTIONS = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ];

  const mazeInfo = maze.map(row => {
    return row.map(col => ({
      isInvalid: col === 0,
      isVisited: false,
    }));
  });

  function dfs(x, y) {
    if (x < 0 || x > MAX_X || y < 0 || y > MAX_Y) {
      return false;
    }

    const currentInfo = mazeInfo[y][x];

    if (currentInfo.isInvalid || currentInfo.isVisited) {
      return false;
    }

    if (x === MAX_X && y === MAX_Y) {
      return true;
    }

    currentInfo.isVisited = true;

    for (let direction of DIRECTIONS) {
      const nextX = x + direction.x;
      const nextY = y + direction.y;

      if (dfs(nextX, nextY)) {
        return true;
      }
    }

    return false;
  }

  return dfs(0, 0);
}

const questions = [
  {
    maze: [
      [1, 1, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
    answer: true,
  },
  {
    maze: [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ],
    answer: false,
  },
];

questions.forEach(({ maze, answer }) => {
  const result = solution(maze);
  console.group('DFS 미로 탈출 여부');
  console.log('maze:', maze);
  console.log('answer:', answer);
  console.log('result:', result);
  console.log('pass:', result === answer);
  console.groupEnd();
});
