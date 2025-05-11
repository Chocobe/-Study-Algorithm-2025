/**
 * 1. DBF, BFS
 * 
 * 🧩 문제: 특정 노드까지의 경로 존재 여부 (그래프 탐색)
 * 방향성이 있는 인접 리스트 형태의 그래프가 주어진다.
 * 출발 노드 start에서 목표 노드 end까지 경로가 존재하는지 판단하라.
 */

/**
 * @param { Record<string, string[]> } graph
 * @param { string } start
 * @param { string } end
 */
function dfsSolution(graph, start, end) {
  const graphInfo = Object.entries(graph).map(([key, paths]) => {
    return {
      [key]: {
        isVisited: false,
        paths,
      },
    };
  }).reduce((graphInfo, item) => {
    return {
      ...graphInfo,
      ...item,
    };
  }, {});

  function dfs(start, end) {
    const currentInfo = graphInfo[start];

    if (start === end) {
      return true;
    }

    if (currentInfo.isVisited) {
      return false;
    }

    currentInfo.isVisited = true;

    for (let path of currentInfo.paths) {
      if (dfs(path, end)) {
        return true;
      }
    }

    return false;
  }

  return dfs(start, end);
}

/**
 * @param { Record<string, string[]> } graph
 * @param { string } start
 * @param { string } end
 */
function bfsSolution(graph, start, end) {
  const graphInfo = Object.entries(graph).map(([key, paths]) => {
    return {
      [key]: {
        isVisited: false,
        paths,
      },
    };
  }).reduce((graphInfo, item) => ({
    ...graphInfo,
    ...item,
  }), {});

  const queue = [
    start,
  ];

  while (queue.length) {
    const graphItemKey = queue.shift();
    const graphItem = graphInfo[graphItemKey];

    if (graphItemKey === end) {
      return true;
    }

    if (!graphItem.isVisited) {
      graphItem.isVisited = true;
      queue.push(...graphItem.paths);
    }
  }

  return false;
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
  },
];

questions.forEach(question => {
  const {
    graph,
    start,
    end,
    answer,
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
  console.log('dfs pass: ', dfsResult === answer);
  console.log('--- --- --- --- ---')
  console.log('bfsResult: ', bfsResult);
  console.log('bfs pass: ', bfsResult === answer);
  console.log('--- --- --- --- ---')
  console.groupEnd();
});
