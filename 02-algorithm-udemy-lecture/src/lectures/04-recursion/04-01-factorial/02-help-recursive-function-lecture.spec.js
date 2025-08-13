import { factorial_helpRecursive } from './02-help-recursive-function-lecture';

describe('04-01 / 02-help-recursive-function', () => {
  it ('factorial_helpRecursive(2) === 2', () => {
    const result = factorial_helpRecursive(2);

    expect(result).toBe(2);
  });

  it ('factorial_helpRecursive(0) === 0', () => {
    const result = factorial_helpRecursive(0);

    expect(result).toBe(0);
  });

  it ('factorial_helpRecurisve(1) === 1', () => {
    const result = factorial_helpRecursive(1);

    expect(result).toBe(1);
  });

  it ('factorial_helpRecurisve(5) === 120', () => {
    const result = factorial_helpRecursive(5);

    expect(result).toBe(120);
  });
});
