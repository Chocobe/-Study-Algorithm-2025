export function fibonacci(value, memo = {}) {
  if (value <= 0) {
    return 0;
  }

  if (value <= 2) {
    return 1;
  }

  let leftValue = memo[value - 1];
  let rightValue = memo[value - 2];

  if (leftValue === undefined) {
    leftValue = fibonacci(value - 1);
    memo[value - 1] = leftValue;
  }

  if (rightValue === undefined) {
    rightValue = fibonacci(value - 2);
    memo[value - 2] = rightValue;
  }

  return leftValue + rightValue;
};
