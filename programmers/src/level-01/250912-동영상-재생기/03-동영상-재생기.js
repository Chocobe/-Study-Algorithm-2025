/**
 * 문제: _[PCCP 기출문제] 1번 / 동영상 재생기_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공/실패_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/340213
 * 
 * @param { string } video_len
 * @param { string } pos
 * @param { string } op_start
 * @param { string } op_end
 * @param { string[] } commands
 * @returns { string }
 */
export function solution(
  video_len,
  pos,
  op_start,
  op_end,
  commands
) {
  const videoLen = parseToSeconds(video_len);
  const opStart = parseToSeconds(op_start);
  const opEnd = parseToSeconds(op_end);
  let position = parseToSeconds(pos);

  const normalize = seconds => {
    if (seconds < 0) {
      seconds = 0;
    } else if (seconds > videoLen) {
      seconds = videoLen;
    }

    if (opStart <= seconds && seconds < opEnd) {
      seconds = opEnd;
    }

    return seconds;
  }

  position = normalize(position);

  commands.forEach(command => {
    switch (command) {
      case 'prev': {
        position -= 10;
        break;
      }

      case 'next': {
        position += 10;
        break;
      }
    }

    position = normalize(position);
  });

  const hours = Math.floor(position / 60);
  const minutes = position % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

function parseToSeconds(time) {
  const [hours, minutes] = time.split(':').map(v => Number(v));
  return hours * 60 + minutes;
}
