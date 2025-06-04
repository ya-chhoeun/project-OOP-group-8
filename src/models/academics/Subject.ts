export class Subject {
  getSubjectId() {
    throw new Error("Method not implemented.")
  }
  private id: string
  private subject_name: string
  private subject_code: string
  
  private description: string

  constructor(
    subject_id: string,
    subject_name: string,
    subject_code: string,
    credits: number,
    description: string,
  ) {
    this.id = subject_id
    this.subject_name = subject_name
    this.subject_code = subject_code

    this.description = description
  }
  public getName(): string {
    return this.subject_name
  }
}