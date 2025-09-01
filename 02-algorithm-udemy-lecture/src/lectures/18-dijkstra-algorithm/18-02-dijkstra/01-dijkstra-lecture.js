export class Node {
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
    const newNode = new Node(name, weight);

    this.values.push(newNode);

    this.bubbleUp();

    return this;
  }

  bubbleUp() {
    let nodeIndex = this.values.length - 1;
    const node = this.values[nodeIndex];

    while (nodeIndex > 0) {
      const parentIndex = Math.floor((nodeIndex - 1) / 2);

      if (parentIndex < 0) {
        break;
      }

      const parentNode = this.values[parentIndex];

      if (parentNode.weight > node.weight) {
        [this.values[nodeIndex], this.values[parentIndex]] = [parentNode, node];
        nodeIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] =
      [this.values[this.values.length - 1], this.values[0]];

    const rootNode = this.values.pop();

    this.sinkDown();

    return rootNode;
  }

  sinkDown() {
    let nodeIndex = 0;
    const node = this.values[nodeIndex];

    while (nodeIndex < this.values.length - 1) {
      const leftChildIndex = nodeIndex * 2 + 1;
      const rightChildIndex = nodeIndex * 2 + 2;

      const leftChildNode = this.values[leftChildIndex];
      const rightChildNode = this.values[rightChildIndex];

      let swapIndex = null;

      if (!leftChildNode && !rightChildNode) {
        break;
      }

      if (leftChildNode && leftChildNode.weight < node.weight) {
        swapIndex = leftChildIndex;
      }

      if (rightChildNode && rightChildNode.weight < leftChildNode.weight) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) {
        break;
      }

      [this.values[swapIndex], this.values[nodeIndex]] =
        [this.values[nodeIndex], this.values[swapIndex]];

      nodeIndex = swapIndex;
    }
  }
}

export class WeightedGraph {
  constructor() {
    // 각 vertex 에 대한 가중치 인접 리스트
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] ?? [];
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this.checkIsVertex(startVertex) || !this.checkIsVertex(endVertex)) {
      return;
    }

    this.adjacencyList[startVertex].push(new Node(endVertex, weight));
    this.adjacencyList[endVertex].push(new Node(startVertex, weight));
  }

  removeEdge(startVertex, endVertex) {
    if (!this.checkIsVertex(startVertex) || !this.checkIsVertex(endVertex)) {
      return;
    }

    this.adjacencyList[startVertex] = this.adjacencyList[startVertex]
      .filter(v => v.name !== endVertex);

    this.adjacencyList[endVertex] = this.adjacencyList[endVertex]
      .filter(v => v.name !== startVertex);
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

  checkIsVertex(vertex) {
    return !!this.adjacencyList[vertex];
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    let smallest;
    let path = [];

    // 초기화 하기
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        // nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // 최단 경로 연산하기
    while (nodes.values.length) {
      console.log('nodes.values: ', nodes.values);

      smallest = nodes.dequeue().name;

      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      // TODO: 조건 없이 테스트 해보기
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const nextNeighbor = nextNode.name;

          let candidate = distances[smallest] + nextNode.weight;

          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;

            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}
