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
  let result = 0;

  function dfs(startIndex = 0, picked = 0, sum = 0) {
    if (picked === 3) {
      if (sum === 0) {
        result++;
      }

      return;
    }

    if (picked + (nums.length - startIndex) < 3) {
      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      dfs(i + 1, picked + 1, sum + nums[i]);
    }
  }

  dfs();
  return result;
};
