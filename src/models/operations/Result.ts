export class Result {
  private id: number;
  private studentId: number;
  private examId: number;
  private grade: number; // Out of 100
  private date: Date;

  constructor(id: number, studentId: number, examId: number, grade: number, date: Date) {
    if (grade < 0 || grade > 100) {
      throw new Error("Grade must be between 0 and 100");
    }

    this.id = id;
    this.studentId = studentId;
    this.examId = examId;
    this.grade = grade;
    this.date = new Date(date); // Copy for safety
  }

  // ------------------- Getters -------------------
  public getId(): number {
    return this.id;
  }

  public getStudentId(): number {
    return this.studentId;
  }

  public getExamId(): number {
    return this.examId;
  }

  public getGrade(): number {
    return this.grade;
  }

  public getDate(): Date {
    return new Date(this.date);
  }

  // ------------------- Logic Methods -------------------

  // Check if the grade is a passing grade (>= 50)
  public isPassed(): boolean {
    return this.grade >= 50;
  }

  // Convert grade to letter
  public getLetterGrade(): string {
    if (this.grade >= 90) return 'A';
    if (this.grade >= 80) return 'B';
    if (this.grade >= 70) return 'C';
    if (this.grade >= 60) return 'D';
    if (this.grade >= 50) return 'E';
    return 'F';
  }

  // Display full result as summary
  public getSummary(): string {
    return `Result ID: ${this.id} | Student: ${this.studentId} | Exam: ${this.examId} | Grade: ${this.grade} (${this.getLetterGrade()}) | ${this.isPassed() ? "Passed" : "Failed"} on ${this.date.toDateString()}`;
  }
}
