export function fibonacci(value) {
  const memo = {};

  function recursive(value) {
    // (Base Case)
    if (value <= 2) {
      return 1;
    }

    const leftSide = memo[value - 1] ?? recursive(value - 1);
    const rightSide = memo[value - 2] ?? recursive(value - 2);
    const result = leftSide + rightSide;

    memo[value] = result;

    return result;
  }

  return recursive(value);
};
