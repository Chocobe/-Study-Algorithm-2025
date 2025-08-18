/**
 * NOTE: Quick Sort (퀵 정렬)
 * 
 * 1. 배열에서 기준값으로 사용할 임의의 요소를 pivot value 로 설택한다.
 * => 아래 정리는 배열 첫번째 요소를 pivot value 로 선택한 흐름이다.
 * 
 * 2. 정렬은 재귀 호출로 진행된다.
 * => pivot(arr, start = 0, end = 0)
 * 
 * 3. 배열 첫번째 요소를 pivot value 변수에 담고,
 * => 각 재귀 회차 마지막에 pivot value 가 위치할 swap index 를 변수로 만들다.
 * 
 * 4. 배열을 순회하며,
 * => pivot value 보다 작은 값이라면,
 * => swap index++,
 * => arr[현재 요소] 와 arr[swap index] 를 스왑한다.
 * 
 * 5. 배열 순회를 마쳤다면, 
 * => pivot value 와 arr[swap index] 를 스왑한다.
 * 
 * 6. 마지막으로 swap index 를 반환한다.
 */

/**
 * helper function
 * 
 * 배열 첫번째 값을 pivot value 로 사용하는 방식으로 구현
 * => pivot value 는 첫번째 요소가 아닌 어떤 요소라도 구현 가능하다.
 * 
 * @param { number[] } arr
 * @param { number } left 좌측 index
 * @param { number } right 우측 index
 * @returns { number }
 */
export function pivot(arr, left = 0, right = arr.length - 1) {
  // pivot value 저장하기
  const pivotValue = arr[left];
  // pivot value 를 스왑할 index 변수 만들기
  let swapIndex = left;

  // arr 를 순회하며,
  for (let i = left + 1; i <= right; i++) {
    // arr[i] < pivot value 라면,
    if (arr[i] < pivotValue) {
      // 스왑 index +1
      swapIndex++;
      // arr[i] 와 arr[스왑 index] 스왑하기
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }

  // arr[left] 와 arr[스왑 index] 스왑하기
  [arr[left], arr[swapIndex]] = [arr[swapIndex], arr[left]];

  // 스왑 index 반환하기
  return swapIndex;
}

/**
 * @param { number[] } arr
 * @param { number } left
 * @param { number } right
 * @returns { number[] }
 */
export function quickSort(arr, left = 0, right = arr.length - 1) {
  // left < right 라면,
  if (left < right) {
    // pivot() 호출하여, pivotIndex 도출하기
    const pivotIndex = pivot(arr, left, right);

    // pivotIndex 기준으로 좌측 요소에 대한 재귀 호출하기
    quickSort(arr, left, pivotIndex - 1);
    // pivotIndex 기준으로 우측 요소에 대한 재귀 호출하기
    quickSort(arr, pivotIndex + 1, right);
  }

  // arr 반환하기
  return arr;
};
