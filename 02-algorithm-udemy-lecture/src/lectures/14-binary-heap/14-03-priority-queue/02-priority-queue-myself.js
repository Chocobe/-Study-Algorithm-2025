export class Node {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
};

export class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /** 테스트용 GETTER */
  get root() {
    return this.values[0];
  }

  enqueue(priority, value) {
    // newNode 만들기
    const newNode = new Node(priority, value);
    // newNode 를 values 에 push() 하기
    this.values.push(newNode);
    // 정렬하기
    this.bubbleUp();
    // this 반환하기
    return this;
  }

  bubbleUp() {
    // currentIndex 구하기
    let currentIndex = this.values.length - 1;
    // currentNode 변수 만들기
    const currentNode = this.values[currentIndex];

    while (currentIndex > 0) {
      // 부모 index 구하기
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      // 부모 Node 변수 만들기
      const parentNode = this.values[parentIndex];
      // parentNode.priority > currentNode.priority 라면,
      if (parentNode.priority > currentNode.priority) {
        // parentNode 와 currentNode 스왑하기
        [this.values[parentIndex], this.values[currentIndex]] =
          [currentNode, parentNode];

        // currentIndex 를 parentIndex 로 변경하기
        currentIndex = parentIndex;
      }
      // 아니라면,
      else {
        // 종료
        return;
      }
    }
  }

  /** 테스트용 GETTER */
  get planeValues() {
    return this.values.map(({ value }) => value);
  }

  dequeue() {
    // 0 index 와 마지막 index 스왑하기
    [this.values[0], this.values[this.values.length - 1]] =
      [this.values[this.values.length - 1], this.values[0]];

    // 결과값인 마지막 Node 추출하기
    const resultNode = this.values.pop();

    // 정렬하기
    this.sinkDown();

    // 결과 Node 반환하기
    return resultNode;
  }

  sinkDown() {
    // currentIndex 변수 만들기 (초기값: 0)
    let currentIndex = 0;
    // currentNode 변수 만들기
    const currentNode = this.values[0];

    // while (true)
    while (true) {
      // swapIndex 변수 만들기
      let swapIndex = null;

      // leftChildIndex 구하기
      const leftChildIndex = currentIndex * 2 + 1;
      // rightChildIndex 구하기
      const rightChildIndex = currentIndex * 2 + 2;

      // leftChildNode 변수 만들기
      const leftChildNode = this.values[leftChildIndex];
      // rightChildNode 변수 만들기
      const rightChildNode = this.values[rightChildIndex];

      if (
        // leftChildNode 가 있고,
        leftChildNode &&
        // leftChildNode.priority < currentNode.priority 라면,
        leftChildNode.priority < currentNode.priority
      ) {
        // swapIndex 를 leftChildIndex 로 변경하기
        swapIndex = leftChildIndex;
      }

      if (
        // rightChildNode 가 있고,
        rightChildNode &&
        // rightChildNode.priority < leftChildNode.priority 라면,
        rightChildNode.priority < leftChildNode.priority
      ) {
        // swapIndex 를 rightChildIndex 로 변경하기
        swapIndex = rightChildIndex;
      }

      // swapIndexs 가 있다면,
      if (swapIndex) {
        // 스왑하기
        [this.values[swapIndex], this.values[currentIndex]] =
          [currentNode, this.values[swapIndex]];

        // currentIndex 를 swapIndex 로 변경하기
        currentIndex = swapIndex;
      }
      // 아니라면,
      else {
        // 함수 종료
        return;
      }
    }
  }
};
