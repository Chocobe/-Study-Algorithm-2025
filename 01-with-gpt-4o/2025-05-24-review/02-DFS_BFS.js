/**
 * 1. DBF, BFS
 * 
 * 🧩 문제: 특정 노드까지의 경로 존재 여부 (그래프 탐색)
 * 방향성이 있는 인접 리스트 형태의 그래프가 주어진다.
 * 출발 노드 start에서 목표 노드 end까지 경로가 존재하는지 판단하라.
 */

/**
 * 시작: 14:13
 * 
 * @param { Record<string, string[]> } graph
 * @param { string } start
 * @param { string } end
 */
function dfsSolution(graph, start, end) {
  const visitedSet = new Set();

  // const stack = [start];
  const stack = [{
    node: start,
    path: [start],
  }];

  while (stack.length) {
    const current = stack.pop();

    if (current.node === end) {
      // return true;
      return {
        answer: true,
        pathAnswer: current.path,
      };
    }

    if (visitedSet.has(current.node)) {
      continue;
    }

    visitedSet.add(current.node);

    graph[current.node].forEach(node => {
      stack.push({
        node,
        path: [
          ...current.path,
          node,
        ],
      });
    });
  }

  return {
    answer: false,
    pathAnswer: null,
  }
}

/**
 * @param { Record<string, string[]> } graph
 * @param { string } start
 * @param { string } end
 */
function bfsSolution(graph, start, end) {
  const visitedSet = new Set();

  // const queue = [start];
  const queue = [{
    node: start,
    path: [start],
  }];

  while (queue.length) {
    const current = queue.shift();

    if (current.node === end) {
      // return true;
      return {
        answer: true,
        pathAnswer: current.path,
      };
    }

    if (visitedSet.has(current.node)) {
      continue;
    }

    visitedSet.add(current.node);

    graph[current.node].forEach(node => {
      // queue.push(node);
      queue.push({
        node,
        path: [
          ...current.path,
          node,
        ],
      });
    });
  }

  // return false;
  return {
    answer: false,
    pathAnswer: null,
  };
}

const questions = [
  {
    graph: {
      A: ['B', 'C'],
      B: ['D'],
      C: ['E'],
      D: [],
      E: ['B'],
    },
    start: 'A',
    end: 'D',
    answer: true,
    pathAnswers: [
      JSON.stringify(['A', 'B', 'D']),
      JSON.stringify(['A', 'C', 'E', 'B', 'D']),
    ],
  },
];

questions.forEach(question => {
  const {
    graph,
    start,
    end,
    answer,
    pathAnswers,
  } = question;

  const dfsResult = dfsSolution(graph, start, end);
  const bfsResult = bfsSolution(graph, start, end);

  console.group('1. DBF, BFS');
  console.log('graph: ', graph);
  console.log('start: ', start);
  console.log('end: ', end);
  console.log('answer: ', answer);
  console.log('--- --- --- --- ---')
  console.log('dfsResult: ', dfsResult);
  console.log('dfs pass: ', dfsResult.answer === answer);
  console.log('pdf path: ', pathAnswers.includes(JSON.stringify(dfsResult.pathAnswer)));
  console.log('--- --- --- --- ---')
  console.log('bfsResult: ', bfsResult);
  console.log('bfs pass: ', bfsResult.answer === answer);
  console.log('bfs path: ', pathAnswers.includes(JSON.stringify(bfsResult.pathAnswer)));
  console.log('--- --- --- --- ---')
  console.groupEnd();
});
