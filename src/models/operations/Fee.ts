import type { Student } from "../users/Student"

export class Fee {
  private id: string
  private student: Student
  private amount: number
  private dueDate: Date
  private paidDate?: Date
  private status: "pending" | "paid" | "overdue"
  private feeType: string
  private semester: string

  constructor(id: string, student: Student, amount: number, dueDate: Date, feeType: string, semester: string) {
    this.id = id
    this.student = student
    this.amount = amount
    this.dueDate = dueDate
    this.feeType = feeType
    this.semester = semester
    this.status = "pending"
  }

  public getId(): string {
    return this.id
  }

  public getStudent(): Student {
    return this.student
  }

  public getAmount(): number {
    return this.amount
  }

  public getDueDate(): Date {
    return this.dueDate
  }

  public getPaidDate(): Date | undefined {
    return this.paidDate
  }

  public getStatus(): string {
    return this.status
  }

  public getFeeType(): string {
    return this.feeType
  }

  public getSemester(): string {
    return this.semester
  }

  public markAsPaid(): void {
    this.status = "paid"
    this.paidDate = new Date()
  }

  public markAsOverdue(): void {
    this.status = "overdue"
  }

  public isOverdue(): boolean {
    return new Date() > this.dueDate && this.status !== "paid"
  }
}
