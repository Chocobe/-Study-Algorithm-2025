// import { bubbleSort } from './01-bubble-sort-myself';
// import { bubbleSort } from './02-bubble-sort-lectue';
import { bubbleSort } from './03-bubble-sort-optimize-lecture';

describe('06-01 / 01-bubble-sort-myself', () => {
  it ('bubbleSort([3, 2, 5, 4, 1]) === [1, 2, 3, 4, 5]', () => {
    const result = bubbleSort([3, 2, 5, 4, 1]);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it ('bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]) === [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    const result = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  });
});
