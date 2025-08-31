export class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  checkIsVertex(vertex) {
    return !!this.adjacencyList[vertex];
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] ?? [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.checkIsVertex(vertex1) || !this.checkIsVertex(vertex2)) {
      return;
    }

    this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
  }

  removeEdge(vertex1, vertex2) {
    if (!this.checkIsVertex(vertex1) || !this.checkIsVertex(vertex2)) {
      return;
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
      .filter(v => v.vertex !== vertex2);

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
      .filter(v => v.vertex !== vertex1);
  }

  removeVertex(vertex) {
    if (!this.checkIsVertex(vertex)) {
      return;
    }

    Object
      .keys(this.adjacencyList)
      .forEach(key => {
        this.removeEdge(key, vertex);
      });

    delete this.adjacencyList[vertex];
  }
};
