import { factorial } from './02-factorial-myself';

describe('04-02 / 02-factorial-myself', () => {
  it ('factorial(1) === 1', () => {
    const result = factorial(1);

    expect(result).toBe(1);
  });

  it ('factorial(2) === 2', () => {
    const result = factorial(2);

    expect(result).toBe(2);
  });

  it ('factorial(4) === 24', () => {
    const result = factorial(4);

    expect(result).toBe(24);
  });

  it ('factorial(7) === 5040', () => {
    const result = factorial(7);

    expect(result).toBe(5040);
  });
});
