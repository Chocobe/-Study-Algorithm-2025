import { hashFunction } from './01-naive-hash-function-lecture';

describe('15-02 / 01-naive-has-function-lecture', () => {
  it('hashFunction("hello", 13) === 7', () => {
    const result = hashFunction('hello', 13);

    expect(result).toBe(7);
  });

  it('hashFunction("world", 13) === 7', () => {
    const result = hashFunction('world', 13);

    expect(result).toBe(7);
  });

  it('hashFunction("miles", 13) === 0', () => {
    const result = hashFunction('miles', 13);

    expect(result).toBe(0);
  });
});
