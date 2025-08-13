import { recursiveRange } from './04-recursiveRange-myself';

describe('04-02 / 04-recursiveRange-myself', () => {
  it ('recursiveRange(6) === 21', () => {
    const result = recursiveRange(6);

    expect(result).toBe(21);
  });

  it ('recursiveRange(10) === 55', () => {
    const result = recursiveRange(10);

    expect(result).toBe(55);
  });
});
