import { MaxBinaryHeap } from './01-extractMax-myself';

/**
 *          41
 *    39          38
 * 18    27    12
 */

describe('14-02 / 01-extractMax-myself', () => {
  it('MaxBinaryHeap 의 extractMax() 메소드를 사용할 수 있다.', () => {
    const maxBinaryHeap = new MaxBinaryHeap();

    maxBinaryHeap
      .insert(41)
      .insert(39)
      .insert(38)
      .insert(18)
      .insert(27)
      .insert(12);

    const result = maxBinaryHeap.extractMax();
    expect(result).toBe(41);
    expect(maxBinaryHeap.root).toBe(39);
  });
});
