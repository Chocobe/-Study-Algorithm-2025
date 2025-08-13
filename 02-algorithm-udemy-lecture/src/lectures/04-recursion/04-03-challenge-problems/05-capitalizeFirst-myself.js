/**
 * 문제5: capitalizeFirst 라는 재귀 함수를 작성하시오.
 * => 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.
 * 
 * @example
 * capitalizeFirst(['car', 'taco', 'banana']) === ['Car', 'Taco', 'Banana']
 */

/**
 * @param { string[] } arr
 * @returns { string[] }
 */
export function capitalizeFirst(arr) {
  // arr.length 가 1 보다 작다면, [] 반환하기
  if (arr.length < 1) {
    return [];
  }

  // arr[0] 첫번째 문자 => 대문자 변환하기
  const parsedStr = arr[0][0].toUpperCase() + arr[0].slice(1);
  // [변환 결과, ...재귀호출(arr.slice(1))] 반환하기
  return [parsedStr, ...capitalizeFirst(arr.slice(1))];
};
