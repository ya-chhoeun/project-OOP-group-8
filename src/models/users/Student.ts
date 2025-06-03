import { User, Role } from "./User"
import type { Subject } from "../academics/Subject"
import type { Assignment } from "../academics/Assignment"

export class Student extends User {
  private studentId: string
  private enrolledSubjects: Subject[] = []
  private assignments: Assignment[] = []
  private gpa = 0

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    studentId?: string,
  ) {
    super(id, name, email, password, phone, address, Role.STUDENT)
    this.studentId = studentId || id
  }

  public getSpecificRole(): string {
    return "Student"
  }

  public getStudentId(): string {
    return this.studentId
  }

  public enrollInSubject(subject: Subject): void {
    if (!this.enrolledSubjects.find((s) => s.getSubjectId() === subject.getSubjectId())) {
      this.enrolledSubjects.push(subject)
    }
  }

  public getEnrolledSubjects(): Subject[] {
    return this.enrolledSubjects
  }

  public addAssignment(assignment: Assignment): void {
    this.assignments.push(assignment)
  }

  public getAssignments(): Assignment[] {
    return this.assignments
  }

  public setGPA(gpa: number): void {
    this.gpa = gpa
  }

  public getGPA(): number {
    return this.gpa
  }
}
