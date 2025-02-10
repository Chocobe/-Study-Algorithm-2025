/**
 * 문자열 str과 정수 n이 주어집니다.
 * str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
 *
 * @param { string } str
 * @param { number } num
 */
function solution(str, n) {
  let loop = 0;
  let answer = '';

  while (true) {
    if (loop++ >= n) {
      break;
    }

    answer += str;
  }

  return answer;
}

const questions = [
  {
    params: {
      str: 'string',
      n: 5,
    },
    answer: 'stringstringstringstringstring',
  },
];

questions.forEach(question => {
  const {
    params: {
      str,
      n,
    },
    answer,
  } = question;

  console.log(solution(str, n));
})