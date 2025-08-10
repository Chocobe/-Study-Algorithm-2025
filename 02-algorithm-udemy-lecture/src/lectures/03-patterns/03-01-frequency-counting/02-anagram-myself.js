/**
 * 문제: Anagram (아나그램)
 * => 단어를 구성하는 문자의 순서를 변경하여, 다른 단어를 만드는 것을 말한다.
 * => str1 과 str2 가 서로의 Anagram 인지 검사하기
 * 
 * @param { string } str1 
 * @param { string } str2 
 * @returns { boolean }
 */
export function anagram(str1, str2) {
  // str1, str2 의 길이가 다르면, false 반환
  if (str1.length !== str2.length) {
    return false;
  }

  // str1 을 구성하는 각 문자의 개수를 파악한 obj 만들기
  let frequencyCount1 = {};
  for (const char of str1) {
    frequencyCount1[char] = ++frequencyCount1[char] || 1;
  }

  // str2 를 구성하는 각 문자의 개수를 파악한 obj 만들기
  let frequencyCount2 = {};
  for (const char of str2) {
    frequencyCount2[char] = ++frequencyCount2[char] || 1;
  }

  // obj1 의 모든 속성을 순회하면서
  for (const key of Object.keys(frequencyCount1)) {
    // obj1[key] !== obj2[key] 라면, false 반환하기
    if (frequencyCount1[key] !== frequencyCount2[key]) {
      return false;
    }
  }

  // 루프가 끝날 때 까지 false 반환이 없다면, true 반환하기
  return true;
}
