import type { Subject } from "./Subject"
import type { Teacher } from "../users/Teacher"

export class Assignment {
  private id: number
  public title: string
  private description: string
  private dueDate: Date
  private subject: Subject
  


  constructor(
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    subject: Subject,
    teacher: Teacher
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.subject = subject

  }

  public getId(): number {
    return this.id
  }

  public getTitle(): string {
    return this.title
  }

  public getDescription(): string {
    return this.description
  }

  public getDueDate(): Date {
    return this.dueDate
  }

  public getSubject(): Subject {
    return this.subject
  }

  
}