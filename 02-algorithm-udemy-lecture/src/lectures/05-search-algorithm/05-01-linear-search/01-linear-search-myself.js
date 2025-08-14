/**
 * NOTE: Linear Search (선형 검색)
 * => 배열의 첫 번째 요소부터 순서대로 모든 요소를 검색하는 방식이다.
 * 
 * @example
 * linearSearch([10, 15, 20, 25, 30], 15) === 1
 * linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) === 5
 * linearSearch([100], 100) === 0
 * linearSearch([1,2,3,4,5], 6) === -1
 * linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) === -1
 * linearSearch([100], 200) === -1
 * 
 */

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number }
 */
export function linearSearch(nums, target) {
  // nums 를 순회하며,
  for (const index in nums) {
    // target 과 같으면,
    if (target === nums[index]) {
      // index 반환하기
      return Number(index);
    }
  }

  // 순회를 마쳤지만 target 을 찾지 못했다면, -1 반환하기
  return -1;
};
