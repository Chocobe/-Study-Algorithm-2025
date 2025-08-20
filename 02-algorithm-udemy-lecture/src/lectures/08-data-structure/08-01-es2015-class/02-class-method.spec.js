import { Student } from './02-class-method';

describe('08-01 / 02-class-method', () => {
  it('fullName() 메소드를 사용할 수 있다.', () => {
    const student = new Student('Miles', 'Kim', 3);
    const fullName = student.fullName();

    expect('Your full name is Mile Kim');
  });

  it('지각 처리를 할 수 있다.', () => {
    const student = new Student('Miles', 'Kim', 3);

    const result1 = student.markLate();
    expect(result1).toBe('Miles Kim has been late 1 times');

    const result2 = student.markLate();
    expect(result2).toBe('Miles Kim has been late 2 times');

    const result3 = student.markLate();
    expect(result3).toBe('YOU ARE EXPELLED');
  });

  it('성적을 추가할 수 있다.', () => {
    const student = new Student('Miles', 'Kim', 3);

    student.addScore(93);
    expect(student.scores).toEqual([93]);

    student.addScore(99);
    expect(student.scores).toEqual([93, 99]);
  });

  it('성적 평균 점수를 알 수 있다.', () => {
    const student = new Student('Miles', 'Kim', 3);

    const result1 = student.getScoresAverage();
    expect(result1).toBe(0);

    student.addScore(98);
    const result2 = student.getScoresAverage();
    expect(result2).toBe(98);

    student.addScore(80);
    const result3 = student.getScoresAverage();
    expect(result3).toBe(89);
  });
});
