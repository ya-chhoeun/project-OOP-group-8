export class Attendance {
  private id: string;
  private student: any;
  private subject: any;
  private date: Date;
  private status: string;
  private remarks?: string;

  constructor(id: string, student: any, subject: any, date: Date, status: string, remarks?: string) {
    this.id = id;
    this.student = student;
    this.subject = subject;
    this.date = date;
    this.status = status;
    this.remarks = remarks;
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

  public getDate(): Date {
    return this.date;
  }

  public getStatus(): string {
    return this.status;
  }

  public getRemarks(): string | undefined {
    return this.remarks;
  }
}