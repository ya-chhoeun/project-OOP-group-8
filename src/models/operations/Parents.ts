
import { Student } from "../users/Student";
import { Fee } from "../operations/Fee";

export class Parents {
  private id: string;
  private name: string;
  private email: string;
  private phone: string;
  private address: string;
  private relationship: string;
  private students: Student[];

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

  public addStudent(student: Student): void {
    this.students.push(student);
  }

  public getStudents(): Student[] {
    return this.students;
  }

  //  View fees for all children
  public viewChildrenFees(): void {
    this.students.forEach((student) => {
      console.log(`\n📘 Fees for ${student.getName()}:`);
      const fees = student.getFees(); // must add getFees() in Student class
      if (fees.length === 0) {
        console.log("No fee records.");
      } else {
        fees.forEach((fee: Fee) => {
          console.log(`- Fee ID: ${fee.getId()}, Amount: ${fee.getAmount()}, Due: ${fee.getDueDate().toDateString()}, Status: ${fee.getStatus()}`);
        });
      }
    });
  }

  //  Pay a child's fee
  public payChildFee(studentId: number, feeId: number): void {
    const student = this.students.find(s => s.getId() === studentId);
    if (!student) {
      console.warn("No student found with that ID");
      return;
    }
    const fee = student.getFees().find((f: Fee) => f.getId() === feeId);
    if (!fee) {
      console.warn("No fee found with that ID");
      return;
    }
    if (fee.getStatus() === "Paid") {
      console.log("This fee is already paid.");
      return;
    }

    student.payFee(fee);
    fee.setStatus("Paid");
    console.log(` Parent ${this.name} paid ${fee.getAmount()} for ${student.getName()}`);
  }
}

