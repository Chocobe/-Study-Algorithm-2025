/**
 * 문제: _더 맵게_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42626
 * 
 * @param { number[] } scoville
 * @param { number } K
 * @returns { number }
 */
export function solution(scoville, K) {
  const priorityQueue = new PriorityQueue(scoville);
  let count = 0;

  while (priorityQueue.size > 1) {
    const first = priorityQueue.dequeue();

    if (first >= K) {
      break;
    }

    const second = priorityQueue.dequeue();

    const mixed = first + second * 2;
    count++;

    priorityQueue.enqueue(mixed);
  }

  if (priorityQueue.dequeue() < K) {
    return -1;
  }

  return count;
};

export class PriorityQueue {
  constructor(values = []) {
    this.values = [];

    values.forEach(value => {
      this.enqueue(value);
    });
  }

  get size() {
    return this.values.length;
  }

  enqueue(value) {
    this.values.push(value)
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.values[parentIndex];

      if (value >= parentValue) {
        break;
      }

      [this.values[index], this.values[parentIndex]] = 
        [this.values[parentIndex], this.values[index]];
      index = parentIndex;
    }

    return this;
  }

  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] = 
      [this.values[this.values.length - 1], this.values[0]];

    const minValue = this.values.pop();

    this.sinkDown();

    return minValue;
  }

  sinkDown() {
    let index = 0;
    const value = this.values[index];

    while (index < this.size) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;

      const leftValue = this.values[leftIndex];
      const rightValue = this.values[rightIndex];

      let swapIndex = index;

      if (leftIndex < this.size && leftValue < value) {
        swapIndex = leftIndex;
      }

      if (rightIndex < this.size && rightValue < value && rightValue < leftValue) {
        swapIndex = rightIndex;
      }

      if (swapIndex === index) {
        break;
      }

      [this.values[index], this.values[swapIndex]] =
        [this.values[swapIndex], this.values[index]];

      index = swapIndex;
    }
  }
}
