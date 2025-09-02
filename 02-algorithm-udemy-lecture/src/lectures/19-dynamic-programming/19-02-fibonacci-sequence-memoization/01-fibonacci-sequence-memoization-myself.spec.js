import { fibonacci } from './01-fibonacci-sequence-memoization-myself';

describe('19-02-fibonacci-sequence-memoization-myself', () => {
  it('fibonacci(10) === 55', () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
  });
});
