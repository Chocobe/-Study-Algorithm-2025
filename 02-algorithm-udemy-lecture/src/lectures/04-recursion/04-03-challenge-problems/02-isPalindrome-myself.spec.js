import { isPalindrome } from './02-isPalindrome-myself';

describe('04-03 / 02-isPalindrome', () => {
  it ('isPalindrome("awesome") === false', () => {
    const result = isPalindrome('awesome');

    expect(result).toBe(false);
  });

  it ('isPalinedrom("foobar") === false', () => {
    const result = isPalindrome('foobar');

    expect(result).toBe(false);
  });

  it ('isPalindrome("tacocat") === true', () => {
    const result = isPalindrome('tacocat');

    expect(result).toBe(true);
  });

  it ('isPalindrome("amanaplanacanalpanama") === true', () => {
    const result = isPalindrome('amanaplanacanalpanama');

    expect(result).toBe(true);
  });

  it ('isPalindrome("amanaplanacanalpandemonium") === false', () => {
    const result = isPalindrome('amanaplanacanalpandemonium');

    expect(result).toBe(false);
  });
});
