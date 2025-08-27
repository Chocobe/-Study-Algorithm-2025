export class Node {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
};

/**
 * NOTE: Min Binary Heap 파생 PriorityQueue 구현하기
 * NOTE => Node.priority 가 작을수록 우선순위가 높다.
 */
export class PriorityQueue {
  constructor() {
    this.values = [];
  }

  get root() {
    return this.values[0];
  }

  /** 디버깅용 getter */
  get planeValues() {
    return this.values.map(({ value }) => value);
  }

  enqueue(priority, value) {
    // 새로운 Node 만들기
    const newNode = new Node(priority, value);
    // this.values 에 push() 하기
    this.values.push(newNode);
    // 정렬하기
    this.bubbleUp();
    // this 반환하기
    return this;
  }

  bubbleUp() {
    // 현재 index 변수 만들기 (초기화: 마지막 index)
    let currentIndex = this.values.length - 1;
    // 현재 Node 변수 만들기 (초기화: 마지막 Node)
    const currentNode = this.values[currentIndex];

    // while (currentIndex > 0),
    while (currentIndex > 0) {
      // 부모 index 구하기
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      // 부모 Node 변수 만들기
      const parentNode = this.values[parentIndex];

      // 부모 priority > 현재 priority 라면,
      if (parentNode.priority > currentNode.priority) {
        // 스왑하기
        [this.values[parentIndex], this.values[currentIndex]] =
          [currentNode, parentNode];

        // 현재 index 를 부모 index 로 변경하기
        currentIndex = parentIndex;
      }
      // 아니라면,
      else {
        // break 하기
        break;
      }
    }
  }

  dequeue() {
    if (!this.values.length) {
      return undefined;
    }

    // 마지막 Node index 구하기
    const lastIndex = this.values.length - 1;
    // 0 index Node 와 마지막 Node 스왑하기
    [this.values[0], this.values[lastIndex]] =
      [this.values[lastIndex], this.values[0]];

    // pop() 결과를 resultNode 변수에 저장하기
    const resultNode = this.values.pop();

    // 정렬하기
    this.sinkDown();

    // resultNode 반환하기
    return resultNode;
  }

  sinkDown() {
    // 현재 index 변수 만들기 (초기값: 0)
    let currentIndex = 0;

    // while (true)
    while (true) {
      // 현재 Node 변수 만들기
      const currentNode = this.values[currentIndex];
      // 좌측 자식 index 구하기
      const leftIndex = currentIndex * 2 + 1;
      // 우측 자식 index 구하기
      const rightIndex = currentIndex * 2 + 2;
      // 스왑 index 변수 만들기 (초기값: null)
      let swapIndex = null;

      // 좌측 자식 index < Node 개수 라면,
      if (leftIndex < this.values.length) {
        // 스왑 index 에 좌측 자식 index 저장하기
        swapIndex = leftIndex;
      }

      // 우측 자식 index < Node 개수 라면, (leftIndex 가 유효해야지만 rightIndex 도 유효함)
      if (rightIndex < this.values.length && swapIndex !== null) {
        // 우측 Node 변수 만들기
        const rightNode = this.values[rightIndex];
        // swap Node 변수 만들기
        const swapNode = this.values[swapIndex];

        // 우측 Node priority < swap Node priority 라면,
        if (rightNode.priority < swapNode.priority) {
          // 스왑 index 를 우측 자식 index 로 변경하기
          swapIndex = rightIndex;
        }
      }

      // 스왑 index 가 있다면,
      if (swapIndex !== null) {
        // 스왑 Node 변수 만들기
        const swapNode = this.values[swapIndex];

        // 스왑 Node priority < 현재 Node priority 라면,
        if (swapNode.priority < currentNode.priority) {
          // 스왑하기
          [this.values[swapIndex], this.values[currentIndex]] =
            [currentNode, swapNode];

          // 현재 index 를 스왑 index 로 변경하기
          currentIndex = swapIndex;
        }
        // 아니라면,
        else {
          // 함수 종료
          return;
        }
      }
      // 아니라면,
      else {
        // 함수 종료
        return;
      }
    }
  }
};
