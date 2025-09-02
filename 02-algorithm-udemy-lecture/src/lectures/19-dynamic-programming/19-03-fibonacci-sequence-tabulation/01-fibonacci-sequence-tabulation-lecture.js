/**
 * Dynamic Programming - Tabulation 기법으로 풀기
 */
export function fibonacci(value) {
  // (Base Case)
  if (value <= 2) {
    return 1;
  }

  const fibTable = [undefined, 1, 1];

  for (let i = 3; i <= value; i++) {
    fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
  }

  return fibTable[value];
};
