import { solution } from './01-직사각형-별찍기';

/**
"5 3"   "*****\n*****\n*****"
 */

describe('250930 / 01-직사각형-별찍기', () => {
  it('solution() === "*****\n*****\n*****"', () => {
    const result = solution('5 3');
    expect(result).toBe('*****\n*****\n*****');
  });
});
