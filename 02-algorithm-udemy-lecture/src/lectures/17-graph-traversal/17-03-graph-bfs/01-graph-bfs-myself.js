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

  bfs(startVertex) {
    // 결과 배열 만들기
    const result = [];
    // 방문 여부 HashMap 만들기
    const visitedMap = {};
    // queue 만들기
    const queue = [startVertex];

    // while (queue.length)
    while (queue.length) {
      // queue 에서 shift() 로 현재 vertex 꺼내기
      const currentVertex = queue.shift();
      // 현재 vertex 를 이미 방문했다면,
      if (visitedMap[currentVertex]) {
        // continue
        continue;
      }

      // 결과 배열에 vertex 추가하기
      result.push(currentVertex);
      // 방문 여부 true 변경하기
      visitedMap[currentVertex] = true;
      // 인접 vertex 를 queue 에 push() 하기
      this.adjacencyList[currentVertex].forEach(adjacencyVertex => {
        queue.push(adjacencyVertex);
      });
    }

    // 결과 배열 반환하기
    return result;
  }
};
