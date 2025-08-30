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

  /**
   * NOTE: DFS preorder 로 구현하기
   */
  dfsIterative(startVertex) {
    // 결과 배열 만들기
    const result = [];
    // 반문 결과 HashMap 만들기
    const visitedMap = {};
    // stack 만들기
    const stack = [startVertex];

    // while (stack.length),
    while (stack.length) {
      // stack 에서 현재 vertex 꺼내기
      const vertex = stack.pop();

      // vertex 를 이미 방문 했다면,
      if (visitedMap[vertex]) {
        // continue;
        continue;
      }

      // 결과 배열에 vertex 추가하기
      result.push(vertex);
      // 방문 여부 true 로 변경하기
      visitedMap[vertex] = true;

      // 현재 vertex 의 인전 vertex 를 순회하며 (역순으로),
      for (let i = this.adjacencyList[vertex].length - 1; i >= 0; i--) {
        // stack 에 인접 vertex push() 하기
        stack.push(this.adjacencyList[vertex][i]);
      }
    }

    // 결과 배열 반환하기
    return result;
  }
};
