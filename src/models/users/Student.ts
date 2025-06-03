import { User } from "./User";
enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
  ADMIN = "admin"
}
export class Student extends User {
  private studentId: number;

  constructor(id: number, name: string, email: string, role: Role, password: string) {
    super(id, name, email, role, password);
    this.studentId = id;
  }

  
}