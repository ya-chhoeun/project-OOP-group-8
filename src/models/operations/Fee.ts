import { Subject } from "../academics/Subject";
import { Student } from "../users/Student";
import { Parents } from "../operations/Parents";

export class Fee {
  private id: string;
  private amount: number;
  private dueDate: Date;
  private paid: boolean;
  private subject: Subject;
  private student: Student;
  private parent?: Parents;

  constructor(
    id: string,
    amount: number,
    dueDate: Date,
    subject: Subject,
    student: Student,
    parent?: Parents,
    paid: boolean = false
  ) {
    if (amount <= 0) throw new Error("Amount must be greater than 0");

    this.id = id;
    this.amount = amount;
    this.dueDate = dueDate;
    this.subject = subject;
    this.student = student;
    this.parent = parent;
    this.paid = paid;
  }

  // Getters
  public getId(): string {
    return this.id;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  public isPaid(): boolean {
    return this.paid;
  }

  public getSubject(): Subject {
    return this.subject;
  }

  public getStudent(): Student {
    return this.student;
  }

  public getParent(): Parents | undefined {
    return this.parent;
  }

   public getStatus(): string {
    if (this.paid) {
      return "Paid";
    } else if (this.isOverdue()) {
      return "Overdue";
    } else {
      return "Unpaid";
    }
  }
  // Setters / Actions
  public markAsPaid(): void {
    if (this.paid) {
      console.warn("Fee is already paid.");
    } else {
      this.paid = true;
      this.notifyPayment();
    }
  }

  public markAsUnpaid(): void {
    if (!this.paid) {
      console.warn("Fee is already unpaid.");
    } else {
      this.paid = false;
      this.notifyReversal();
    }
  }

  public assignParent(parent: Parents): void {
    this.parent = parent;
  }

  public updateAmount(newAmount: number): void {
    if (newAmount <= 0) throw new Error("Amount must be greater than 0");
    this.amount = newAmount;
  }

  public updateDueDate(newDate: Date): void {
    if (newDate < new Date()) throw new Error("Due date must be in the future.");
    this.dueDate = newDate;
  }

  // Utilities
  public isOverdue(): boolean {
    return !this.paid && new Date() > this.dueDate;
  }

  public getDaysOverdue(): number {
    if (!this.isOverdue()) return 0;
    const diff = Math.floor((new Date().getTime() - this.dueDate.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  }

  public calculateLateFee(ratePerDay: number = 5): number {
    return this.getDaysOverdue() * ratePerDay;
  }

  public notifyPayment(): void {
    console.log(`Payment received for Fee ID: ${this.id} - ${this.amount}`);
    console.log(`Notifying Student: ${this.student.getName()}`);
    if (this.parent) {
      console.log(`Notifying Parent: ${this.parent.getName()}`);
    }
  }

  public notifyReversal(): void {
    console.log(`⚠️ Payment reversed for Fee ID: ${this.id}`);
    console.log(`Student: ${this.student.getName()} has been notified.`);
  }

  public toString(): string {
    return `Fee ID: ${this.id}, Amount: ${this.amount}, Due: ${this.dueDate.toDateString()}, Paid: ${this.paid}, Student: ${this.student.getName()}, Subject: ${this.subject.getName()}, Parent: ${this.parent?.getName() || "N/A"}`;
  }

  // Static Utility Methods

  public static getUnpaidFees(fees: Fee[]): Fee[] {
    return fees.filter(fee => !fee.isPaid());
  }

  public static getOverdueFees(fees: Fee[]): Fee[] {
    return fees.filter(fee => fee.isOverdue());
  }

  public static getTotalDueAmount(fees: Fee[]): number {
    return fees.reduce((sum, fee) => sum + (fee.isPaid() ? 0 : fee.amount), 0);
  }

  public static getTotalLateFees(fees: Fee[], ratePerDay: number = 5): number {
    return fees.reduce((sum, fee) => sum + fee.calculateLateFee(ratePerDay), 0);
  }
}
