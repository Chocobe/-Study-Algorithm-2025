/**
 * @param { number } n
 * @param { number } w
 * @param { number } num
 * @returns { number }
 */
export function solution(n, w, num) {
  const index = num - 1;

  const y = Math.floor(index / w);
  const naiveX = index % w;
  const x = y % 2 === 0 ? naiveX : w - naiveX - 1;

  const lastRemainingCols = n % w;
  const topY = Math.floor((n - 1) / w);

  let count = 0;

  for (let row = y; row <= topY; row++) {
    if (row < topY) {
      count++;
    } else {
      if (lastRemainingCols === 0) {
        count++;
      } else {
        const isEvenRow = row % 2 === 0;
        const isExist = isEvenRow
          ? x < lastRemainingCols
          : x >= w - lastRemainingCols

        if (isExist) {
          count++;
        }
      }
    }
  }

  return count;
};
