// Fee.ts
export class Fee {
  private id: string;
  private amount: number;
  private dueDate: Date;
  private paid: boolean;

  constructor(id: string, amount: number, dueDate: Date, paid = false) {
    this.id = id;
    this.amount = amount;
    this.dueDate = dueDate;
    this.paid = paid;
  }

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

  public markAsPaid(): void {
    this.paid = true;
  }
}
