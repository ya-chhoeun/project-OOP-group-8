import type { Student } from "../users/Student"
import type { Assignment } from "./Assignment"
import type { Exam } from "./Exam"

export class Grade {
  private id: string
  private student: Student
  private assignment?: Assignment
  private exam?: Exam
  private score: number
  private maxScore: number
  private comments: string
  private gradedDate: Date

  constructor(
    id: string,
    student: Student,
    score: number,
    maxScore: number,
    comments: string,
    assignment?: Assignment,
    exam?: Exam,
  ) {
    this.id = id
    this.student = student
    this.score = score
    this.maxScore = maxScore
    this.comments = comments
    this.assignment = assignment
    this.exam = exam
    this.gradedDate = new Date()
  }

  public getId(): string {
    return this.id
  }

  public getStudent(): Student {
    return this.student
  }

  public getScore(): number {
    return this.score
  }

  public getMaxScore(): number {
    return this.maxScore
  }

  public getComments(): string {
    return this.comments
  }

  public getGradedDate(): Date {
    return this.gradedDate
  }

  public getPercentage(): number {
    return (this.score / this.maxScore) * 100
  }

  public getLetterGrade(): string {
    const percentage = this.getPercentage()
    if (percentage >= 90) return "A"
    if (percentage >= 80) return "B"
    if (percentage >= 70) return "C"
    if (percentage >= 60) return "D"
    return "F"
  }
}
