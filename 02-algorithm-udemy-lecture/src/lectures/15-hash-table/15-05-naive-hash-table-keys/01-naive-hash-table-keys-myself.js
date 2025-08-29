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

  get(key) {
    // index 구하기
    const index = this._hash(key);
    // index 로 원본 리스트 가져오기
    const originIndexData = this.keyMap[index];

    // 원본 리스트가 없다면,
    if (!originIndexData) {
      // undefined 반환하기
      return undefined;
    }

    // 원본 리스트에서 key 를 사용하여 value 찾기
    const [_, value] = originIndexData.find(([originKey]) => originKey === key);
    // value 반환하기
    return value;
  }

  /**
   * NOTE: 중복값이 제거된 전체 key 리스트 반환하기
   */
  keys() {
    // 결과 배열 만들기
    const result = [];

    // this.keyMap 을 순회하며,
    this.keyMap.forEach(subArr => {
      subArr.forEach(([key]) => {
        // key 가 결과에 없다면,
        if (!result.includes(key)) {
          // 추가하기
          result.push(key);
        }
      });
    });

    return result;
  }
};
