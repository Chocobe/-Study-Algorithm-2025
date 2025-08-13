import { capitalizeFirst } from './05-capitalizeFirst-myself';

describe('04-03 / 05-capitalizeFirst', () => {
  it ('capitalizeFirst(["car", "taco", "banana"]) === ["Car", "Taco", "Banana"]', () => {
    const result = capitalizeFirst(['car', 'taco', 'banana']);

    expect(result).toEqual(['Car', 'Taco', 'Banana']);
  });
});
