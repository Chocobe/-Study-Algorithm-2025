/**
 * 주제: 정렬과 문자열
 * 문제:
 * "문자열 배열이 주어졌을 때, 사전 순으로 가장 앞에 오는 문자열을 반환하라."
 *
 * 조건:
 * 문자열 배열에는 최소 하나 이상의 문자열이 들어있다.
 * 빈 문자열은 없다고 가정한다.
 * 
 * @param { string[] } strings
 */
function solution(strings) {
  console.log('"a".localeCompare("b"): ', 'a'.localeCompare('b'));
  console.log('"c".localeCompare("a"): ', 'c'.localeCompare('a'));
  console.log('"a".localeCompare("a"): ', 'a'.localeCompare('a'));
  return strings.sort((a, b) => a.localeCompare(b))[0];
}

const strings = [
  'apple',
  'banana',
  'grape',
  'kiwi',
  'mango',
];

const inputs = [
  {
    answer: 'apple',
    strings: [
      'apple',
      'banana',
      'grape',
      'kiwi',
      'mango',
    ],
  },
];

inputs.forEach(({ answer, strings }) => {
  console.log(answer === solution(strings));
});
