import { solution } from './01-모음사전';

describe('250905 / 01-모음사전', () => {
  it('solution() === 6', () => {
    const result = solution('AAAAE');
    expect(result).toBe(6);
  });

  it('solution() === 10', () => {
    const result = solution('AAAE');
    expect(result).toBe(10);
  });

  it('solution() === 1563', () => {
    const result = solution('I');
    expect(result).toBe(1563);
  });

  it('solution() === 1189', () => {
    const result = solution('EIO');
    expect(result).toBe(1189);
  });
});
