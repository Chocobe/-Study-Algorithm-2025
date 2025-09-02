import { fibonacci } from './01-fibonacci-sequence-tabulation-lecture';

describe('19-03 / 01-fibonacci-sequence-tabulation-lecture', () => {
  it('fibonacci(10) === 55', () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
  });
});
