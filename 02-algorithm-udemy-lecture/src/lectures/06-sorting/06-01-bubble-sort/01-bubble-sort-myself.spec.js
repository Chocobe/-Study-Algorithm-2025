import { bubbleSort } from './01-bubble-sort-myself';

describe('06-01 / 01-bubble-sort-myself', () => {
  it ('bubbleSort([3, 2, 5, 4, 1]) === [1, 2, 3, 4, 5]', () => {
    const result = bubbleSort([3, 2, 5, 4, 1]);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
