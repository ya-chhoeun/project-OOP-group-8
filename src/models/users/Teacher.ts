class teacher {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public subject: string,
    public yearsOfExperience: number
  ) {}

  getDetails(): string {
    return `${this.name} teaches ${this.subject} and has ${this.yearsOfExperience} years of experience.`;
  }
}