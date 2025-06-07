export class Parents {
  private id: string;
  private name: string;
  private email: string;
  private phone: string;
  private address: string;
  private relationship: string;
  private students: any[];

  constructor(id: string, name: string, email: string, phone: string, address: string, relationship: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.relationship = relationship;
    this.students = [];
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getRelationship(): string {
    return this.relationship;
  }

  public addStudent(student: any): void {
    this.students.push(student);
  }

  public getStudents(): any[] {
    return this.students;
  }
}