export class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] ?? [];
  }

  addEdge(vertex1, vertex2) {
    // vertex1 에 대한 adjacencyList 에 vertex2 를 추가한다.
    this._connectVertex(vertex1, vertex2);
    // vertex2 에 대한 adjacencyList 에 vertex1 을 추가한다.
    this._connectVertex(vertex2, vertex1);
  }

  _connectVertex(fromVertex, toVertex) {
    this.adjacencyList[fromVertex]?.push(toVertex);
  }

  removeEdge(vertex1, vertex2) {
    // vertex1 에 대한 adjacencyList 에서 vertex2 를 삭제한다.
    this._disconnect(vertex1, vertex2);
    // vertex2 에 대한 adjacencyList 에서 vertex1 을 삭제한다.
    this._disconnect(vertex2, vertex1);
  }

  _disconnect(fromVertex, toVertex) {
    if (this.adjacencyList[fromVertex]) {
      this.adjacencyList[fromVertex] = this.adjacencyList[fromVertex]
        .filter(v => v !== toVertex);
    }
  }

  removeVertex(vertex) {
    // adjacencyList 의 모든 vertex 에 대하여, 인자로 받은 vertex 를 삭제한다.
    Object
      .keys(this.adjacencyList)
      .forEach(v => this.removeEdge(v, vertex));

    // adjacencyList 에서 vertex 를 삭제한다.
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(startVertex) {
    // 결과 배열 만들기
    const result = [];

    // 방문 여부 HashMap 만들기
    const visitedMap = {};

    // 인접 리스트 가져오기
    // NOTE: (helper 함수 내에서 this 바인딩이 바뀌는 현상 해소 방법)
    const adjacencyList = this.adjacencyList;

    // 재귀 helper 함수 정의하기 (IIFE)
    (function dfs(vertex) {
      // (Base Case) vertex 인자가 없다면,
      if (!vertex) {
        // 함수 종료하기
        return;
      }

      // vertex 의 방문 여부를 true 로 변경하기
      visitedMap[vertex] = true;
      // 결과 배열에 vertex 추가하기
      result.push(vertex);

      // vertex 의 인접 리스트를 순회하며,
      adjacencyList[vertex].forEach(adjacencyVertex => {
        // 인접 vertex 를 반문하지 않았다면,
        if (!visitedMap[adjacencyVertex]) {
          // 재귀 호출하기
          dfs(adjacencyVertex);
        }
      });
    })(startVertex);

    // 결과 배열 반환하기
    return result;
  }
};
