/**
 * NOTE: 정렬된 배열과 값을 받아들이고 값이 존재하는 경우
 * => 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다. 
 * => 값이 존재하지 않으면 -1을 반환합니다. 
 * 
 * @example
 * binarySearch([1,2,3,4,5],2) === 1
 * binarySearch([1,2,3,4,5],3) === 2
 * binarySearch([1,2,3,4,5],5) === 4
 * binarySearch([1,2,3,4,5],6) === -1
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) === 2
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) === 16
 * binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) === -1
 */

/**
 * @param { number[] } nums
 * @param { number } target
 * @returns { number }
 */
export function binarySearch(nums, target) {
  // left index 변수 만들기
  let left = 0;
  // right index 변수 만들기
  let right = nums.length - 1;

  // while (left <= right) 순회하며,
  while (left <= right) {
    // mid index 도출하기
    const mid = Math.floor((left + right) / 2);
    const midValue = nums[mid];

    // nums[mid] > target 이라면,
    if (midValue > target) {
      // right 를 mid -1 로 변경하기
      right = mid - 1;
    }
    // nums[mid] < target 이라면,
    else if (midValue < target) {
      // left 를 mid + 1 로 변경하기
      left = mid + 1;
    }
    // nums[mid] === target 이라면,
    else {
      // mid 반환하기
      return mid;
    }
  }

  // while 에서 반환하지 못했다면, -1 반환하기
  return -1;
};
