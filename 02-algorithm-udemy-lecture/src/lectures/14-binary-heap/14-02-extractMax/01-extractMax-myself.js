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
    // 시작 Node 와 마지막 Node 스왑하기
    [this.values[0], this.values[this.values.length - 1]] =
      [this.values[this.values.length - 1], this.values[0]];

    // 마지막 Node 추출하기
    const originMaxValue = this.values.pop();

    // Heap 구조 정렬하기
    this.sinkDown();

    // 추출했던 이전 root Node 반환하기
    return originMaxValue;
  }

  sinkDown(currentIndex = 0) {
    // (Base Case) currentIndex >= this.values.length 라면,
    if (currentIndex >= this.values.length) {
      // 재귀 종료
      return;
    }

    // 현재값 변수 만들기
    const currentValue = this.values[currentIndex];
    // swapIndex 변수 만들기 (초기값: currentIndex)
    let swapIndex = null;

    // leftIndex, rightIndex 구하기
    const { leftIndex, rightIndex } = this.getChildrenIndex(currentIndex);

    // (Base Case) leftIndex === null && rightIndex === null 이라면,
    if (leftIndex === null && rightIndex === null) {
      // 종료하기
      return;
    }
    // leftIndex !== null && rightIndex !== null 이라면,
    else if (leftIndex !== null && rightIndex !== null) {
      // 좌측값 > 우측값 이라면,
      if (this.values[leftIndex] > this.values[rightIndex]) {
        // swapIndex 를 leftIndex 로 변경하기
        swapIndex = leftIndex;
      }
      // 아니라면,
      else {
        // swapIndex 를 rightIndex 로 변경하기
        swapIndex = rightIndex;
      }
    }
    // leftIndex !== null 이라면,
    else if (leftIndex !== null) {
      // swapIndex 를 leftIndex 로 변경하기
      swapIndex = leftIndex;
    }
    // rightIndex !== null 이라면,
    else {
      // swapIndex 를 rightIndex 로 변경하기
      swapIndex = rightIndex;
    }

    // 현재값 < swapIndex 값 이라면,
    if (currentValue < this.values[swapIndex]) {
      // 현재값과 스왑하기
      [this.values[currentIndex], this.values[swapIndex]] =
        [this.values[swapIndex], this.values[currentIndex]];

      // 재귀 호출하기
      this.sinkDown(swapIndex);
    }
  }

  getChildrenIndex(parentIndex) {
    const leftIndex = parentIndex * 2 + 1;
    const rightIndex = parentIndex * 2 + 2;

    return {
      leftIndex: leftIndex >= this.values.length ? null : leftIndex,
      rightIndex: rightIndex >= this.values.length ? null : rightIndex,
    };
  }
};
