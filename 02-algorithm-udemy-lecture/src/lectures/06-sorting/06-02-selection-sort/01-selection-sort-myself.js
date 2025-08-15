/**
 * NOTE: Selection Sort (선택 정렬)
 * => 가장 작은값을 좌측부터 정렬하는 방식이다.
 * => 배열의 각 요소를 순회하며 가장 작은 값을 선택한 후,
 * => 루프의 현재 기준점에 위치한 요소와 최소값 요소의 위치를 바꾸는 방식이다.
 */

/**
 * @param { number[] } arr
 * @returns { number[] }
 */
export function selectionSort(arr) {
  // 기준점 index 에 대한 for 루프를 순회하며,
  for (let i = 0; i < arr.length - 1; i++) {
    // 현재 루프 상에서의 최소값 index 변수 만들기
    let minIndex = i;

    // 기준점 index 부터 arr.length 까지 순회를 하며,
    for (let j = i + 1; j < arr.length; j++) {
      // 현재 요소가 최소값이라면,
      if (arr[j] < arr[minIndex]) {
        // 최소값 index 갱신하기
        minIndex = j;
      }
    }

    // 기준점 index 가 최소값 index 와 다르다면,
    if (i !== minIndex) {
      // 기준점 index 와 최소값 index 교체하기
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // arr 반환하기
  return arr;
}
