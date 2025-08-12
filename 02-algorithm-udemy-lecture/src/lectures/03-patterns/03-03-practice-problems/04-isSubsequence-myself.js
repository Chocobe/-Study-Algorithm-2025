/**
 * 문제4: 두 문자열을 받아 첫 번째 문잦열의 문자가
 * => 두번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence 라는 함수를 작성합니다.
 * => 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고,
 * => 두번째 문자열의 어딘가에 나타나는지 확인해야 합니다.
 * 
 * => 조건1: Time complexity - O(N + M)
 * => 조건2: Space complexity - O(1)
 * 
 * @example
 * isSubsequence('hello', 'hello world') === true
 * isSubsequence('sing', sting') === true
 * isSubsequence('abc', abracadabra') === true
 * isSubsequence('abc', 'acb') === false
 */

/**
 * @param { string } str1
 * @param { string } str2
 * @returns { boolean }
 */
export function isSubsequence(str1, str2) {
  // str1 의 pointer 변수 만들기
  let pointer1 = 0;
  // str2 의 pointer 변수 만들기
  let pointer2 = 0;

  // while (pointer2 < str2.length) 순회하며,
  while (pointer2 < str2.length) {
    // str1[pointer1] === str2[pointer2] 라면,
    if (str1[pointer1] === str2[pointer2]) {
      // pointer1++
      pointer1++;
    }
    // str1[pointer1] !== str2[pointer2] 라면,
      // pointer2++
    pointer2++;
  }

  // pointer1 === str1.length 반환하기
  return pointer1 === str1.length;
}
