import type { Student } from "../users/Student"
import type { Subject } from "../academics/Subject"

export class Attendance {
  private id: string
  private student: Student
  private subject: Subject
  private date: Date
  private status: "present" | "absent" | "late"
  private remarks?: string

  constructor(
    id: string,
    student: Student,
    subject: Subject,
    date: Date,
    status: "present" | "absent" | "late",
    remarks?: string,
  ) {
    this.id = id
    this.student = student
    this.subject = subject
    this.date = date
    this.status = status
    this.remarks = remarks
  }

  public getId(): string {
    return this.id
  }

  public getStudent(): Student {
    return this.student
  }

  public getSubject(): Subject {
    return this.subject
  }

  public getDate(): Date {
    return this.date
  }

  public getStatus(): string {
    return this.status
  }

  public getRemarks(): string | undefined {
    return this.remarks
  }

  public setStatus(status: "present" | "absent" | "late"): void {
    this.status = status
  }

  public setRemarks(remarks: string): void {
    this.remarks = remarks
  }
}
