export class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    // 지각 횟수
    this.tardies = 0;
    // 성적
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies++;

    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED';
    }

    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
  }

  getScoresAverage() {
    if (!this.scores.length) {
      return 0;
    }

    return this.scores.reduce((total, score) => total + score, 0) / this.scores.length;
  }
}
