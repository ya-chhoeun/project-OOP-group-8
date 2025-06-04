import { User } from "./User"
import type { Subject } from "../academics/Subject"
import type { Assignment } from "../academics/Assignment"

enum Role {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin"
}

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
    phone: string,
    address: string,
    teacherId: string,
    specialization: string,
    role: Role // Add this parameter
  ) {
    super(id, name, email, role, password); // Pass role to super
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
    // Assuming Subject has a public getId() method
    if (!this.subjects.find((s) => s.getId() === subject.getId())) {
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
