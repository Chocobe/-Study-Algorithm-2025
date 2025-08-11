/**
 * NOTE: Multiple pointers patter
 * => 배열에서 2개의 index 위치를 옮기면서 쌍을 찾는 패턴이다.
 */ 

/**
 * 문제 : 정렬된 배열에서 두 요소의 합이 0이 되는 쌍 구하기
 * 
 * @param { number[] } arr
 * @returns { number[] | undefined }
 */
export function multiplePointers(arr) {
  // 좌측 index pointer 선언하기
  let left = 0;

  // 우측 index pointer 선언하기
  let right = arr.length - 1;

  // while (좌측 index < 우측 index)
  while (left < right) {
    const sum = arr[left] + arr[right];

    // arr[좌측] + arr[우측] === 0 이라면, [좌측, 우측] 반환하기
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    // arr[좌측] + arr[우측] > 0 이라면, 우측 index -1
    else if (sum > 0) {
      right--;
    }
    // arr[좌측] + arr[우측] < 0 이라면, 좌측 index +1
    else {
      left++;
    }
  }

  // 루프가 반환하지 못하고 종료되면, undefined 반환하기
  return;
}
