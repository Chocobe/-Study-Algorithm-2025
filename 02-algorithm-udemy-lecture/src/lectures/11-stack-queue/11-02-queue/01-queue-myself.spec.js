import { Queue } from './01-queue.myself';

describe('11-02 / 01-queue-myself', () => {
  it('Queue 자료구조를 사용할 수 있다.', () => {
    const queue = new Queue();

    const result1 = queue.enqueue('FIRST');
    expect(result1).toBe(1);
    expect(queue.first.value).toBe('FIRST');
    expect(queue.last.value).toBe('FIRST');
    expect(queue.size).toBe(1);

    const result2 = queue.enqueue('SECOND');
    expect(result2).toBe(2);
    expect(queue.first.value).toBe('FIRST');
    expect(queue.last.value).toBe('SECOND');
    expect(queue.size).toBe(2);

    const result3 = queue.enqueue('THIRD');
    expect(result3).toBe(3);
    expect(queue.first.value).toBe('FIRST');
    expect(queue.last.value).toBe('THIRD');
    expect(queue.size).toBe(3);

    const result4 = queue.dequeue();
    expect(result4.value).toBe('FIRST');
    expect(queue.first.value).toBe('SECOND');
    expect(queue.last.value).toBe('THIRD');
    expect(queue.size).toBe(2);

    const result5 = queue.dequeue();
    expect(result5.value).toBe('SECOND');
    expect(queue.first.value).toBe('THIRD');
    expect(queue.last.value).toBe('THIRD');
    expect(queue.size).toBe(1);

    const result6 = queue.dequeue();
    expect(result6.value).toBe('THIRD');
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.size).toBe(0);

    const result7 = queue.dequeue();
    expect(result7).toBeNull();
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.size).toBe(0);
  });
});
