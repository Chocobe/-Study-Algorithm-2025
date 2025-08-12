/**
 * 문제7: 문자열을 받아 모든 고유 문자가 포함된
 * => 가장 긴 하위 문자열의 길이를 반환하는
 * => findLongestSubstring 이라는 함수를 만드세요
 * 
 * => 조건1: Time Complexity - O(n)
 * 
 * @example
 * findLongestSubstring('') === 0
 * findLongestSubstring('rithmschool') === 7
 * findLongestSubstring('thisisawesome') === 6
 * findLongestSubstring('thecatinthehat') === 7
 * findLongestSubstring('bbbbbb') === 1
 * findLongestSubstring('longestsubstring') === 8
 * findLongestSubstring('thisishowwedoit') === 6
 */

// FIXME: 틀린 문제
// FIXME: 내가 생각한 로직을 수정해서 답 도출 못함
/**
 * @param { string } str
 * @returns { number }
 */
export function _findLongestSubstring(str) {
  // 시작 index 변수 만들기
  let start = 0;
  // 마지막 index 변수 만들기
  let last = 0;
  // 최대 길이 변수 만들기
  let maxLength = 0;
  // 현재 부분 문자열에 대한 `{ 문자: 개수 }` obj 만들기
  const lookup = {};

  // while (마지막 index < str.length && 시작 index <= 마지막 index) 순환하며,
  while (last < str.length && start <= last) {
    const lastChar = str[last];

    // str[마지막 index] 가 obj 에 없다면,
    if (!lookup[lastChar]) {
      // 최대 길이 갱신하기
      maxLength = Math.max(last - start + 1, maxLength);
      // obj[str[마지막 index]] = 1
      lookup[lastChar] = 1;
      // 마지막 index +1
      last++;
    }
    // str[마지막 index] 가 obj 에 있다면,
    else {
      // 시작 index === 마지막 index,
      if (start === last) {
        // 마지막 index +1
        last++;
      }
      // 시작 index !== 마지막 index,
      else {
        // obj[str[시작 index]] 삭제하기
        delete lookup[lastChar];
        // 시작 index +1
        start++;
      }
    }
  }

  // 최대 길이 반환하기
  return maxLength;
}

// TODO: 해답
// TODO: 어려움
// TODO: 이해했음!!!
export function findLongestSubstring(str) {
  // 최대 길이 변수 만들기
  let maxLength = 0;
  // 시작 index 변수 만들기
  let start = 0;
  // `{ 문자: index + 1 }` 로 구성된 obj 만들기
  // NOTE: indexInfo 에 저장하는 value 의미가 중요
  // => value 에 값이 있다면, key 에 해당하는 문자가 이전에 등작했던 index 다.
  const indexInfo = {};

  // str 을 순회하면서 (last index)
  for (let last = 0; last < str.length; last++) {
    const lastChar = str[last];

    // console.log('[start, last]: ', [start, last]);

    // obj[마지막 문자] 가 truthy 라면,
    if (indexInfo[lastChar] !== undefined) {
      // console.log('[start, indexInfo[lastChar]]: ', [start, indexInfo[lastChar]]);

      // 시작 index 를 obj[마지막 문자] 로 바꾸기
      // FIXME: 이 부분에서 start 가 indexInfo[lastChar] 보다 커지는 이유를 모르겠음
      // FIXME: 이제 이해함! (위에도 주석으로 남김김
      // FIXME: => indexInfo[lastChar] 의 값은 이전에 lastChar 가 등장했던 index 이다.
      start = Math.max(start, indexInfo[lastChar] + 1);
    }

    // 최대 길이 갱신하기
    maxLength = Math.max(maxLength, last - start + 1);
    // obj[마지막 문자] 의 index 값 갱신하기
    indexInfo[lastChar] = last;
  }

  // 최대 길이 반환하기
  return maxLength;
}
