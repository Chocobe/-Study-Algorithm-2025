/**
 * 🧩 08. 스택 심화 문제: 다양한 괄호 쌍 유효성 검사
 * 
 * 📄 문제 설명
 * (), {}, [] 세 종류의 괄호로 이루어진 문자열이 주어질 때,
 * 올바른 괄호 문자열인지 판별하라.
 * 
 * 예시
 * "([]{})" → true
 * 
 * "({[)]}" → false
 * 
 * "((()))[]" → true
 * 
 * "(]" → false
 * 
 * ✅ 입력
 * 문자열 input (길이 1 이상 10,000 이하)
 * 
 * ✅ 출력
 * true 또는 false (올바른 괄호 문자열인지 여부)
 */
function solution(input) {
  const EXPECTED_MAPPER = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];

  for (let bracket of input) {
    if (!EXPECTED_MAPPER[bracket]) {
      stack.push(bracket);
    } else if (stack.pop() !== EXPECTED_MAPPER[bracket]) {
      return false;
    }
  }

  return !stack.length;
}

const questions = [
  {
    input: '([]{})',
    answer: true,
  },
  {
    input: '({[)]}',
    answer: false,
  },
  {
    input: '((()))[]',
    answer: true,
  },
  {
    input: '(]',
    answer: false,
  },
];

questions.forEach(question => {
  const {
    input,
    answer,
  } = question;

  const result = solution(input);

  console.group('08. 스택 심화 문제: 다양한 괄호 쌍 유효성 검사');
  console.log('input: ', input);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
