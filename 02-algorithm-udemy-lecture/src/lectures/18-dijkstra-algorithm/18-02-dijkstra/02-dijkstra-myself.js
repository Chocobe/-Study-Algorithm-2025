export class WeightedNode {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
};

export class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(name, weight) {
    const newNode = new WeightedNode(name, weight);
    this.values.push(newNode);
    this.bubbleUp();

    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const node = this.values[index];

    // parentNode 비교 및 스왑하기
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.values[parentIndex];

      if (parentNode.weight > node.weight) {
        [this.values[parentIndex], this.values[index]] =
          [node, parentNode];

        index = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    // root 를 values 마지막과 스왑하기
    [this.values[0], this.values[this.values.length - 1]] =
      [this.values[this.values.length - 1], this.values[0]];

    const rootNode = this.values.pop();

    this.sinkDown();

    return rootNode;
  }

  sinkDown() {
    let index = 0;
    const node = this.values[index];

    // 자식 node 비교 및 스왑하기
    while (index < this.values.length - 1) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;

      const leftChildNode = this.values[leftChildIndex];
      const rightChildNode = this.values[rightChildIndex];

      let swapIndex = index;

      if (!leftChildNode && !rightChildNode) {
        break;
      }

      if (leftChildNode && leftChildNode.weight < node.weight) {
        swapIndex = leftChildIndex;
      }

      if (rightChildNode && rightChildNode.weight < node.weight) {
        swapIndex = rightChildIndex;
      }

      if (index < swapIndex) {
        [this.values[swapIndex], this.values[index]] =
          [this.values[index], this.values[swapIndex]];

        index = swapIndex;
      } else {
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

  addEdge(vertex1, vertex2, weight) {
    // vertex 유효성 검사 하기
    if (!this.checkIsVertex(vertex1) || !this.checkIsVertex(vertex2)) {
      return this;
    }

    // 양방향 인접 리스트 추가하기
    this.adjacencyList[vertex1].push(new WeightedNode(vertex2, weight));
    this.adjacencyList[vertex2].push(new WeightedNode(vertex1, weight));

    return this;
  }

  checkIsVertex(vertex) {
    return !!this.adjacencyList[vertex];
  }

  dijkstra(startVertex, endVertex) {
    // node 유효성 검사 하기
    if (!this.checkIsVertex(startVertex) || !this.checkIsVertex(endVertex)) {
      return null;
    }

    // (확정된 노드로 부터) 가장 가까운 노드 우선순위 큐 만들기
    const closestPriorityQueue = new PriorityQueue();
    // 노드별 최단거리 map 만들기
    const distanceMap = {};
    // 노드별 최단거리에서 이전 노드 map 만들기
    const previousMap = {};

    // 초기화
    closestPriorityQueue.enqueue(startVertex, 0);
    Object
      .keys(this.adjacencyList)
      .forEach(vertex => {
        distanceMap[vertex] = vertex === startVertex ? 0 : Infinity;
        previousMap[vertex] = null;
      });

    // closestPriorityQueue 를 순회하며, 가까운 노드 순서로 최단거리 연산하기
    while (closestPriorityQueue.values.length) {
      // dequeue() 반환 vertex 는 이전까지 연산된 거리가 최단거리로 확정된다.
      const vertex = closestPriorityQueue.dequeue();

      if (vertex.name === endVertex) {
        break;
      }

      for (const adjacencyVertex of this.adjacencyList[vertex.name]) {
        const adjacencyDistance = vertex.weight + adjacencyVertex.weight;

        if (adjacencyDistance < distanceMap[adjacencyVertex.name]) {
          distanceMap[adjacencyVertex.name] = adjacencyDistance;
          closestPriorityQueue.enqueue(adjacencyVertex.name, adjacencyDistance);
          previousMap[adjacencyVertex.name] = vertex.name;
        }
      }
    }

    const reversedPaths = [endVertex];

    while (true) {
      const lastVertex = reversedPaths[reversedPaths.length - 1];
      const previousVertex = previousMap[lastVertex];

      if (previousVertex) {
        reversedPaths.push(previousVertex);
      } else {
        break;
      }
    }

    return reversedPaths.reverse();
  }
};
