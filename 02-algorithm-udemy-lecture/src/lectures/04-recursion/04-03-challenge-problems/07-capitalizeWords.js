/**
 * 문제7: capitalizeWords라는 재귀 함수를 작성하시오. 
 * => 단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환합니다.
 */

/**
 * @param { string[] } arr
 * @returns { string[] }
 */
export function capitalizeWords(arr) {
  // arr.length 가 1 보다 작다면, [] 반환하기
  if (arr.length < 1) {
    return [];
  }

  // arr[0] 를 대문자로 변환하기
  const parsedStr = arr[0].toUpperCase();

  // [변환결과, ...재귀호출] 반환하기
  return [parsedStr, ...capitalizeWords(arr.slice(1))];
};
