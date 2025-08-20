import { Student } from './01-class';

describe('08-01 / 01-Student', () => {
  describe('Student constructor', () => {
    it('Student 인스턴스를 생성할 수 있다.', () => {
      const student = new Student('Miles', 'Kim', 3);

      expect(student.firstName).toBe('Miles');
      expect(student.lastName).toBe('Kim');
      expect(student.grade).toBe(3);
    });

    it('Student 인스턴스의 속성을 변경할 수 있다.', () => {
      const student = new Student('Miles', 'Kim', 3);

      student.firstName = 'Chocobe';
      expect(student).toEqual({
        firstName: 'Chocobe',
        lastName: 'Kim',
        grade: 3,
      });

      student.lastName = '김';
      expect(student).toEqual({
        firstName: 'Chocobe',
        lastName: '김',
        grade: 3,
      });

      student.grade = 1;
      expect(student).toEqual({
        firstName: 'Chocobe',
        lastName: '김',
        grade: 1,
      });
    });
  });
});
