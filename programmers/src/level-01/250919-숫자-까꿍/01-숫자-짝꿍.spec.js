import { solution } from './01-숫자-짝꿍';
/**
X         Y          result
"100"     "2345"     "-1"
"100"     "203045"   "0"
"100"     "123450"   "10"
"12321"   "42531"    "321"
"5525"    "1255"     "552"
 */

describe('250919 / 01-숫자-짝꿍', () => {
  it('solution() === "-1"', () => {
    const result = solution('100', '2345');
    expect(result).toBe('-1');
  });

  it('solution() === "0"', () => {
    const result = solution('100', '203045');
    expect(result).toBe('0');
  });

  it('solution() === "10"', () => {
    const result = solution('100', '123450');
    expect(result).toBe('10');
  });

  it('solution() === "123321"', () => {
    const result = solution('123321', '42531');
    expect(result).toBe('321');
  });

  it('solution() === "552"', () => {
    const result = solution('5525', '1255');
    expect(result).toBe('552');
  });
});
