import { linearSearch } from './01-linear-search-myself';

describe('05-01 / 01-linear-search-myself', () => {
  it ('linearSearch([10, 15, 20, 25, 30], 15) === 1', () => {
    const result = linearSearch([10, 15, 20, 25, 30], 15);

    expect(result).toBe(1);
  });

  it ('linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) === 5', () => {
    const result = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4);

    expect(result).toBe(5);
  });

  it ('linearSearch([100], 100) === 0', () => {
    const result = linearSearch([100], 100);

    expect(result).toBe(0);
  });

  it ('linearSearch([1,2,3,4,5], 6) === -1', () => {
    const result = linearSearch([1,2,3,4,5], 6);

    expect(result).toBe(-1);
  });

  it ('linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) === -1', () => {
    const result = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10);

    expect(result).toBe(-1);
  });

  it ('linearSearch([100], 200) === -1', () => {
    const result = linearSearch([100], 200);

    expect(result).toBe(-1);
  });
});
