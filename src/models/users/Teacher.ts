import { User } from "./User"
import type { Subject } from "../academics/Subject"
import type { Assignment } from "../academics/Assignment"
export class Teacher extends User {
  private teacherId: number
  private specialization: string
  private subjects: Subject[] = []
  private assignments: Assignment[] = []

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    teacherId: number,
    specialization: string,
  ) {
    super(id, name, email, password, phone, address)
    this.teacherId = teacherId
    this.specialization = specialization
  }

  public getRole(): string {
    return "Teacher"
  }

  public getTeacherId(): number {
    return this.teacherId
  }

  public getSpecialization(): string {
    return this.specialization
  }

  public assignSubject(subject: Subject): void {
      this.subjects.push(subject)
    
  }

  public getSubjects(): Subject[] {
    return this.subjects
  }

  public getAssignments(): Assignment[] {
    return this.assignments
  }

  public removeSubject(subject: Subject): boolean {
    const index = this.subjects.indexOf(subject)
    if (index > -1) {
      this.subjects.splice(index, 1)
      return true
    }
    return false
  }
}
