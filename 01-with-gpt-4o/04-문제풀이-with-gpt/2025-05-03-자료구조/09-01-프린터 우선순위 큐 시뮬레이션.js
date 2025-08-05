/**
 * 🧩 문제 9. 프린터 우선순위 큐 시뮬레이션
 * 
 * 📄 설명:
 * 여러 개의 문서가 프린터 대기열에 있습니다.
 * 각 문서에는 중요도가 있으며, 더 중요한 문서가 있으면 뒤로 밀려납니다.
 * 특정 문서가 몇 번째로 출력되는지 구하세요.
 * 
 * ✅ 입력
 * priorities: 문서의 중요도 배열 (예: [2, 1, 3, 2])
 * 
 * location: 우리가 궁금한 문서의 위치 인덱스 (예: 2)
 * 
 * ✅ 출력
 * 해당 문서가 몇 번째로 출력되는지 반환
 * 
 * ✅ 예시
 * priorities = [2, 1, 3, 2]
 * location = 2
 * => 출력: 1 (가장 먼저 출력됨)
 * 
 * priorities = [1, 1, 9, 1, 1, 1]
 * location = 0
 * => 출력: 5
 * 
 * @param { number[] } priorities
 * @param { number } location
 */
function solution(priorities, location) {
  const queue = priorities.map((priority, i) => ({
    priority,
    isTarget: i === location,
  }));

  let answer = 1;

  while (queue.length) {
    const maxPriority = Math.max(...queue.map(({ priority }) => priority));

    const queueItem = queue.shift();
    const {
      priority,
      isTarget,
    } = queueItem;

    if (maxPriority === priority) {
      if (isTarget) {
        return answer;
      }

      answer++;
      continue;
    }

    queue.push(queueItem);
  }

  return priorities.length;
}

const questions = [
  {
    priorities: [2, 1, 3, 2],
    location: 2,
    answer: 1,
  },
  {
    priorities: [1, 1, 9, 1, 1, 1],
    location: 0,
    answer: 5,
  },
];

questions.forEach(question => {
  const {
    priorities,
    location,
    answer,
  } = question;

  const result = solution(priorities, location);

  console.group('9. 프린터 우선순위 큐 시뮬레이션');
  console.log('priorities: ', priorities);
  console.log('location: ', location);
  console.log('answer: ', answer);
  console.log('result: ', result);
  console.log('pass: ', result === answer);
  console.groupEnd();
});
