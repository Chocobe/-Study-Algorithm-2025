/**
 * @param { number[] } arr
 * @returns { number }
 */
export function insertionSort(arr) {
  // i + 1 부터 arr.length - 1 까지 arr 를 순회하며,
  for (let i = 1; i < arr.length; i++) {
    // 현재 정렬 대상값 저장하기
    const currentValue = arr[i];
    // 삽입할 index 변수 만들기
    let insertionIndex = i;

    // i - 1 부터 0 까지 arr 를 역순회하며,
    for (let j = i - 1; j >= 0; j--) {
      // 현재 정렬 대상값 < arr[j] 라면,
      if (currentValue < arr[j]) {
        // arr[j + 1] 를 arr[j] 로 변경한다.
        arr[j + 1] = arr[j];
        // 삽입할 index 를 j 로 변경한다.
        insertionIndex = j;
      }
      // 아니라면,
      else {
        // 루프를 종료한다.
        break;
      }
    }

    // arr[삽입할 index] 을 현재 정렬 대상값으로 변경한다.
    arr[insertionIndex] = currentValue;
  }

  // arr 를 반환한다.
  return arr;
};
