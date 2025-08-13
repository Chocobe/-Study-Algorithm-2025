import { factorial, factorial_loop } from './01-factorial-lecture';

describe('04-01 / 01-factorial-lecture', () => {
  describe('Recursive Function', () => {
    it ('factorial(2) === 2', () => {
      const result = factorial(2);

      expect(result).toBe(2);
    });

    it ('factorial(0) === 0', () => {
      const result = factorial(0);

      expect(result).toBe(0);
    });

    it ('factorial(1) === 1', () => {
      const result = factorial(1);

      expect(result).toBe(1);
    });

    it ('factorial(5) === 120', () => {
      const result = factorial(5);

      expect(result).toBe(120);
    });
  });

  describe('loop', () => {
    it ('factorial_loop(2) === 2', () => {
      const result = factorial_loop(2);

      expect(result).toBe(2);
    });

    it ('factorial_loop(0) === 0', () => {
      const result = factorial_loop(0);

      expect(result).toBe(0);
    });

    it ('factorial_loop(1) === 1', () => {
      const result = factorial_loop(1);

      expect(result).toBe(1);
    });

    it ('factorial_loop(5) === 120', () => {
      const result = factorial_loop(5);

      expect(result).toBe(120);
    });
  });
});
