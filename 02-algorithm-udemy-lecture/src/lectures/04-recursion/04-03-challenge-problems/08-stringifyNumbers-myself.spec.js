import { stringifyNumbers } from './08-stringifyNumbers-myself'

const obj1 = {
  num: 1,
  test: [1],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

const obj2 = {
  num: '1',
  test: ['1'],
  data: {
    val: '4',
    info: {
      isRight: true,
      random: '66'
    }
  }
}

describe('04-03 / 08-stringifyNumbers', () => {
  it ('stringifyNumbers(obj1) === obj2', () => {
    const result = stringifyNumbers(obj1);

    expect(result).toEqual(obj2);
  });
});
