export class Subject {
  private subject_id: string
  private subject_name: string
  private subject_code: string
  private credits: number
  private description: string

  constructor(subject_id: string, subject_name: string, subject_code: string, credits: number, description: string) {
    this.subject_id = subject_id
    this.subject_name = subject_name
    this.subject_code = subject_code
    this.credits = credits
    this.description = description
  }

  public getSubjectId(): string {
    return this.subject_id
  }

  public getSubjectName(): string {
    return this.subject_name
  }

  public getSubjectCode(): string {
    return this.subject_code
  }

  public getCredits(): number {
    return this.credits
  }

  public getDescription(): string {
    return this.description
  }

  public setSubjectName(name: string): void {
    this.subject_name = name
  }

  public setDescription(description: string): void {
    this.description = description
  }
}
