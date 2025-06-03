import type { Student } from "../users/Student"
import type { Exam } from "../academics/Exam"
import type { Subject } from "../academics/Subject"

export class Result {
  private id: string
  private student: Student
  private exam: Exam
  private subject: Subject
  private score: number
  private grade: string
  private percentage: number
  private date: Date
  private remarks?: string

  constructor(id: string, student: Student, exam: Exam, subject: Subject, score: number, remarks?: string) {
    this.id = id
    this.student = student
    this.exam = exam
    this.subject = subject
    this.score = score
    this.percentage = (score / exam.getMaxScore()) * 100
    this.grade = this.calculateGrade(this.percentage)
    this.date = new Date()
    this.remarks = remarks
  }

  public getId(): string {
    return this.id
  }

  public getStudent(): Student {
    return this.student
  }

  public getExam(): Exam {
    return this.exam
  }

  public getSubject(): Subject {
    return this.subject
  }

  public getScore(): number {
    return this.score
  }

  public getGrade(): string {
    return this.grade
  }

  public getPercentage(): number {
    return this.percentage
  }

  public getDate(): Date {
    return this.date
  }

  public getRemarks(): string | undefined {
    return this.remarks
  }

  private calculateGrade(percentage: number): string {
    if (percentage >= 90) return "A+"
    if (percentage >= 85) return "A"
    if (percentage >= 80) return "A-"
    if (percentage >= 75) return "B+"
    if (percentage >= 70) return "B"
    if (percentage >= 65) return "B-"
    if (percentage >= 60) return "C+"
    if (percentage >= 55) return "C"
    if (percentage >= 50) return "C-"
    return "F"
  }

  public setRemarks(remarks: string): void {
    this.remarks = remarks
  }
}
