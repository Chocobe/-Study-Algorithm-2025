/**
 * 🧩 문제 2: 가장 긴 동일 문자 반복 부분 문자열 찾기
 * 
 * 📄 설명:
 * 주어진 문자열에서 같은 문자가 연속으로 반복된 가장 긴 구간의 길이를 구하라.
 * 
 * 📌 예시:
 * 
 * 'aaabbccccddee' → 4 ('cccc')
 * 
 * 'aabbcc' → 2
 * 
 * 'abcde' → 1
 * 
 * @param { string } input
 */
function solution(input) {
  const maxState = {
    char: '',
    count: 0,
  };

  const currentState = {
    char: '',
    count: 0,
  };

  for (let char of input) {
    if (currentState.char === char) {
      currentState.count++;
    } else {
      currentState.char = char;
      currentState.count = 1;
    }

    if (maxState.count < currentState.count) {
      maxState.char = currentState.char;
      maxState.count = currentState.count;
    }
  }

  return maxState.count;
}

const questions = [
  {
    input: 'aaabbccccddee',
    answer: 4,
  },
  {
    input: 'aabbcc',
    answer: 2,
  },
  {
    input: 'abcde',
    answer: 1,
  },
];

questions.forEach(question => {
  const {
    input,
    answer,
  } = question;

  const result = solution(input);

  console.group('2. 가장 긴 동일 문자 반복 부분 문자열 찾기');
  console.log('input: ', input);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
