import { solution } from './01-신규-아이디-추천';

/**
new_id                          result
"...!@BaT#*..y.abcdefghijklm"   "bat.y.abcdefghi"
"z-+.^."                        "z--"
"=.="                           "aaa"
"123_.def"                      "123_.def"
"abcdefghijklmn.p"              "abcdefghijklmn"
 */

describe('250925 / 01-신규-아이디-추천', () => {
  it('solution() === "bat.y.abcdefghi"', () => {
    const result = solution("...!@BaT#*..y.abcdefghijklm");
    expect(result).toBe('bat.y.abcdefghi');
  });

  it('solution() === "z--"', () => {
    const result = solution('z-+.^.');
    expect(result).toBe('z--');
  });

  it('solution() === "=.="', () => {
    const result = solution('=.=');
    expect(result).toBe('aaa');
  });

  it('solution() === "123_.def"', () => {
    const result = solution('123_.def');
    expect(result).toBe('123_.def');
  });

  it('solution() === "abcdefghijklmn.p"', () => {
    const result = solution('abcdefghijklmn.p');
    expect(result).toBe('abcdefghijklmn');
  });
});
