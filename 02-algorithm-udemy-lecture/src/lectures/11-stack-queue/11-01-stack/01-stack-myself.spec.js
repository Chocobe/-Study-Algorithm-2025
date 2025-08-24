import { Stack } from './01-stack-myself';

describe('11-01 / 01-stack-myself', () => {
  it('Stack 자료구조를 사용할 수 있다.', () => {
    const stack = new Stack();

    const result1 = stack.push('FIRST');
    expect(result1).toBe(1);
    expect(stack.first.value).toBe('FIRST');
    expect(stack.last.value).toBe('FIRST');
    expect(stack.size).toBe(1);

    const result2 = stack.push('SECOND');
    expect(result2).toBe(2);
    expect(stack.first.value).toBe('FIRST');
    expect(stack.last.value).toBe('SECOND');
    expect(stack.size).toBe(2);

    const result3 = stack.push('THIRD');
    expect(result3).toBe(3);
    expect(stack.first.value).toBe('FIRST');
    expect(stack.last.value).toBe('THIRD');
    expect(stack.size).toBe(3);

    const result4 = stack.pop();
    expect(result4.value).toBe('THIRD');
    expect(stack.first.value).toBe('FIRST');
    expect(stack.last.value).toBe('SECOND');
    expect(stack.size).toBe(2);

    const result5 = stack.pop();
    expect(result5.value).toBe('SECOND');
    expect(stack.first.value).toBe('FIRST');
    expect(stack.last.value).toBe('FIRST');
    expect(stack.size).toBe(1);

    const result6 = stack.pop();
    expect(result6.value).toBe('FIRST');
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
    expect(stack.size).toBe(0);

    const result7 = stack.pop();
    expect(result7).toBeNull();
    expect(stack.first).toBeNull();
    expect(stack.last).toBeNull();
    expect(stack.size).toBe(0);
  });
});
