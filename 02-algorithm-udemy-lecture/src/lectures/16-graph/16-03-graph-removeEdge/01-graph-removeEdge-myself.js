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
};
