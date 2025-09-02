export class WeightedNode {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
};

export class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(name, weight) {
    const newNode = new WeightedNode(name, weight);
    this.nodes.push(newNode);

    this.bubbleUp();

    return this;
  }

  bubbleUp() {
    let index = this.nodes.length - 1;
    const node = this.nodes[index];

    while (index > 0) {
      // 부모 index 구하기
      const parentIndex = Math.floor((index - 1) / 2);
      // 부모 node 찾기
      const parentNode = this.nodes[parentIndex];

      // 부모 node.weight > node.weight 라면,
      if (parentNode.weight > node.weight) {
        // 스왑하기
        [this.nodes[parentIndex], this.nodes[index]] =
          [node, parentNode];

        // index 를 부모 index 로 변경하기
        index = parentIndex;
      }
      // 아니라면,
      else {
        // break
        break;
      }
    }
  }

  dequeue() {
    [this.nodes[0], this.nodes[this.nodes.length - 1]] =
      [this.nodes[this.nodes.length - 1], this.nodes[0]];

    const smallestNode = this.nodes.pop();

    this.sinkDown();

    return smallestNode;
  }

  sinkDown() {
    let index = 0;
    const node = this.nodes[index];

    // 스왑하기
    while (index < this.nodes.length) {
      // 좌측 자식 index 구하기
      const leftChildIndex = index * 2 + 1;
      // 우측 자식 index 구하기
      const rightChildIndex = index * 2 + 2;

      // 좌측 자식 node 찾기
      const leftChildNode = this.nodes[leftChildIndex];
      // 우측 자식 node 찾기
      const rightChildNode = this.nodes[rightChildIndex];

      // 스왑 index 변수 만들기
      let swapIndex = null;

      // 좌측 node.weight < node.weight 라면,
      if (leftChildNode && leftChildNode.weight < node.weight) {
        // 스왑 index 를 좌측 index 로 변경하기
        swapIndex = leftChildIndex;
      }

      // 우측 node.weight < node.weight 라면,
      if (rightChildNode && rightChildNode.weight < node.weight) {
        // 스왑 index 를 우측 index 로 변경하기
        index = rightChildIndex;
      }

      // 스왑 index 가 있다면
      if (swapIndex !== null) {
        // 스왑하기
        [this.nodes[swapIndex], this.nodes[index]] =
          [this.nodes[index], this.nodes[swapIndex]];
      }
      // 아니라면,
      else {
        // break
        break;
      }
    }
  }
};

export class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] ?? [];
    return this;
  }

  checkIsVertex(vertex) {
    return !!this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.checkIsVertex(vertex1) || !this.checkIsVertex(vertex2)) {
      return this;
    }

    this.adjacencyList[vertex1].push(
      new WeightedNode(vertex2, weight)
    );

    this.adjacencyList[vertex2].push(
      new WeightedNode(vertex1, weight)
    );

    return this;
  }

  dijkstra(startVertex, endVertex) {
    const closestPriorityQueue = new PriorityQueue();
    const distanceMap = {};
    const previousMap = {};

    // 초기화
    closestPriorityQueue.enqueue(startVertex, 0);
    Object
      .keys(this.adjacencyList)
      .forEach(vertex => {
        distanceMap[vertex] = vertex === startVertex ? 0 : Infinity;
        previousMap[vertex] = null;
      });

    // 최단거리 연산하기
    while (closestPriorityQueue.nodes.length) {
      // PriorityQueue.dequeue() 는 최우선 weight(가장 적은) vertex 를 반환한다.
      const vertex = closestPriorityQueue.dequeue();
      const vertexAdjacencyList = this.adjacencyList[vertex.name];

      for (const adjacencyVertex of vertexAdjacencyList) {
        const adjacencyWeight = distanceMap[vertex.name] + adjacencyVertex.weight;

        if (adjacencyWeight < distanceMap[adjacencyVertex.name]) {
          distanceMap[adjacencyVertex.name] = adjacencyWeight;
          closestPriorityQueue.enqueue(adjacencyVertex.name, adjacencyWeight);
          previousMap[adjacencyVertex.name] = vertex.name;
        }
      }
    }

    const result = [];
    let previousVertexName = endVertex;

    while (previousVertexName) {
      result.push(previousVertexName);
      previousVertexName = previousMap[previousVertexName];
    }

    return result.reverse();
  }
}
