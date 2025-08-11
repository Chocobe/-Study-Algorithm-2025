import { countUniqueValues_myself } from './02-countUniqueValues-myself';

describe('03-02-multiple-pointers / 02-countUniqueValues-myself', () => {
  it ('countUniqueValues_myself([1, 1, 1, 1, 2]) === 2', () => {
    const result = countUniqueValues_myself([1, 1, 1, 1, 2]);

    expect(result).toBe(2);
  });

  it ('countUniqueValues_myself([1, 2, 2, 3, 4, 7, 7, 7, 7, 12, 12, 13]) === 7', () => {
    const result = countUniqueValues_myself(
      [1, 2, 2, 3, 4, 7, 7, 7, 7, 12, 12, 13]
    );

    expect(result).toBe(7);
  });

  it ('countUniqueValues_myself([]) === 0 ', () => {
    const result = countUniqueValues_myself([]);

    expect(result).toBe(0);
  });

  it ('countUniqueValues_myself([-2, -1, -1, 0, 1]) === 4', () => {
    const result = countUniqueValues_myself(
      [-2, -1, -1, 0, 1]
    );

    expect(result).toBe(4);
  });
});
