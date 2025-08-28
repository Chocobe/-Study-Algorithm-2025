import { HashTable } from './01-naive-hash-table-set-myself';

describe('15-03-naive-hash-table-set', () => {
  describe('_hash()', () => {
    it('_hash() 메소드는 index 를 연산해준다.', () => {
      const hash = new HashTable();

      const result1 = hash._hash('hello');
      expect(result1).toBe(40);

      const result2 = hash._hash('world');
      expect(result2).toBe(8);

      const result3 = hash._hash('miles');
      expect(result3).toBe(39);
    });
  });

  describe('set()', () => {
    it('set() 메소드로 데이터를 저장할 수 있다.', () => {
      const hash = new HashTable();

      const index1 = hash.set('hello', 'hello 값');
      expect(hash.keyMap[index1]).toEqual([['hello', 'hello 값']]);

      const index2 = hash.set('world', 'world 값');
      expect(hash.keyMap[index2]).toEqual([['world', 'world 값']]);

      const index3 = hash.set('miles', 'miles 값');
      expect(hash.keyMap[index3]).toEqual([['miles', 'miles 값']]);
    });
  });
});
