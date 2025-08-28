/**
 * NOTE: Hash function
 * => Hash Table 의 index 를 만들어주는 함수이다.
 * 
 * @param { string } str 
 * @param { number } arrLength 
 * @returns { number }
 */
export function hashFunction(str, arrLength) {
  let total = 0;

  for (const char of str) {
    total += char.charCodeAt(0);
  }

  return total % arrLength;
};
