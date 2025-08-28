/**
 * 연산에 소수 (prime number) 를 추가하여, index 분포도를 향상시킨 버전
 * 
 * @param { string } key 
 * @param { number } arrLength 길이값에 소수(prime number) 를 사용하면, index 분포도가 좋아진다.
 * @returns { number }
 */
export function hashFunction(key, arrLength) {
  let total = 0;

  // 연산 결과의 분포도를 높이기 위한 소수 (prime number)
  const WEIRED_PRIME_NUMBER = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;

    total = (total * WEIRED_PRIME_NUMBER + value) % arrLength;
  }

  return total;
};
