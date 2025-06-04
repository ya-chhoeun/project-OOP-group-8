import type { Subject } from "./Subject"
import type { Teacher } from "../users/Teacher"

export class StudyMaterial {
  private id: string
  private title: string
  private description: string
  private subject: Subject
  private teacher: Teacher
  private fileUrl: string
  private materialType: "pdf" | "video" | "document" | "link"
  private uploadDate: Date

  constructor(
    id: string,
    title: string,
    description: string,
    subject: Subject,
    teacher: Teacher,
    fileUrl: string,
    materialType: "pdf" | "video" | "document" | "link",
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.subject = subject
    this.teacher = teacher
    this.fileUrl = fileUrl
    this.materialType = materialType
    this.uploadDate = new Date()
  }

  public getId(): string {
    return this.id
  }

  public getTitle(): string {
    return this.title
  }

  public getDescription(): string {
    return this.description
  }

  public getSubject(): Subject {
    return this.subject
  }

  public getTeacher(): Teacher {
    return this.teacher
  }

  public getFileUrl(): string {
    return this.fileUrl
  }

  public getMaterialType(): string {
    return this.materialType
  }

  public getUploadDate(): Date {
    return this.uploadDate
  }
}
