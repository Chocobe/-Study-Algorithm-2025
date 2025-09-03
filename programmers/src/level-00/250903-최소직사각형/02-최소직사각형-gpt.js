/**
 * @param { number[][] } arr
 * @returns { number }
 */
export function solution(arr) {
  let maxW = 0;
  let maxH = 0;

  for (const [left, right] of arr) {
    const currentMin = Math.min(left, right);
    const currentMax = Math.max(left, right);

    maxW = Math.max(currentMin, maxW);
    maxH = Math.max(currentMax, maxH);
  }

  return maxW * maxH;
};
