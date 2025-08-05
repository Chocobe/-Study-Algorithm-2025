/**
 * 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
 * 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 
 * 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 * 
 * 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 
 * 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42583
 * 
 * @param { number } bridge_length
 * @param { number } weight
 * @param { number[] } truck_weights
 */
function solution(bridge_length, weight, truck_weights) {
  const bridgeQueue = new Array(bridge_length).fill(0);
  let currentWeight = 0;
  let duration = 0;

  do {
    duration++;
    currentWeight -= bridgeQueue.shift();

    if (truck_weights.length && currentWeight + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      currentWeight += truck;
      bridgeQueue.push(truck);
    } else {
      bridgeQueue.push(0);
    }
  } while (truck_weights.length || currentWeight > 0)

  return duration;
}

const questions = [
  {
    params: {
      bridge_length: 2,
      weight: 10,
      truck_weights: [7, 4, 5, 6],
    },
    answer: 8,
  },
  {
    params: {
      bridge_length: 100,
      weight: 100,
      truck_weights: [10],
    },
    answer: 101,
  },
  {
    params: {
      bridge_length: 100,
      weight: 100,
      truck_weights: [10,10,10,10,10,10,10,10,10,10],
    },
    answer: 110,
  },
];

questions.forEach(question => {
  const {
    params: {
      bridge_length,
      weight,
      truck_weights,
    },
    answer,
  } = question

  console.log(solution(bridge_length, weight, truck_weights) === answer);
});
