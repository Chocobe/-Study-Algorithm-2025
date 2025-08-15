/**
 * NOTE: Insertion Sort (삽입 정렬)
 * => 좌측 값들을 최소값으로 정렬하는 방식이다.
 * => 정렬할 요소가 좌측값보다 큰 index 를 찾고,
 * => 찾은 index 에 정렬할 요소를 삽입한다.
 */

/**
 * @param { number[] } arr
 * @returns { number[] }
 */
export function insertionSort(arr) {
  // arr 를 순회하며, (i 는 삽입 대상 index)
  for (let i = 1; i < arr.length; i++) {
    // 현재값인 arr[i] 값 보관하기
    const currentValue = arr[i];
    // 삽입할 index 변수 만들기
    let insertionIndex = i;

    // i - 1 부터 0 까지 arr 순회하며,
    for (let j = i - 1; j >= 0; j--) {
      // 현재값 < arr[j] 라면,
      if (currentValue < arr[j]) {
        // arr[j = 1] 에 arr[j] 저장하기
        arr[j + 1] = arr[j];
        // 삽입할 index 를 j 로 변경하기
        insertionIndex = j;
      }
      // 아니라면,
      else {
        // 루프 종료하기
        break;
      }
    }

    arr[insertionIndex] = currentValue;
  }

  // arr 반환하기
  return arr;
};
