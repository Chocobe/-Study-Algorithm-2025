import { 
  areThereDuplicates_frequencyCount, 
  areThereDuplicates_multiplePointers,
} from './02-areThereDuplicates-myself';

describe('03-03 / 02-areThereDuplicates', () => {
  describe('Frequency Count pattern', () => {
    it ('areThereDuplicates(1, 2, 3) === false', () => {
      const result = areThereDuplicates_frequencyCount(1, 2, 3);

      expect(result).toBe(false);
    });
  });

  it ('areThereDuplicates(1, 2, 2) === false', () => {
    const result = areThereDuplicates_frequencyCount(1, 2, 2);

    expect(result).toBe(true);
  });

  it ('areThereDuplicates("a", "b", "c", "a") === false', () => {
    const result = areThereDuplicates_frequencyCount("a", "b", "c", "a");

    expect(result).toBe(true);
  });

  describe('Multiple Pointers pattern', () => {
    it ('areThereDuplicates(1, 2, 3) === false', () => {
      const result = areThereDuplicates_multiplePointers(1, 2, 3);

      expect(result).toBe(false);
    });
  });

  it ('areThereDuplicates(1, 2, 2) === false', () => {
    const result = areThereDuplicates_multiplePointers(1, 2, 2);

    expect(result).toBe(true);
  });

  it ('areThereDuplicates("a", "b", "c", "a") === false', () => {
    const result = areThereDuplicates_multiplePointers("a", "b", "c", "a");

    expect(result).toBe(true);
  });
});
