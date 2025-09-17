/**
 * 문제: _삼총사_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/131705
 * 
 * @param { number[] } nums
 * @returns { number }
 */
export function solution(nums) {
  let count = 0;

  function dfs(currentNums = [], startIndex = 0) {
    if (currentNums.length === 3) {
      const sum = currentNums.reduce((sum, num) => {
        return sum + num;
      }, 0);

      if (sum === 0) count++;

      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      currentNums.push(nums[i]);
      dfs(currentNums, i + 1);
      currentNums.pop();
    }
  }

  dfs();
  return count;
};
