import { collectStrings } from './09-collectStrings-myself';

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

describe('04-03 / 09-collectStrings', () => {
  it ('collectStrings(obj) === ["foo", "bar", "baz"]', () => {
    const result = collectStrings(obj);

    expect(result).toEqual(['foo', 'bar', 'baz']);
  });
});
