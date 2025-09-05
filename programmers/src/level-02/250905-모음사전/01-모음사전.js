/**
 * 문제: _모음사전_
 * 
 * 난이도: _Level 2_
 * 
 * 성공여부: _실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/84512?language=javascript
 * 
 * @param { string } word
 * @returns { number }
 */
export function solution(word) {
  // NOTE: 연산 흐름
  // 1. charList 만들기: [A, E, I, O, U]
  // 2. charIndex 만들기: 문자 순서에 따라 참조하기 위한 인덱스 포인터
  // 3. for (charList) => DFS 연산하기
  // 4. DFS helper 만들기 (재귀)

  // NOTE: 필요 변수
  // global
  // - MAX_DEPTH: 5
  // - count: 노드 방문 횟수

  const MAX_DEPTH = 4;
  const CHAR_LIST = ['A', 'E', 'I', 'O', 'U'];
  const currentChars = [];
  let done = false;
  let count = 0;

  dfs();

  function dfs(depth = 0) {
    for (let i = 0; i < CHAR_LIST.length; i++) {
      if (depth > MAX_DEPTH || done) {
        return;
      }

      const newChar = CHAR_LIST[i];

      currentChars.push(newChar);
      count++;

      if (currentChars.join('') === word) {
        done = true;
        return;
      }

      dfs(depth + 1);

      currentChars.pop();
    }
  }

  return count;
};

/**
Graph 로 생각해 본다면?

시작점: A, E, I, O, U
각 노드는 자식 노드를 가짐: A, E, I, O, U
Depth: 0 ~ 4

DFS 진행하며,
=> 노드 방문마다 count++
=> 목표 단어와 일치하면 break
=> count 반환하기
 */
