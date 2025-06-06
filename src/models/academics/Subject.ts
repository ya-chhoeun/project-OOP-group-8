export class Subject {
  private id: string;
  private name: string;
  private credits: number;

  constructor(id: string, name: string, code: string, description: string, credits: number) {
    this.id = id;
    this.name = name;
    this.credits = credits;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCredits(): number {
    return this.credits;
  }
}