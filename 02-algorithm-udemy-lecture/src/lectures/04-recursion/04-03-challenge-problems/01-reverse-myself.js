/**
 * 문제1: 문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성합니다.
 * 
 * @example
 * reverse('awesome') === 'emosewa'
 * reverse('rithmschool') === 'loohcsmhtir'
 */
// 
// 

/**
 * @param { string } str
 * @returns { string }
 */
export function reverse(str) {
  // (Base Case) str.length 가 1보다 작다면, str 반환하기
  if (str.length < 2) {
    return str;
  }

  // str 마지막 문자 + reverse(str.slice(0, str.length - 1)) 반환하기
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};
