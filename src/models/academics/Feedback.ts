import type { Student } from "../users/Student"
import type { Teacher } from "../users/Teacher"
import type { Subject } from "./Subject"

export class Feedback {
  private id: string
  private student: Student
  private teacher: Teacher
  private subject: Subject
  private rating: number
  private comment: string
  private date: Date

  constructor(id: string, student: Student, teacher: Teacher, subject: Subject, rating: number, comment: string) {
    this.id = id
    this.student = student
    this.teacher = teacher
    this.subject = subject
    this.rating = rating
    this.comment = comment
    this.date = new Date()
  }

  public getId(): string {
    return this.id
  }

  public getStudent(): Student {
    return this.student
  }

  public getTeacher(): Teacher {
    return this.teacher
  }

  public getSubject(): Subject {
    return this.subject
  }

  public getRating(): number {
    return this.rating
  }

  public getComment(): string {
    return this.comment
  }

  public getDate(): Date {
    return this.date
  }

  public setRating(rating: number): void {
    if (rating >= 1 && rating <= 5) {
      this.rating = rating
    }
  }

  public setComment(comment: string): void {
    this.comment = comment
  }
}