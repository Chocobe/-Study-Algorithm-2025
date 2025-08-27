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
};
