import { solution } from './01-숫자-문자열과-영단어';

/**
s                    result
"one4seveneight"     1478
"23four5six7"	       234567
"2three45sixseven"   234567
"123"                123
 */

describe('250922 / 01-숫자-문자열과-영단어', () => {
  it('solution() === 1478', () => {
    const result = solution('one4seveneight');
    expect(result).toBe(1478);
  });

  it('solution() === 234567', () => {
    const result = solution('23four5six7');
    expect(result).toBe(234567);
  });

  it('solution() === 234567', () => {
    const result = solution('2three45sixseven');
    expect(result).toBe(234567);
  });

  it('solution() === 123', () => {
    const result = solution('123');
    expect(result).toBe(123);
  });
});
