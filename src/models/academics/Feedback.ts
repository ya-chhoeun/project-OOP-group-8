export class Feedback {
  private id: string;
  private student: any;
  private teacher: any;
  private subject: any;
  private rating: number;
  private comment: string;
  private date: Date;

  constructor(id: string, student: any, teacher: any, subject: any, rating: number, comment: string) {
    this.id = id;
    this.student = student;
    this.teacher = teacher;
    this.subject = subject;
    this.rating = rating;
    this.comment = comment;
    this.date = new Date();
  }

  public getId(): string {
    return this.id;
  }

  public getStudent(): any {
    return this.student;
  }

  public getTeacher(): any {
    return this.teacher;
  }

  public getSubject(): any {
    return this.subject;
  }

  public getRating(): number {
    return this.rating;
  }

  public getComment(): string {
    return this.comment;
  }

  public getDate(): Date {
    return this.date;
  }
}