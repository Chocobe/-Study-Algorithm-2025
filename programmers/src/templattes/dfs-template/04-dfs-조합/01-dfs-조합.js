/**
 * @param { number[] } nums 숫자 목록
 * @param { number } targetSum 선택지 합의 목표값
 * @param { number } k 선택지 개수
 * @returns { number }
 */
export function dfsTemplate_combination(nums, targetSum, k) {
  // 결과 변수 선언하기
  let result = 0;

  // dfs helper function 구현하기
  /**
   * 
   * @param { number } startIndex nums 배열 순회 시작 index
   * @param { number } count 현재 선택한 개수
   * @param { number } sum 선택한 값의 합
   */
  function dfs(startIndex = 0, count = 0, sum = 0) {
    // (Base Case) 선택한 숫자가 3개라면,
    if (count === k) {
      // 선택한 숫자의 합이 targetSum 이라면,
      if (sum === targetSum) {
        result++;
      }

      return;
    }

    // (Base Case) `현재 선택한 숫자 개수` + `남은 숫자` 가 k 보다 작다면,
    if (count + (nums.length - startIndex) < k) {
      // 끝까지 진행해도 불가능한 경우다.
      return;
    }

    // startIndex 부터 시작하여 nums 순회하며,
    for (let i = startIndex; i < nums.length; i++) {
      // 다음 depth 재귀 호출하기
      dfs(i + 1, count + 1, sum + nums[i]);
    }
  }

  // dfs() 호출하기
  dfs();
  // 결과 반환하기
  return result;
};
