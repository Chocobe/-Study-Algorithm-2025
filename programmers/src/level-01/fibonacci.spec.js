import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  it('fibonacci(10) === 55', () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
  });
});
