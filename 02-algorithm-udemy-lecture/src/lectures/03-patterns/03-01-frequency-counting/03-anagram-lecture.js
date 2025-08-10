/**
 * 내가 푼 방식보다 나은 부분
 * => `frequencyCount1` 하나만 사용하므로, (코드에서는 `lookup`)
 * => 공간 복잡도가 향상된다
 * 
 * @param { string } str1 
 * @param { string } str2 
 * @returns { boolean }
 */
export function anagramLecture(str1, str2) {
	// str1, str2 의 길이기 다르면, false 반환하기
	if (str1.length !== str2.length) {
		return false;
	}

	// str1 을 구성하는 각 문자의 개수를 파악하여 obj 만들기
	const lookup = {};
	for (const char of str1) {
		lookup[char] = ++lookup[char] || 1;
	}

	// str2 를 구성하는 각 문자를 순회하며,
	for (const char of str2) {
		// obj[char2] 가 존재하지 않거나, 0 이라면, false 반환
		if (!lookup[char]) {
			return false;
		}

    // lookup[char] 에서 개수 1 빼기
		lookup[char]--;
	}

	// false 반환 없이 순회를 마쳤다면, true 반환하기
	return true;
}
