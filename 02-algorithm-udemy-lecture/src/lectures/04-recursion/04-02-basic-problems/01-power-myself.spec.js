import { power } from './01-power-myself';

describe('04-02 / 01-power-myself', () => {
  it ('power(1, 0) === 1', () => {
    const result = power(1, 0);

    expect(result).toBe(1);
  });

  it ('power(1, 10) === 10', () => {
    const result = power(1, 10);

    expect(result).toBe(1);
  });

  it ('power(2, 3) === 8', () => {
    const result = power(2, 3);

    expect(result).toBe(8);
  });

  it ('power(3, 4) === 81', () => {
    const result = power(3, 4);

    expect(result).toBe(81);
  });
});
