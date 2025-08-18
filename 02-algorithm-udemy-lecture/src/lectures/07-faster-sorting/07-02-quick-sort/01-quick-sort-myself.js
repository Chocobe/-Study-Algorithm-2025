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
 * pivot helper 함수 구현해보기
 * 
 * @param { number[] } arr
 * @param { number } start
 * @param { number } end `end` 보다는 `last` 가 덜 헷갈릴 것 같다.
 * @returns { number }
 */
export function pivot(arr, start = 0, end = arr.length - 1) {
  // pivot 값
  const pivotValue = arr[start];
  // pivot swap index
  let swapIndex = start;

  // arr 를 순회하며,
  for (let i = start; i <= end; i++) {
    // pivot value < arr[i] 라면,
    if (pivotValue > arr[i]) {
      // swap index +1
      swapIndex++;

      // arr[swap index] 와 arr[i] 를 스왑하기
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }

  // arr[start] 와 arr[swap index] 스왑하기
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  // swap index 반환하기
  return swapIndex
}
