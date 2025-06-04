export class Subject {
  private id: string;
  private subject_name: string;
  private subject_code: string;
  private description: string;
  getSubjectId() {
    throw new Error("Method not implemented.")
  }

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
  }
   public getName(): string {
    return this.subject_name;
  }

  public getId(): string {
    return this.id;
  }
}
