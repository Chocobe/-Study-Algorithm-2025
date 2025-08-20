import { Point } from './03-static-method';

describe('08-01 / 03-static-method', () => {
  it('Point instance 를 생성할 수 있다.', () => {
    const p1 = new Point(1, 2);

    expect(p1.x).toBe(1);
    expect(p1.y).toBe(2);
  });

  it('distance() static method 를 사용하여, 두 Point 의 거리를 구할 수 있다.', () => {
    const p1 = new Point(0, 0);
    const p2 = new Point(3, 4);

    const distance = Point.distance(p1, p2);
    expect(distance).toBe(5);
  });
});
