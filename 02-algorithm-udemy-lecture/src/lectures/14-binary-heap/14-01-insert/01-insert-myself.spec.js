import { MaxBinaryHeap } from './01-insert-myself';

describe('14-01 / 01-insert-myself', () => {
  it('MaxBinaryHeap 의 insert() 메소드를 사용할 수 있다.', () => {
    const maxBinaryHeap = new MaxBinaryHeap();

    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(39);
    maxBinaryHeap.insert(33);
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(27);
    maxBinaryHeap.insert(12);
    expect(maxBinaryHeap.root).toBe(41);

    maxBinaryHeap.insert(55);
    expect(maxBinaryHeap.root).toBe(55);
  });
});
