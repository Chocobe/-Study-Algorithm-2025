# (내가 도출한 공식) 특정 depth 에서, k 번째 Node 의 index 찾기

- depth 별 첫번째 Node index : (2 ** depth - 1)
  - 결과값은 depth 의 첫번째 Node 의 index 와 같다.
  - 즉, `firstIndexInDepth`
- 특정 depth 의 특정 Node index : (2 ** depth - 1) + subIndex
  - 0 <= subIndex <= firstIndexInDepth

```js
/**
 * (내가 찾은 공식)
 * 
 * 특정 depth 내부에 있는 sub_index 에 위치한 Node 의 index 구하기
 * 
 * (depth ** 2 - 1) + k
 * - 0 <= depth
 * - 0 <= k <= (depth ** 2 - 1)
 * 
 * @param { number } depth
 * @param { number } subIndex
 */
const getNodeIndex = (
	depth: number,
	subIndex: number
) => {
	const firstIndexInDepth = 2 ** depth - 1;

	if (subIndex > firstIndexInDepth * 2) {
		throw new Error('invalid subIndex');
	}

	return firstIndexInDepth + subIndex;
};

/**
 * 3 depth 의 subIndex 가 5 위치인 Node index 구하기
 */
const result = (2 ** 3 - 1) + 5 // index: 12
```

---

# (강좌) 부모 index 를 기준으로 child Node 의 index 찾기
- n : parent Node 의 index
- 2n + 1 : parent Node 의 좌측 child Node index
- 2n + 2 : parent Node 의 우측 child Node index

depth 가 1인 left Node 의 index :
```js
/**
 * parent node 의 child index 구하기
 * 
 * 좌측 child index: `2n + 1`
 * 우측 child index: `2n + 2`
 * 
 * @param { number } n 부모 index
 * @param { 1 | 2 | direction 좌측(1) 또는 우측(2)
 */
const getChildIndex = (
	n: number, 
	direction: 1 | 2
) => {
	return 2 * n + direction;
};

/**
 * 1 depth, right Node 의 index
 */
const result = 2 * 0 + 2; // index: 2

/**
 * 2 depth, 첫번째 Node 의 left Node 의 index :
 */
// n === 0 (depth 가 0) left Node 의 index
const result1 = 2 * 0 + 1; // index: 1

// n === 1 (depth 가 1) left Node 의 index
const result2 =  2 * result1 + 1; // index: 3
```

```js
/**
 * index 가 6인 Node 의 left Node index 구하기
 */
const result = 2 * 6 + 1; // index: 13
```

```js
/**
 * index 가 3인 Node 의 right Node index 구하기
 */
const result = 2 * 3 + 2; // 8
```

---

# (강좌)자식 index 를 기준으로 parent Node 의 index 찾기
- n : child Node index
- (n - 1) / 2 : child Node 가 좌측 Node 일 때의 parent index
- (n - 2) / 2 : child Node 가 우측 Node 일 때의 parent index
- 특정 index 가 left 인지 right 인지 몰라도,
  - 위 2가지 공식 중, 결과가 정수인 공식을 사용하면 parent Node index 가 나온다.
  - 또는 (n - 1) / 2 의 결과에서 소숫점 버림을 해도 된다.

```js
/**
 * child node 의 parent index 구하기
 *
 * child node 가 좌측 node 라면, parent index: (n - 1) / 2
 * child node 가 우측 node 라면, parent index: (n - 2) / 2
 *
 * child node 가 좌측인지 우측인지 알 수 없을 때는: Math.floor((n - 1) / 2)
 *
 * @param { number } n 자식 index
 */
const getParentIndex = (n: number) => {
	return Math.floor((n - 1) / 2);
};

/**
 * 12 index Node 의 parent Node index 찾기
 */
const result = (12 - 2) / 2; // 5

/**
 * 31 index Node 의 parent Node index 찾기
 */
const result2 = (31 - 1) / 2; // 15
```
