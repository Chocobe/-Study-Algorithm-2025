import { quickSort } from './01-quick-sort-myself';

describe('07-02 / 01-quick-sort-myself', () => {
  it ('quickSort([7, 3, 5, 6, 1, 2, 4, 9, 8]) === [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    const result = quickSort([7, 3, 5, 6, 1, 2, 4, 9, 8]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
