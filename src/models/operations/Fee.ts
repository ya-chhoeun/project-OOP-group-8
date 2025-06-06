export class Fee {
  private id: number;
  private amount: number;
  private dueDate: Date;
  private status: string;

  constructor(id: number, amount: number, dueDate: Date, status: string) {
    this.id = id;
    this.amount = amount;
    this.dueDate = dueDate;
    this.status = status;
  }

  public getId(): number {
    return this.id;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }
}