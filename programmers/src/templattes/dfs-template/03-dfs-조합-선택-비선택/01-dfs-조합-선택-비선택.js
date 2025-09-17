/**
 * @param { number[] } nums
 * @param { number } target
 * @returns { number }
 */
export function dfsTemplate_subset(nums, target) {
  // 1. 초기화
  let count = 0;

  function dfs(index = 0, sum = 0) {
    // 2. (Base Case)
    if (index === nums.length) {
      if (sum === target) {
        count++;
      }

      return;
    }

    // 3. 현재 노드 처리하기

    // 4. 인접 노드 조건부 재귀호출
    dfs(index + 1, sum + nums[index]);
    dfs(index + 1, sum);
  }

  dfs();
  return count;
};
