export function fibonacci(value) {
  // (Base Case)
  if (value <= 2) {
    return 1;
  }

  return fibonacci(value - 1) + fibonacci(value - 2);
};
