export function fibonacci(value, memo = [undefined, 1, 1]) {
  // (Base Case)
  if (memo[value] !== undefined) {
    return memo[value];
  }

  const result = fibonacci(value - 1, memo) + fibonacci(value - 2, memo);
  memo[value] = result;

  return result;
};
