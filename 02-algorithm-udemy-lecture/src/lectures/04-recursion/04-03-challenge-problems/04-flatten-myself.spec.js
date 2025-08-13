import { flatten } from './04-flatten-myself';

describe('04-03 / 04-flatten-myself', () => {
  it ('flatten([1, 2, 3, [4, 5] ]) === [1, 2, 3, 4, 5]', () => {
    const result = flatten([1, 2, 3, [4, 5]]);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it ('flatten([1, [2, [3, 4], [[5]]]]) === [1, 2, 3, 4, 5]', () => {
    const result = flatten([1, [2, [3, 4], [[5]]]]);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it ('flatten([[1], [2], [3]]) === [1, 2, 3]', () => {
    const result = flatten([[1], [2], [3]]);

    expect(result).toEqual([1, 2, 3]);
  });

  it ('flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) === [1, 2, 3]', () => {
    const result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);

    expect(result).toEqual([1, 2, 3]);
  });
});
