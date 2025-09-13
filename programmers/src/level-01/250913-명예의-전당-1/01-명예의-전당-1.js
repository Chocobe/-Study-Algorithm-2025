/**
 * 문제: _명예의 전당 (1)_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/138477
 * 
 * @param { number } k
 * @param { number[] } score
 * @returns { number[] }
 */
export function solution(k, score) {
  const priorityQueue = new PriorityQueue();
  const results = [];

  score.forEach(s => {
    if (priorityQueue.size < k || s > priorityQueue.values[0]) {
      priorityQueue.enqueue(s);
    }

    if (priorityQueue.size > k) {
      priorityQueue.dequeue();
    }

    results.push(priorityQueue.values[0]);
  });

  return results;
};

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  get size() {
    return this.values.length;
  }

  enqueue(value) {
    this.values.push(value);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.values[parentIndex];

      if (parentValue > value) {
        [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    const result = this.values.pop();

    this.sinkDown();

    return result;
  }

  sinkDown() {
    const value = this.values[0];
    let index = 0;

    while (index < this.values.length) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;

      const leftValue = this.values[leftIndex];
      const rightValue = this.values[rightIndex];

      let swapIndex = index;

      if (leftIndex < this.values.length && leftValue < value) {
        swapIndex = leftIndex;
      }

      if (rightIndex < this.values.length && rightValue < this.values[swapIndex]) {
        swapIndex = rightIndex;
      }

      if (index === swapIndex) {
        break;
      }

      [this.values[swapIndex], this.values[index]] = [this.values[index], this.values[swapIndex]];
      index = swapIndex;
    }
  }
}
