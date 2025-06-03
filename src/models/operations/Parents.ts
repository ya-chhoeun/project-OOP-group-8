import type { Student } from "../users/Student"

export class Parents {
  private id: string
  private name: string
  private email: string
  private phone: string
  private address: string
  private relationship: "father" | "mother" | "guardian"
  private students: Student[] = []

  constructor(
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    relationship: "father" | "mother" | "guardian",
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.address = address
    this.relationship = relationship
  }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getPhone(): string {
    return this.phone
  }

  public getAddress(): string {
    return this.address
  }

  public getRelationship(): string {
    return this.relationship
  }

  public getStudents(): Student[] {
    return this.students
  }

  public addStudent(student: Student): void {
    if (!this.students.find((s) => s.getId() === student.getId())) {
      this.students.push(student)
    }
  }

  public removeStudent(studentId: string): void {
    this.students = this.students.filter((s) => s.getId() !== studentId)
  }

  public setPhone(phone: string): void {
    this.phone = phone
  }

  public setEmail(email: string): void {
    this.email = email
  }

  public setAddress(address: string): void {
    this.address = address
  }
}
