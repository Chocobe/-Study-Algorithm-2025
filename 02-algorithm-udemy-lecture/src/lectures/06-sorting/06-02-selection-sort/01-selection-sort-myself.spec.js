import { selectionSort } from './01-selection-sort-myself';

describe('06-02 / 01-selection-sort-myself', () => {
  it ('selectionSort([1, 3, 2, 6, 5, 4]) === [1, 2, 3, 4, 5, 6]', () => {
    const result = selectionSort([1, 3, 2, 6, 5, 4]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it ('selectionSort([11, 53, 23, 41, 87, 99, 150]) === [11, 23, 41, 53, 87, 99, 150]', () => {
    const result = selectionSort([11, 53, 23, 41, 87, 99, 150]);

    expect(result).toEqual([11, 23, 41, 53, 87, 99, 150]);
  });
});
