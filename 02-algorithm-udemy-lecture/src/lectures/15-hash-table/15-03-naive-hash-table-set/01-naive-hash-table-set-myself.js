export class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRED_PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;

      total = (total * WEIRED_PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    // _hash(key) 를 사용하여 index 구하기
    const index = this._hash(key);

    // index 에 데이터가 없다면,
    if (!this.keyMap[index]) {
      // index 초기화 하기
      this.keyMap[index] = [];
    }

    // index 에 데이터 push() 하기
    this.keyMap[index].push([key, value]);

    return index;
  }
}
