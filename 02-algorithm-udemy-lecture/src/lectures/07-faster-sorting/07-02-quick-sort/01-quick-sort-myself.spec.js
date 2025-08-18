import { pivot } from './01-quick-sort-myself';

describe('07-02 / 01-quick-sort-myself', () => {
  it('pivot([3, 1, 5, 2, 4]), arr === [2, 1, 3, 5, 4], index === 2', () => {
    const arr = [3, 1, 5, 2, 4];
    const result = pivot(arr);

    console.log(arr);

    expect(arr).toEqual([2, 1, 3, 5, 4]);
    expect(result).toBe(2);
  });
});

/**
[3, 1, 5, 2, 4]

pivotIndex    arr
1             [3, 1, 5, 2, 4]
3             [3, 1, 2, 5, 4]

=> pivotIndex: 3
=> arr: [3, 1, 2, 5, 4]
 */
