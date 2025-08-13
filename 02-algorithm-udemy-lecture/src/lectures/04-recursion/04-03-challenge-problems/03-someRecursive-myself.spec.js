import { someRecursive } from './03-someRecursive-myself';

const isOdd = value => value % 2 !== 0;

describe('04-03 / 03-someRecursive', () => {
  it ('someRecursive([1, 2, 3, 4], isOdd) === true', () => {
    const result = someRecursive([1, 2, 3, 4], isOdd);

    expect(result).toBe(true);
  });

  it ('someRecursive([4, 6, 8, 9], isOdd) === true', () => {
    const result = someRecursive([4, 6, 8, 9], isOdd);

    expect(result).toBe(true);
  });

  it ('someRecursive([4, 6, 8], isOdd) === false', () => {
    const result = someRecursive([4, 6, 8], isOdd);

    expect(result).toBe(false);
  });

  it ('someRecursive([4,6,8], val => val > 10); === false', () => {
    const result = someRecursive([4, 6, 8], val => val > 10);

    expect(result).toBe(false);
  });
});
