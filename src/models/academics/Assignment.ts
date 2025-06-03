import type { Subject } from "./Subject"
import type { Teacher } from "../users/Teacher"

export class Assignment {
  private assignment_id: string
  private title: string
  private description: string
  private due_date: Date
  private max_marks: number
  private subject: Subject
  private teacher: Teacher
  private created_date: Date
  private is_published: boolean

  constructor(
    assignment_id: string,
    title: string,
    description: string,
    due_date: Date,
    max_marks: number,
    subject: Subject,
    teacher: Teacher,
  ) {
    this.assignment_id = assignment_id
    this.title = title
    this.description = description
    this.due_date = due_date
    this.max_marks = max_marks
    this.subject = subject
    this.teacher = teacher
    this.created_date = new Date()
    this.is_published = false
  }
}