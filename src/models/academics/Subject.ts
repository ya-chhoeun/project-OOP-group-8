export class Subject {
  private subject_id: string
  public subject_name: string
  private subject_code: string
  private credits: number
  private description: string

  constructor(
    subject_id: string,
    subject_name: string,
    subject_code: string,
    credits: number,
    description: string,
  ) {
    this.subject_id = subject_id
    this.subject_name = subject_name
    this.subject_code = subject_code
    this.credits = credits
    this.description = description
  }
}