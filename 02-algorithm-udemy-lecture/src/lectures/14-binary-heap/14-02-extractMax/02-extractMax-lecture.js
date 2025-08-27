export class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  get root() {
    return this.values[0];
  }

  insert(value) {
    // this.values 에 value 를 push() 하기
    this.values.push(value);

    // Max Binary Heap 규칙에 맞도록 정렬하기 (bubbleUp)
    this.bubbleUp();

    // this 반환하기
    return this;
  }

  bubbleUp(targetIndex = this.values.length - 1) {
    // (Base Case) targetIndex < 1 이라면,
    if (targetIndex < 1) {
      // 재귀 종료하기
      return;
    }

    // targetValue 변수 만들기
    const targetValue = this.values[targetIndex];
    // parent index 구하기
    const parentIndex = this.getParentIndex(targetIndex);
    // parent value 변수 만들기
    const parentValue = this.values[parentIndex];

    // targetValue > parentValue 라면,
    if (targetValue > parentValue) {
      // 교체하기
      [this.values[targetIndex], this.values[parentIndex]] = 
        [parentValue, targetValue];

      // bubbleUp() 재귀 호출하기
      this.bubbleUp(parentIndex);
    }
  }

  getParentIndex(targetIndex) {
    return Math.floor((targetIndex - 1) / 2);
  }

  extractMax() {
    // this.length 가 없으면,
    if (!this.values.length) {
      // undefined 반환하기
      return undefined;
    }

    // 0번 Node 와 마지막 Node 스왑하기
    [this.values[0], this.values[this.values.length - 1]] =
      [this.values[this.values.length - 1], this.values[0]];

    // 마지막 Node 추출하기 (반환할 Node)
    const maxNode = this.values.pop();

    // 정렬하기
    this.sinkDown();

    // 추출했던 마지막 Node 반환하기
    return maxNode;
  }

  sinkDown() {
    // 현재 index 변수 만들기 (초기화: 0)
    let currentIndex = 0;
    // 현재 값 변수 만들기 (초기화)
    const currentValue = this.values[0];

    // while (true),
    while (true) {
      // swapIndex 변수 만들기 (초기값: null)
      let swapIndex = null;
      // leftIndex 구하기
      const leftIndex = currentIndex * 2 + 1;
      // rightIndex 구하기
      const rightIndex = currentIndex * 2 + 2;

      // leftIndex < this.values.length 라면,
      if (leftIndex < this.values.length) {
        // swapIndex 를 leftIndex 로 바꾸기
        swapIndex = leftIndex;
      }

      // rightIndex < this.values.length 라면,
      if (rightIndex < this.values.length) {
        // 우측값 변수 만들기
        const rightValue = this.values[rightIndex];

        if (
          // swapIndex 가 없거나,
          swapIndex === null
          // swapIndex 가 있고 && 우측값 > 좌측값 이라면,
          || (swapIndex !== null && rightValue > this.values[swapIndex])
        ) {
          // swapIndex 를 rightIndex 로 변경하기
          swapIndex = rightIndex;
        }
      }

      if (
        // swapIndex 가 없거나, 
        swapIndex === null
        // swapIndex 값 < 현재값 이라면,
        || this.values[swapIndex] < currentValue
      ) {
        // break
        break;
      }

      // swapIndex 값과 현재값 스왑하기
      [this.values[swapIndex], this.values[currentIndex]] =
        [this.values[currentIndex], this.values[swapIndex]];

      // 현재 index 를 swapIndex 로 변경하기
      currentIndex = swapIndex;
    }
  }
};
