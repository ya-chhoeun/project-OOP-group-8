import { Student } from "../users/Student"
import type { Subject } from "./Subject"

export class Enrollment {
  private id: string
  private student: Student
  private subject: Subject
  private enrollmentDate: Date
  private status: "active" | "inactive" | "completed"

  constructor(id: string, student: Student, subject: Subject) {
    this.id = id
    this.student = student
    this.subject = subject
    this.enrollmentDate = new Date()
    this.status = "active"
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

  public getEnrollmentDate(): Date {
    return this.enrollmentDate
  }

  public getStatus(): string {
    return this.status
  }

  public setStatus(status: "active" | "inactive" | "completed"): void {
    this.status = status
  }
}
