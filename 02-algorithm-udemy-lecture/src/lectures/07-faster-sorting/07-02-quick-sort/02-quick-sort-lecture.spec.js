import { pivot, quickSort } from './02-quick-sort-lecture';

describe('07-02 / 01-quick-sort-myself', () => {
  it('pivot([3, 1, 5, 2, 4]), arr === [2, 1, 3, 5, 4], index === 2', () => {
    const arr = [3, 1, 5, 2, 4];
    const result = pivot(arr);

    expect(arr).toEqual([2, 1, 3, 5, 4]);
    expect(result).toBe(2);
  });

  it('quickSort([3, 1, 5, 4, 2]) === [1, 2, 3, 4, 5]', () => {
    const result = quickSort([4, 1, 5, 3, 2]);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('quickSort([3, 4, 3, 1, 2, 2, 5, 10]) === [1, 2, 2, 3, 3, 4, 5, 10]', () => {
    const result = quickSort([3, 4, 3, 1, 2, 2, 5, 10]);

    expect(result).toEqual([1, 2, 2, 3, 3, 4, 5, 10]);
  });

  it('quickSort([100, 99, -33, 2, 0, 8, 7]) === [-33, 0, 2, 7, 8, 99, 100]', () => {
    const result = quickSort([100, 99, -33, 2, 0, 8, 7]);

    expect(result).toEqual([-33, 0, 2, 7, 8, 99, 100]);
  });
});
