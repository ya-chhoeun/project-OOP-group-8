import type { Subject } from "./Subject"
import type { Teacher } from "../users/Teacher"

export class Assignment {
  private id: number
  public title: string
  private description: string
  private dueDate: Date
  private subject: Subject
  grades: any
  


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
  // public getAssignmentId(): string {
  //   return this.assignment_id
  // }

  public getTitle(): string {
    return this.title
  }

  public getDescription(): string {
    return this.description
  }

  public getDueDate(): Date {
    return this.dueDate
  }

//   public getMaxMarks(): number {
//     return this.max_marks
//   }

//   public getSubject(): Subject {
//     return this.subject
//   }
  
// }
//   public getTeacher(): Teacher {
//     return this.teacher
//   }

//   public getCreatedDate(): Date {
//     return this.created_date
//   }

//   public isPublished(): boolean {
//     return this.is_published
//   }

//   public publish(): void {
//     this.is_published = true
//   }

//   public unpublish(): void {
//     this.is_published = false
//   }
}

