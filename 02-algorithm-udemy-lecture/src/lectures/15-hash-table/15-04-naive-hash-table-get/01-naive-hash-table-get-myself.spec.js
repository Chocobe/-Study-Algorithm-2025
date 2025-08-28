import { HashTable } from './01-naive-hash-table-get-myself';

describe('15-04-naive-hash-table-get', () => {
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

  describe('get()', () => {
    it('get() 메소드로 데이터를 저장할 수 있다.', () => {
      const hash = new HashTable();

      hash.set('hello', 'hello 값');
      hash.set('world', 'world 값');
      hash.set('miles', 'miles 값');

      const result1 = hash.get('hello');
      expect(result1).toBe('hello 값');

      const result2 = hash.get('world');
      expect(result2).toBe('world 값');

      const result3 = hash.get('miles');
      expect(result3).toBe('miles 값');

      const result4 = hash.get('invalid-key');
      expect(result4).toBeUndefined();
    });
  });
});
