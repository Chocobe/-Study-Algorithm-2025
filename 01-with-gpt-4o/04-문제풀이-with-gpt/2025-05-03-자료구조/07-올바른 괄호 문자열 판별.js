/**
 * 문제 7: 올바른 괄호 문자열 판별
 * 
 * 📄 설명:
 * 괄호로만 이루어진 문자열이 주어질 때,
 * 올바른 괄호 문자열인지 확인하세요.
 * 
 * 규칙
 * 여는 괄호 '('는 반드시 닫는 괄호 ')'보다 먼저 나와야 한다.
 * 
 * 여는 괄호 수와 닫는 괄호 수가 같아야 한다.
 * 
 * ✅ 입력
 * 문자열 input (예: "(()())", "(()", "())(")
 * 
 * ✅ 출력
 * true or false
 */
function solution(input) {
  const OPENER = '(';
  const CLOSER = ')';

  const stack = [];

  for (let bracket of input) {
    switch (bracket) {
      case OPENER:
        stack.push(bracket);
        break;
      case CLOSER:
        if (stack.pop() !== OPENER) {
          return false;
        }
    }
  }

  return !stack.length;
}

const questions = [
  {
    input: '(()())',
    answer: true,
  },
  {
    input: '(()',
    answer: false,
  },
  {
    input: '())(',
    answer: false,
  },
  {
    input: ')',
    answer: false,
  },
];

questions.forEach(question => {
  const {
    input,
    answer,
  } = question;

  const result = solution(input);

  console.group('7: 올바른 괄호 문자열 판별');
  console.log('input: ', input);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
