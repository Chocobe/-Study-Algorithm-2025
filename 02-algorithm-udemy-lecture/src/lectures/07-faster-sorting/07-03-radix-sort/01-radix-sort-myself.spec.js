import { getRadixValue, digitCount, mostDigits, radixSort } from './01-radix-sort-myself';

describe('07-03 / 01-radix-sort-myself', () => {
  describe('getRadixValue()', () => {
    it('getRadixValue(123, 0) === 3', () => {
      const result = getRadixValue(123, 0);

      expect(result).toBe(3);
    });

    it('getRadixValue(123, 2) === 1', () => {
      const result = getRadixValue(123, 2);

      expect(result).toBe(1);
    });

    it('getRadixValue(123, 3) === 0', () => {
      const result = getRadixValue(123, 3);

      expect(result).toBe(0);
    });

    it('getRadixValue(123, 4) === 0', () => {
      const result = getRadixValue(123, 4);

      expect(result).toBe(0);
    });
  });

  describe('digitCount()', () => {
    it('digitCount(123) === 3', () => {
      const result = digitCount(123);

      expect(result).toBe(3);
    });

    it('digitCount(0) === 1', () => {
      const result = digitCount(0);

      expect(result).toBe(1);
    });

    it('digitCount(1234567890) === 10', () => {
      const result = digitCount(1234567890);

      expect(result).toBe(10);
    });
  });

  describe('mostDigits()', () => {
    it('mostDigits([3, 22, 103, 1020, -12345]) === 5', () => {
      const result = mostDigits([3, 22, 103, 1020, -12345]);

      expect(result).toBe(5);
    });

    it('mostDigits([22, 333, 444, 555, 9999]) === 4', () => {
      const result = mostDigits([22, 333, 444, 555, 9999]);

      expect(result).toBe(4);
    });

    it('mostDigits([12, 34, 56, 78]) === 2', () => {
      const result = mostDigits([12, 34, 56, 78]);

      expect(result).toBe(2);
    });
  });

  describe('radixSort()', () => {
    it('radixSort([22, 33, 1, 0, 100, 9876]) === [0, 1, 22, 33, 100, 9876]', () => {
      const arr = [22, 33, 1, 0, 100, 9876];
      const result = radixSort(arr);

      expect(result).toEqual([0, 1, 22, 33, 100, 9876]);
    });

    it('radixSort([78, 12, 56, 34]) === [12, 34, 56, 78]', () => {
      const arr = [78, 12, 56, 34];
      const result = radixSort(arr);

      expect(result).toEqual([12, 34, 56, 78]);
    });
  });
});
