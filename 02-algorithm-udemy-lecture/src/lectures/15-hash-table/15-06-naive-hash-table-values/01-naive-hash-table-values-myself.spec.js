import { HashTable } from './01-naive-hash-table-values-myself';

describe('15-06 / 01-naive-hash-table-values-myself', () => {
  it('HashTable 의 values() 를 사용할 수 있다.', () => {
    const hash = new HashTable();

    hash.set('hello', 'hello 값');
    hash.set('world', 'world 값');
    hash.set('miles', 'miles 값');
    hash.set('chocobe', 'chocobe 값');

    const result1 = hash.values();
    expect(result1.length).toBe(4);
    expect(result1.includes('hello 값'));
    expect(result1.includes('world 값'));
    expect(result1.includes('miles 값'));
    expect(result1.includes('chocobe 값'));

    hash.set('hello2', 'hello 값');

    const result2 = hash.values();
    expect(result2.length).toBe(4);
    expect(result2.includes('hello 값')).toBe(true);
  });
});
