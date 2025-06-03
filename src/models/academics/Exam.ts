import type { Subject } from "./Subject"
import type { Classroom } from "./Classroom"

export class Exam {
  private id: string
  private subject: Subject
  private examDate: Date
  private duration: number // in minutes
  private room: Classroom
  private maxScore: number
  private examType: "midterm" | "final" | "quiz"

  constructor(
    id: string,
    subject: Subject,
    examDate: Date,
    duration: number,
    room: Classroom,
    maxScore: number,
    examType: "midterm" | "final" | "quiz",
  ) {
    this.id = id
    this.subject = subject
    this.examDate = examDate
    this.duration = duration
    this.room = room
    this.maxScore = maxScore
    this.examType = examType
  }

  public getId(): string {
    return this.id
  }

  public getSubject(): Subject {
    return this.subject
  }

  public getExamDate(): Date {
    return this.examDate
  }

  public getDuration(): number {
    return this.duration
  }

  public getRoom(): Classroom {
    return this.room
  }

  public getMaxScore(): number {
    return this.maxScore
  }

  public getExamType(): string {
    return this.examType
  }
}
