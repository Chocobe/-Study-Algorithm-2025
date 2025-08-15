import { mergeSort } from './01-merge-sort-myself';

describe('07-01 / 01-merge-sort-myself', () => {
  it ('mergeSort([7, 3, 5, 6, 1, 2, 4, 9, 8]) === [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    const result = mergeSort([7, 3, 5, 6, 1, 2, 4, 9, 8]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
