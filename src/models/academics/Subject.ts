export class Subject {
  private id: string;
  private subject_name: string;
  private subject_code: string;
  private description: string;
  private credits: number; 

  constructor(
    subject_id: string,
    subject_name: string,
    subject_code: string,
    description: string,
    credits: number
  ) {
    this.id = subject_id;
    this.subject_name = subject_name;
    this.subject_code = subject_code;
    this.description = description;
    this.credits = credits; 
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.subject_name;
  }

  public getCredits(): number {
    return this.credits;
  }
}
