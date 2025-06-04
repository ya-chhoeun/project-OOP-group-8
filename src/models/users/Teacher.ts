import { User, Role } from "./User"
import type { Subject } from "../academics/Subject"
import type { Assignment } from "../academics/Assignment"

export class Teacher extends User {
  private teacherId: string
  private specialization: string
  private subjects: Subject[] = []
  private assignments: Assignment[] = []

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    teacherId: string,
    specialization: string,
  ) {
    super(id, name, email, password, Role.TEACHER)
    this.teacherId = teacherId
    this.specialization = specialization
  }

  public getSpecificRole(): string {
    return "Teacher"
  }

  public getTeacherId(): string {
    return this.teacherId
  }

  public getSpecialization(): string {
    return this.specialization
  }

  public addSubject(subject: Subject): void {
    if (!this.subjects.find((s) => s.getSubjectId() === subject.getSubjectId())) {
      this.subjects.push(subject)
    }
  }

  public getSubjects(): Subject[] {
    return this.subjects
  }

  public createAssignment(assignment: Assignment): void {
    this.assignments.push(assignment)
  }

  public getAssignments(): Assignment[] {
    return this.assignments
  }

  public setSpecialization(specialization: string): void {
    this.specialization = specialization
  }
}
