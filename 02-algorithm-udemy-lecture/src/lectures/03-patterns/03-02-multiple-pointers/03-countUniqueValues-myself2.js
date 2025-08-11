/**
 * 문제 : 숫자로 구성된 배열에서 값의 중복을 제외한 개수를 반환하기
 * 
 * 조건1 : Set 을 사용하지 않고, multiple pointers 로 구현하기
 * 조건2 : 배열은 정렬되어 있다.
 * 
 * @param { number[] } arr
 * @returns { number }
 */
export function countUniqueValues_myself2(arr) {
  /**
   * NOTE:
   * => pointer 변수 : 비교 기준 index
   * => target 변수 : pointer 의 값과 비교할 index
   * 
   * => arr[target] === undefined 라면,
   * => => pointer++
   * => => pointer + 1 반환하기
   * 
   * => arr[pointer] !== arr[target] 이라면,
   * => => pointer++
   * => => pointer = arr[target]
   */

  // arr.length === 0 이라면, 0 반환하기
  if (!arr.length) {
    return 0;
  }

  // 비교 기준 index 가 되는 pointer 변수 선언하기
  let pointer = 0;
  // 비교 대상 index 가 되는 target 변수 선언하기
  let target = 1;

  // target 이 arr 길이보다 작을 때 까지 반복하기
  while (target < arr.length) {
    // arr[pointer] === arr[target] 이라면, target++
    if (arr[pointer] === arr[target]) {
      target++;
    }
    // arr[pointer] !== arr[target] 이라면,
    else {
      // pointer++
      pointer++;
      // arr[pointer] = arr[target]
      arr[pointer] = arr[target];
    }
  }

  // pointer + 1 반환하기
  return pointer + 1;
}