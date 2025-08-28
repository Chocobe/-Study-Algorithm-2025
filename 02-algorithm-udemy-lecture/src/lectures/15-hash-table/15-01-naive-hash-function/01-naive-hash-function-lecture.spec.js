import { hashFunction } from './01-naive-hash-function-lecture';

describe('15-01 / 01-naive-hash-function-lecture', () => {
  it('hashFunction("Hello", 10) === 0', () => {
    const result1 = hashFunction('Hello', 10);

    expect(result1).toBe(0);
  });

  it('hashFunction("World", 10) === 0', () => {
    const result = hashFunction('World', 10);

    expect(result).toBe(0);
  });

  it('hashFunction("Miles", 10) === 6', () => {
    const result = hashFunction('Miles', 10);

    expect(result).toBe(6);
  });
});
