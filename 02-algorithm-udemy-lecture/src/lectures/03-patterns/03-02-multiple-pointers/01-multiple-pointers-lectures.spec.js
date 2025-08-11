import { multiplePointers } from './01-multiple-pointers-lecture';

describe('03-02 multiple pointers / 01-multiple-pointers-lecture', () => {
  it ('multiplePointers([-1, 0, 1]) === [-1, 1]', () => {
    const result = multiplePointers([-1, 0, 1]);

    expect(result).toEqual([-1, 1]);
  });

  it ('multiplePointers([-4, -3, -2, 0, 1, 3]) === [-3, 3]', () => {
    const result = multiplePointers([-4, -3, -2, 0, 1, 3]);

    expect(result).toEqual([-3, 3]);
  });

  it ('multiplePointers([-3, -2, 0, 1, 4, 5]) === undefined', () => {
    const result = multiplePointers([-3, -2, 0, 1, 4, 5]);

    expect(result).toBeUndefined();
  });
});
