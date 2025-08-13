import { reverse } from './01-reverse-myself';

describe('04-03 / 01-reverse-myself', () => {
  it ('reverse("awesome") === "emosewa"', () => {
    const result = reverse('awesome');

    expect(result).toBe('emosewa');
  });

  it ('reverse("rithmschool") === "loohcsmhtir"', () => {
    const result = reverse('rithmschool');

    expect(result).toBe('loohcsmhtir');
  });
});
