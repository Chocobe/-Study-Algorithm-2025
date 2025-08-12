/**
 * 문제1: 빈도수 세기 - sameFrequency
 * => sameFrequency 라는 함수를 작성하세요
 * => 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
 * => 조건1: Big O(n)
 * 
 * @example
 * sameFrequency(182, 281) === true
 * sameFrequency(34, 14) === false
 * sameFrequency(3589578, 5879385) === true
 * sameFrequency(22, 222) === false
 */

/**
 * NOTE: 내가 이해한 문제
 * => 두 개의 숫자가 주어질 때, Anagram 이 되는지 검사하기
 * 
 * @param { number } num1
 * @param { number } num2
 * @returns { boolean }
 */
export function sameFrequency(num1, num2) {
  // num1 => str1 타입 변환하기
  const str1 = String(num1);
  // num2 => str2 타입 변환하기
  const str2 = String(num2);

  // str1, str2 길이가 다르면, false 반환하기
  if (str1.length !== str2.length) {
    return false;
  }

  // str1 의 각 숫자에 대하여 `{ 숫자: 빈도수 }` 구조의 lookup 만들기
  const lookup = {};
  for (const char of str1) {
    lookup[char] = ++lookup[char] || 1;
  }

  // str2 의 각 char 를 순회하며,
  for (const char of str2) {
    // lookup[char] 가 falsy 라면, false 반환하기
    if (!lookup[char]) {
      return false;
    }

    // lookup[char] 가 truthy 라면, -1
    lookup[char]--;
  }

  // str2 순회에서 false 반환 없이 종료되었다면, true 반환하기
  return true;
}
