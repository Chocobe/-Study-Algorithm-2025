import { HashTable } from './01-naive-hash-table-keys-myself';

describe('15-05 / 01-naive-hash-table-keys-myself', () => {
  it('HashTable 의 keys() 를 사용할 수 있다.', () => {
    const hash = new HashTable();

    hash.set('hello', 'hello 값');
    hash.set('world', 'world 값');
    hash.set('miles', 'miles 값');
    hash.set('chocobe', 'chocobe 값');

    const result = hash.keys();
    expect(result.length).toBe(4);
    expect(result.includes('hello')).toBe(true);
    expect(result.includes('world')).toBe(true);
    expect(result.includes('miles')).toBe(true);
    expect(result.includes('chocobe')).toBe(true);
  });
});
