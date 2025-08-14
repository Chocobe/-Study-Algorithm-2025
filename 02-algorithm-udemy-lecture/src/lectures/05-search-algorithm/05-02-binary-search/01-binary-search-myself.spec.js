import { binarySearch } from './01-binary-search-myself';

describe('05-02 / 01-binary-search-myself', () => {
  it ('binarySearch([1,2,3,4,5],2) === 1', () => {
    const result = binarySearch([1,2,3,4,5],2);

    expect(result).toBe(1);
  });

  it ('binarySearch([1,2,3,4,5],3) === 2', () => {
    const result = binarySearch([1,2,3,4,5],3);

    expect(result).toBe(2);
  });

  it ('binarySearch([1,2,3,4,5],5) === 4', () => {
    const result = binarySearch([1,2,3,4,5],5);

    expect(result).toBe(4);
  });

  it ('binarySearch([1,2,3,4,5],6) === -1', () => {
    const result = binarySearch([1,2,3,4,5],6);

    expect(result).toBe(-1);
  });

  it ('binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) === 2', () => {
    const result = binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10);

    expect(result).toBe(2);
  });

  it ('binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) === 16', () => {
    const result = binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95);

    expect(result).toBe(16);
  });

  it ('binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) === -1', () => {
    const result = binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100);

    expect(result).toBe(-1);
  });
});
