/**
 * 문제3: averagePair 라는 함수를 작성합니다.
 * => 정렬된 정수 배열과 목표 평균이 주어졌을 때,
 * => 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다.
 * => 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.
 * 
 * @example
 * averagePair([1, 2, 3], 2.5) === true
 * averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true
 * averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false
 * averagePair([], 4)
 */

/**
 * @param { number[] } arr
 * @param { number } avg
 * @returns { boolean }
 */
export function averagePair(arr, avg) {
  // 좌측 index 변수 만들기
  let left = 0;
  // 우측 index 변수 만들기
  let right = arr.length - 1;

  // while (좌측 index < 우측 index)
  while (left < right) {
    const currentAvg = (arr[left] + arr[right]) / 2;

    // avg === `(arr[좌측] + arr[우측]) / 2` 라면, true 반환하기
    if (avg === currentAvg) {
      return true;
    }
    // avg > `(arr[좌측] + arr[우측]) / 2` 라면, 좌측++
    else if (avg > currentAvg) {
      left++;
    }
    // avg < `(arr[좌측] + arr[우측]) / 2` 라면, 우측--
    else {
      right--;
    }
  }

  // 루프가 종료됬다면, false 반환하기
  return false;
}
