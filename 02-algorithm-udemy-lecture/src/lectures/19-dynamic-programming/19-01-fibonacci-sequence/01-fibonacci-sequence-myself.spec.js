import { fibonacci } from './01-fibonacci-sequence-myself';

describe('19-01-fibonacci-sequence', () => {
  it('fibonacci(10) === 55', () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
  });
});
