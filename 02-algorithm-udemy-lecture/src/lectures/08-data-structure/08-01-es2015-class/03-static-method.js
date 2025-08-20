export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(p1, p2) {
    const dx = Math.abs(p2.x - p1.x);
    const dy = Math.abs(p2.y - p1.y);

    // Math.hypot(dx, dy)
    // === Math.sqrt( Math.pow(dx, 2) + Math.pow(dy, 2) )
    return Math.hypot(dx, dy);
  }
}
