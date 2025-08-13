import { nestedEvenSum } from './06-nestedEvenSum';

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

describe('04-03 / 06-nestedEvenSum', () => {
  it ('nestedEvenSum(obj1) === 6', () => {
    const result = nestedEvenSum(obj1);

    expect(result).toBe(6);
  });

  it ('nestedEvenSum(obj2) === 10', () => {
    const result = nestedEvenSum(obj2);

    expect(result).toBe(10);
  });
});
