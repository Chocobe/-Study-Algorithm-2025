import { PriorityQueue } from './01-priority-queue-myself';

/**
 *                   41(1)
 *       39(2)                    38(2)
 * 18(3)       27(3)        12(3)
 */

describe('14-03 / 01-priority-queue-myself', () => {
  it('PriorityQueue 의 enqueue() 메소드를 사용할 수 있다.', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.enqueue(3, 27);
    expect(priorityQueue.root.value).toBe(27);

    priorityQueue.enqueue(3, 18);
    expect(priorityQueue.root.value).toBe(27);

    priorityQueue.enqueue(2, 39);
    expect(priorityQueue.root.value).toBe(39);

    priorityQueue.enqueue(2, 38);
    expect(priorityQueue.root.value).toBe(39);

    priorityQueue.enqueue(3, 12);
    expect(priorityQueue.root.value).toBe(39);

    priorityQueue.enqueue(1, 41);
    expect(priorityQueue.root.value).toBe(41);
  });

  it('PriorityQueue 의 dequeue() 메소드를 사용할 수 있다.', () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue
      .enqueue(1, 41)
      .enqueue(2, 39)
      .enqueue(2, 38)
      .enqueue(3, 18)
      .enqueue(3, 27)
      .enqueue(3, 12);

    expect(priorityQueue.root.value).toBe(41);
    expect(priorityQueue.planeValues).toEqual([41, 39, 38, 18, 27, 12]);

    /**
     *                   41(1)
     *       39(2)                    38(2)
     * 18(3)       27(3)        12(3)
     */
    const result1 = priorityQueue.dequeue();
    expect(result1.value).toBe(41);
    expect(priorityQueue.planeValues).toEqual([39, 12, 38, 18, 27]);

    /**
     *                   39(2)
     *       12(3)                    38(2)
     * 18(3)       27(3)
     */
    const result2 = priorityQueue.dequeue();
    expect(result2.value).toBe(39);
    expect(priorityQueue.planeValues).toEqual([38, 12, 27, 18]);

    /**
     *                   38(2)
     *       12(3)                    27(3)
     * 18(3)
     */
    const result3 = priorityQueue.dequeue();
    expect(result3.value).toBe(38);
    expect(priorityQueue.planeValues).toEqual([18, 12, 27]);

    /**
     *                   18(3)
     *       12(3)                    27(3)
     */
    const result4 = priorityQueue.dequeue();
    expect(result4.value).toBe(18);
    expect(priorityQueue.planeValues).toEqual([27, 12]);

    /**
     *                   27(3)
     *       12(3)
     */
    const result5 = priorityQueue.dequeue();
    expect(result5.value).toBe(27);
    expect(priorityQueue.planeValues).toEqual([12]);

    /**
     *                   12(3)
     */
    const result6 = priorityQueue.dequeue();
    expect(result6.value).toBe(12);
    expect(priorityQueue.planeValues).toEqual([]);

    const result7 = priorityQueue.dequeue();
    expect(result7).toBeUndefined();
    expect(priorityQueue.planeValues).toEqual([]);
  });
});
