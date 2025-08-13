/**
 * 문제2: 전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는
 * => isPalindrome이라는 재귀(recursive) 함수를 작성하시오.
 * => 팔린드롬이 아닐 경우 false 를 반환합니다.
 * 
 * @example
 * isPalindrome('awesome') === false
 * isPalindrome('foobar') === false
 * isPalindrome('tacocat') === true
 * isPalindrome('amanaplanacanalpanama') === true
 * isPalindrome('amanaplanacanalpandemonium') === false
 */

/**
 * @param { string } str
 * @returns { boolean }
 */
export function isPalindrome(str) {
  // (Base Case) str.length < 2 라면, true 반환하기
  if (str.length < 2) {
    return true;
  }

  const first = str[0];
  const last = str[str.length - 1];
  const rest = str.slice(0, str.length - 1).slice(1);

  // (Base Case) str 첫번째 문자, 마지막 문자가 다르면, false 반환하기
  if (first !== last) {
    return false;
  }

  // isPalindrome 에 str 의 첫번째 문자, 마지막 문자를 제거하고 호출하고, 반환하기
  return isPalindrome(rest);
};
