/**
 * NOTE: 모든 중첩 for 문을 순회하기 전에 정렬이 완료된다면,
 * => 더이상 남은 루프를 순회하는 것은 낭비이다.
 * => 
 * => 만약 순서 변경이 발생하지 않는다면, 반복문을 종료한다.
 */

/**
 * @param { number[] } arr
 * @returns { number[] }
 */
export function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let isNoSwap = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isNoSwap = false;
      }
    }

    if (isNoSwap) {
      break;
    }
  }

  return arr;
};
