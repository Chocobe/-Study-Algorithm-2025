import { PriorityQueue, solution } from './01-더-맵게';

/**
scoville               K   return
[1, 2, 3, 9, 10, 12]   7   2
 */

describe('250916 / 01-더-맵게', () => {
  it('solution() === 2', () => {
    const result = solution([1, 2, 3, 9, 10, 12], 7);
    expect(result).toBe(2);
  });

  // it('PriorityQueue 테스트', () => {
  //   const queue = new PriorityQueue([2, 3, 1, 5, 4]);
  //   expect(queue.values[0]).toBe(1);

  //   const result1 = queue.dequeue();
  //   expect(result1).toBe(1);

  //   const result2 = queue.dequeue();
  //   expect(result2).toBe(2);

  //   const result3 = queue.dequeue();
  //   expect(result3).toBe(3);

  //   const result4 = queue.dequeue();
  //   expect(result4).toBe(4);

  //   const result5 = queue.dequeue();
  //   expect(result5).toBe(5);
  //   expect(queue.size).toBe(0);
  // });
});
