/**
 * @param { number[] } nums
 * @returns { number[][] }
 */
export function dfsTemplate_permutation(nums) {
  // 1. 초기화
  const used = nums.reduce((used, num) => {
    used[num] = false;
    return used;
  }, {});

  const results = [];

  function dfs(permutation = []) {
    // 2. (Base Case)
    if (permutation.length === nums.length) {
      results.push([...permutation]);
      return;
    }

    // 3. 현재 노드 처리하기

    // 4. 인접 노드 조건부 재귀호출
    for (const num of nums) {
      if (!used[num]) {
        permutation.push(num);
        used[num] = true;

        dfs(permutation);

        permutation.pop();
        used[num] = false;
      }
    }
  }

  dfs();
  return results;
};
