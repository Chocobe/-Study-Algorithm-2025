// import { insertionSort } from './01-insertion-sort-lecture';
import { insertionSort } from './02-insertion-sort-myself';

describe('06-03 / 01-insertion-sort-myself', () => {
  it('insertionSort([3, 1, 2, 5, 4]) === [1, 2, 3, 4, 5]', () => {
    const result = insertionSort([3, 1, 2, 5, 4]);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('insertionSort([1, 1, 4, 3, 5, 3]) === [1, 1, 3, 3, 4, 5]', () => {
    const result = insertionSort([1, 1, 4, 3, 5, 3]);

    expect(result).toEqual([1, 1, 3, 3, 4, 5]);
  });

  it('insertionSort([1, 1, 12, 10, 0, 13, 17, 14, 19, 3 ]) === [0, 1, 1, 3, 10, 12, 13, 14, 17, 19]', () => {
    const result = insertionSort([1, 1, 12, 10, 0, 13, 17, 14, 19, 3 ]);

    expect(result).toEqual([0, 1, 1, 3, 10, 12, 13, 14, 17, 19]);
  });
});
