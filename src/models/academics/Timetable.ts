import type { Subject } from "./Subject"
import type { Teacher } from "../users/Teacher"
import type { Classroom } from "./Classroom"

export class Timetable {
  private id: string
  private subject: Subject
  private teacher: Teacher
  private classroom: Classroom
  private dayOfWeek: string
  private startTime: string
  private endTime: string
  private semester: string

  constructor(
    id: string,
    subject: Subject,
    teacher: Teacher,
    classroom: Classroom,
    dayOfWeek: string,
    startTime: string,
    endTime: string,
    semester: string,
  ) {
    this.id = id
    this.subject = subject
    this.teacher = teacher
    this.classroom = classroom
    this.dayOfWeek = dayOfWeek
    this.startTime = startTime
    this.endTime = endTime
    this.semester = semester
  }

  public getId(): string {
    return this.id
  }

  public getSubject(): Subject {
    return this.subject
  }

  public getTeacher(): Teacher {
    return this.teacher
  }

  public getClassroom(): Classroom {
    return this.classroom
  }

  public getDayOfWeek(): string {
    return this.dayOfWeek
  }

  public getStartTime(): string {
    return this.startTime
  }

  public getEndTime(): string {
    return this.endTime
  }

  public getSemester(): string {
    return this.semester
  }

  public setClassroom(classroom: Classroom): void {
    this.classroom = classroom
  }

  public setTime(startTime: string, endTime: string): void {
    this.startTime = startTime
    this.endTime = endTime
  }
}
