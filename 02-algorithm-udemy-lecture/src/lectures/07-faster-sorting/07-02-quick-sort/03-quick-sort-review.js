/**
 * @param { number[] } arr
 * @param { number } left 좌측 indez
 * @param { number } right 우측 index
 * @returns { number[] }
 */
export function quickSort(
  arr,
  left = 0,
  right = arr.length - 1
) {
  // (Base Case) left >= right 라면,
  if (left >= right) {
    // arr 반환하기
    return arr;
  }

  // pivot 정렬하고, pivotIndex 도출하기
  const pivotIndex = pivot(arr, left, right);

  // pivotIndex 기준 좌측 요소들에 재귀 호출하기
  quickSort(arr, left, pivotIndex - 1);
  // pivotIndex 기준 우측 요소들에 재귀 호출하기
  quickSort(arr, pivotIndex + 1, right);

  // arr 반환하기
  return arr;
};

/**
 * @param { number[] } arr
 * @param { number } left 좌측 index
 * @param { number } right 우측 index
 * @returns { number } pivotIndex
 */
function pivot(arr, left, right) {
  // arr[left] 를 pivot value 변수로 선언하기
  const pivotValue = arr[left];
  // left 를 swapIndex 변수로 선언하기
  let swapIndex = left;

  // i = left + 1; i <= right; i++ 순회하며,
  for (let i = left + 1; i <= right; i++) {
    // arr[i] < pivot value 라면,
    if (arr[i] < pivotValue) {
      // swapIndex +1
      swapIndex++;
      // arr[swapIndex] 와 arr[i] 스왑하기
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }

  // arr[left] 와 arr[swapIndex] 스왑하기
  [arr[left], arr[swapIndex]] = [arr[swapIndex], arr[left]];
  // swapIndex 반환하기
  return swapIndex;
};
