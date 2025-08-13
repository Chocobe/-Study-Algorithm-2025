import { fibonacci } from './05-fibonacci-myself';

describe('04-02 / 05-fibonacci-myself', () => {
  it ('fibonacci(4) === 3', () => {
    const result = fibonacci(4);

    expect(result).toBe(3);
  });

  it ('fibonacci(10) === 55', () => {
    const result = fibonacci(10);

    expect(result).toBe(55);
  });

  it ('fibonacci(28) === 317811', () => {
    const result = fibonacci(28);

    expect(result).toBe(317811);
  });

  it ('fibonacci(35) === 9227465', () => {
    const result = fibonacci(35);

    expect(result).toBe(9227465);
  });
});
