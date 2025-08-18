import { quickSort } from './03-quick-sort-review';

describe('07-02 / 03-quick-sort-review', () => {
  it('quickSort([22, -1, 4, 0, 33, 10, 4]) === [-1, 0, 4, 4, 10, 22, 33]', () => {
    const result = quickSort([22, -1, 4, 0, 33, 10, 4]);

    expect(result).toEqual([-1, 0, 4, 4, 10, 22, 33]);
  });
});
