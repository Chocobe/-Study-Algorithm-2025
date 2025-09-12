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
  let current = parseToSeconds(pos);

  if (opStart <= current && current < opEnd) {
    current = opEnd;
  }

  commands.forEach(command => {
    switch (command) {
      case 'prev': {
        current -= 10;

        if (current < 0) {
          current = 0;
        }

        if (opStart <= current && current < opEnd) {
          current = opEnd;
        }

        break;
      }

      case 'next': {
        current += 10;

        if (current > videoLen) {
          current = videoLen;
        } else if (opStart <= current && current < opEnd) {
          current = opEnd;
        }

        break;
      }
    }
  });

  let hours = Math.floor(current / 60).toLocaleString();
  hours = hours < 10 ? `0${hours}` : `${hours}`;

  let minutes = current % 60;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hours}:${minutes}`;
};

function parseToSeconds(time) {
  let [mm, ss] = time.split(':');
  mm = Number(mm);
  ss = Number(ss);

  return mm * 60 + ss;
}
