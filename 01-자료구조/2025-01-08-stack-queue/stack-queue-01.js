/**
 * "주어진 문자열이 올바른 괄호 문자열인지 확인하라."
 * 
 * 문제 설명:
 * 괄호로만 이루어진 문자열이 주어졌을 때, 해당 문자열이 "올바른 괄호 문자열"인지 확인하세요.
 * 
 * 올바른 괄호 문자열의 조건:
 * 여는 괄호 '('와 닫는 괄호 ')'의 개수가 같아야 한다.
 * 여는 괄호는 항상 닫는 괄호보다 먼저 나와야 한다.
 * 
 * @param { string } input
 */
function solution(input) {
  const OPENER = '(';
  const CLOSER = ')';

  const stack = [];

  const result = input
    .split('')
    .every(char => {
      switch (char) {
        case OPENER: {
          stack.push(char);
          return true;
        }
        case CLOSER: {
          if (stack.pop() !== OPENER) {
            return false;
          }
        }
      }
    });

  return result && stack.length === 0;
}

const inputs = [
  {
    input: '(()())',
    answer: true
  },
  {
    input: '())(',
    answer: false,
  },
  {
    input: '((()))',
    answer: true,
  },
  {
    input: '(()',
    answer: false,
  },
];

inputs.forEach(({ input, answer }) => {
  console.log(`${input} : ${solution(input) === answer}`);
});
