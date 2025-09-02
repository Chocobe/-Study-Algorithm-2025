import { fibonacci } from './02-fibonacci-sequence-memoization-lecture';

describe('19-02-fibonacci-sequence-memoization-lecture', () => {
  it('fibonacci(10) === 55', () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
  });
});
