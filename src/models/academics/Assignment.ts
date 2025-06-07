export class Assignment {
  private id: number;
  private title: string;
  private dueDate: Date;
  private students: any[];
  private grade: any;
  private submitted: boolean;

  constructor(id: number, title: string, description: string, dueDate: Date, maxScore: number, subject: any, teacher: any) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.students = [];
    this.submitted = false;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  public publish(): void {
    // Simulated publish
  }

  public addStudent(student: any): void {
    this.students.push(student);
  }

  public markSubmitted(): void {
    this.submitted = true;
  }

  public assignGrade(score: number, maxScore: number): void {
    this.grade = { getId: () => `grade${this.id}`, getScore: () => score };
  }

  public getGrade(): any {
    return this.grade;
  }

  public isOverdue(): boolean {
    return new Date() > this.dueDate;
  }

  public hasStudentSubmitted(student: any): boolean {
    return this.submitted;
  }
}