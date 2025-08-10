import { same } from './01-myself';

describe('03-01. 빈도수 세기 패턴 / 01-myself.js', () => {
  it ('same([1, 2, 3], [1, 9, 4]) === true', () => {
    const result = same(
      [1, 2, 3],
      [1, 9, 4]
    );

    expect(result).toBe(true);
  });

  it ('same([1, 4, 1], [1, 16] === false', () => {
    const result = same(
      [1, 4, 1],
      [1, 16]
    );

    expect(result).toBe(false);
  });

  it ('same([1, 2, 3], [9, 4, 1]) === true', () => {
    const result = same(
      [1, 2, 3],
      [9, 4, 1]
    );

    expect(result).toBe(true);
  });

  it ('same([1, 2, 3, 2], [9, 4, 1, 4]) === true', () => {
    const result = same(
      [1, 2, 3, 2],
      [9, 4, 1, 4]
    );

    expect(result).toBe(true);
  });
});
