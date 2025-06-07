export class Enrollment {
  private id: string;
  private student: any;
  private subject: any;

  constructor(id: string, student: any, subject: any) {
    this.id = id;
    this.student = student;
    this.subject = subject;
  }

  public getId(): string {
    return this.id;
  }

  public getStudent(): any {
    return this.student;
  }

  public getSubject(): any {
    return this.subject;
  }
}