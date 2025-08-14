/**
 * NOTE: 긴 문자열에서 특정 문자열이 몇 번 나타나는지 개수 세기
 */

/**
 * @param { string } str
 * @param { string } target
 * @return { number }
 */
export function naiveStringSearch(str, target) {
  // count 변수 만들기
  let count = 0;

  // str 을 index1 로 순회하며,
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) {
        break;
      }

      if (j === target.length - 1) {
        count++;
      }
    }
  }

  // count 반환하기
  return count;
}
