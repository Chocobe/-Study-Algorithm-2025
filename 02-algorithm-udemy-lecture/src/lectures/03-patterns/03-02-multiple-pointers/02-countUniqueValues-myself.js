/**
 * 문제 : 숫자로 구성된 배열에서 값의 중복을 제외한 개수를 반환하기
 * 
 * 조건1 : Set 을 사용하지 않고, multiple pointers 로 구현하기
 * 조건2 : 배열은 정렬되어 있다.
 * 
 * @param { number[] } arr
 * @returns { number }
 */
export function countUniqueValues_myself(arr) {
  /**
   * NOTE: 부분 multiple pointers pattern 으로 구현해보자
   */

  // 반환할 결과 변수 선언하기
  let count = 0;

  // 시작 index pointer 선언하기
  let start = 0;
  // 마지막 index pointer 선언하기
  let end = 0;

  // 시작 index 가 arr 길이보다 작을 때 까지 반복하기
  while (start < arr.length) {
    // arr[시작] === arr[마지막] 이라면,
    if (arr[start] === arr[end]) {
      // 마지막 index +1
      end++;
    }
    // arr[시작] !== arr[마지막] 또는 마지막 index >= arr 길이 라면,
    else {
      // 결과 +1
      count++;
      // 마지막 index 를 시작 index 에 대입
      start = end;
    }
  }
  // 결과 반환하기
  return count;
}
