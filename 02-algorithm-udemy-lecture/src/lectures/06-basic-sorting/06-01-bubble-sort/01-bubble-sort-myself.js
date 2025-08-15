/**
 * NOTE: 배열의 마지막 요소부터 정렬하는 방식
 */

/**
 * @param { number[] } arr
 * @returns { number[] }
 */
export function bubbleSort(arr) {
  // 1 ~ arr.length - 1 까지 for,
  for (let i = 0; i < arr.length - 1; i++) {
    // 0 ~ arr.length - 1 - i 까지 for, 
    for (let j = 0; j < arr.length - i - 1; j++) {
      // arr[j] > arr[j + 1] 라면,
      if (arr[j] > arr[j + 1]) {
        // 스왑하기
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  // arr 반환하기
  return arr;
};
