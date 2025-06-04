import { Subject } from "../academics/Subject";
import { Assignment } from "../academics/Assignment";
import { User } from "./User";
// Define enum Role

enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin",
}




// Define the Teacher class
 export class Teacher extends User {
  private teacherId: number;
  private specialization: string;
  private subjects: Subject[] = [];
  private assignments: Assignment[] = [];

  constructor(id: number, name: string, email: string, role: Role, password: string, teacherId: number, specialization: string) {
    super(id, name, email, role, password);
    this.teacherId = teacherId;
    this.specialization = specialization;
  }

  public getId(): number {
    return super.getId();
  }

  public getName(): string {
    return super.getName();
  }

  public addSubject(subject: Subject): void {
    this.subjects.push(subject);
  }

  public addAssignment(assignment: Assignment): void {
    this.assignments.push(assignment);
  }
}

// Define the Student class
